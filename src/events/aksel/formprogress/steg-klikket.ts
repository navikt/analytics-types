import type { BaseProperties } from '../../types.js';
/**
 * FormProgress steg klikket - trigges når bruker klikker på et steg i FormProgress
 */
export const FORMPROGRESS_STEG_KLIKKET_EVENT = 'formprogress steg klikket' as const;

export interface FormProgressStegKlikketProperties extends BaseProperties {
  /** Id eller referanse til skjemaet */
  skjemaId?: string;
  /** Nummer på steg som ble klikket (1-indeksert) */
  klikketSteg?: number;
  /** Label/navn på steg som ble klikket */
  stegNavn?: string;
  /** Nummer på forrige aktivt steg */
  fraSteg?: number;
  /** Totalt antall steg */
  totaltAntallSteg: number;
  /** Om navigasjonen var fremover eller bakover */
  retning?: 'fremover' | 'bakover' | 'samme';
  /** Om steget var fullført eller ikke */
  stegFullfort?: boolean;
}

export type FormProgressStegKlikketEvent = {
  name: typeof FORMPROGRESS_STEG_KLIKKET_EVENT;
  properties: FormProgressStegKlikketProperties;
};
