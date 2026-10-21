/**
 * Verifies that the generated events.json stays in sync with the source files
 * and satisfies the machine-readable contract consumers rely on.
 */
import { describe, expect, it, beforeAll } from '@jest/globals';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Events, isValidEventName } from '../dist/esm/index.js';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const eventsJsonPath = join(rootDir, 'dist', 'events.json');

let doc;

beforeAll(() => {
  execFileSync('node', ['scripts/generate-events-json.mjs'], { cwd: rootDir });
  doc = JSON.parse(readFileSync(eventsJsonPath, 'utf8'));
});

describe('events.json', () => {
  it('contains exactly the same event names as the Events constant', () => {
    const jsonNames = doc.events.map((e) => e.name).sort();
    const codeNames = Object.values(Events).sort();
    expect(jsonNames).toEqual(codeNames);
    expect(doc.eventCount).toBe(codeNames.length);
  });

  it('every event has name, description, category, source and a properties type', () => {
    for (const event of doc.events) {
      expect(typeof event.name).toBe('string');
      expect(event.name.length).toBeGreaterThan(0);
      expect(isValidEventName(event.name)).toBe(true);
      expect(typeof event.description).toBe('string');
      expect(event.category).toMatch(/^events\//);
      expect(event.source).toMatch(/^src\/events\/.*\.ts$/);
      expect(event.propertiesType).toMatch(/Properties$/);
      expect(Array.isArray(event.properties)).toBe(true);
    }
  });

  it('every property has name, type, optional flag', () => {
    for (const event of doc.events) {
      for (const prop of event.properties) {
        expect(typeof prop.name).toBe('string');
        expect(typeof prop.type).toBe('string');
        expect(typeof prop.optional).toBe('boolean');
      }
    }
  });

  it('no unresolved type aliases leak into output', () => {
    const knownAliases = ['Målgruppe'];
    for (const event of doc.events) {
      for (const prop of event.properties) {
        expect(knownAliases).not.toContain(prop.type);
      }
    }
  });

  it('version matches package.json', () => {
    const pkg = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf8'));
    expect(doc.version).toBe(pkg.version);
  });
});
