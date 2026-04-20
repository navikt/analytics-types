import type { BaseProperties } from '../../types.js';
/**
 * Table rad utvidet - trigges når en utvidbar rad ekspanderes
 */
export const TABELL_RAD_UTVIDET_EVENT = 'tabell rad utvidet' as const;

export interface TabellRadUtvidetProperties extends BaseProperties {
  /** Radnummer (0-indeksert) */
  radIndeks?: number;
  /** Om raden ble utvidet (true) eller kollapset (false) */
  erUtvidet?: boolean;
  /** Antall nivåer nøstet (for hierarkiske tabeller) */
  niva?: number;
}

export type TabellRadUtvidetEvent = {
  name: typeof TABELL_RAD_UTVIDET_EVENT;
  properties: TabellRadUtvidetProperties;
};
