import type { BaseProperties } from '../../types.js';
/**
 * Tag fjernet - trigges når en tag fjernes eller lukkes
 */
export const TAG_FJERNET_EVENT = 'tag fjernet' as const;

export interface TagFjernetProperties extends BaseProperties {
  /** Tekst/etikett som vises i taggen */
  tekst?: string;
  /** Hvordan taggen ble fjernet (klikk, tastatur) */
  aarsak?: string;
}

export type TagFjernetEvent = {
  name: typeof TAG_FJERNET_EVENT;
  properties: TagFjernetProperties;
};
