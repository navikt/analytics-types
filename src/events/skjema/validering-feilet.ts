import type { BaseProperties } from '../types.js';
/**
 * Skjema validering feilet-hendelse - trigges når skjemaet feiler i validering
 */
export const SKJEMA_VALIDERING_FEILET_EVENT = 'skjema validering feilet' as const;

export interface SkjemaValideringFeiletProperties extends BaseProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
}

export type SkjemaValideringFeiletEvent = {
  name: typeof SKJEMA_VALIDERING_FEILET_EVENT;
  properties: SkjemaValideringFeiletProperties;
};
