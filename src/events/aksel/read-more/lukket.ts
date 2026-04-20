import type { BaseProperties } from '../../types.js';
/**
 * Les mer lukket - trigges når ReadMore lukkes
 */
export const LES_MER_LUKKET_EVENT = 'les mer lukket' as const;

export interface LesMerLukketProperties extends BaseProperties {
  /** Tittelen til seksjonen */
  tittel?: string;
}

export type LesMerLukketEvent = {
  name: typeof LES_MER_LUKKET_EVENT;
  properties: LesMerLukketProperties;
};
