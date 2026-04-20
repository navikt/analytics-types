import type { BaseProperties } from '../../types.js';
/**
 * Switch tilstand endret - trigges når bryteren slås av/på
 */
export const SWITCH_TILSTAND_ENDRET_EVENT = 'switch tilstand endret' as const;

export interface SwitchTilstandEndretProperties extends BaseProperties {
  /** Id for switchen */
  /** Ny tilstand */
  erPa: boolean;
  /** Tidligere tilstand */
  varPa?: boolean;
  /** Hva som utløste endringen (klikk, tastatur, programmatisk) */
  aarsak?: string;
}

export type SwitchTilstandEndretEvent = {
  name: typeof SWITCH_TILSTAND_ENDRET_EVENT;
  properties: SwitchTilstandEndretProperties;
};
