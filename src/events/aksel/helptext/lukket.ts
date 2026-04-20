import type { BaseProperties } from '../../types.js';
/**
 * HelpText lukket - trigges når hjelpeteksten skjules
 */
export const HELPTEXT_LUKKET_EVENT = 'helptext lukket' as const;

export interface HelpTextLukketProperties extends BaseProperties {
  /** Id til helptext-komponenten */
}

export type HelpTextLukketEvent = {
  name: typeof HELPTEXT_LUKKET_EVENT;
  properties: HelpTextLukketProperties;
};
