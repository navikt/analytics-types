import type { BaseProperties } from '../../types.js';
/**
 * Stepper steg endret - trigges når bruker navigerer til et nytt steg
 */
export const STEPPER_STEG_ENDRET_EVENT = 'stepper steg endret' as const;

export interface StepperStegEndretProperties extends BaseProperties {
  /** Steget det navigeres til */
  stegId?: string;
  /** 0-indeksert posisjon for steget */
  stegIndeks: number;
  /** Handlingstype (neste, forrige, hopp) */
  handling?: 'neste' | 'forrige' | 'hopp';
  /** Navigasjonsretning */
  retning?: 'fremover' | 'bakover';
  /** Totalt antall steg */
  totaltAntallSteg: number;
  /** Om steget som forlates var fullført */
  forrigeStegFullfort?: boolean;
}

export type StepperStegEndretEvent = {
  name: typeof STEPPER_STEG_ENDRET_EVENT;
  properties: StepperStegEndretProperties;
};
