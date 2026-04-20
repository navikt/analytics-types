import type { BaseProperties } from '../types.js';
/**
 * Filtervalg-hendelse - trigges når en bruker velger et filter
 */
export const FILTERVALG_EVENT = 'filtervalg' as const;

export interface FiltervalgProperties extends BaseProperties {
  /** Kategori på filteret */
  kategori?: string;
  /** Navnet på filteret som ble valgt */
  filternavn?: string;
  /** Underkategori / sub-filter som ble valgt */
  subFilter?: string;
}

export type FiltervalgEvent = {
  name: typeof FILTERVALG_EVENT;
  properties: FiltervalgProperties;
};
