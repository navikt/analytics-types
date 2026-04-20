import type { BaseProperties } from '../types.js';

/**
 * Vis flere treff - trigges når bruker laster inn flere søkeresultater
 */
export const VIS_FLERE_TREFF_EVENT = 'vis-flere-treff' as const;

export interface VisFlereTreffProperties extends BaseProperties {
  /** Sidetall som ble lastet */
  page?: number;
}

export type VisFlereTreffEvent = {
  name: typeof VIS_FLERE_TREFF_EVENT;
  properties: VisFlereTreffProperties;
};
