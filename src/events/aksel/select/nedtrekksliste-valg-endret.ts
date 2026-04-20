import type { BaseProperties } from '../../types.js';
/**
 * Nedtrekksliste valg endret - trigges når Select endrer verdi
 */
export const NEDTREKKSLISTE_VALG_ENDRET_EVENT = 'nedtrekksliste valg endret' as const;

export interface NedtrekkslisteValgEndretProperties extends BaseProperties {
  /** Verdien som ble valgt */
  valgtVerdi?: string;
  /** Teksten som vises for valget */
  tekst?: string;
}

export type NedtrekkslisteValgEndretEvent = {
  name: typeof NEDTREKKSLISTE_VALG_ENDRET_EVENT;
  properties: NedtrekkslisteValgEndretProperties;
};
