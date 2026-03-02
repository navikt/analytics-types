import type { BaseProperties } from '../types';
/**
 * Ring oss - trigges når bruker initierer et telefonsamtale
 */
export const RING_OSS_EVENT = 'ring-oss' as const;

export interface RingOssProperties extends BaseProperties {
  /** Lenkegruppe/kategori */
  lenkegruppe?: string;
}

export type RingOssEvent = {
  name: typeof RING_OSS_EVENT;
  properties?: RingOssProperties;
};
