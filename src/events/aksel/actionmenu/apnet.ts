import type { BaseProperties } from '../../types.js';
import type { ActionMenuInteraksjonsMetode, ActionMenuSti } from './types.js';

/**
 * ActionMenu åpnet - trigges når menyen ekspanderes
 */
export const ACTIONMENU_APNET_EVENT = 'actionmenu åpnet' as const;

export interface ActionMenuApnetProperties extends BaseProperties {
  /** Id eller annen referanse til menyen */
  /** Teksten på knappen eller triggeren */
  triggerTekst: string;
  /** Hva som førte til åpningen (klikk, tastatur, programmatisk) */
  aarsak?: string;
  /** Presis interaksjonsmetode (mus, tastatur, snarvei osv.) */
  interaksjonsMetode?: ActionMenuInteraksjonsMetode;
  /** Om komponenten styres kontrollert via state */
  kontrollert?: boolean;
  /** Justeringen til meny-innholdet (ref. Aksel prop) */
  align?: 'start' | 'end';
  /** Om menyen inneholder minst én undermeny */
  harUndermenyer?: boolean;
}

export type ActionMenuApnetEvent = {
  name: typeof ACTIONMENU_APNET_EVENT;
  properties: ActionMenuApnetProperties;
};
