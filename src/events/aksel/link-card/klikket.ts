import type { BaseProperties } from '../../types.js';
/**
 * LinkCard klikket - trigges når brukeren aktiverer et LinkCard
 */
export const LINKCARD_KLIKKET_EVENT = 'linkcard klikket' as const;

export interface LinkCardKlikketProperties extends BaseProperties {
  /** Overskriften som vises i kortet */
  tittel: string;
  /** Destinasjon/lenke kortet peker til */
  destinasjon: string;
  /** Seksjon eller kontekst kortet står i */
  seksjon?: string;
}

export type LinkCardKlikketEvent = {
  name: typeof LINKCARD_KLIKKET_EVENT;
  properties: LinkCardKlikketProperties;
};
