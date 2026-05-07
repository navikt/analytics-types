# NAV Analytics Types

Type-definisjoner for analytics-hendelser brukt på tvers av Nav sine digitale tjenester. Pakken eksporterer både den delte eventtaksonomien og hjelpetypene `AnalyticsMetadata` og `AnalyticsEventData<TName>` for apper som trenger ekstra metadata eller lokale custom events.

## Installasjon

```bash
npm install @navikt/analytics-types
```

## Anbefalte bruksmønstre

### 1. Ren taksonomi-event

Bruk taksonomi-eventen direkte når de delte feltene er nok.

```typescript
import { Events, type AnalyticsEventData } from '@navikt/analytics-types';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const analytics = getAnalyticsInstance('mitt-app-navn');

const eventData: AnalyticsEventData<typeof Events.NAVIGERE> = {
  lenketekst: 'Les mer',
  destinasjon: '/side/info',
};

analytics(Events.NAVIGERE, eventData);
```

### 2. Taksonomi-event med metadata og `satisfies`

Når du trenger ekstra metadata, bør du definere taksonomi-delen først med `satisfies`. Da fanger TypeScript skrivefeil i taksonomi-feltene før metadata legges til.

```typescript
import {
  Events,
  type AnalyticsEventData,
  type PropertiesFor,
} from '@navikt/analytics-types';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const analytics = getAnalyticsInstance('mitt-app-navn');

const taxonomyData = {
  tekst: 'Søk',
  harResultater: true,
} satisfies PropertiesFor<typeof Events.SOK>;

const eventData: AnalyticsEventData<typeof Events.SOK> = {
  ...taxonomyData,
  komponent: 'globalt-søk',
  resultatkategori: 'artikler',
};

analytics(Events.SOK, eventData);
```

`AnalyticsEventData<typeof Events.X>` tillater metadata på toppnivå. Derfor kan en skrivefeil i et valgfritt taksonomi-felt se ut som metadata. Bruk `satisfies PropertiesFor<typeof Events.X>` når du vil at TypeScript skal fange slike feil.

### 3. Custom event med lokale konstanter eller wrappere

Bruk lokale literal-konstanter eller en wrapper-funksjon for custom events. Da beholder du gode typer i appen din.

```typescript
import { type AnalyticsEventData } from '@navikt/analytics-types';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const analytics = getAnalyticsInstance('mitt-app-navn');

const CUSTOM_EVENTS = {
  FEEDBACK_APNET: 'feedback åpnet',
} as const;

function logCustomEvent<TName extends string>(
  eventName: TName,
  eventData?: AnalyticsEventData<TName>,
) {
  analytics(eventName, eventData);
}

logCustomEvent(CUSTOM_EVENTS.FEEDBACK_APNET, {
  komponent: 'feedback-widget',
  steg: 2,
  variant: 'beta',
});
```

Hvis eventnavnet bare er en bred `string`, faller `AnalyticsEventData<string>` tilbake til generell metadata. Bruk derfor helst literal-konstanter eller wrappere når du vil bevare best mulig typesikring.

## Metadata og personvern

`AnalyticsMetadata` er typet som `Record<string, unknown>` for kompatibilitet, men metadata skal være JSON-serialiserbar.

Typiske verdier som er OK:

- `string`
- `number`
- `boolean`
- `null`
- arrays
- enkle objekter

Ikke legg dette i metadata:

- fødselsnummer
- navn
- e-post
- telefonnummer
- saksnummer
- aktør-ID
- fritekst fra bruker
- rå `Error`
- stacktrace
- request body
- response body

## Tilgjengelige hendelser

Se [src/events](src/events) for en komplett oversikt over støttede hendelser og definisjoner.

## For bidragsytere

Se [CONTRIBUTING.md](CONTRIBUTING.md) for informasjon om hvordan du:

- legger til nye hendelser
- kjører tester og bygger prosjektet
- publiserer nye versjoner

## Lisens

[MIT](LICENSE)
