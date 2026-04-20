import type { BaseProperties } from '../../types.js';
/**
 * Alert vist-hendelse - trigges når et varsel vises
 */
export const ALERT_VIST_EVENT = 'alert vist' as const;

export interface AlertVistProperties extends BaseProperties {
  /** Variant av varselet */
  variant?: 'error' | 'warning' | 'info' | 'success';
  /** Tekstinnholdet i varselet */
  tekst?: string;
}

export type AlertVistEvent = {
  name: typeof ALERT_VIST_EVENT;
  properties: AlertVistProperties;
};
