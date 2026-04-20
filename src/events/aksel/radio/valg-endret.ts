import type { BaseProperties } from '../../types.js';
/**
 * Radio valg endret - trigges når bruker velger et nytt alternativ
 */
export const RADIO_VALG_ENDRET_EVENT = 'radio valg endret' as const;

export interface RadioValgEndretProperties extends BaseProperties {
  /** Verdien som ble valgt */
  valgtAlternativ?: string;
  /** Verdien som var valgt fra før */
  forrigeAlternativ?: string;
  /** Antall tilgjengelige alternativer i gruppen */
  antallAlternativer?: number;
}

export type RadioValgEndretEvent = {
  name: typeof RADIO_VALG_ENDRET_EVENT;
  properties: RadioValgEndretProperties;
};
