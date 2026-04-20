import type { BaseProperties } from '../types.js';
/**
 * Skjema fullført-hendelse - trigges når et skjema sendes inn med suksess
 */
export const SKJEMA_FULLFORT_EVENT = 'skjema fullført' as const;

export interface SkjemaFullfortProperties extends BaseProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
}

export type SkjemaFullfortEvent = {
  name: typeof SKJEMA_FULLFORT_EVENT;
  properties: SkjemaFullfortProperties;
};
