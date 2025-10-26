const fahndungenHTML = `
<div id="content-fahndungen">
    <div class="space-y-6"> 
        
        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe Flugdaten</div> 
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
                <div> 
                    <label for="Datum_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Datum <span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[Datum]</span></label> 
                    <div class="flex"> 
                        <input type="text" id="Datum_fahndung" class="form-element form-input" placeholder="TT.MM.JJJJ"> 
                        <button id="todayBtn_fahndung" class="btn btn-secondary ml-2 px-3 flex-shrink-0" title="Heutiges Datum einfügen">Heute</button> 
                    </div> 
                </div> 
                <div> 
                    <label for="Uhrzeit_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Uhrzeit <span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[Uhrzeit]</span></label> 
                    <input type="text" id="Uhrzeit_fahndung" class="form-element form-input" placeholder="HH:MM"> 
                </div> 
                <div> 
                    <label for="Flughafen_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Zielflughafen <span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[Flughafen]</span></label> 
                    <input type="text" id="Flughafen_fahndung" class="form-element form-input"> 
                </div> 
                <div> 
                    <label for="Flugnummer_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Flugnummer <span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[Flugnummer]</span></label> 
                    <input type="text" id="Flugnummer_fahndung" class="form-element form-input"> 
                </div> 
            </div> 
        </div> 
        
        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe Personendaten</div> 
            <div class="p-6 space-y-4"> 
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                   <div class="form-row-grid">
<label class="font-medium text-gray-700">Geschlecht <span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[Geschlecht_...]</span></label>
<div class="segmented-control">
    <input type="radio" name="geschlecht_fahndung" id="geschlecht_maennlich_fahndung" value="Geschlecht_maennlich">
    <label for="geschlecht_maennlich_fahndung">männlich</label>
    <input type="radio" name="geschlecht_fahndung" id="geschlecht_weiblich_fahndung" value="Geschlecht_weiblich">
    <label for="geschlecht_weiblich_fahndung">weiblich</label>
</div>
</div>
                    <div> 
                        <label for="Staatsangehoerigkeit_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Staatsangehörigkeit</label> 
                        <select id="Staatsangehoerigkeit_fahndung" class="form-element form-select"></select> 
                    </div> 
                </div> 
            </div> 
        </div> 
        
        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe Reisedokumente</div> 
            <div class="p-6 space-y-4"> 
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> 
                    <div> 
                        <label for="ReisepassArt_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Reisepass <span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[ReisepassArt_...]</span></label> 
                        <select id="ReisepassArt_fahndung" class="form-element form-select"> 
                            <option value="Reisepass">Reisepass</option> 
                            <option value="Reiseausweis1951">Reiseausweis (Abkommen 1951)</option> 
                            <option value="Reiseausweis1954">Reiseausweis (Abkommen 1954)</option> 
                            <option value="Spezialpass">Spezialpass</option> 
                            <option value="VorlaeufigerReisepass">Vorläufiger Reisepass</option> 
                            <option value="Personalausweis">Personalausweis</option> 
                            <option value="IDKarte">ID-Karte</option> 
                            <option value="Ohne">Ohne (noch nicht verfügbar)</option></select> 
                    </div> 
                    <div> 
                        <label for="ReisepassGueltigkeit_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Gültigkeit <span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[ReisepassGueltigkeit_...]</span></label> 
                        <select id="ReisepassGueltigkeit_fahndung" class="form-element form-select"><option value="Gueltig">Gültig</option><option value="Abgelaufen">zeitlich ungültig</option><option value="NichtAnerkannt">Nicht anerkannt</option></select> 
                    </div> 
                    <div> 
                        <label for="ReisepassHerkunft_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Herkunftsland Reisepass</label> 
                        <select id="ReisepassHerkunft_fahndung" class="form-element form-select"></select> 
                    </div> 
                </div> 
                <div class="pt-4 border-t mt-4"> 
                    <div class="flex flex-wrap gap-x-6 gap-y-2"> 
                        <label class="toggle-switch"> 
                            <input type="checkbox" id="checkMitAufenthaltstitelFahndung" value="MitAufenthaltstitelFahndung"> 
                            <span class="switch-track"><span class="switch-knob"></span></span> 
                            <span class="switch-label">Aufenthaltstitel vorhanden</span> 
                        </label> 
                    </div> 
                </div> 
                <div id="aufenthaltHerkunftContainer_fahndung" class="hidden pt-4 border-t mt-4"> 
                    <label for="AufenthaltHerkunft_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Herkunft <span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[AufenthaltHerkunft]</span></label> 
                    <select id="AufenthaltHerkunft_fahndung" class="form-element form-select"></select> 
                </div> 
            </div> 
        </div> 

        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe INPOL</div> 
            <div class="p-6 space-y-4"> 
                <div> 
                    <label class="block text-sm font-medium text-gray-700 mb-2">Art der Fahndung</label> 
                    <div class="radio-button-group"> 
                        <label><input type="radio" name="inpol_art_fahndung" id="inpol_personenfahndung" value="Personenfahndung" class="radio-button-input"><span class="radio-button-label">Personenfahndung</span></label> 
                        <label><input type="radio" name="inpol_art_fahndung" id="inpol_personenfahndung_pmk" value="Personenfahndung_PMK_TE" class="radio-button-input"><span class="radio-button-label">Personenfahndung mit PMK/TE Bezug</span></label> 
                        <label><input type="radio" name="inpol_art_fahndung" id="inpol_sachfahndung" value="Sachfahndung" class="radio-button-input"><span class="radio-button-label">Sachfahndung</span></label> 
			<label><input type="radio" name="inpol_art_fahndung" id="inpol_fahndungsausschreibung" value="Fahndungsausschreibung" class="radio-button-input"><span class="radio-button-label">Fahndungsausschreibung</span></label>                     
			</div> 
                    <div id="personenfahndung_details" class="hidden pl-6 pt-4 mt-2 border-t border-l border-gray-200"> 
                        <label class="block text-sm font-medium text-gray-700 mb-2">Art der Personenfahndung</label> 
                        <div class="space-y-2"> 
                            <label class="flex items-center"><input type="radio" name="inpol_personenfahndung_art" id="inpol_aufenthaltsermittlung" value="Aufenthaltsermittlung" class="form-element form-radio"><span class="ml-2 text-sm">Aufenthaltsermittlung</span><span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[Aufenthaltsermittlung]</span></label> 
                            <label class="flex items-center"><input type="radio" name="inpol_personenfahndung_art" id="inpol_kontrolle" value="Kontrolle" class="form-element form-radio"><span class="ml-2 text-sm">Kontrolle</span><span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[Kontrolle]</span></label> 
                            <label class="flex items-center"><input type="radio" name="inpol_personenfahndung_art" id="inpol_beobachtung" value="Beobachtung" class="form-element form-radio"><span class="ml-2 text-sm">Beobachtung</span><span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[Beobachtung]</span></label> 
                            <label class="flex items-center"><input type="radio" name="inpol_personenfahndung_art" id="inpol_einziehung_fuehrerschein" value="EinziehungFuehrerschein" class="form-element form-radio"><span class="ml-2 text-sm">Einziehung Führerschein</span><span class="debug-placeholder-fahndung hidden text-xs text-gray-500 ml-2 font-mono">[EinziehungFuehrerschein]</span></label> 
                        </div> 
                    </div> 
                    <div id="sachfahndung_details" class="hidden pl-6 pt-4 mt-2 border-t border-l border-gray-200 space-y-4"> 
                        <div> 
                            <div class="form-row-grid"> 
                                <label class="font-medium text-gray-700">Art des Dokuments</label> 
                                <div class="segmented-control"> 
                                    <input type="radio" name="dokumentenart_fahndung" id="ReisepassFahndung" value="ReisepassFahndung"> 
                                    <label for="ReisepassFahndung">Reisepass</label> 
                                    <input type="radio" name="dokumentenart_fahndung" id="AufenthaltstitelFahndung" value="AufenthaltstitelFahndung"> 
                                    <label for="AufenthaltstitelFahndung">Aufenthaltstitel</label> 
                                    <input type="radio" name="dokumentenart_fahndung" id="BPAFahndung" value="BPAFahndung"> 
                                    <label for="BPAFahndung">Personalausweis</label> 
                                    <input type="radio" name="dokumentenart_fahndung" id="IDKarteFahndung" value="IDKarteFahndung"> 
                                    <label for="IDKarteFahndung">ID-Karte</label> 
                                </div> 
                            </div> 
                            <div class="form-row-grid pt-4 border-t mt-4"> 
                                <label class="font-medium text-gray-700">Zweck der Ausschreibung</label> 
                                <div class="toggle-switch-container"> 
                                    <label class="toggle-switch"> 
                                        <input type="checkbox" name="zweck_ausschreibung" id="ZweckEigentumssicherung" value="ZweckDerAusschreibungEigentumssicherung"> 
                                        <span class="switch-track"><span class="switch-knob"></span></span> 
                                        <span class="switch-label">Eigentumssicherung</span> 
                                    </label> 
                                    <label class="toggle-switch"> 
                                        <input type="checkbox" name="zweck_ausschreibung" id="ZweckSicherstellung" value="ZweckDerAusschreibungSicherstellung"> 
                                        <span class="switch-track"><span class="switch-knob"></span></span> 
                                        <span class="switch-label">Sicherstellung als Beweismittel</span> 
                                    </label> 
                                </div> 
                            </div> 
                            <div class="form-row-grid pt-4 border-t mt-4"> 
                                <label class="font-medium text-gray-700">Verbleib des Dokuments</label> 
                                <div class="segmented-control"> 
                                    <input type="radio" name="inpol_dokument_verbleib" id="radioDokumentBelassen" value="DokumentBelassen"> 
                                    <label for="radioDokumentBelassen">Dokument belassen</label> 
                                    <input type="radio" name="inpol_dokument_verbleib" id="radioDokumentSichergestellt" value="DokumentSichergestellt"> 
                                    <label for="radioDokumentSichergestellt">Sichergestellt</label> 
                                </div> 
                            </div> 
                            <div class="form-row-grid pt-4 border-t mt-4"> 
                                <label class="font-medium text-gray-700">Wiedererlangt durch</label> 
                                <div class="segmented-control"> 
                                    <input type="radio" name="inpol_wiedererlangt_durch" id="wiedergefunden" value="wiedergefunden"> 
                                    <label for="wiedergefunden">wiedergefunden</label> 
                                    <input type="radio" name="inpol_wiedererlangt_durch" id="durchDritteAufgefunden" value="durchDritteAufgefunden"> 
                                    <label for="durchDritteAufgefunden">durch Dritte aufgefunden</label> 
                                    <input type="radio" name="inpol_wiedererlangt_durch" id="nieVerloren" value="nieVerloren"> 
                                    <label for="nieVerloren">nie verloren</label> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
                <div id="behoerdeAktenzeichenContainer_fahndung"> 
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t"> 
                        <div> 
                            <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center"> 
                                <span>Ausschreibende Behörde (inkl. der/die/das)</span> 
                                <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Bitte mit Artikel eingeben, z.B. 'die Staatsanwaltschaft Duisburg' oder 'das Polizeipräsidium Düsseldorf'.</div></div> 
                            </label> 
                            <input type="text" id="AusschreibendeBehoerde_fahndung" class="form-element form-input"> 
                        </div> 
                        <div> 
                            <label for="Aktenzeichen_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Aktenzeichen</label> 
                            <input type="text" id="Aktenzeichen_fahndung" class="form-element form-input"> 
                        </div> 
                    </div> 
                </div> 
                <div id="pmkHinweisContainer_fahndung" class="hidden pt-4 border-t text-sm text-red-700 bg-red-50 p-3 rounded-md"> 
                    Bitte die zusätzlichen Informationen gem. Vermerk ausfüllen (z.B. gab es mitreisende Personen, auffälliges Gepäck oder Kleidung, Reiseroute und Reisegründe, usw...) KEINE HINWEISE AUF AUSSCHREIBUNGEN ODER POLIZEILICHE MAßNAHMEN! 
                </div> 
                <div class="pt-4 border-t"> 
                    <label for="ZusaetzlicheInfosVermerk_fahndung" class="block text-sm font-medium text-gray-700 mb-1">Zusätzliche Informationen gem. Vermerk</label> 
                    <textarea id="ZusaetzlicheInfosVermerk_fahndung" class="form-element form-textarea" rows="3"></textarea> 
                </div> 
            </div> 
        </div>
 <div id="fahndungsausschreibung_details" class="hidden space-y-6 pt-4 border-t mt-4"> 
            <div class="bpol-card"> 
                <div class="bpol-card-header p-4">Gruppe Aufenthaltstitel & Visa (nur für FA)</div> 
                <div class="p-6 space-y-4"> 
                    <!-- Hier sollte die Logik für Aufenthaltstitel & Visa kopiert werden, falls benötigt -->
                    <p class="text-sm text-gray-600">Zurzeit nicht implementiert. Die Daten zur Fahndungsausschreibung werden hauptsächlich über Aktenzeichen und Behörde erhoben.</p>
                </div> 
            </div> 
  
            <div class="bpol-card"> 
                <div class="bpol-card-header p-4 flex items-center justify-between"> 
                    <span>Gruppe Reisedaten (nur für FA)</span> 
                    <!-- Hier sollte die Logik für Reisedaten kopiert werden, falls benötigt -->
                    <p class="text-sm text-gray-600">Zurzeit nicht implementiert.</p>
                </div> 
            </div>  
	</div>

        <div id="platzhalterAnalyseContainer_fahndung" class="bpol-card hidden"> 
            <div class="bpol-card-header p-4">Gruppe Platzhalter-Analyse</div> 
            <div class="p-6 space-y-6"> 
                <div> 
                    <label for="fahndungPlaceholdersAll" class="block text-sm font-medium text-gray-700 mb-2">Alle verfügbaren Platzhalter</label> 
                    <textarea id="fahndungPlaceholdersAll" readonly class="form-element form-textarea h-48 bg-gray-100"></textarea> 
                    <div class="flex justify-end mt-2"><button id="showAllFahndungPlaceholdersBtn" class="btn btn-secondary px-4 py-2">Alle Platzhalter anzeigen</button></div> 
                </div> 
                <div> 
                    <label for="fahndungPlaceholdersActive" class="block text-sm font-medium text-gray-700 mb-2">Aktuell ausgewählte Platzhalter & Werte</label> 
                    <textarea id="fahndungPlaceholdersActive" readonly class="form-element form-textarea h-48 bg-gray-100"></textarea> 
                    <div class="flex justify-end mt-2"><button id="showActiveFahndungPlaceholdersBtn" class="btn btn-secondary px-4 py-2">Aktive Platzhalter anzeigen</button></div> 
                </div> 
            </div> 
        </div> 

        <div class="flex justify-end items-center gap-4 pt-4"> 
            <button id="resetFahndungFormBtn" class="btn btn-danger text-lg px-8 py-3"> 
                <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><use xlink:href="#icon-trash"></use></svg> 
                <span>Formular leeren</span> 
            </button> 
            <button id="generateFahndungOutputBtn" class="btn btn-primary text-lg px-8 py-3"> 
                <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><use xlink:href="#icon-generate"></use></svg> 
                <span>Sachverhalt generieren</span> 
            </button> 
        </div> 
    </div> 
</div> 
`;

const FahndungenModul = {
    coreApp: null, // Referenz zur Haupt-App
    dom: {},       // Lokaler DOM-Cache für diesen Tab
    state: {
        validationErrors: [] // Speichert fehlende Felder für die Fehlermeldung
    },
    config: {
        countries: ["afghanisch","ägyptisch","albanisch","algerisch","amerikanisch", /* ... Ihre lange Länderliste ... */].sort((a, b) => a.localeCompare(b)),
        schengenCountries: ["belgisch","dänisch", /* ... Ihre Schengen-Länderliste ... */].sort((a, b) => a.localeCompare(b)),
        specialDropdowns: ['ReisepassArt','ReisepassGueltigkeit','Einreise','EinreiseAus','AufenthaltstitelGueltig','AufenthaltstitelSchengen','AufenthaltstitelUngueltigErklaert','VisumCGueltig','VisumCEinreisen','VisumDGueltig','Waffenart','Auffindeort', 'Auffindeort_waffg'], // Muss mit Strafanzeigen synchronisiert sein
    },

    init(coreAppInstance) {
        this.coreApp = coreAppInstance;
        this.cacheDom();
        this.bindEvents();

        // Initialisiere Selects (Dropdowns)
        this.coreApp.utils.populateSelect(this.dom.Staatsangehoerigkeit_fahndung, this.config.countries);
        this.coreApp.utils.populateSelect(this.dom.ReisepassHerkunft_fahndung, this.config.countries);
        this.coreApp.utils.populateSelect(this.dom.AufenthaltHerkunft_fahndung, this.config.schengenCountries, true);
    },

    // Zeige/Verstecke Elemente basierend auf Dev-Modus
    toggleDevMode(isDev) {
        // Dev-Platzhalter umschalten (muss auf den lokalen Container achten)
        const debugSpans = document.getElementById('content-fahndungen')?.querySelectorAll('.debug-placeholder-fahndung');
        debugSpans?.forEach(span => span.classList.toggle('hidden', !isDev));
        this.dom.platzhalterAnalyseContainer_fahndung?.classList.toggle('hidden', !isDev);
    },

    cacheDom() {
        // Alle IDs aus fahndungenHTML mit Suffix _fahndung
        const ids = [
            'Datum_fahndung', 'todayBtn_fahndung', 'Uhrzeit_fahndung', 'Flughafen_fahndung', 'Flugnummer_fahndung',
            'Staatsangehoerigkeit_fahndung', 'ReisepassArt_fahndung', 'ReisepassGueltigkeit_fahndung', 'ReisepassHerkunft_fahndung',
            'checkMitAufenthaltstitelFahndung', 'aufenthaltHerkunftContainer_fahndung', 'AufenthaltHerkunft_fahndung',
            'AusschreibendeBehoerde_fahndung', 'Aktenzeichen_fahndung', 'behoerdeAktenzeichenContainer_fahndung', 'pmkHinweisContainer_fahndung',
            'ZusaetzlicheInfosVermerk_fahndung', 'personenfahndung_details', 'sachfahndung_details',
            'inpol_personenfahndung', 'inpol_personenfahndung_pmk', 'inpol_sachfahndung', 'inpol_fahndungsausschreibung',
            'platzhalterAnalyseContainer_fahndung', 'fahndungPlaceholdersAll', 'showAllFahndungPlaceholdersBtn',
            'fahndungPlaceholdersActive', 'showActiveFahndungPlaceholdersBtn',
            'generateFahndungOutputBtn', 'resetFahndungFormBtn'
        ];

        ids.forEach(id => { this.dom[id] = document.getElementById(id); });

        // QuerySelector-Elemente
        this.dom.inpolArtFahndungRadios = document.querySelectorAll('input[name="inpol_art_fahndung"]');
        this.dom.dokumentenartFahndungRadios = document.querySelectorAll('input[name="dokumentenart_fahndung"]');
        this.dom.inpolDokumentVerbleibRadios = document.querySelectorAll('input[name="inpol_dokument_verbleib"]');
    },

    bindEvents() {
        // Flugdaten & Reset
        this.dom.todayBtn_fahndung?.addEventListener('click', this.handlers.handleTodayClick.bind(this, 'Datum_fahndung'));
        this.dom.Datum_fahndung?.addEventListener('input', this.coreApp.utils.formatInputAsDate);
        this.dom.Uhrzeit_fahndung?.addEventListener('input', this.coreApp.utils.formatInputAsTime);
        this.dom.resetFahndungFormBtn?.addEventListener('click', () => location.reload());

        // Personendaten & Reisepass
        this.dom.Staatsangehoerigkeit_fahndung?.addEventListener('change', (e) => { this.dom.ReisepassHerkunft_fahndung.value = e.target.value; });

        // Aufenthaltstitel
        this.dom.checkMitAufenthaltstitelFahndung?.addEventListener('change', (e) => this.dom.aufenthaltHerkunftContainer_fahndung?.classList.toggle('hidden', !e.target.checked));

        // INPOL-Art Wechsel
        this.dom.inpolArtFahndungRadios?.forEach(radio => radio.addEventListener('change', this.handlers.handleInpolArtChange.bind(this)));

        // Platzhalter Analyse (Entwicklermodus)
        this.dom.showAllFahndungPlaceholdersBtn?.addEventListener('click', this.handlers.showAllFahndungPlaceholders.bind(this));
        this.dom.showActiveFahndungPlaceholdersBtn?.addEventListener('click', this.handlers.showActiveFahndungPlaceholders.bind(this));

        // Generate Button
        this.dom.generateFahndungOutputBtn?.addEventListener('click', this.handlers.generateOutput.bind(this));
    },

    // -----------------------------------------------------------------
    // LOKALE HANDLER
    // -----------------------------------------------------------------
    handlers: {
        handleTodayClick(targetId) {
            this.dom[targetId].value = this.coreApp.utils.formatDate(this.coreApp.utils.getCurrentDate());
        },

        handleInpolArtChange() {
            const isPersonenfahndung = this.dom.inpol_personenfahndung?.checked;
            const isSachfahndung = this.dom.inpol_sachfahndung?.checked;
            const isPmk = this.dom.inpol_personenfahndung_pmk?.checked;
            const isFahndungsausschreibung = this.dom.inpol_fahndungsausschreibung?.checked;

            this.dom.personenfahndung_details?.classList.toggle('hidden', !(isPersonenfahndung || isPmk));
            this.dom.sachfahndung_details?.classList.toggle('hidden', !isSachfahndung);
            this.dom.behoerdeAktenzeichenContainer_fahndung?.classList.toggle('hidden', isPmk);
            this.dom.pmkHinweisContainer_fahndung?.classList.toggle('hidden', !isPmk);
            this.dom.fahndungsausschreibung_details?.classList.toggle('hidden', !isFahndungsausschreibung);
        },

        // --- Platzhalter Analyse Logik (aus core.js verschoben) ---

        showAllFahndungPlaceholders() {
            const placeholders = new Set();
            const formElements = document.getElementById('content-fahndungen')?.querySelectorAll('input[id], select[id], textarea[id]');
            formElements?.forEach(el => {
                if (!el.id) return;
                const placeholderId = el.id.replace('_fahndung', '');

                if (el.type === 'radio' || el.type === 'checkbox') {
                    placeholders.add(`[${el.value}]`);
                } else if (el.tagName === 'SELECT') {
                    placeholders.add(`[${placeholderId}]`);
                    Array.from(el.options).forEach(option => {
                        if (option.value) {
                             // Generische Platzhalter für spezielle Dropdowns
                            placeholders.add(`[${placeholderId}_${option.value}]`);
                        }
                    });
                } else if (el.type === 'text' || el.type === 'date' || el.tagName === 'TEXTAREA') {
                    placeholders.add(`[${placeholderId}]`);
                }
            });
            this.dom.fahndungPlaceholdersAll.value = Array.from(placeholders).sort().join('\n');
        },

        showActiveFahndungPlaceholders() {
            const activePlaceholders = [];
            const formElements = document.getElementById('content-fahndungen')?.querySelectorAll('input[id], select[id], textarea[id]');
            const overrideValues = EinstellungenModul?.getPlaceholderOverrides?.() || new Map();

            formElements?.forEach(el => {
                if (!el.id) return;
                const placeholderId = el.id.replace('_fahndung', '');
                const isSpecialDropdown = this.config.specialDropdowns.includes(placeholderId);

                if (el.type === 'radio' || el.type === 'checkbox') {
                    if (el.checked) {
                        const placeholder = `[${el.value}]`;
                        const value = overrideValues.get(placeholder) ?? el.nextElementSibling?.textContent.trim();
                        activePlaceholders.push(`${placeholder} = "${value}"`);
                    }
                } else if (el.tagName === 'SELECT') {
                    const selectedOption = el.options[el.selectedIndex];
                    if (selectedOption?.value) {
                         const key = isSpecialDropdown ? `[${placeholderId}_${selectedOption.value}]` : `[${placeholderId}]`;
                         const value = overrideValues.get(key) ?? selectedOption.textContent;
                         activePlaceholders.push(`${key} = "${value}"`);
                    }
                } else if ((el.type === 'text' || el.type === 'date' || el.tagName === 'TEXTAREA') && el.value) {
                    const placeholder = `[${placeholderId}]`;
                    let value = el.value;
                    if (el.type === 'date') { value = this.coreApp.utils.formatDate(value); }
                    const finalValue = overrideValues.get(placeholder) ?? value;
                    activePlaceholders.push(`${placeholder} = "${finalValue}"`);
                }
            });
            this.dom.fahndungPlaceholdersActive.value = activePlaceholders.sort().join('\n');
        },

        // --- Generierungs Logik (aus core.js verschoben) ---

        getValidationConfig() {
            const isSachfahndung = this.dom.inpol_sachfahndung?.checked;

            return {
                basicFields: ['Datum', 'Uhrzeit', 'Flughafen', 'Flugnummer'],
                specificChecks: [
                    {
                        condition: () => document.querySelector('input[name="inpol_art_fahndung"]:checked'),
                        message: "Bitte wähle die Art der Fahndung aus."
                    },
                    {
                        condition: () => {
                            if (!isSachfahndung) return true; // Nur für Sachfahndung prüfen

                            const missingFields = [];
                            if (!document.querySelector('input[name="dokumentenart_fahndung"]:checked')) { missingFields.push("Art des Dokuments"); }
                            if (!document.querySelector('input[name="inpol_dokument_verbleib"]:checked')) { missingFields.push("Verbleib des Dokuments"); }
                            if (this.dom.AusschreibendeBehoerde_fahndung?.value.trim() === '') { missingFields.push("Ausschreibende Behörde"); }
                            if (this.dom.Aktenzeichen_fahndung?.value.trim() === '') { missingFields.push("Aktenzeichen"); }

                            if (missingFields.length === 0) { return true; }
                            this.state.validationErrors = missingFields; // Fehler in lokalem State speichern
                            return false;
                        },
                        message: () => {
                            const errorList = this.state.validationErrors.map(item => `\n- ${item}`).join('');
                            return `Bitte vervollständige die folgenden Eingaben:${errorList}`;
                        }
                    }
                ]
            };
        },

        validateInput(config) {
            const { basicFields, specificChecks } = config;
            // Prüfe Basisfelder (Flugdaten)
            for (const field of basicFields) {
                if (!this.dom[`${field}_fahndung`]?.value) {
                    this.coreApp.ui.showErrorModal(`Bitte füllen Sie das Feld "${field}" aus.`);
                    return false;
                }
            }
            // Prüfe spezifische Bedingungen (Sachfahndung etc.)
            for (const check of specificChecks) {
                if (!check.condition()) {
                    const errorMessage = typeof check.message === 'function' ? check.message.call(this) : check.message;
                    this.coreApp.ui.showErrorModal(errorMessage);
                    return false;
                }
            }
            return true;
        },

        collectAllValues() {
            const finalValues = new Map();
            const overrideValues = EinstellungenModul?.getPlaceholderOverrides?.() || new Map();

            // Sammle alle Werte mit Suffix _fahndung
            const formElements = document.getElementById('content-fahndungen')?.querySelectorAll('input[id], select[id], textarea[id]');
            formElements?.forEach(el => {
                if (!el.id) return;
                const placeholderId = el.id.replace('_fahndung', '');
                const isSpecialDropdown = this.config.specialDropdowns.includes(placeholderId);

                if (el.type === 'radio' || el.type === 'checkbox') {
                    if (el.checked) {
                        const placeholder = `[${el.value}]`;
                        const override = overrideValues.get(placeholder);
                        finalValues.set(placeholder, override ?? el.nextElementSibling?.textContent.trim() ?? 'Ja');
                    } else {
                         // Radio-Buttons/Checkboxen, die false sind, werden explizit auf "" gesetzt, um sie zu entfernen
                         finalValues.set(`[${el.value || placeholderId}]`, '');
                    }
                } else if (el.tagName === 'SELECT') {
                    const selectedOption = el.options[el.selectedIndex];
                    if (selectedOption && selectedOption.value) {
                         const valueKey = isSpecialDropdown ? `[${placeholderId}_${selectedOption.value}]` : `[${placeholderId}]`;
                         const override = overrideValues.get(valueKey);
                         finalValues.set(valueKey, override ?? selectedOption.textContent);
                    } else {
                         finalValues.set(`[${placeholderId}]`, '');
                    }
                } else if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.type !== 'button' && el.type !== 'submit' && el.type !== 'reset') {
                    const placeholder = `[${placeholderId}]`;
                    let value = el.value;
                    if (el.type === 'date' && value) {
                        value = this.coreApp.utils.formatDate(value);
                    }
                    const override = overrideValues.get(placeholder);
                    finalValues.set(placeholder, override ?? value);
                }
            });

            // Spezielle Logik für "Aufenthaltstitel vorhanden" (Checkbox)
            const mitATCheckbox = this.dom.checkMitAufenthaltstitelFahndung;
            if (mitATCheckbox) {
                 const placeholderMit = `[${mitATCheckbox.value}]`;
                 const placeholderOhne = '[OhneAufenthaltstitelFahndung]'; // Annahme des Platzhalters für "Ohne"
                 
                 finalValues.set(placeholderMit, mitATCheckbox.checked ? (overrideValues.get(placeholderMit) ?? 'Ja') : '');
                 finalValues.set(placeholderOhne, !mitATCheckbox.checked ? (overrideValues.get(placeholderOhne) ?? 'Ja') : '');
            }


            return finalValues;
        },

        replacePlaceholders(template, valuesMap) {
             let outputText = template;
             let iterations = 0;
             const MAX_ITERATIONS = 15;

             while (iterations < MAX_ITERATIONS) {
                 let changed = false;
                 let lastOutput = outputText;

                 valuesMap.forEach((value, key) => {
                     const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                     const regex = new RegExp(escapedKey, 'g');
                     const replacement = value === null || value === undefined ? '' : value;
                     outputText = outputText.replace(regex, replacement);
                 });

                 if (outputText === lastOutput) break;
                 iterations++;
             }

             // Entferne alle verbleibenden (nicht ersetzten) Platzhalter
             outputText = outputText.replace(/\[[^\]]+?\]/g, '');

             return outputText;
        },

        generateOutput() {
            if (!window.EinstellungenModul || !EinstellungenModul.getTemplate) {
                 this.coreApp.ui.showErrorModal("Das Einstellungsmodul ist nicht geladen. Bitte prüfen Sie die Skript-Reihenfolge.");
                 return;
            }

            const validationConfig = this.getValidationConfig();
            if (!this.validateInput(validationConfig)) { return; }

            // Annahme: Vorlage für Fahndungstreffer heißt 'Fahndung'
            const template = EinstellungenModul.getTemplate('Fahndung');
            if (!template) {
                this.coreApp.ui.showErrorModal('Bitte geben Sie zuerst eine passende Vorlage im Tab "Einstellungen & Vorlagen" ein.');
                return;
            }

            const values = this.collectAllValues();
            let outputText = this.replacePlaceholders(template, values);

            this.coreApp.ui.displayGeneratedOutput(outputText);
        }
    }
};

window.FahndungenModul = FahndungenModul;
