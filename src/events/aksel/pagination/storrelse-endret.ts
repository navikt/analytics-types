import type { BaseProperties } from '../../types.js';
/**
 * Paginering størrelse endret - trigges når bruker oppdaterer antall elementer per side
 */
export const PAGINERING_STORRELSE_ENDRET_EVENT = 'paginering størrelse endret' as const;

export interface PagineringStorrelseEndretProperties extends BaseProperties {
  /** Id eller plassering til pagineringen */
  /** Ny størrelse (antall elementer per side) */
  nyStorrelse?: number;
  /** Tidligere størrelse */
  forrigeStorrelse?: number;
  /** Totalt antall elementer i listen */
  antallElementer?: number;
}

export type PagineringStorrelseEndretEvent = {
  name: typeof PAGINERING_STORRELSE_ENDRET_EVENT;
  properties: PagineringStorrelseEndretProperties;
};
