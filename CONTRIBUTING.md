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

## Publisering til GitHub Packages

Dette prosjektet bruker en manuell publiseringsflyt til GitHub Packages.

### Forutsetninger

1.  **Autentisering mot GitHub Packages** (Engangsoppsett)
    *   Hvis du ikke allerede har gjort det, må du autentisere deg mot GitHub Packages.
    *   Opprett en Personal Access Token (PAT) på GitHub med `write:packages`, `read:packages`, og `repo` tilganger.
    *   Logg inn på npm med din GitHub-bruker:
        ```bash
        npm login --scope=@navikt --registry=https://npm.pkg.github.com
        ```
        *   **Username:** Ditt GitHub-brukernavn
        *   **Password:** Din Personal Access Token (PAT)
        *   **Email:** Din offentlige e-postadresse
    *   **Merk:** Hvis du allerede har konfigurert din `~/.npmrc` med en auth token for `//npm.pkg.github.com/`, kan du hoppe over dette steget.

### Publiseringsprosess

1.  **Forbered arbeidsområdet**
    *   Sørg for at du er på `main`-branchen og har de siste endringene:
        ```bash
        git checkout main
        git pull origin main
        ```
    *   Sørg for at arbeidskatalogen din er ren (ingen ulagrede endringer).

2.  **Oppdater Changelog**
    *   Oppdater `CHANGELOG.md` med en oppsummering av endringene i denne releasen.
    *   Commit endringene i changelog:
        ```bash
        git add CHANGELOG.md
        git commit -m "docs: Update changelog"
        ```

3.  **Oppdater versjon**
    *   Kjør `npm version`-kommandoen for å oppdatere `package.json`, opprette en git tag, og committe endringen.
    *   Velg passende semantisk versjonering:
        *   **Patch** (Feilrettinger):
            ```bash
            npm version patch
            ```
        *   **Minor** (Nye funksjoner, bakoverkompatibel):
            ```bash
            npm version minor
            ```
        *   **Major** (Breaking changes):
            ```bash
            npm version major
            ```

4.  **Verifiser bygg**
    *   Sørg for at alt bygger og tester passerer før publisering:
        ```bash
        npm run test
        npm run build
        ```
    *   *(Merk: `npm publish` vil også kjøre `prepublishOnly` som utfører disse sjekkene, men det er lurt å verifisere manuelt først)*

5.  **Publiser**
    *   Publiser pakken til GitHub Registry:
        ```bash
        npm publish --registry=https://npm.pkg.github.com/
        ```

6.  **Push endringer**
    *   Push de nye commitsene og tagsene til GitHub:
        ```bash
        git push && git push --tags
        ```
    *   Når taggen pushes, genererer workflowen `.github/workflows/release-events-json.yml` et GitHub Release med `events.json` (maskinlesbar taksonomi) som vedlegg — tilgjengelig på `https://github.com/navikt/analytics-types/releases/latest/download/events.json`. Verifiser at workflowen blir grønn etter push.
