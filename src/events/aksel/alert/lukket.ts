import type { BaseProperties } from '../../types.js';
/**
 * Alert lukket-hendelse - trigges når et varsel lukkes (krever closeButton)
 */
export const ALERT_LUKKET_EVENT = 'alert lukket' as const;

export interface AlertLukketProperties extends BaseProperties {
  /** Variant av varselet */
  variant?: 'error' | 'warning' | 'info' | 'success';
  /** Tekstinnholdet i varselet */
  tekst?: string;
}

export type AlertLukketEvent = {
  name: typeof ALERT_LUKKET_EVENT;
  properties: AlertLukketProperties;
};
