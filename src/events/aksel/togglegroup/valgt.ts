import type { BaseProperties } from '../../types.js';
/**
 * ToggleGroup valgt - trigges når bruker velger en toggle i gruppen
 */
export const TOGGLEGROUP_VALGT_EVENT = 'togglegroup valgt' as const;

export interface ToggleGroupValgtProperties extends BaseProperties {
  /** Id eller navn på gruppen */
  /** Verdien som ble valgt (value-prop) */
  valgtVerdi: string;
}

export type ToggleGroupValgtEvent = {
  name: typeof TOGGLEGROUP_VALGT_EVENT;
  properties: ToggleGroupValgtProperties;
};
