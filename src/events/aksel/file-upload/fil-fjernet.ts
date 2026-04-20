import type { BaseProperties } from '../../types.js';
/**
 * Fil fjernet - trigges når en tidligere opplastet fil slettes
 */
export const FIL_FJERNET_EVENT = 'fil fjernet' as const;

export interface FilFjernetProperties extends BaseProperties {
  /** Navnet på filen */
  filNavn?: string;
}

export type FilFjernetEvent = {
  name: typeof FIL_FJERNET_EVENT;
  properties: FilFjernetProperties;
};
