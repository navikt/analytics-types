import type { BaseProperties } from '../../types.js';
/**
 * Chip toggled - trigges når bruker klikker på en Chips.Toggle
 */
export const CHIP_TOGGLED_EVENT = 'chip toggled' as const;

export interface ChipToggledProperties extends BaseProperties {
  /** Tekstinnholdet i chipen */
  tekst?: string;
  /** Verdien som chipen representerer */
  chipVerdi?: string;
  /** Ny tilstand (true = selected, false = ikke selected) */
  selected?: boolean;
  /** Variant av chipen */
  variant?: 'action' | 'neutral';
}

export type ChipToggledEvent = {
  name: typeof CHIP_TOGGLED_EVENT;
  properties: ChipToggledProperties;
};
