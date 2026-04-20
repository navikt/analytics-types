import type { BaseProperties } from '../../types.js';
/**
 * Knapp klikket - trigges når bruker klikker på en knapp
 */
export const KNAPP_KLIKKET_EVENT = 'knapp klikket' as const;

export interface KnappKlikketProperties extends BaseProperties {
  /** Teksten som vises på knappen */
  tekst: string;
  /** Variant av knappen */
  variant?: 'primary' | 'primary-neutral' | 'secondary' | 'secondary-neutral' | 'tertiary' | 'tertiary-neutral' | 'danger';
  /** Størrelse på knappen */
  size?: 'medium' | 'small' | 'xsmall';
}

export type KnappKlikketEvent = {
  name: typeof KNAPP_KLIKKET_EVENT;
  properties: KnappKlikketProperties;
};
