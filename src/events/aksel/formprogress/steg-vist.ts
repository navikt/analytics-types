import type { BaseProperties } from '../../types.js';
/**
 * FormProgress steg vist - trigges når et steg i FormProgress vises
 */
export const FORMPROGRESS_STEG_VIST_EVENT = 'formprogress steg vist' as const;

export interface FormProgressStegVistProperties extends BaseProperties {
  /** Id eller referanse til skjemaet */
  skjemaId?: string;
  /** Nummer på aktivt steg (1-indeksert) */
  aktivtSteg: number;
  /** Label/navn på aktivt steg */
  stegNavn?: string;
  /** Totalt antall steg */
  totaltAntallSteg: number;
  /** Om steget er interaktivt (kan klikkes) */
  erInteraktivt?: boolean;
}

export type FormProgressStegVistEvent = {
  name: typeof FORMPROGRESS_STEG_VIST_EVENT;
  properties: FormProgressStegVistProperties;
};
