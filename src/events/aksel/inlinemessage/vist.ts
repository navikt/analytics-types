import type { BaseProperties } from '../../types.js';
/**
 * InlineMessage vist-hendelse - trigges når en inline melding vises
 */
export const INLINEMESSAGE_VIST_EVENT = 'inlinemessage vist' as const;

export interface InlineMessageVistProperties extends BaseProperties {
  /** Status/variant av meldingen */
  status?: 'info' | 'success' | 'warning' | 'error';
  /** Tekstinnholdet i meldingen */
  tekst?: string;
  /** Størrelse på meldingen */
  size?: 'medium' | 'small';
}

export type InlineMessageVistEvent = {
  name: typeof INLINEMESSAGE_VIST_EVENT;
  properties: InlineMessageVistProperties;
};
