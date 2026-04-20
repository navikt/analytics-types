import type { BaseProperties } from '../../types.js';
/**
 * LocalAlert vist-hendelse - trigges når et lokalt varsel vises
 */
export const LOCALALERT_VIST_EVENT = 'localalert vist' as const;

export interface LocalAlertVistProperties extends BaseProperties {
  /** Status/variant av varselet */
  status?: 'announcement' | 'success' | 'warning' | 'error';
  /** Tittel på varselet */
  tittel?: string;
  /** Tekstinnholdet i varselet */
  tekst?: string;
  /** Størrelse på varselet */
  size?: 'medium' | 'small';
}

export type LocalAlertVistEvent = {
  name: typeof LOCALALERT_VIST_EVENT;
  properties: LocalAlertVistProperties;
};
