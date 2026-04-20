import type { BaseProperties } from '../../types.js';
/**
 * FormSummary vist - trigges når oppsummeringen av skjemadata vises
 */
export const FORMSUMMARY_VIST_EVENT = 'formsummary vist' as const;

export interface FormSummaryVistProperties extends BaseProperties {
  /** Id eller referanse til skjemaet */
  skjemaId?: string;
  /** Antall felt i oppsummeringen */
  antallFelt: number;
  /** Om oppsummeringen er redigerbar */
  erRedigerbar?: boolean;
  /** Kontekst (innsending, forhåndsvisning) */
}

export type FormSummaryVistEvent = {
  name: typeof FORMSUMMARY_VIST_EVENT;
  properties: FormSummaryVistProperties;
};
