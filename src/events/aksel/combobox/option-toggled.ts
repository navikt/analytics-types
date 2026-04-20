import type { BaseProperties } from '../../types.js';
/**
 * Combobox option toggled - trigges når et alternativ velges/fjernes i combobox
 */
export const COMBOBOX_OPTION_TOGGLED_EVENT = 'combobox option toggled' as const;

export interface ComboboxOptionToggledProperties extends BaseProperties {
  /** Verdien til alternativet */
  optionValue?: string;
  /** Teksten til alternativet */
  optionText?: string;
  /** Om alternativet nå er valgt eller ikke */
  isSelected?: boolean;
  /** Om dette er et egendefinert alternativ (allowNewValues) */
  isCustomOption?: boolean;
  /** Om combobox støtter multi-select */
  isMultiSelect?: boolean;
}

export type ComboboxOptionToggledEvent = {
  name: typeof COMBOBOX_OPTION_TOGGLED_EVENT;
  properties: ComboboxOptionToggledProperties;
};
