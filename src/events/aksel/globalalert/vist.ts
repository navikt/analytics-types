import type { BaseProperties } from '../../types.js';
/**
 * GlobalAlert vist-hendelse - trigges når et globalt varsel vises
 */
export const GLOBALALERT_VIST_EVENT = 'globalalert vist' as const;

export interface GlobalAlertVistProperties extends BaseProperties {
  /** Status/variant av varselet */
  status?: 'announcement' | 'success' | 'warning' | 'error';
  /** Tittel på varselet */
  tittel?: string;
  /** Tekstinnholdet i varselet */
  tekst?: string;
  /** Størrelse på varselet */
  size?: 'medium' | 'small';
}

export type GlobalAlertVistEvent = {
  name: typeof GLOBALALERT_VIST_EVENT;
  properties: GlobalAlertVistProperties;
};
