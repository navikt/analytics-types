import type { BaseProperties } from '../../types.js';
/**
 * Modal åpnet-hendelse - trigges når en modal åpnes
 */
export const MODAL_APNET_EVENT = 'modal åpnet' as const;

export interface ModalApnetProperties extends BaseProperties {
  /** Tittelen på modal-dialogen */
  tittel?: string;
}

export type ModalApnetEvent = {
  name: typeof MODAL_APNET_EVENT;
  properties: ModalApnetProperties;
};
