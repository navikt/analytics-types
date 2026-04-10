import type { BaseProperties } from '../types';

/**
 * Resultat-klikk - trigges når bruker klikker på et søkeresultat
 */
export const RESULTAT_KLIKK_EVENT = 'resultat-klikk' as const;

export interface ResultatKlikkProperties extends BaseProperties {
  /** URL / mål for treffet som ble klikket */
  destinasjon?: string;
  /** Søkefrase som var aktiv da klikket ble gjort */
  sokeord?: string;
  /** Posisjon / rangering for treffet (1-basert) */
  treffnr?: number;
}

export type ResultatKlikkEvent = {
  name: typeof RESULTAT_KLIKK_EVENT;
  properties: ResultatKlikkProperties;
};
