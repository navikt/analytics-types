import type { BaseProperties } from '../types.js';
/**
 * Skjema innsending feilet-hendelse - trigges når innsending av skjema feiler
 */
export const SKJEMA_INNSENDING_FEILET_EVENT = 'skjema innsending feilet' as const;

export interface SkjemaInnsendingFeiletProperties extends BaseProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
}

export type SkjemaInnsendingFeiletEvent = {
  name: typeof SKJEMA_INNSENDING_FEILET_EVENT;
  properties: SkjemaInnsendingFeiletProperties;
};
