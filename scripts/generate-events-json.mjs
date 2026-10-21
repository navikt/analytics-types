import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const eventsDir = join(repoRoot, 'src', 'events');
const outFile = join(repoRoot, 'dist', 'events.json');

/** @typedef {{ name: string, type: string, optional: boolean, description?: string, inherited?: boolean }} PropertyInfo */
/** @typedef {{ name: string, constantName: string, propertiesType: string, description?: string, category: string, source: string, properties: PropertyInfo[] }} EventInfo */

/** Recursively collect .ts files under dir (excluding tests and types.ts helper files). */
function collectEventFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectEventFiles(full));
    } else if (entry.name.endsWith('.ts') && entry.name !== 'types.ts' && !entry.name.includes('.test.') && !entry.name.includes('.spec.')) {
      files.push(full);
    }
  }
  return files;
}

/** Extract the leading JSDoc comment text of a node, if any. */
function jsDocText(node) {
  const docs = node.jsDoc;
  if (!docs || docs.length === 0) return undefined;
  const text = docs
    .map((d) => (typeof d.comment === 'string' ? d.comment : ''))
    .join('\n')
    .trim();
  return text.length > 0 ? text : undefined;
}

/** Serialize a type node to a compact human-readable string. */
function typeToString(typeNode) {
  if (!typeNode) return 'unknown';
  const text = typeNode.getText();
  // Normalize whitespace in e.g. union types
  return text.replace(/\s+/g, ' ').trim();
}

/** Known named type aliases from types.ts, inlined so consumers don't need the TS source. */
function parseTypeAliases() {
  const file = join(eventsDir, 'types.ts');
  const source = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.ES2020, true);
  const aliases = new Map();
  for (const stmt of source.statements) {
    if (ts.isTypeAliasDeclaration(stmt)) {
      aliases.set(stmt.name.text, typeToString(stmt.type));
    }
  }
  return aliases;
}

const TYPE_ALIASES = parseTypeAliases();

function resolveType(typeNode) {
  const text = typeToString(typeNode);
  return TYPE_ALIASES.get(text) ?? text;
}

/** Parse one event source file into an EventInfo, or throw if it doesn't match the contract. */
function parseEventFile(file) {
  const source = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.ES2020, true);
  const rel = relative(join(repoRoot, 'src'), file).replaceAll('\\', '/');

  let constantName;
  let eventName;
  let eventDescription;
  let propertiesInterface;
  let interfaceDescription;

  for (const stmt of source.statements) {
    // export const X_EVENT = 'navn' as const;
    if (ts.isVariableStatement(stmt) && stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) {
      for (const decl of stmt.declarationList.declarations) {
        if (ts.isIdentifier(decl.name) && decl.name.text.endsWith('_EVENT') && decl.initializer) {
          const init = decl.initializer;
          const literal = ts.isAsExpression(init) ? init.expression : init;
          if (ts.isStringLiteral(literal)) {
            constantName = decl.name.text;
            eventName = literal.text;
            eventDescription = jsDocText(stmt);
          }
        }
      }
    }
    // export interface XProperties { ... }
    if (ts.isInterfaceDeclaration(stmt) && stmt.name.text.endsWith('Properties')) {
      propertiesInterface = stmt;
      interfaceDescription = jsDocText(stmt);
    }
  }

  if (!constantName || eventName === undefined) {
    throw new Error(`${rel}: no exported *_EVENT string constant found`);
  }
  if (!propertiesInterface) {
    throw new Error(`${rel}: no exported *Properties interface found`);
  }

  const ownProperties = propertiesInterface.members.filter(ts.isPropertySignature).map((member) => ({
    name: member.name.getText(),
    type: resolveType(member.type),
    optional: Boolean(member.questionToken),
    description: jsDocText(member),
  }));

  // Base properties inherited via `extends BaseProperties`
  const inherited = [];
  for (const heritage of propertiesInterface.heritageClauses ?? []) {
    for (const t of heritage.types) {
      if (t.expression.getText() === 'BaseProperties') {
        inherited.push(...BASE_PROPERTIES.map((p) => ({ ...p, inherited: true })));
      }
    }
  }

  return {
    name: eventName,
    constantName,
    propertiesType: propertiesInterface.name.text,
    description: eventDescription ?? interfaceDescription,
    category: dirname(rel).replaceAll('/', '/'),
    source: `src/${rel}`,
    properties: [...ownProperties, ...inherited],
  };
}

// Parse BaseProperties from src/events/types.ts so inherited props show up inline.
function parseBaseProperties() {
  const file = join(eventsDir, 'types.ts');
  const source = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.ES2020, true);
  for (const stmt of source.statements) {
    if (ts.isInterfaceDeclaration(stmt) && stmt.name.text === 'BaseProperties') {
      return stmt.members.filter(ts.isPropertySignature).map((member) => ({
        name: member.name.getText(),
        type: resolveType(member.type),
        optional: Boolean(member.questionToken),
        description: jsDocText(member),
      }));
    }
  }
  throw new Error('BaseProperties interface not found in src/events/types.ts');
}

const BASE_PROPERTIES = parseBaseProperties();

const files = collectEventFiles(eventsDir);
const events = files.map(parseEventFile).sort((a, b) => a.name.localeCompare(b.name, 'nb'));

const pkg = JSON.parse(readFileSync(join(repoRoot, 'package.json'), 'utf8'));
const sha = execFileSync('git', ['rev-parse', '--short', 'HEAD'], { cwd: repoRoot, encoding: 'utf8' }).trim();

const output = {
  $schema: 'https://github.com/navikt/analytics-types/blob/main/events.schema.json',
  version: pkg.version,
  generatedFrom: sha,
  eventCount: events.length,
  events,
};

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JSON.stringify(output, null, 2) + '\n');
console.log(`✓ ${relative(repoRoot, outFile)} written: ${events.length} events (v${pkg.version} @ ${sha})`);
