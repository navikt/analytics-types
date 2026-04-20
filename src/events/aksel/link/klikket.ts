import type { BaseProperties } from '../../types.js';
/**
 * Link klikket - trigges når en Aksel Link aktiveres
 */
export const LINK_KLIKKET_EVENT = 'link klikket' as const;

export interface LinkKlikketProperties extends BaseProperties {
  /** Id til lenken */
  /** Lenketekst */
  tekst: string;
  /** Destinasjons-URL */
  href: string;
  /** Om lenken åpner i nytt vindu/tab */
  apnerINyttVindu?: boolean;
  /** Om lenken er intern eller ekstern */
  erEkstern?: boolean;
  /** Kontekst hvor lenken vises */
}

export type LinkKlikketEvent = {
  name: typeof LINK_KLIKKET_EVENT;
  properties: LinkKlikketProperties;
};
