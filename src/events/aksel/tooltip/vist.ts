import type { BaseProperties } from '../../types.js';
/**
 * Tooltip vist - trigges når brukeren hovrer over eller fokuserer på et element med tooltip
 */
export const TOOLTIP_VIST_EVENT = 'tooltip vist' as const;

export interface TooltipVistProperties extends BaseProperties {
  /** Id på elementet som har tooltipen */
  /** Tekstinnholdet i tooltipen */
  tekst?: string;
}

export type TooltipVistEvent = {
  name: typeof TOOLTIP_VIST_EVENT;
  properties: TooltipVistProperties;
};
