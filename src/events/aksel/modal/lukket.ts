import type { BaseProperties } from '../../types.js';
/**
 * Modal lukket-hendelse - trigges når en modal lukkes
 */
export const MODAL_LUKKET_EVENT = 'modal lukket' as const;

export interface ModalLukketProperties extends BaseProperties {
  /** Tittelen på modal-dialogen */
  tittel?: string;
  /** Hvordan dialogen ble lukket */
  lukkMetode?: 'escape' | 'klikk-utenfor' | 'lukk-knapp' | 'handlings-knapp' | 'programmatisk';
  /** Tid modal var åpen (millisekunder) */
  varighetMs?: number;
  /** Om brukeren gjorde endringer i modalen */
  harEndringer?: boolean;
}

export type ModalLukketEvent = {
  name: typeof MODAL_LUKKET_EVENT;
  properties: ModalLukketProperties;
};
