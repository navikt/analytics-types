/**
 * NAV Analytics Types
 *
 * Typesikre definisjoner for analysehendelser som brukes på tvers av NAV.
 * Kan logges til Umami direkte, eller via `getAnalyticsInstance` fra @navikt/nav-dekoratoren-moduler.
 *
 * @example
 * ```typescript
 * import { Events, type NavigereProperties } from '@navikt/analytics-types';
 * import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';
 *
 * const analytics = getAnalyticsInstance();
 *
 * const properties: NavigereProperties = {
 *   lenketekst: 'Les mer',
 *   destinasjon: '/side/info'
 * };
 *
 * analytics.logEvent(Events.NAVIGERE, properties);
 * ```
 */

// Eksporterer alle event-typer og properties
export * from './events/types';
export * from './events/aksel/accordion/apnet';
export * from './events/aksel/accordion/lukket';
export * from './events/aksel/actionmenu/apnet';
export * from './events/aksel/actionmenu/lukket';
export * from './events/aksel/actionmenu/valg-valgt';
export * from './events/aksel/actionmenu/undermeny-apnet';
export * from './events/aksel/actionmenu/undermeny-lukket';
export * from './events/aksel/actionmenu/types';
export * from './events/aksel/alert/lukket';
export * from './events/aksel/alert/vist';
export * from './events/aksel/globalalert/vist';
export * from './events/aksel/globalalert/lukket';
export * from './events/aksel/localalert/vist';
export * from './events/aksel/localalert/lukket';
export * from './events/aksel/inlinemessage/vist';
export * from './events/aksel/infocard/vist';
export * from './events/aksel/process/vist';
export * from './events/aksel/process/steg-klikket';
export * from './events/aksel/checkbox/endret';
export * from './events/besok/besok';
export * from './events/aksel/chips/fjernet';
export * from './events/aksel/chips/toggled';
export * from './events/aksel/combobox/option-toggled';
export * from './events/aksel/datepicker/dato-valgt';
export * from './events/aksel/errorsummary/vist';
export * from './events/aksel/errorsummary/feilmelding-klikket';
export * from './events/aksel/tabs/fane-byttet';
export * from './events/aksel/togglegroup/valgt';
export * from './events/aksel/file-upload/fil-fjernet';
export * from './events/aksel/file-upload/fil-lastet-opp';
export * from './events/filtervalg/filtervalg';
export * from './events/aksel/formprogress/steg-vist';
export * from './events/aksel/formprogress/steg-klikket';
export * from './events/aksel/formsummary/vist';
export * from './events/aksel/formsummary/felt-redigert';
export * from './events/aksel/guidepanel/vist';
export * from './events/aksel/helptext/vist';
export * from './events/aksel/helptext/lukket';
export * from './events/aksel/button/knapp-klikket';
export * from './events/aksel/link/klikket';
export * from './events/aksel/link-card/klikket';
export * from './events/last-ned/last-ned';
export * from './events/aksel/pagination/side-valgt';
export * from './events/aksel/pagination/storrelse-endret';
export * from './events/aksel/popover/apnet';
export * from './events/aksel/popover/lukket';
export * from './events/aksel/read-more/apnet';
export * from './events/aksel/read-more/lukket';
export * from './events/aksel/modal/apnet';
export * from './events/aksel/modal/lukket';
export * from './events/aksel/monthpicker/maned-valgt';
export * from './events/navigere/navigere';
export * from './events/navigere/kopier-lenke';
export * from './events/navigere/chat-apnet';
export * from './events/navigere/ring-oss';
export * from './events/navigere/video-start';
export * from './events/navigere/video-stopp';
export * from './events/navigere/vis-flere-treff';
export * from './events/navigere/sok';
export * from './events/navigere/resultat-klikk';
export * from './events/aksel/select/nedtrekksliste-valg-endret';
export * from './events/aksel/radio/valg-endret';
export * from './events/aksel/table/sortering-endret';
export * from './events/aksel/table/rad-valgt';
export * from './events/aksel/table/filter-anvendt';
export * from './events/aksel/table/rad-utvidet';
export * from './events/aksel/stepper/steg-endret';
export * from './events/skjema/apnet';
export * from './events/skjema/fullfort';
export * from './events/skjema/innsending-feilet';
export * from './events/skjema/sporsmal-besvart';
export * from './events/skjema/startet';
export * from './events/skjema/steg-fullfort';
export * from './events/skjema/validering-feilet';
export * from './events/aksel/search/sok';
export * from './events/aksel/search/sokeforslag-valgt';
export * from './events/aksel/switch/tilstand-endret';
export * from './events/aksel/copy-button/tekst-kopiert';
export * from './events/aksel/tag/fjernet';
export * from './events/aksel/textarea/utfylt';
export * from './events/aksel/textfield/tekstfelt-utfylt';
export * from './events/aksel/tooltip/vist';
export * from './events/aksel/tooltip/lukket';
export * from './events/aksel/expansion-card/utvidbart-kort-apnet';
export * from './events/aksel/expansion-card/utvidbart-kort-lukket';

// Importerer hendelsesnavn for samlet objekt
import { ACCORDION_APNET_EVENT } from './events/aksel/accordion/apnet';
import { ACCORDION_LUKKET_EVENT } from './events/aksel/accordion/lukket';
import { ACTIONMENU_APNET_EVENT } from './events/aksel/actionmenu/apnet';
import { ACTIONMENU_LUKKET_EVENT } from './events/aksel/actionmenu/lukket';
import { ACTIONMENU_VALG_VALGT_EVENT } from './events/aksel/actionmenu/valg-valgt';
import { ACTIONMENU_UNDERMENY_APNET_EVENT } from './events/aksel/actionmenu/undermeny-apnet';
import { ACTIONMENU_UNDERMENY_LUKKET_EVENT } from './events/aksel/actionmenu/undermeny-lukket';
import { ALERT_LUKKET_EVENT } from './events/aksel/alert/lukket';
import { ALERT_VIST_EVENT } from './events/aksel/alert/vist';
import { GLOBALALERT_VIST_EVENT } from './events/aksel/globalalert/vist';
import { GLOBALALERT_LUKKET_EVENT } from './events/aksel/globalalert/lukket';
import { LOCALALERT_VIST_EVENT } from './events/aksel/localalert/vist';
import { LOCALALERT_LUKKET_EVENT } from './events/aksel/localalert/lukket';
import { INLINEMESSAGE_VIST_EVENT } from './events/aksel/inlinemessage/vist';
import { INFOCARD_VIST_EVENT } from './events/aksel/infocard/vist';
import { PROCESS_VIST_EVENT } from './events/aksel/process/vist';
import { PROCESS_STEG_KLIKKET_EVENT } from './events/aksel/process/steg-klikket';
import { AVKRYSNINGSBOKS_ENDRET_EVENT } from './events/aksel/checkbox/endret';
import { BESOK_EVENT } from './events/besok/besok';
import { CHIP_FJERNET_EVENT } from './events/aksel/chips/fjernet';
import { CHIP_TOGGLED_EVENT } from './events/aksel/chips/toggled';
import { COMBOBOX_OPTION_TOGGLED_EVENT } from './events/aksel/combobox/option-toggled';
import { DATO_VALGT_EVENT } from './events/aksel/datepicker/dato-valgt';
import { ERROR_SUMMARY_VIST_EVENT } from './events/aksel/errorsummary/vist';
import { ERROR_SUMMARY_FEILMELDING_KLIKKET_EVENT } from './events/aksel/errorsummary/feilmelding-klikket';
import { FANE_BYTTET_EVENT } from './events/aksel/tabs/fane-byttet';
import { TOGGLEGROUP_VALGT_EVENT } from './events/aksel/togglegroup/valgt';
import { FIL_FJERNET_EVENT } from './events/aksel/file-upload/fil-fjernet';
import { FIL_LASTET_OPP_EVENT } from './events/aksel/file-upload/fil-lastet-opp';
import { FILTERVALG_EVENT } from './events/filtervalg/filtervalg';
import { FORMPROGRESS_STEG_VIST_EVENT } from './events/aksel/formprogress/steg-vist';
import { FORMPROGRESS_STEG_KLIKKET_EVENT } from './events/aksel/formprogress/steg-klikket';
import { FORMSUMMARY_VIST_EVENT } from './events/aksel/formsummary/vist';
import { FORMSUMMARY_FELT_REDIGERT_EVENT } from './events/aksel/formsummary/felt-redigert';
import { GUIDEPANEL_VIST_EVENT } from './events/aksel/guidepanel/vist';
import { HELPTEXT_LUKKET_EVENT } from './events/aksel/helptext/lukket';
import { HELPTEXT_VIST_EVENT } from './events/aksel/helptext/vist';
import { KNAPP_KLIKKET_EVENT } from './events/aksel/button/knapp-klikket';
import { LINK_KLIKKET_EVENT } from './events/aksel/link/klikket';
import { LINKCARD_KLIKKET_EVENT } from './events/aksel/link-card/klikket';
import { LAST_NED_EVENT } from './events/last-ned/last-ned';
import { PAGINERING_SIDE_VALGT_EVENT } from './events/aksel/pagination/side-valgt';
import { PAGINERING_STORRELSE_ENDRET_EVENT } from './events/aksel/pagination/storrelse-endret';
import { POPOVER_APNET_EVENT } from './events/aksel/popover/apnet';
import { POPOVER_LUKKET_EVENT } from './events/aksel/popover/lukket';
import { LES_MER_APNET_EVENT } from './events/aksel/read-more/apnet';
import { LES_MER_LUKKET_EVENT } from './events/aksel/read-more/lukket';
import { MODAL_APNET_EVENT } from './events/aksel/modal/apnet';
import { MODAL_LUKKET_EVENT } from './events/aksel/modal/lukket';
import { MONTHPICKER_MANED_VALGT_EVENT } from './events/aksel/monthpicker/maned-valgt';
import { NAVIGERE_EVENT } from './events/navigere/navigere';
import { KOPIER_LENKE_EVENT } from './events/navigere/kopier-lenke';
import { CHAT_APNET_EVENT } from './events/navigere/chat-apnet';
import { RING_OSS_EVENT } from './events/navigere/ring-oss';
import { VIDEO_START_EVENT } from './events/navigere/video-start';
import { VIDEO_STOPP_EVENT } from './events/navigere/video-stopp';
import { VIS_FLERE_TREFF_EVENT } from './events/navigere/vis-flere-treff';
import { SOK_NAVNO_EVENT } from './events/navigere/sok';
import { RESULTAT_KLIKK_EVENT } from './events/navigere/resultat-klikk';
import { NEDTREKKSLISTE_VALG_ENDRET_EVENT } from './events/aksel/select/nedtrekksliste-valg-endret';
import { RADIO_VALG_ENDRET_EVENT } from './events/aksel/radio/valg-endret';
import { TABELL_RAD_VALGT_EVENT } from './events/aksel/table/rad-valgt';
import { TABELL_SORTERING_ENDRET_EVENT } from './events/aksel/table/sortering-endret';
import { TABELL_FILTER_ANVENDT_EVENT } from './events/aksel/table/filter-anvendt';
import { TABELL_RAD_UTVIDET_EVENT } from './events/aksel/table/rad-utvidet';
import { STEPPER_STEG_ENDRET_EVENT } from './events/aksel/stepper/steg-endret';
import { SKJEMA_APNET_EVENT } from './events/skjema/apnet';
import { SKJEMA_FULLFORT_EVENT } from './events/skjema/fullfort';
import { SKJEMA_INNSENDING_FEILET_EVENT } from './events/skjema/innsending-feilet';
import { SKJEMA_SPORSMAL_BESVART_EVENT } from './events/skjema/sporsmal-besvart';
import { SKJEMA_STARTET_EVENT } from './events/skjema/startet';
import { SKJEMA_STEG_FULLFORT_EVENT } from './events/skjema/steg-fullfort';
import { SKJEMA_VALIDERING_FEILET_EVENT } from './events/skjema/validering-feilet';
import { SOK_EVENT } from './events/aksel/search/sok';
import { SOKEFORSLAG_VALGT_EVENT } from './events/aksel/search/sokeforslag-valgt';
import { SWITCH_TILSTAND_ENDRET_EVENT } from './events/aksel/switch/tilstand-endret';
import { TAG_FJERNET_EVENT } from './events/aksel/tag/fjernet';
import { TEKST_KOPIERT_EVENT } from './events/aksel/copy-button/tekst-kopiert';
import { TEXTAREA_UTFYLT_EVENT } from './events/aksel/textarea/utfylt';
import { TEKSTFELT_UTFYLT_EVENT } from './events/aksel/textfield/tekstfelt-utfylt';
import { TOOLTIP_LUKKET_EVENT } from './events/aksel/tooltip/lukket';
import { TOOLTIP_VIST_EVENT } from './events/aksel/tooltip/vist';
import { UTVIDBART_KORT_APNET_EVENT } from './events/aksel/expansion-card/utvidbart-kort-apnet';
import { UTVIDBART_KORT_LUKKET_EVENT } from './events/aksel/expansion-card/utvidbart-kort-lukket';

// Importerer event-typer og properties
import type { AccordionApnetEvent } from './events/aksel/accordion/apnet';
import type { AccordionApnetProperties } from './events/aksel/accordion/apnet';
import type { AccordionLukketEvent } from './events/aksel/accordion/lukket';
import type { AccordionLukketProperties } from './events/aksel/accordion/lukket';
import type { ActionMenuApnetEvent } from './events/aksel/actionmenu/apnet';
import type { ActionMenuApnetProperties } from './events/aksel/actionmenu/apnet';
import type { ActionMenuLukketEvent } from './events/aksel/actionmenu/lukket';
import type { ActionMenuLukketProperties } from './events/aksel/actionmenu/lukket';
import type { ActionMenuValgValgtEvent } from './events/aksel/actionmenu/valg-valgt';
import type { ActionMenuValgValgtProperties } from './events/aksel/actionmenu/valg-valgt';
import type { ActionMenuUndermenyApnetEvent } from './events/aksel/actionmenu/undermeny-apnet';
import type { ActionMenuUndermenyApnetProperties } from './events/aksel/actionmenu/undermeny-apnet';
import type { ActionMenuUndermenyLukketEvent } from './events/aksel/actionmenu/undermeny-lukket';
import type { ActionMenuUndermenyLukketProperties } from './events/aksel/actionmenu/undermeny-lukket';
import type { AlertLukketEvent } from './events/aksel/alert/lukket';
import type { AlertLukketProperties } from './events/aksel/alert/lukket';
import type { AlertVistEvent } from './events/aksel/alert/vist';
import type { AlertVistProperties } from './events/aksel/alert/vist';
import type { GlobalAlertVistEvent } from './events/aksel/globalalert/vist';
import type { GlobalAlertVistProperties } from './events/aksel/globalalert/vist';
import type { GlobalAlertLukketEvent } from './events/aksel/globalalert/lukket';
import type { GlobalAlertLukketProperties } from './events/aksel/globalalert/lukket';
import type { LocalAlertVistEvent } from './events/aksel/localalert/vist';
import type { LocalAlertVistProperties } from './events/aksel/localalert/vist';
import type { LocalAlertLukketEvent } from './events/aksel/localalert/lukket';
import type { LocalAlertLukketProperties } from './events/aksel/localalert/lukket';
import type { InlineMessageVistEvent } from './events/aksel/inlinemessage/vist';
import type { InlineMessageVistProperties } from './events/aksel/inlinemessage/vist';
import type { InfoCardVistEvent } from './events/aksel/infocard/vist';
import type { InfoCardVistProperties } from './events/aksel/infocard/vist';
import type { ProcessVistEvent } from './events/aksel/process/vist';
import type { ProcessVistProperties } from './events/aksel/process/vist';
import type { ProcessStegKlikketEvent } from './events/aksel/process/steg-klikket';
import type { ProcessStegKlikketProperties } from './events/aksel/process/steg-klikket';
import type { AvkrysningsboksEndretEvent } from './events/aksel/checkbox/endret';
import type { AvkrysningsboksEndretProperties } from './events/aksel/checkbox/endret';
import type { BesokEvent } from './events/besok/besok';
import type { BesokProperties } from './events/besok/besok';
import type { ChipFjernetEvent } from './events/aksel/chips/fjernet';
import type { ChipFjernetProperties } from './events/aksel/chips/fjernet';
import type { ChipToggledEvent } from './events/aksel/chips/toggled';
import type { ChipToggledProperties } from './events/aksel/chips/toggled';
import type { ComboboxOptionToggledEvent } from './events/aksel/combobox/option-toggled';
import type { ComboboxOptionToggledProperties } from './events/aksel/combobox/option-toggled';
import type { DatoValgtEvent } from './events/aksel/datepicker/dato-valgt';
import type { DatoValgtProperties } from './events/aksel/datepicker/dato-valgt';
import type { ErrorSummaryVistEvent } from './events/aksel/errorsummary/vist';
import type { ErrorSummaryVistProperties } from './events/aksel/errorsummary/vist';
import type { ErrorSummaryFeilmeldingKlikketEvent } from './events/aksel/errorsummary/feilmelding-klikket';
import type { ErrorSummaryFeilmeldingKlikketProperties } from './events/aksel/errorsummary/feilmelding-klikket';
import type { FaneByttetEvent } from './events/aksel/tabs/fane-byttet';
import type { FaneByttetProperties } from './events/aksel/tabs/fane-byttet';
import type { ToggleGroupValgtEvent } from './events/aksel/togglegroup/valgt';
import type { ToggleGroupValgtProperties } from './events/aksel/togglegroup/valgt';
import type { FilFjernetEvent } from './events/aksel/file-upload/fil-fjernet';
import type { FilFjernetProperties } from './events/aksel/file-upload/fil-fjernet';
import type { FilLastetOppEvent } from './events/aksel/file-upload/fil-lastet-opp';
import type { FilLastetOppProperties } from './events/aksel/file-upload/fil-lastet-opp';
import type { FiltervalgEvent } from './events/filtervalg/filtervalg';
import type { FiltervalgProperties } from './events/filtervalg/filtervalg';
import type { FormProgressStegVistEvent } from './events/aksel/formprogress/steg-vist';
import type { FormProgressStegVistProperties } from './events/aksel/formprogress/steg-vist';
import type { FormProgressStegKlikketEvent } from './events/aksel/formprogress/steg-klikket';
import type { FormProgressStegKlikketProperties } from './events/aksel/formprogress/steg-klikket';
import type { FormSummaryVistEvent } from './events/aksel/formsummary/vist';
import type { FormSummaryVistProperties } from './events/aksel/formsummary/vist';
import type { FormSummaryFeltRedigertEvent } from './events/aksel/formsummary/felt-redigert';
import type { FormSummaryFeltRedigertProperties } from './events/aksel/formsummary/felt-redigert';
import type { GuidepanelVistEvent } from './events/aksel/guidepanel/vist';
import type { GuidepanelVistProperties } from './events/aksel/guidepanel/vist';
import type { HelpTextLukketEvent } from './events/aksel/helptext/lukket';
import type { HelpTextLukketProperties } from './events/aksel/helptext/lukket';
import type { HelpTextVistEvent } from './events/aksel/helptext/vist';
import type { HelpTextVistProperties } from './events/aksel/helptext/vist';
import type { KnappKlikketEvent } from './events/aksel/button/knapp-klikket';
import type { KnappKlikketProperties } from './events/aksel/button/knapp-klikket';
import type { LinkKlikketEvent } from './events/aksel/link/klikket';
import type { LinkKlikketProperties } from './events/aksel/link/klikket';
import type { LinkCardKlikketEvent } from './events/aksel/link-card/klikket';
import type { LinkCardKlikketProperties } from './events/aksel/link-card/klikket';
import type { LastNedEvent } from './events/last-ned/last-ned';
import type { LastNedProperties } from './events/last-ned/last-ned';
import type { PagineringSideValgtEvent } from './events/aksel/pagination/side-valgt';
import type { PagineringSideValgtProperties } from './events/aksel/pagination/side-valgt';
import type { PagineringStorrelseEndretEvent } from './events/aksel/pagination/storrelse-endret';
import type { PagineringStorrelseEndretProperties } from './events/aksel/pagination/storrelse-endret';
import type { PopoverApnetEvent } from './events/aksel/popover/apnet';
import type { PopoverApnetProperties } from './events/aksel/popover/apnet';
import type { PopoverLukketEvent } from './events/aksel/popover/lukket';
import type { PopoverLukketProperties } from './events/aksel/popover/lukket';
import type { LesMerApnetEvent } from './events/aksel/read-more/apnet';
import type { LesMerApnetProperties } from './events/aksel/read-more/apnet';
import type { LesMerLukketEvent } from './events/aksel/read-more/lukket';
import type { LesMerLukketProperties } from './events/aksel/read-more/lukket';
import type { ModalApnetEvent } from './events/aksel/modal/apnet';
import type { ModalApnetProperties } from './events/aksel/modal/apnet';
import type { ModalLukketEvent } from './events/aksel/modal/lukket';
import type { ModalLukketProperties } from './events/aksel/modal/lukket';
import type { MonthPickerManedValgtEvent } from './events/aksel/monthpicker/maned-valgt';
import type { MonthPickerManedValgtProperties } from './events/aksel/monthpicker/maned-valgt';
import type { NavigereEvent } from './events/navigere/navigere';
import type { NavigereProperties } from './events/navigere/navigere';
import type { KopierLenkeEvent } from './events/navigere/kopier-lenke';
import type { KopierLenkeProperties } from './events/navigere/kopier-lenke';
import type { ChatApnetEvent } from './events/navigere/chat-apnet';
import type { ChatApnetProperties } from './events/navigere/chat-apnet';
import type { RingOssEvent } from './events/navigere/ring-oss';
import type { RingOssProperties } from './events/navigere/ring-oss';
import type { VideoStartEvent } from './events/navigere/video-start';
import type { VideoStartProperties } from './events/navigere/video-start';
import type { VideoStoppEvent } from './events/navigere/video-stopp';
import type { VideoStoppProperties } from './events/navigere/video-stopp';
import type { VisFlereTreffEvent } from './events/navigere/vis-flere-treff';
import type { VisFlereTreffProperties } from './events/navigere/vis-flere-treff';
import type { SokNavnoEvent } from './events/navigere/sok';
import type { SokNavnoProperties } from './events/navigere/sok';
import type { ResultatKlikkEvent } from './events/navigere/resultat-klikk';
import type { ResultatKlikkProperties } from './events/navigere/resultat-klikk';
import type { NedtrekkslisteValgEndretEvent } from './events/aksel/select/nedtrekksliste-valg-endret';
import type { NedtrekkslisteValgEndretProperties } from './events/aksel/select/nedtrekksliste-valg-endret';
import type { RadioValgEndretEvent } from './events/aksel/radio/valg-endret';
import type { RadioValgEndretProperties } from './events/aksel/radio/valg-endret';
import type { TabellRadValgtEvent } from './events/aksel/table/rad-valgt';
import type { TabellRadValgtProperties } from './events/aksel/table/rad-valgt';
import type { TabellSorteringEndretEvent } from './events/aksel/table/sortering-endret';
import type { TabellSorteringEndretProperties } from './events/aksel/table/sortering-endret';
import type { TabellFilterAnvendtEvent } from './events/aksel/table/filter-anvendt';
import type { TabellFilterAnvendtProperties } from './events/aksel/table/filter-anvendt';
import type { TabellRadUtvidetEvent } from './events/aksel/table/rad-utvidet';
import type { TabellRadUtvidetProperties } from './events/aksel/table/rad-utvidet';
import type { StepperStegEndretEvent } from './events/aksel/stepper/steg-endret';
import type { StepperStegEndretProperties } from './events/aksel/stepper/steg-endret';
import type { SkjemaApnetEvent } from './events/skjema/apnet';
import type { SkjemaApnetProperties } from './events/skjema/apnet';
import type { SkjemaFullfortEvent } from './events/skjema/fullfort';
import type { SkjemaFullfortProperties } from './events/skjema/fullfort';
import type { SkjemaInnsendingFeiletEvent } from './events/skjema/innsending-feilet';
import type { SkjemaInnsendingFeiletProperties } from './events/skjema/innsending-feilet';
import type { SkjemaSporsmalBesvartEvent } from './events/skjema/sporsmal-besvart';
import type { SkjemaSporsmalBesvartProperties } from './events/skjema/sporsmal-besvart';
import type { SkjemaStartetEvent } from './events/skjema/startet';
import type { SkjemaStartetProperties } from './events/skjema/startet';
import type { SkjemaStegFullfortEvent } from './events/skjema/steg-fullfort';
import type { SkjemaStegFullfortProperties } from './events/skjema/steg-fullfort';
import type { SkjemaValideringFeiletEvent } from './events/skjema/validering-feilet';
import type { SkjemaValideringFeiletProperties } from './events/skjema/validering-feilet';
import type { SokEvent } from './events/aksel/search/sok';
import type { SokProperties } from './events/aksel/search/sok';
import type { SokeforslagValgtEvent } from './events/aksel/search/sokeforslag-valgt';
import type { SokeforslagValgtProperties } from './events/aksel/search/sokeforslag-valgt';
import type { SwitchTilstandEndretEvent } from './events/aksel/switch/tilstand-endret';
import type { SwitchTilstandEndretProperties } from './events/aksel/switch/tilstand-endret';
import type { TagFjernetEvent } from './events/aksel/tag/fjernet';
import type { TagFjernetProperties } from './events/aksel/tag/fjernet';
import type { TekstKopiertEvent } from './events/aksel/copy-button/tekst-kopiert';
import type { TekstKopiertProperties } from './events/aksel/copy-button/tekst-kopiert';
import type { TextareaUtfyltEvent } from './events/aksel/textarea/utfylt';
import type { TextareaUtfyltProperties } from './events/aksel/textarea/utfylt';
import type { TekstfeltUtfyltEvent } from './events/aksel/textfield/tekstfelt-utfylt';
import type { TekstfeltUtfyltProperties } from './events/aksel/textfield/tekstfelt-utfylt';
import type { TooltipLukketEvent } from './events/aksel/tooltip/lukket';
import type { TooltipLukketProperties } from './events/aksel/tooltip/lukket';
import type { TooltipVistEvent } from './events/aksel/tooltip/vist';
import type { TooltipVistProperties } from './events/aksel/tooltip/vist';
import type { UtvidbartKortApnetEvent } from './events/aksel/expansion-card/utvidbart-kort-apnet';
import type { UtvidbartKortApnetProperties } from './events/aksel/expansion-card/utvidbart-kort-apnet';
import type { UtvidbartKortLukketEvent } from './events/aksel/expansion-card/utvidbart-kort-lukket';
import type { UtvidbartKortLukketProperties } from './events/aksel/expansion-card/utvidbart-kort-lukket';

export const Events = {
  /** Accordion åpnet */
  ACCORDION_APNET: ACCORDION_APNET_EVENT,
  /** Accordion lukket */
  ACCORDION_LUKKET: ACCORDION_LUKKET_EVENT,
  /** ActionMenu åpnet */
  ACTIONMENU_APNET: ACTIONMENU_APNET_EVENT,
  /** ActionMenu lukket */
  ACTIONMENU_LUKKET: ACTIONMENU_LUKKET_EVENT,
  /** ActionMenu valg valgt */
  ACTIONMENU_VALG_VALGT: ACTIONMENU_VALG_VALGT_EVENT,
  /** ActionMenu undermeny åpnet */
  ACTIONMENU_UNDERMENY_APNET: ACTIONMENU_UNDERMENY_APNET_EVENT,
  /** ActionMenu undermeny lukket */
  ACTIONMENU_UNDERMENY_LUKKET: ACTIONMENU_UNDERMENY_LUKKET_EVENT,
  /** Alert lukket */
  ALERT_LUKKET: ALERT_LUKKET_EVENT,
  /** Varsel vist */
  ALERT_VIST: ALERT_VIST_EVENT,
  /** Avkrysningsboks endret */
  AVKRYSNINGSBOKS_ENDRET: AVKRYSNINGSBOKS_ENDRET_EVENT,
  /** Sidebesøk */
  BESOK: BESOK_EVENT,
  /** Chip fjernet */
  CHIP_FJERNET: CHIP_FJERNET_EVENT,
  /** Chip toggled */
  CHIP_TOGGLED: CHIP_TOGGLED_EVENT,
  /** Combobox option toggled */
  COMBOBOX_OPTION_TOGGLED: COMBOBOX_OPTION_TOGGLED_EVENT,
  /** Dato valgt */
  DATO_VALGT: DATO_VALGT_EVENT,
  /** ErrorSummary vist */
  ERROR_SUMMARY_VIST: ERROR_SUMMARY_VIST_EVENT,
  /** ErrorSummary feilmelding klikket */
  ERROR_SUMMARY_FEILMELDING_KLIKKET: ERROR_SUMMARY_FEILMELDING_KLIKKET_EVENT,
  /** Fane byttet */
  FANE_BYTTET: FANE_BYTTET_EVENT,
  /** ToggleGroup valgt */
  TOGGLEGROUP_VALGT: TOGGLEGROUP_VALGT_EVENT,
  /** Fil fjernet */
  FIL_FJERNET: FIL_FJERNET_EVENT,
  /** Fil lastet opp */
  FIL_LASTET_OPP: FIL_LASTET_OPP_EVENT,
  /** Filtervalg */
  FILTERVALG: FILTERVALG_EVENT,
  /** FormProgress steg vist */
  FORMPROGRESS_STEG_VIST: FORMPROGRESS_STEG_VIST_EVENT,
  /** FormProgress steg klikket */
  FORMPROGRESS_STEG_KLIKKET: FORMPROGRESS_STEG_KLIKKET_EVENT,
  /** FormSummary vist */
  FORMSUMMARY_VIST: FORMSUMMARY_VIST_EVENT,
  /** FormSummary felt redigert */
  FORMSUMMARY_FELT_REDIGERT: FORMSUMMARY_FELT_REDIGERT_EVENT,
  /** Guidepanel vist */
  GUIDEPANEL_VIST: GUIDEPANEL_VIST_EVENT,
  /** HelpText vist */
  HELPTEXT_VIST: HELPTEXT_VIST_EVENT,
  /** HelpText lukket */
  HELPTEXT_LUKKET: HELPTEXT_LUKKET_EVENT,
  /** Knapp klikket */
  KNAPP_KLIKKET: KNAPP_KLIKKET_EVENT,
  /** Link klikket */
  LINK_KLIKKET: LINK_KLIKKET_EVENT,
  /** LinkCard klikket */
  LINKCARD_KLIKKET: LINKCARD_KLIKKET_EVENT,
  /** Nedlasting */
  LAST_NED: LAST_NED_EVENT,
  /** Popover åpnet */
  POPOVER_APNET: POPOVER_APNET_EVENT,
  /** Popover lukket */
  POPOVER_LUKKET: POPOVER_LUKKET_EVENT,
  /** Paginering side valgt */
  PAGINERING_SIDE_VALGT: PAGINERING_SIDE_VALGT_EVENT,
  /** Paginering størrelse endret */
  PAGINERING_STORRELSE_ENDRET: PAGINERING_STORRELSE_ENDRET_EVENT,
  /** Les mer åpnet */
  LES_MER_APNET: LES_MER_APNET_EVENT,
  /** Les mer lukket */
  LES_MER_LUKKET: LES_MER_LUKKET_EVENT,
  /** Modal åpnet */
  MODAL_APNET: MODAL_APNET_EVENT,
  /** Modal lukket */
  MODAL_LUKKET: MODAL_LUKKET_EVENT,
  /** MonthPicker måned valgt */
  MONTHPICKER_MANED_VALGT: MONTHPICKER_MANED_VALGT_EVENT,
  /** Navigasjon / lenke-klikk */
  NAVIGERE: NAVIGERE_EVENT,
  /** Kopier lenke */
  KOPIER_LENKE: KOPIER_LENKE_EVENT,
  /** Chat åpnet */
  CHAT_APNET: CHAT_APNET_EVENT,
  /** Ring oss */
  RING_OSS: RING_OSS_EVENT,
  /** Video start */
  VIDEO_START: VIDEO_START_EVENT,
  /** Video stopp */
  VIDEO_STOPP: VIDEO_STOPP_EVENT,
  /** Vis flere treff */
  VIS_FLERE_TREFF: VIS_FLERE_TREFF_EVENT,
  /** Søk */
  SOK_NAVNO: SOK_NAVNO_EVENT,
  /** Resultat-klikk */
  RESULTAT_KLIKK: RESULTAT_KLIKK_EVENT,
  /** Nedtrekksliste verdi endret */
  NEDTREKKSLISTE_VALG_ENDRET: NEDTREKKSLISTE_VALG_ENDRET_EVENT,
  /** Radio valg endret */
  RADIO_VALG_ENDRET: RADIO_VALG_ENDRET_EVENT,
  /** Tabell sortering endret */
  TABELL_SORTERING_ENDRET: TABELL_SORTERING_ENDRET_EVENT,
  /** Tabell rad valgt */
  TABELL_RAD_VALGT: TABELL_RAD_VALGT_EVENT,
  /** Tabell filter anvendt */
  TABELL_FILTER_ANVENDT: TABELL_FILTER_ANVENDT_EVENT,
  /** Tabell rad utvidet */
  TABELL_RAD_UTVIDET: TABELL_RAD_UTVIDET_EVENT,
  /** Skjema åpnet */
  SKJEMA_APNET: SKJEMA_APNET_EVENT,
  /** Skjema fullført */
  SKJEMA_FULLFORT: SKJEMA_FULLFORT_EVENT,
  /** Skjema-innsending feilet */
  SKJEMA_INNSENDING_FEILET: SKJEMA_INNSENDING_FEILET_EVENT,
  /** Skjema-spørsmål besvart */
  SKJEMA_SPORSMAL_BESVART: SKJEMA_SPORSMAL_BESVART_EVENT,
  /** Skjema startet */
  SKJEMA_STARTET: SKJEMA_STARTET_EVENT,
  /** Skjema-steg fullført */
  SKJEMA_STEG_FULLFORT: SKJEMA_STEG_FULLFORT_EVENT,
  /** Stepper steg endret */
  STEPPER_STEG_ENDRET: STEPPER_STEG_ENDRET_EVENT,
  /** Skjema-validering feilet */
  SKJEMA_VALIDERING_FEILET: SKJEMA_VALIDERING_FEILET_EVENT,
  /** Søk gjennomført */
  SOK: SOK_EVENT,
  /** Søkeforslag valgt */
  SOKEFORSLAG_VALGT: SOKEFORSLAG_VALGT_EVENT,
  /** Switch tilstand endret */
  SWITCH_TILSTAND_ENDRET: SWITCH_TILSTAND_ENDRET_EVENT,
  /** Tag fjernet */
  TAG_FJERNET: TAG_FJERNET_EVENT,
  /** Tekst kopiert */
  TEKST_KOPIERT: TEKST_KOPIERT_EVENT,
  /** Textarea utfylt */
  TEXTAREA_UTFYLT: TEXTAREA_UTFYLT_EVENT,
  /** Tekstfelt utfylt */
  TEKSTFELT_UTFYLT: TEKSTFELT_UTFYLT_EVENT,
  /** Tooltip vist */
  TOOLTIP_VIST: TOOLTIP_VIST_EVENT,
  /** Tooltip lukket */
  TOOLTIP_LUKKET: TOOLTIP_LUKKET_EVENT,
  /** Utvidbart kort åpnet */
  UTVIDBART_KORT_APNET: UTVIDBART_KORT_APNET_EVENT,
  /** Utvidbart kort lukket */
  UTVIDBART_KORT_LUKKET: UTVIDBART_KORT_LUKKET_EVENT,
} as const;
/**
 * Union-type for alle gyldige hendelsesnavn.
 */
export type EventName = typeof Events[keyof typeof Events];

/**
 * Mapping fra hendelsesnavn til properties-interface.
 */
export type EventPropertiesMap = {
  [ACCORDION_APNET_EVENT]: AccordionApnetProperties;
  [ACCORDION_LUKKET_EVENT]: AccordionLukketProperties;
  [ACTIONMENU_APNET_EVENT]: ActionMenuApnetProperties;
  [ACTIONMENU_LUKKET_EVENT]: ActionMenuLukketProperties;
  [ACTIONMENU_UNDERMENY_APNET_EVENT]: ActionMenuUndermenyApnetProperties;
  [ACTIONMENU_UNDERMENY_LUKKET_EVENT]: ActionMenuUndermenyLukketProperties;
  [ACTIONMENU_VALG_VALGT_EVENT]: ActionMenuValgValgtProperties;
  [ALERT_LUKKET_EVENT]: AlertLukketProperties;
  [ALERT_VIST_EVENT]: AlertVistProperties;
  [KNAPP_KLIKKET_EVENT]: KnappKlikketProperties;
  [AVKRYSNINGSBOKS_ENDRET_EVENT]: AvkrysningsboksEndretProperties;
  [CHIP_FJERNET_EVENT]: ChipFjernetProperties;
  [CHIP_TOGGLED_EVENT]: ChipToggledProperties;
  [COMBOBOX_OPTION_TOGGLED_EVENT]: ComboboxOptionToggledProperties;
  [TEKST_KOPIERT_EVENT]: TekstKopiertProperties;
  [DATO_VALGT_EVENT]: DatoValgtProperties;
  [ERROR_SUMMARY_FEILMELDING_KLIKKET_EVENT]: ErrorSummaryFeilmeldingKlikketProperties;
  [ERROR_SUMMARY_VIST_EVENT]: ErrorSummaryVistProperties;
  [UTVIDBART_KORT_APNET_EVENT]: UtvidbartKortApnetProperties;
  [UTVIDBART_KORT_LUKKET_EVENT]: UtvidbartKortLukketProperties;
  [FIL_FJERNET_EVENT]: FilFjernetProperties;
  [FIL_LASTET_OPP_EVENT]: FilLastetOppProperties;
  [FORMPROGRESS_STEG_KLIKKET_EVENT]: FormProgressStegKlikketProperties;
  [FORMPROGRESS_STEG_VIST_EVENT]: FormProgressStegVistProperties;
  [FORMSUMMARY_FELT_REDIGERT_EVENT]: FormSummaryFeltRedigertProperties;
  [FORMSUMMARY_VIST_EVENT]: FormSummaryVistProperties;
  [GLOBALALERT_LUKKET_EVENT]: GlobalAlertLukketProperties;
  [GLOBALALERT_VIST_EVENT]: GlobalAlertVistProperties;
  [GUIDEPANEL_VIST_EVENT]: GuidepanelVistProperties;
  [HELPTEXT_LUKKET_EVENT]: HelpTextLukketProperties;
  [HELPTEXT_VIST_EVENT]: HelpTextVistProperties;
  [INFOCARD_VIST_EVENT]: InfoCardVistProperties;
  [INLINEMESSAGE_VIST_EVENT]: InlineMessageVistProperties;
  [LINKCARD_KLIKKET_EVENT]: LinkCardKlikketProperties;
  [LINK_KLIKKET_EVENT]: LinkKlikketProperties;
  [LOCALALERT_LUKKET_EVENT]: LocalAlertLukketProperties;
  [LOCALALERT_VIST_EVENT]: LocalAlertVistProperties;
  [MODAL_APNET_EVENT]: ModalApnetProperties;
  [MODAL_LUKKET_EVENT]: ModalLukketProperties;
  [MONTHPICKER_MANED_VALGT_EVENT]: MonthPickerManedValgtProperties;
  [PAGINERING_SIDE_VALGT_EVENT]: PagineringSideValgtProperties;
  [PAGINERING_STORRELSE_ENDRET_EVENT]: PagineringStorrelseEndretProperties;
  [POPOVER_APNET_EVENT]: PopoverApnetProperties;
  [POPOVER_LUKKET_EVENT]: PopoverLukketProperties;
  [PROCESS_STEG_KLIKKET_EVENT]: ProcessStegKlikketProperties;
  [PROCESS_VIST_EVENT]: ProcessVistProperties;
  [RADIO_VALG_ENDRET_EVENT]: RadioValgEndretProperties;
  [LES_MER_APNET_EVENT]: LesMerApnetProperties;
  [LES_MER_LUKKET_EVENT]: LesMerLukketProperties;
  [SOK_EVENT]: SokProperties;
  [SOKEFORSLAG_VALGT_EVENT]: SokeforslagValgtProperties;
  [NEDTREKKSLISTE_VALG_ENDRET_EVENT]: NedtrekkslisteValgEndretProperties;
  [STEPPER_STEG_ENDRET_EVENT]: StepperStegEndretProperties;
  [SWITCH_TILSTAND_ENDRET_EVENT]: SwitchTilstandEndretProperties;
  [TABELL_FILTER_ANVENDT_EVENT]: TabellFilterAnvendtProperties;
  [TABELL_RAD_UTVIDET_EVENT]: TabellRadUtvidetProperties;
  [TABELL_RAD_VALGT_EVENT]: TabellRadValgtProperties;
  [TABELL_SORTERING_ENDRET_EVENT]: TabellSorteringEndretProperties;
  [FANE_BYTTET_EVENT]: FaneByttetProperties;
  [TAG_FJERNET_EVENT]: TagFjernetProperties;
  [TEXTAREA_UTFYLT_EVENT]: TextareaUtfyltProperties;
  [TEKSTFELT_UTFYLT_EVENT]: TekstfeltUtfyltProperties;
  [TOGGLEGROUP_VALGT_EVENT]: ToggleGroupValgtProperties;
  [TOOLTIP_LUKKET_EVENT]: TooltipLukketProperties;
  [TOOLTIP_VIST_EVENT]: TooltipVistProperties;
  [BESOK_EVENT]: BesokProperties;
  [FILTERVALG_EVENT]: FiltervalgProperties;
  [LAST_NED_EVENT]: LastNedProperties;
  [NAVIGERE_EVENT]: NavigereProperties;
  [KOPIER_LENKE_EVENT]: KopierLenkeProperties;
  [CHAT_APNET_EVENT]: ChatApnetProperties;
  [RING_OSS_EVENT]: RingOssProperties;
  [VIDEO_START_EVENT]: VideoStartProperties;
  [VIDEO_STOPP_EVENT]: VideoStoppProperties;
  [VIS_FLERE_TREFF_EVENT]: VisFlereTreffProperties;
  [SOK_NAVNO_EVENT]: SokNavnoProperties;
  [RESULTAT_KLIKK_EVENT]: ResultatKlikkProperties;
  [SKJEMA_APNET_EVENT]: SkjemaApnetProperties;
  [SKJEMA_FULLFORT_EVENT]: SkjemaFullfortProperties;
  [SKJEMA_INNSENDING_FEILET_EVENT]: SkjemaInnsendingFeiletProperties;
  [SKJEMA_SPORSMAL_BESVART_EVENT]: SkjemaSporsmalBesvartProperties;
  [SKJEMA_STARTET_EVENT]: SkjemaStartetProperties;
  [SKJEMA_STEG_FULLFORT_EVENT]: SkjemaStegFullfortProperties;
  [SKJEMA_VALIDERING_FEILET_EVENT]: SkjemaValideringFeiletProperties;
};

/**
 * Union-type for alle hendelser (navn + properties).
 * Nyttig når man lager egne, typesikre wrapper-funksjoner.
 *
 * Tips: For best autocomplete i IDE, bruk denne typen som en generic:
 * `function log<K extends EventName>(event: TaxonomyEvent<K>)`
 */
export type TaxonomyEvent<Name extends EventName = EventName> =
  Name extends unknown
    ? { name: Name; properties: EventPropertiesMap[Name] }
    : never;

/**
 * Alias for EventPropertiesMap, for bakoverkompatibilitet eller preferanse.
 */
export type AmplitudeEvents = EventPropertiesMap;

/**
 * Hjelpetype for å hente property-typene basert på hendelsesnavn.
 */
export type PropertiesFor<T extends EventName> = EventPropertiesMap[T];

/**
 * Type-guard som bekrefter at et navn er en gyldig hendelse i taksonomien.
 */
export function isValidEventName(name: string): name is EventName {
  return Object.values(Events).includes(name as EventName);
}
