import type { BaseProperties } from '../types.js';
/**
 * Skjema startet-hendelse - trigges når en bruker begynner på et skjema
 */
export const SKJEMA_STARTET_EVENT = 'skjema startet' as const;

export interface SkjemaStartetProperties extends BaseProperties {
  /** Navn på skjemaet */
  skjemanavn?: string;
}

export type SkjemaStartetEvent = {
  name: typeof SKJEMA_STARTET_EVENT;
  properties: SkjemaStartetProperties;
};
