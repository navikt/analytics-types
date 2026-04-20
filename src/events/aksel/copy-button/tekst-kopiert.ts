import type { BaseProperties } from '../../types.js';
/**
 * Tekst kopiert - trigges når kopier-knappen brukes
 */
export const TEKST_KOPIERT_EVENT = 'tekst kopiert' as const;

export interface TekstKopiertProperties extends BaseProperties {
  /** Teksten eller feltet som ble kopiert */
  tekst: string;
}

export type TekstKopiertEvent = {
  name: typeof TEKST_KOPIERT_EVENT;
  properties: TekstKopiertProperties;
};
