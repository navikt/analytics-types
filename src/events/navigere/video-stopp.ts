import type { BaseProperties } from '../types';
/**
 * Video stopp - trigges når bruker stopper en video
 */
export const VIDEO_STOPP_EVENT = 'video stopp' as const;

export interface VideoStoppProperties extends BaseProperties {
  /** Videotittel */
  tittel?: string;
  /** Varighet i sekunder */
  varighet?: number;
  /** Videospråk */
  språk?: string;
}

export type VideoStoppEvent = {
  name: typeof VIDEO_STOPP_EVENT;
  properties?: VideoStoppProperties;
};
