import type { BaseProperties } from '../../types.js';
/**
 * Table filter anvendt - trigges når bruker anvender et filter på tabellen
 */
export const TABELL_FILTER_ANVENDT_EVENT = 'tabell filter anvendt' as const;

export interface TabellFilterAnvendtProperties extends BaseProperties {
  /** Hvilken kolonne som filtreres */
  /** Kolonnenavn */
  kolonneNavn?: string;
  /** Filterverdi(er) */
  filterVerdi?: string | readonly string[];
  /** Filtertype (tekst, select, range, etc) */
  filterType?: string;
  /** Antall aktive filtre totalt */
  antallAktiveFiltre?: number;
  /** Antall rader etter filtrering */
  antallRaderEtterFilter?: number;
}

export type TabellFilterAnvendtEvent = {
  name: typeof TABELL_FILTER_ANVENDT_EVENT;
  properties: TabellFilterAnvendtProperties;
};
