import type { BaseProperties } from '../../types.js';
/**
 * Chip fjernet - trigges når bruker klikker på slett-knappen i en Chips.Removable
 */
export const CHIP_FJERNET_EVENT = 'chip fjernet' as const;

export interface ChipFjernetProperties extends BaseProperties {
  /** Tekstinnholdet i chipen */
  tekst?: string;
  /** Verdien som chipen representerte */
  chipVerdi?: string;
  /** Variant av chipen */
  variant?: 'action' | 'neutral';
}

export type ChipFjernetEvent = {
  name: typeof CHIP_FJERNET_EVENT;
  properties: ChipFjernetProperties;
};
