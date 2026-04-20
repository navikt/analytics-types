import type { BaseProperties } from '../../types.js';
/**
 * ErrorSummary feilmelding klikket - trigges når bruker klikker på en feilmelding i oppsummeringen
 */
export const ERROR_SUMMARY_FEILMELDING_KLIKKET_EVENT = 'error-summary feilmelding klikket' as const;

export interface ErrorSummaryFeilmeldingKlikketProperties extends BaseProperties {
  /** Id eller referanse til skjemaet */
  skjemaId?: string;
  /** ID på feltet som feilen gjelder */
  feltId: string;
  /** Feltets label/navn */
  feltNavn?: string;
  /** Feilmeldingstekst */
  feilmelding?: string;
  /** Posisjon i feiliste (0-indeksert) */
  feilIndeks?: number;
  /** Totalt antall feil */
  totaltAntallFeil?: number;
}

export type ErrorSummaryFeilmeldingKlikketEvent = {
  name: typeof ERROR_SUMMARY_FEILMELDING_KLIKKET_EVENT;
  properties: ErrorSummaryFeilmeldingKlikketProperties;
};
