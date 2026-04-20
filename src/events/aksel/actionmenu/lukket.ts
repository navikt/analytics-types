import type { BaseProperties } from '../../types.js';
import type {
  ActionMenuInteraksjonsMetode,
  ActionMenuLukkAarsak,
  ActionMenuSti
} from './types.js';

/**
 * ActionMenu lukket - trigges når menyen kollapser
 */
export const ACTIONMENU_LUKKET_EVENT = 'actionmenu lukket' as const;

export interface ActionMenuLukketProperties extends BaseProperties {
  /** Hvordan menyen ble lukket (valg, klikk utenfor, escape, etc.) */
  lukkAarsak: ActionMenuLukkAarsak;
  /** Presis interaksjonsmetode (mus, tastatur, snarvei osv.) */
  interaksjonsMetode?: ActionMenuInteraksjonsMetode;
  /** Id til siste valg som førte til lukking (hvis relevant) */
  sistValgteValgId?: string;
  /** Label på siste valg som førte til lukking (hvis relevant) */
  sistValgteValgTekst?: string;
}

export type ActionMenuLukketEvent = {
  name: typeof ACTIONMENU_LUKKET_EVENT;
  properties: ActionMenuLukketProperties;
};
