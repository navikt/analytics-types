import type { BaseProperties } from '../../types.js';
/**
 * Les mer åpnet - trigges når en ReadMore utvides
 */
export const LES_MER_APNET_EVENT = 'les mer åpnet' as const;

export interface LesMerApnetProperties extends BaseProperties {
  /** Tittelen til seksjonen */
  tittel?: string;
}

export type LesMerApnetEvent = {
  name: typeof LES_MER_APNET_EVENT;
  properties: LesMerApnetProperties;
};
