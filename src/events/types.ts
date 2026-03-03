/**
 * Målgruppe for innhold eller hendelse
 */
export type Målgruppe = 'privatperson' | 'arbeidsgiver' | 'samarbeidspartner';

export interface BaseProperties {
  /** Kontekst for hvor komponenten er plassert */
  kontekst?: string;
  /** Unik identifikator for komponenten */
  komponentId?: string;
  /** Målgruppe (privatperson/arbeidsgiver/samarbeidspartner) */
  målgruppe?: Målgruppe;
  /** Seksjon/område hvor hendelsen skjedde */
  seksjon?: string;
  /** Innholdstype (artikkel, melding, etc.) */
  innholdstype?: string;
  /** Opprinnelse/kilde til hendelsen */
  opprinnelse?: string;
}
