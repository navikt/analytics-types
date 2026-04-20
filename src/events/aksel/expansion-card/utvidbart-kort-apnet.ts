import type { BaseProperties } from '../../types.js';
/**
 * Utvidbart kort åpnet - trigges når kortet ekspanderes
 */
export const UTVIDBART_KORT_APNET_EVENT = 'utvidbart kort åpnet' as const;

export interface UtvidbartKortApnetProperties extends BaseProperties {
  /** Tittel på kortet */
  tittel: string;
}

export type UtvidbartKortApnetEvent = {
  name: typeof UTVIDBART_KORT_APNET_EVENT;
  properties: UtvidbartKortApnetProperties;
};
