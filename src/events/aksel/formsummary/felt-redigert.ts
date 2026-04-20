import type { BaseProperties } from '../../types.js';
/**
 * FormSummary felt redigert - trigges når bruker velger å redigere et felt fra oppsummeringen
 */
export const FORMSUMMARY_FELT_REDIGERT_EVENT = 'formsummary felt redigert' as const;

export interface FormSummaryFeltRedigertProperties extends BaseProperties {
  /** Id eller referanse til skjemaet */
  skjemaId?: string;
  /** ID på feltet som redigeres */
  feltId: string;
  /** Feltets label/navn */
  feltNavn?: string;
  /** Hvilket steg feltet tilhører (hvis multi-step) */
  stegNummer?: number;
  /** Redigeringsmetode (inline, navigering til steg) */
  redigeringsMetode?: 'inline' | 'navigering';
}

export type FormSummaryFeltRedigertEvent = {
  name: typeof FORMSUMMARY_FELT_REDIGERT_EVENT;
  properties: FormSummaryFeltRedigertProperties;
};
