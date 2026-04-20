import type { BaseProperties } from '../../types.js';
/**
 * Popover åpnet - trigges når popoveren vises
 */
export const POPOVER_APNET_EVENT = 'popover åpnet' as const;

export interface PopoverApnetProperties extends BaseProperties {
  /** Id til popover-komponenten */
  /** Elementet som åpnet popoveren */
  triggerId?: string;
  /** Variant eller plassering for popoveren */
  variant?: string;
}

export type PopoverApnetEvent = {
  name: typeof POPOVER_APNET_EVENT;
  properties: PopoverApnetProperties;
};
