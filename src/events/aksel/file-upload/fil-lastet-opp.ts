import type { BaseProperties } from '../../types.js';
/**
 * Fil lastet opp - trigges når bruker laster opp en fil
 */
export const FIL_LASTET_OPP_EVENT = 'fil lastet opp' as const;

export interface FilLastetOppProperties extends BaseProperties {
  /** Navnet på filen */
  filNavn?: string;
  /** Filstørrelse i KB */
  filStorrelse?: number;
  /** MIME-type eller format */
  filType?: string;
}

export type FilLastetOppEvent = {
  name: typeof FIL_LASTET_OPP_EVENT;
  properties: FilLastetOppProperties;
};
