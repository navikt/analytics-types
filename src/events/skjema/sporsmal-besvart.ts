import type { BaseProperties } from '../types.js';
/**
 * Skjema spørsmål besvart-hendelse - trigges når et spørsmål i skjemaet besvares
 */
export const SKJEMA_SPORSMAL_BESVART_EVENT = 'skjema spørsmål besvart' as const;

export interface SkjemaSporsmalBesvartProperties extends BaseProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
  /** Spørsmålet som ble besvart */
  spørsmål?: string;
  /** Svaret som ble gitt */
  svar?: string;
}

export type SkjemaSporsmalBesvartEvent = {
  name: typeof SKJEMA_SPORSMAL_BESVART_EVENT;
  properties: SkjemaSporsmalBesvartProperties;
};
