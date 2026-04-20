import type { BaseProperties } from '../../types.js';
/**
 * MonthPicker måned valgt - trigges når bruker velger en ny måned
 */
export const MONTHPICKER_MANED_VALGT_EVENT = 'monthpicker måned valgt' as const;

export interface MonthPickerManedValgtProperties extends BaseProperties {
  /** Id eller navn på monthpicker-komponenten */
  /** ISO-representasjon av måneden (YYYY-MM) */
  maned: string;
  /** Tidligere valgt måned */
  forrigeManed?: string;
}

export type MonthPickerManedValgtEvent = {
  name: typeof MONTHPICKER_MANED_VALGT_EVENT;
  properties: MonthPickerManedValgtProperties;
};
