import type { BaseProperties } from '../../types.js';
/**
 * Process steg klikket-hendelse - trigges når bruker klikker på et steg i prosessen (hvis interaktivt)
 */
export const PROCESS_STEG_KLIKKET_EVENT = 'process steg klikket' as const;

export interface ProcessStegKlikketProperties extends BaseProperties {
  /** Tittel på steget */
  tittel?: string;
  /** Status på steget */
  status?: 'active' | 'completed' | 'uncompleted';
  /** Indeks på steget (1-basert) */
  stegNr?: number;
  /** Totalt antall steg */
  antallSteg?: number;
}

export type ProcessStegKlikketEvent = {
  name: typeof PROCESS_STEG_KLIKKET_EVENT;
  properties: ProcessStegKlikketProperties;
};
