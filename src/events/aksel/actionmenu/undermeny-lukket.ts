import type { BaseProperties } from '../../types.js';
import type {
  ActionMenuInteraksjonsMetode,
  ActionMenuLukkAarsak,
  ActionMenuSti
} from './types.js';

/**
 * ActionMenu undermeny lukket - trigges når en submeny kollapser igjen.
 */
export const ACTIONMENU_UNDERMENY_LUKKET_EVENT = 'actionmenu undermeny lukket' as const;

export interface ActionMenuUndermenyLukketProperties extends BaseProperties {
  /** Id eller annen referanse til hovedmenyen */
  /** Sti fra hovedmeny til denne undermenyen */
  sti?: ActionMenuSti;
  /** Navnet på subtriggeren */
  triggerTekst: string;
  /** 1 for første nivå, 2 for nested nivå osv. */
  niva?: number;
  /** Hvordan undermenyen ble lukket */
  lukkAarsak?: ActionMenuLukkAarsak;
  /** Presis interaksjonsmetode (mus, tastatur, snarvei osv.) */
  interaksjonsMetode?: ActionMenuInteraksjonsMetode;
}

export type ActionMenuUndermenyLukketEvent = {
  name: typeof ACTIONMENU_UNDERMENY_LUKKET_EVENT;
  properties: ActionMenuUndermenyLukketProperties;
};
