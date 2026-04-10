import type { BaseProperties } from '../types';

/**
 * Søk - trigges når bruker gjennomfører et søk
 */
export const SOK_NAVNO_EVENT = 'søk' as const;

export interface SokNavnoProperties extends BaseProperties {
  /** Søkefrase / søkeord */
  sokeord?: string;
}

export type SokNavnoEvent = {
  name: typeof SOK_NAVNO_EVENT;
  properties: SokNavnoProperties;
};
