import type { BaseProperties } from '../types.js';
/**
 * Chat åpnet - trigges når bruker åpner chat
 */
export const CHAT_APNET_EVENT = 'chat-åpnet' as const;

export interface ChatApnetProperties extends BaseProperties {}

export type ChatApnetEvent = {
  name: typeof CHAT_APNET_EVENT;
  properties?: ChatApnetProperties;
};
