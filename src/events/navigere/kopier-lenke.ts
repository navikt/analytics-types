import type { BaseProperties } from '../types.js';
/**
 * Kopier lenke - trigges når bruker kopierer en lenke
 */
export const KOPIER_LENKE_EVENT = 'kopier-lenke' as const;

export interface KopierLenkeProperties extends BaseProperties {}

export type KopierLenkeEvent = {
  name: typeof KOPIER_LENKE_EVENT;
  properties?: KopierLenkeProperties;
};
