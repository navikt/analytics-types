import type { BaseProperties } from '../../types.js';
import type {
  ActionMenuInteraksjonsMetode,
  ActionMenuSti,
  ActionMenuValgType
} from './types.js';

/**
 * ActionMenu valg valgt - trigges når et valg i menyen aktiveres
 */
export const ACTIONMENU_VALG_VALGT_EVENT = 'actionmenu valg valgt' as const;

export interface ActionMenuValgValgtProperties extends BaseProperties {
  /** Id for valget som ble valgt */
  valgId?: string;
  /** Leser-vennlig navn på valget */
  valgTekst: string;
  /** 0-indeksert posisjon i menyen */
  indeks?: number;
  /** Presis interaksjonsmetode (mus, tastatur, snarvei osv.) */
  interaksjonsMetode?: ActionMenuInteraksjonsMetode;
  /** Om det er item, checkbox, radio eller subtrigger */
  valgType?: ActionMenuValgType;
  /** Id eller label for gruppen elementet tilhører */
  gruppeId?: string;
  /** Visuell label for gruppen */
  gruppeLabel?: string;
  /** Navnet på RadioGroup hvis elementet er radio */
  radioGroup?: string;
  /** Gjeldende tilstand (for checkbox/radio) */
  checked?: boolean;
  /** Eventuell snarvei som ble brukt eller vises */
  shortcut?: string;
  /** Hvilken sti i hierarkiet valget tilhører */
  undermenySti?: ActionMenuSti;
  /** Om valget var deaktivert da interaksjonen ble forsøkt */
  disabled?: boolean;
}

export type ActionMenuValgValgtEvent = {
  name: typeof ACTIONMENU_VALG_VALGT_EVENT;
  properties: ActionMenuValgValgtProperties;
};
