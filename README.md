# NAV Analytics Types


Type-definisjoner for analytics-hendelser brukt på tvers av Nav sine digitale tjenester. Logg direkte til Umami, eller via `getAnalyticsInstance` fra `@navikt/nav-dekoratoren-moduler`.

## Installasjon

```bash
npm install @navikt/analytics-types
```

Pakken er offentlig på [npmjs](https://www.npmjs.com/package/@navikt/analytics-types) og krever ingen innlogging. Den publiseres også til Nav sin GitHub Packages-registry for intern bruk.

## Kom i gang

```typescript
import { Events, type NavigereProperties } from '@navikt/analytics-types';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const analytics = getAnalyticsInstance('mitt-app-navn');

const properties: NavigereProperties = {
  lenketekst: 'Les mer',
  destinasjon: '/side/info'
};

analytics(Events.NAVIGERE, properties);
```

## Avansert bruk

### Lag din egen log-funksjon med `TaxonomyEvent`

```typescript
import { Events, type TaxonomyEvent, type EventName } from '@navikt/analytics-types';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const analytics = getAnalyticsInstance('mitt-app-navn');

function logTaxonomyEvent<K extends EventName>(event: TaxonomyEvent<K>) {
  analytics(event.name, event.properties);
}

logTaxonomyEvent({
  name: Events.NAVIGERE,
  properties: {
    lenketekst: 'Gå til innsending',
    destinasjon: '/skjema/innsending'
  }
});
```

### Dersom du ønsker å legge til dine egne properties i tillegg:

```typescript
import {
  Events,
  type TaxonomyEvent,
  isValidEventName
} from '@navikt/analytics-types';

const analytics = getAnalyticsInstance('mitt-app-navn');

type TaxonomyEventWithExtra = TaxonomyEvent & {
  properties?: TaxonomyEvent['properties'] & Record<string, unknown>;
};

function logWithExtra(event: TaxonomyEventWithExtra) {
  analytics(event.name, event.properties);
}

logWithExtra({
  name: Events.SOK,
  properties: {
    søkeord: 'økonomi',
    destinasjon: '/artikler/sok',
    komponent: 'globalt-søk',
    kilde: 'intern'
  }
});
```

## Tilgjengelige hendelser

Se [src/events](src/events) for en komplett oversikt over alle støttede hendelser og definisjoner.

### Maskinlesbar taksonomi (events.json)

Alle hendelser finnes også som en generert JSON-fil for maskinell konsum (dokumentasjon, verktøy, validering):

```
https://github.com/navikt/analytics-types/releases/latest/download/events.json
```

Filen bygges fra kildekoden (TypeScript AST, ikke tekst-parsing) og legges ved hvert GitHub-release. Inneholder per hendelse: navn, beskrivelse, kategori, properties (navn, type, valgfri/påkrevd, beskrivelse). Spesifikk versjon: bytt ut `latest` med taggen (f.eks. `download/v0.0.10/events.json`).

## For bidragsytere

Se [CONTRIBUTING.md](CONTRIBUTING.md) for informasjon om hvordan du:
- Legger til nye hendelser
- Kjører tester og bygger prosjektet
- Publiserer nye versjoner

## Lisens

[MIT](LICENSE)


