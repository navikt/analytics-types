import { describe, expect, it } from '@jest/globals';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');

const eventFiles = collectEventFiles(path.join(srcDir, 'events'));
const indexPath = path.join(srcDir, 'index.ts');
const indexContent = fs.readFileSync(indexPath, 'utf8');

function collectEventFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return collectEventFiles(entryPath);
    }

    if (entry.isFile() && entry.name.endsWith('.ts')) {
      const relative = path.relative(srcDir, entryPath).replace(/\\/g, '/');
      return [relative.replace(/\.ts$/, '')];
    }

    return [];
  });
}

function hasSpecifier(content, specifier) {
  return (
    content.includes(`'${specifier}'`) ||
    content.includes(`"${specifier}"`) ||
    content.includes(`'${specifier}.js'`) ||
    content.includes(`"${specifier}.js"`)
  );
}

describe('event exports', () => {
  it('exports every file from src/events via src/index.ts', () => {
    const moduleSpecifiers = eventFiles.map((relPath) => `./${relPath}`);

    const missing = moduleSpecifiers.filter(
      (specifier) => !hasSpecifier(indexContent, specifier)
    );

    expect(missing).toEqual([]);
  });
});
