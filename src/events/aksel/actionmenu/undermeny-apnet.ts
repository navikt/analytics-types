import type { BaseProperties } from '../../types.js';
import type { ActionMenuInteraksjonsMetode, ActionMenuSti } from './types.js';

/**
 * ActionMenu undermeny åpnet - trigges når en submeny ekspanderes
 * (maks to nivåer anbefalt av Aksel).
 */
export const ACTIONMENU_UNDERMENY_APNET_EVENT = 'actionmenu undermeny åpnet' as const;

export interface ActionMenuUndermenyApnetProperties extends BaseProperties {
  /** Sti fra hovedmeny til denne undermenyen */
  sti?: ActionMenuSti;
  /** Navnet på subtriggeren */
  triggerTekst: string;
  /** 1 for første nivå, 2 for nested nivå osv. */
  niva?: number;
  /** Eventuell referanse til valget som åpnet undermenyen */
  forelderValgId?: string;
  /** Presis interaksjonsmetode (mus, tastatur, snarvei osv.) */
  interaksjonsMetode?: ActionMenuInteraksjonsMetode;
}

export type ActionMenuUndermenyApnetEvent = {
  name: typeof ACTIONMENU_UNDERMENY_APNET_EVENT;
  properties: ActionMenuUndermenyApnetProperties;
};
