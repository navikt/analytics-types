import type { BaseProperties } from '../../types.js';
/**
 * Dato valgt - trigges når bruker velger en dato
 */
export const DATO_VALGT_EVENT = 'dato valgt' as const;

export interface DatoValgtProperties extends BaseProperties {
  /** Verdien brukeren valgte - enkel dato, array av datoer, eller range */
  datoVerdi?: string | string[];
  /** Feltet eller konteksten datoen tilhører */
  datoFelt?: string;
  /** Modus for datevelger */
  mode?: 'single' | 'multiple' | 'range';
  /** Fra-dato ved range-modus */
  from?: string;
  /** Til-dato ved range-modus */
  to?: string;
}

export type DatoValgtEvent = {
  name: typeof DATO_VALGT_EVENT;
  properties: DatoValgtProperties;
};
