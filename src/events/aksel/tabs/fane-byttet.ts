import type { BaseProperties } from '../../types.js';
/**
 * Fane byttet - trigges når bruker skifter fane
 */
export const FANE_BYTTET_EVENT = 'fane byttet' as const;

export interface FaneByttetProperties extends BaseProperties {
  /** Fane-verdi som ble forlatt */
  fraFane?: string;
  /** Fane-verdi som ble valgt */
  tilFane?: string;
  /** Teksten på den nye fanen */
  tilFaneTekst?: string;
  /** Hvordan fanen ble byttet */
  navigasjonsMetode?: 'click' | 'keyboard' | 'programmatic';
  /** Totalt antall faner */
  antallFaner?: number;
  /** Om fane aktiveres automatisk ved fokus */
  selectionFollowsFocus?: boolean;
}

export type FaneByttetEvent = {
  name: typeof FANE_BYTTET_EVENT;
  properties: FaneByttetProperties;
};
