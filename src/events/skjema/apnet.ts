import type { BaseProperties } from '../types.js';
/**
 * Skjema åpnet-hendelse - trigges når et skjema åpnes
 */
export const SKJEMA_APNET_EVENT = 'skjema åpnet' as const;

export interface SkjemaApnetProperties extends BaseProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
}

export type SkjemaApnetEvent = {
  name: typeof SKJEMA_APNET_EVENT;
  properties: SkjemaApnetProperties;
};
