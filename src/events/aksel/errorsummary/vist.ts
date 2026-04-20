import type { BaseProperties } from '../../types.js';
/**
 * ErrorSummary vist - trigges når feiloppsummering vises for bruker
 */
export const ERROR_SUMMARY_VIST_EVENT = 'error-summary vist' as const;

export interface ErrorSummaryVistProperties extends BaseProperties {
  /** Id eller referanse til skjemaet */
  skjemaId?: string;
  /** Antall feil som vises */
  antallFeil: number;
  /** Liste over felt-IDer med feil */
  feltMedFeil: readonly string[];
  /** Kontekst der feilen vises (skjema, modal, etc) */
}

export type ErrorSummaryVistEvent = {
  name: typeof ERROR_SUMMARY_VIST_EVENT;
  properties: ErrorSummaryVistProperties;
};
