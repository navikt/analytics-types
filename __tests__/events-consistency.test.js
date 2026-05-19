import { describe, expect, it } from '@jest/globals';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const indexPath = path.join(rootDir, 'src', 'index.ts');
const indexContent = fs.readFileSync(indexPath, 'utf8');

function getImportedEventConstants(content) {
  const matches = content.matchAll(
    /^import \{\s*([A-Z0-9_]+_EVENT)\s*\} from .*$/gm
  );

  return [...new Set(Array.from(matches, (match) => match[1]))];
}

function getEventsObjectBlock(content) {
  const match = content.match(/export const Events = \{([\s\S]*?)\} as const;/);

  if (!match) {
    throw new Error('Fant ikke export const Events-blokken i src/index.ts');
  }

  return match[1];
}

function getEventPropertiesMapBlock(content) {
  const match = content.match(
    /export type EventPropertiesMap = \{([\s\S]*?)\};/
  );

  if (!match) {
    throw new Error('Fant ikke EventPropertiesMap-blokken i src/index.ts');
  }

  return match[1];
}

describe('event consistency', () => {
  it('har alle *_EVENT representert i både Events og EventPropertiesMap', () => {
    const importedEvents = getImportedEventConstants(indexContent);
    const eventsBlock = getEventsObjectBlock(indexContent);
    const mapBlock = getEventPropertiesMapBlock(indexContent);

    const missingInEvents = importedEvents.filter(
      (eventConst) => !new RegExp(`:\\s*${eventConst}\\b`).test(eventsBlock)
    );

    const missingInMap = importedEvents.filter(
      (eventConst) => !new RegExp(`\\[\\s*${eventConst}\\s*\\]`).test(mapBlock)
    );

    expect(missingInEvents).toEqual([]);
    expect(missingInMap).toEqual([]);
  });
});
