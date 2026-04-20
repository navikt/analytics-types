import type { BaseProperties } from '../../types.js';
/**
 * Paginering side valgt - trigges når bruker navigerer til en ny side
 */
export const PAGINERING_SIDE_VALGT_EVENT = 'paginering side valgt' as const;

export interface PagineringSideValgtProperties extends BaseProperties {
  /** Id eller plassering til pagineringen */
  /** Siden som ble valgt (1-index) */
  side: number;
  /** Forrige side før endringen */
  forrigeSide?: number;
  /** Totalt antall sider */
  antallSider?: number;
  /** Navigasjonstype (neste, forrige, første, siste, spesifikk) */
  navigasjonsType?: 'neste' | 'forrige' | 'forste' | 'siste' | 'direkte';
  /** Om det finnes neste side */
  harNeste?: boolean;
  /** Om det finnes forrige side */
  harForrige?: boolean;
}

export type PagineringSideValgtEvent = {
  name: typeof PAGINERING_SIDE_VALGT_EVENT;
  properties: PagineringSideValgtProperties;
};
