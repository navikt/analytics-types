import type { BaseProperties } from '../../types.js';
/**
 * Process vist-hendelse - trigges når en prosess vises
 */
export const PROCESS_VIST_EVENT = 'process vist' as const;

export interface ProcessVistProperties extends BaseProperties {
  /** Antall steg i prosessen */
  antallSteg?: number;
  /** Om prosessen er trunkert (start, end, both) */
  isTruncated?: 'start' | 'end' | 'both';
}

export type ProcessVistEvent = {
  name: typeof PROCESS_VIST_EVENT;
  properties: ProcessVistProperties;
};
