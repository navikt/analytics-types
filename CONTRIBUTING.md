# Bidra til Analytics Types

## Om taksonomien

Denne taksonomien sikrer konsistent analytics på tvers av NAVs applikasjoner ved å:

- **Standardisere hendelsenavn** - Følger naturlige språkkonvensjoner (f.eks. "skjema åpnet")
- **Type-sikkerhet** - Forhindrer skrivefeil og sikrer korrekte properties
- **Gjenbrukbarhet** - Team kan dele hendelsesdefinisjoner på tvers av tjenester
- **Personvernoverensstemmelse** - Kun godkjente, ikke-sensitive properties

Navngivningen følger Nav sitt [designsystem (Aksel)](https://aksel.nav.no/designsystem) for å spore komponentbruk.

## Utvikling

```bash
# Installer avhengigheter
npm install

# Kjør tester
npm test

# Bygg
npm run build
```

## Legge til nye hendelser

**Før du foreslår en ny hendelse:**
- Vurder: Hvilket problem løser dette?
- Spør: Vil dette hjelpe team å forstå brukeradferd eller måle selvbetjening?
- Sjekk: Finnes det allerede en lignende hendelse?

**Navnekonvensjoner:**
- Bruk naturlig språk: "skjema åpnet" (ikke "form_opened")
- Skal leses godt i en setning: "Skjemaet ble **åpnet** av brukeren"
- Bruk camelCase for properties: `pagePath`, `lenketekst`
- Gjør properties påkrevde hvis de alltid er tilgjengelige, ellers valgfrie (bruk `?:`)

**Slik legger du til en ny hendelse:**

1. Opprett en ny fil i riktig mappe under `src/events/`. For Aksel-komponenter brukes `src/events/aksel/<komponent>/` (f.eks. `src/events/aksel/accordion/`).
  ```bash
  src/events/mitt-komponent/mitt-nye-event.ts
  ```

2. Følg denne strukturen:
   ```typescript
   /**
    * Beskrivelse av når denne hendelsen utløses
    */
   export const MITT_NYE_EVENT = 'mitt nye event' as const;

   export interface MittNyeEventProperties {
     /** Beskrivelse av denne propertyen */
     propertyNavn?: string;
     /** En annen property */
     annenProperty?: number;
   }

   export type MittNyeEventEvent = {
     name: typeof MITT_NYE_EVENT;
     properties?: MittNyeEventProperties;
   };
   ```

3. Legg til i `src/index.ts`:
   ```typescript
   // Legg til export
   export * from './events/mitt-nye-event';
   
   // Legg til i Events-objektet
   export const Events = {
     // ... eksisterende events
     MITT_NYE_EVENT,
   } as const;
   
   // Legg til i TaxonomyEvent union
   export type TaxonomyEvent =
     | // ... eksisterende typer
     | MittNyeEventEvent;
   ```

4. Test bygget:
   ```bash
   npm run build
   ```

5. Send inn en Pull Request med:
   - Klar beskrivelse av bruksområdet
   - Eksempel på bruk
   - Hvilket team/applikasjon som trenger det

## Publisering

Pakken publiseres automatisk til to registre når en versjonstag (`v*`) pushes til GitHub. Workflowen `.github/workflows/publish.yml` har to uavhengige jobber:

| Jobb | Register | Autentisering |
|---|---|---|
| `publish-npmjs` | [npmjs](https://www.npmjs.com/package/@navikt/analytics-types) (offentlig) | Trusted publishing (OIDC), ingen token |
| `publish-github` | GitHub Packages (internt) | `GITHUB_TOKEN` |

I tillegg bygger `.github/workflows/release-events-json.yml` et GitHub Release med `events.json` (maskinlesbar taksonomi) som vedlegg, tilgjengelig på `https://github.com/navikt/analytics-types/releases/latest/download/events.json`.

Du trenger ingen npm-innlogging eller token for å lage en release. Ikke publiser manuelt.

### Lage en ny release

1.  **Forbered arbeidsområdet**
    *   Sørg for at du er på `main` med de siste endringene, og at arbeidskatalogen er ren:
        ```bash
        git checkout main
        git pull origin main
        ```

2.  **Oppdater Changelog**
    *   Oppdater `CHANGELOG.md` med en oppsummering av endringene i releasen og commit:
        ```bash
        git add CHANGELOG.md
        git commit -m "docs: Update changelog"
        ```

3.  **Oppdater versjon**
    *   `npm version` oppdaterer `package.json`, committer og oppretter en git-tag. Velg semantisk versjonering:
        ```bash
        npm version patch   # Feilrettinger
        npm version minor   # Nye funksjoner, bakoverkompatibelt
        npm version major   # Breaking changes
        ```

4.  **Push commit og tag**
    ```bash
    git push && git push --tags
    ```
    *   Push én release om gangen. Tagger som pushes samtidig starter hver sin kjøring, og eldre versjoner feiler fordi nyere versjon allerede er publisert.

5.  **Verifiser**
    *   Åpne Actions-fanen og sjekk at begge jobbene i «Publish package» og «Release events.json» er grønne.
    *   Sjekk at versjonen finnes på [npmjs](https://www.npmjs.com/package/@navikt/analytics-types) og har proveniens-merke.

`prepublishOnly` kjører `npm test` og `npm run build` i hver publiseringsjobb, så tester må passere for at noe publiseres.

### Vedlikehold av publiseringsoppsettet

*   **Trusted publisher på npmjs.com** (pakken → Settings → Trusted Publisher) peker på `navikt/analytics-types` og workflowen `publish.yml`. Gi ikke workflowen nytt navn, flytt ikke repoet og fjern ikke `id-token: write` uten å oppdatere trusted publisher. Eksisterende koblinger kan ikke redigeres, bare slettes og opprettes på nytt.
*   Koblingen må tillate `npm publish`. Ellers avvises publiseringen.
*   `repository.url` i `package.json` må samsvare nøyaktig med GitHub-repoet.
*   Pakkens maintainers på npmjs administrerer innstillingene. Sørg for at flere enn én person har tilgang.

### Feilsøking

*   **`You cannot publish over the previously published versions`**: versjonen finnes allerede. Lag en ny versjon med `npm version`.
*   **`ENEEDAUTH` i npmjs-jobben**: sjekk at filnavnet i trusted publisher er `publish.yml`, og at `npm publish` er tillatt.
*   **403 i GitHub-jobben**: gi repoet Write-tilgang til pakken under Package settings → Manage Actions access.
*   **Lokal publisering gikk til feil register**: en `@navikt:registry=...` i `~/.npmrc` overstyrer `--registry`. Bruk bare lokal publisering i nødsfall, og overstyr scopet eksplisitt: `--@navikt:registry=https://registry.npmjs.org/`.
