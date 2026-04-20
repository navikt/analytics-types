import type { BaseProperties } from '../../types.js';
/**
 * InfoCard vist-hendelse - trigges når et infokort vises
 */
export const INFOCARD_VIST_EVENT = 'infocard vist' as const;

export interface InfoCardVistProperties extends BaseProperties {
  /** Tittel på kortet */
  tittel?: string;
  /** Tekstinnholdet i kortet */
  tekst?: string;
  /** Størrelse på kortet */
  size?: 'medium' | 'small';
  /** Farge/tema på kortet */
  color?:
    | 'accent'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'meta-purple'
    | 'meta-lime'
    | 'brand-beige'
    | 'brand-blue'
    | 'brand-magenta';
}

export type InfoCardVistEvent = {
  name: typeof INFOCARD_VIST_EVENT;
  properties: InfoCardVistProperties;
};
