import type { BaseProperties } from '../../types.js';
/**
 * Søk gjennomført - trigges når bruker gjør ferdig et søk
 */
export const SOK_EVENT = 'søk gjennomført' as const;

export interface SokProperties extends BaseProperties {
  /** Tekst/identifikator for søkekomponenten */
  tekst?: string;
  /** Antall treff som søket ga */
  søkeResultater?: number;
  /** Om søket ga resultater */
  harResultater?: boolean;
  /** Søkefrase/query */
  sokefrase?: string;
  /** Sorteringsmetode anvendt */
  sortering?: string;
  /** Filtre som var aktive under søk */
  aktiveFiltre?: readonly string[];
  /** Responstid i millisekunder */
  responstidMs?: number;
}

export type SokEvent = {
  name: typeof SOK_EVENT;
  properties: SokProperties;
};
