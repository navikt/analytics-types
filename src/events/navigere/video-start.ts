import type { BaseProperties } from '../types.js';
/**
 * Video start - trigges når bruker starter en video
 */
export const VIDEO_START_EVENT = 'video start' as const;

export interface VideoStartProperties extends BaseProperties {
  /** Videotittel */
  tittel?: string;
  /** Varighet i sekunder */
  varighet?: number;
  /** Videospråk */
  språk?: string;
}

export type VideoStartEvent = {
  name: typeof VIDEO_START_EVENT;
  properties?: VideoStartProperties;
};
