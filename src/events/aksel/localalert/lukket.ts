import type { BaseProperties } from '../../types.js';
/**
 * LocalAlert lukket-hendelse - trigges når et lokalt varsel lukkes
 */
export const LOCALALERT_LUKKET_EVENT = 'localalert lukket' as const;

export interface LocalAlertLukketProperties extends BaseProperties {
  /** Status/variant av varselet */
  status?: 'announcement' | 'success' | 'warning' | 'error';
  /** Tittel på varselet */
  tittel?: string;
  /** Tekstinnholdet i varselet */
  tekst?: string;
}

export type LocalAlertLukketEvent = {
  name: typeof LOCALALERT_LUKKET_EVENT;
  properties: LocalAlertLukketProperties;
};
