import type { BaseProperties } from '../types.js';
/**
 * Last ned-hendelse - trigges når en bruker laster ned en fil
 */
export const LAST_NED_EVENT = 'last ned' as const;

export interface LastNedProperties extends BaseProperties {
  /** Filtype (for eksempel PDF eller Excel) */
  type?: string;
  /** Tema eller kategori for nedlastingen */
  tema?: string;
  /** Tittel på filen som ble lastet ned */
  tittel: string;
}

export type LastNedEvent = {
  name: typeof LAST_NED_EVENT;
  properties: LastNedProperties;
};
