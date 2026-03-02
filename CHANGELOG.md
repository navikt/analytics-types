# Endringslogg

Hold denne filen oppdatert for hver utgivelse. Samle endringer per versjon og beskriv dem kort.

## 0.0.7

- **Nytt**: Lagt til nye navigeringshendelser:
  - `KOPIER_LENKE` ("kopier-lenke")
  - `CHAT_APNET` ("chat-åpnet")
  - `RING_OSS` ("ring-oss")
  - `VIDEO_START` ("video start")
  - `VIDEO_STOPP` ("video stopp")
  - Oppdatert `BaseProperties` med nye valgfrie felt:
    - `målgruppe` - Målgruppe (privatperson|arbeidsgiver|samarbeidspartner)
    - `seksjon` - Seksjon/område hvor hendelsen skjedde
    - `innholdstype` - Innholdstype (artikkel, melding, etc.)
    - `opprinnelse` - Opprinnelse/kilde til hendelsen

## 0.0.6

- **Bugfix**: `TaxonomyEvent` er nå en generic type (`TaxonomyEvent<Name>`). Dette løser problemer med autocomplete i IDE-er (IntelliJ/VS Code) når man lager wrapper-funksjoner.
- **Nytt**: La til `AmplitudeEvents` alias for `EventPropertiesMap`.
- **Dokumentasjon**: Oppdatert README med eksempel på generic logge-funksjon.

## 0.0.5

- **Refaktorering**: `BaseProperties` er nå tilgjengelig på alle eventer.
- **Forbedret DX**: Bedre autocomplete-støtte via `AmplitudeEvents` map i `index.ts`.
- **Opprydding**: Fjernet redundante ID-felt som overlappet med `komponentId`:
  - `kortId` (ExpansionCard)
  - `lesMerId` (ReadMore)
  - `gruppeId` (Radio)
- **Justering**: Sikret at spesifikke ID-er som `skjemaId`, `valgId`, og `stegId` er bevart der de representerer noe annet enn selve komponenten.

## 0.0.4

- Gjorde de fleste egenskaper valgfrie for å forenkle bruk.

## 0.0.3

- Nytt: Lagt til støtte for nye Aksel-komponenter:
  - `GlobalAlert` (vist, lukket)
  - `LocalAlert` (vist, lukket)
  - `InlineMessage` (vist)
  - `InfoCard` (vist)
  - `Process` (vist, steg klikket)

## 0.0.2

- Første versjon av typobibliotek for analytics-typer!
