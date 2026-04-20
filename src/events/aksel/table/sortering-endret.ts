import type { BaseProperties } from '../../types.js';
/**
 * Tabell sortering endret - trigges når bruker sorterer en kolonne
 */
export const TABELL_SORTERING_ENDRET_EVENT = 'tabell sortering endret' as const;

export interface TabellSorteringEndretProperties extends BaseProperties {
  /** Hvilken kolonne som sorteres */
  kolonne: string;
  /** Retningen på sorteringen */
  retning: 'asc' | 'desc';
}

export type TabellSorteringEndretEvent = {
  name: typeof TABELL_SORTERING_ENDRET_EVENT;
  properties: TabellSorteringEndretProperties;
};
