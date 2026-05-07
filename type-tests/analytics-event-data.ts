import {
  Events,
  type AnalyticsEventData,
  type PropertiesFor,
} from '../src/index.js';

const knownTaxonomyEvent: AnalyticsEventData<typeof Events.NAVIGERE> = {
  lenketekst: 'Gå til oversikt',
  destinasjon: '/oversikt',
};

const knownTaxonomyEventWithWrongValue: AnalyticsEventData<typeof Events.NAVIGERE> =
  {
    // @ts-expect-error - kjent property må ha riktig type
    lenketekst: 123,
    destinasjon: '/oversikt',
  };

// @ts-expect-error - påkrevd taxonomy-property mangler
const knownTaxonomyEventMissingRequired: AnalyticsEventData<
  typeof Events.NAVIGERE
> = {
  lenketekst: 'Gå til oversikt',
};

const knownTaxonomyEventWithMetadata: AnalyticsEventData<
  typeof Events.NAVIGERE
> = {
  lenketekst: 'Gå til oversikt',
  destinasjon: '/oversikt',
  komponent: 'menylenke',
  eksperiment: {
    variant: 'B',
  },
};

// Forventet tradeoff: `AnalyticsEventData` bruker `PropertiesFor<> & Record<string, unknown>`,
// så en typo i et valgfritt taxonomy-felt kan se ut som metadata på toppnivå.
// Bruk `satisfies PropertiesFor<typeof Events.X>` for taxonomy-delen når du vil fange slike typoer.
const typoTradeoffAtTopLevel: AnalyticsEventData<
  typeof Events.TEKSTFELT_UTFYLT
> = {
  feltNavm: 'Søkefelt',
};

const taxonomyPart = {
  feltNavn: 'Søkefelt',
  harVerdi: true,
} satisfies PropertiesFor<typeof Events.TEKSTFELT_UTFYLT>;

const taxonomyEventWithMetadataAfterSatisfies: AnalyticsEventData<
  typeof Events.TEKSTFELT_UTFYLT
> = {
  ...taxonomyPart,
  kilde: 'globalt-søk',
};

// @ts-expect-error - typo i taxonomy-delen fanges før metadata merges inn
const taxonomyPartWithTypo = { feltNavm: 'Søkefelt' } satisfies PropertiesFor<
  typeof Events.TEKSTFELT_UTFYLT
>;

const customLiteralEvent: AnalyticsEventData<'min custom event'> = {
  komponent: 'feedback-widget',
  steg: 2,
  flags: ['beta', 'intern'],
  nested: {
    aktiv: true,
  },
};

type KnownOrCustomEventName = typeof Events.NAVIGERE | 'min custom event';

const knownOrCustomTaxonomyPayload: AnalyticsEventData<KnownOrCustomEventName> =
  {
    lenketekst: 'Gå til oversikt',
    destinasjon: '/oversikt',
  };

const knownOrCustomCustomPayload: AnalyticsEventData<KnownOrCustomEventName> = {
  feature: 'beta',
};

const broadStringPayload: AnalyticsEventData<string> = {
  arbitraryMetadata: 'bred string faller tilbake til metadata',
};

void knownTaxonomyEvent;
void knownTaxonomyEventWithWrongValue;
void knownTaxonomyEventMissingRequired;
void knownTaxonomyEventWithMetadata;
void typoTradeoffAtTopLevel;
void taxonomyEventWithMetadataAfterSatisfies;
void taxonomyPartWithTypo;
void customLiteralEvent;
void knownOrCustomTaxonomyPayload;
void knownOrCustomCustomPayload;
void broadStringPayload;
