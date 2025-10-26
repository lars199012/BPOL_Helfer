const ordnungswidrigkeitenHTML = `
<div id="content-ordnungswidrigkeiten"> 
    <div class="space-y-6"> 
        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe Flugdaten</div> 
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
                <div> 
                    <label for="Datum_owi" class="block text-sm font-medium text-gray-700 mb-1">Datum</label> 
                    <div class="flex"> 
                        <input type="text" id="Datum_owi" class="form-element form-input" placeholder="TT.MM.JJJJ"> 
                        <button id="todayBtn_owi" class="btn btn-secondary ml-2 px-3 flex-shrink-0" title="Heutiges Datum einfügen">Heute</button> 
                    </div> 
                </div> 
                <div> 
                    <label for="Uhrzeit_owi" class="block text-sm font-medium text-gray-700 mb-1">Uhrzeit</label> 
                    <input type="text" id="Uhrzeit_owi" class="form-element form-input" placeholder="HH:MM"> 
                </div> 
                <div> 
                    <label for="Flughafen_owi" class="block text-sm font-medium text-gray-700 mb-1">Zielflughafen</label> 
                    <input type="text" id="Flughafen_owi" class="form-element form-input"> 
                </div> 
                <div> 
                    <label for="Flugnummer_owi" class="block text-sm font-medium text-gray-700 mb-1">Flugnummer</label> 
                    <input type="text" id="Flugnummer_owi" class="form-element form-input"> 
                </div> 
            </div> 
        </div> 

        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe Personendaten</div> 
            <div class="p-6 space-y-4"> 
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                    <div class="form-row-grid">
                        <label class="font-medium text-gray-700">Geschlecht</label>
                        <div class="segmented-control">
                            <input type="radio" name="geschlecht_owi" id="geschlecht_maennlich_owi" value="Geschlecht_maennlich">
                            <label for="geschlecht_maennlich_owi">männlich</label>
                            <input type="radio" name="geschlecht_owi" id="geschlecht_weiblich_owi" value="Geschlecht_weiblich">
                            <label for="geschlecht_weiblich_owi">weiblich</label>
                        </div>
                    </div>
                    <div> 
                        <label for="Staatsangehoerigkeit_owi" class="block text-sm font-medium text-gray-700 mb-1">Staatsangehörigkeit</label> 
                        <select id="Staatsangehoerigkeit_owi" class="form-element form-select"></select> 
                    </div> 
                </div> 
            </div> 
        </div> 

        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe Reisedokumente</div> 
            <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-4"> 
                <div> 
                    <label for="ReisepassArt_owi" class="block text-sm font-medium text-gray-700 mb-1">Reisepass</label> 
                    <select id="ReisepassArt_owi" class="form-element form-select"> 
                        <option value="Reisepass">Reisepass</option> 
                        <option value="Reiseausweis1951">Reiseausweis (Abkommen 1951)</option> 
                        <option value="Reiseausweis1954">Reiseausweis (Abkommen 1954)</option> 
                        <option value="Spezialpass">Spezialpass</option> 
                        <option value="VorlaeufigerReisepass">Vorläufiger Reisepass</option> 
                        <option value="Personalausweis">Personalausweis</option> 
                        <option value="IDKarte">ID-Karte</option> 
                        <option value="Ohne">Ohne</option> 
                    </select> 
                </div> 
                <div> 
                    <label for="ReisepassGueltigkeit_owi" class="block text-sm font-medium text-gray-700 mb-1">Gültigkeit</label> 
                    <select id="ReisepassGueltigkeit_owi" class="form-element form-select"> 
                        <option value="Gueltig">Gültig</option> 
                        <option value="Abgelaufen">zeitlich ungültig</option> 
                        <option value="NichtAnerkannt">Nicht anerkannt</option> 
                    </select> 
                </div> 
                <div> 
                    <label for="ReisepassHerkunft_owi" class="block text-sm font-medium text-gray-700 mb-1">Herkunftsland Reisepass</label> 
                    <select id="ReisepassHerkunft_owi" class="form-element form-select"></select> 
                </div> 
            </div> 
        </div> 
        
        <div class="bpol-card p-4"> 
            <label class="block text-sm font-medium text-gray-700 mb-2">Art der Ordnungswidrigkeit</label> 
            <div class="radio-button-group"> 
                <label> 
                    <input type="radio" name="owi_art" id="radioOwiLuftSiG" class="radio-button-input" value="owiLuftSiG" checked> 
                    <span class="radio-button-label flex items-center gap-2"> 
                         <svg width="40px" height="40px" fill="#000000"><use xlink:href="#icon-luftsig"></use></svg>
                        OWi nach LuftSiG
                    </span> 
                </label> 
                <label> 
                    <input type="radio" name="owi_art" id="radioOwiWaffGPlusLuftSiG" class="radio-button-input" value="owiWaffGPlusLuftSiG"> 
                    <span class="radio-button-label flex items-center gap-2"> 
                         <svg width="40px" height="40px" fill="#000000"><use xlink:href="#icon-waffg"></use></svg>
                        OWi nach WaffG & LuftSiG
                    </span> 
                </label> 
                <label> 
                    <input type="radio" name="owi_art" id="radioOwiWaffG" class="radio-button-input" value="owiWaffG"> 
                    <span class="radio-button-label flex items-center gap-2"> 
                        <svg width="40px" height="40px" fill="#000000"><use xlink:href="#icon-waffg"></use></svg>
                        OWi nach WaffG
                    </span> 
                </label> 
            </div> 
            
            <div id="owiWaffgDetailsContainer" class="hidden pt-4 border-t mt-4 space-y-4">
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                         <label for="Zeuge1" class="block text-sm font-medium text-gray-700 mb-1">Zeuge 1 (Monitorkraft)</label>
                         <input type="text" id="Zeuge1" class="form-element form-input">
                     </div>
                     <div>
                         <label for="Zeuge2" class="block text-sm font-medium text-gray-700 mb-1">Zeuge 2 (Nachkontrollkraft)</label>
                         <input type="text" id="Zeuge2" class="form-element form-input">
                     </div>
                 </div>
                 <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div>
                         <label for="Waffenart" class="block text-sm font-medium text-gray-700 mb-1">Waffenart</label>
                         <select id="Waffenart" class="form-element form-select">
                             <option value="Einhandmesser">Einhandmesser</option>
                             <option value="MesserUeber12">feststeh. Messer > 12cm</option>
                             <option value="Teleskopschlagstock">Teleskopschlagstock</option>
                             <option value="ReizstoffOhnePTB">Reizstoff ohne PTB-Zeichen</option>
                             <option value="Anscheinswaffe">Anscheinswaffe</option>
                         </select>
                     </div>
                     <div>
                         <label for="Auffindeort" class="block text-sm font-medium text-gray-700 mb-1">Auffindeort</label>
                         <select id="Auffindeort" class="form-element form-select">
                             <option value="Koffer">Koffer</option>
                             <option value="Handtasche">Handtasche</option>
                             <option value="Rucksack">Rucksack</option>
                         </select>
                     </div>
                     <div id="klingenlaengeContainer">
                         <label for="Klingenlaenge" class="block text-sm font-medium text-gray-700 mb-1">Klingenlänge in cm</label>
                         <input type="text" id="Klingenlaenge" class="form-element form-input">
                     </div>
                 </div>
                 <div class="form-row-grid pt-4 border-t">
                     <label class="font-medium text-gray-700">Einwilligung über die Sicherstellung</label>
                     <div class="segmented-control">
                         <input type="radio" name="owi_einwilligung" id="EinwilligungSicherstellung_Ja" value="EinwilligungSicherstellung_Ja">
                         <label for="EinwilligungSicherstellung_Ja">Ja</label>
                         <input type="radio" name="owi_einwilligung" id="EinwilligungSicherstellung_Nein" value="EinwilligungSicherstellung_Nein">
                         <label for="EinwilligungSicherstellung_Nein">Nein</label>
                     </div>
                 </div>
                 <div class="form-row-grid">
                     <label class="font-medium text-gray-700">ZBV</label>
                     <div class="segmented-control">
                         <input type="radio" name="owi_zbv" id="ZBV_Owi_Ja" value="ZBV_Owi_Ja">
                         <label for="ZBV_Owi_Ja">Ja</label>
                         <input type="radio" name="owi_zbv" id="ZBV_Owi_NeinWohnort" value="ZBV_Owi_NeinWohnort">
                         <label for="ZBV_Owi_NeinWohnort">Nein (Wohnort in DE)</label>
                         <input type="radio" name="owi_zbv" id="ZBV_Owi_NeinDringlichkeit" value="ZBV_Owi_NeinDringlichkeit">
                         <label for="ZBV_Owi_NeinDringlichkeit">Nein (zeitliche Dringlichkeit)</label>
                     </div>
                 </div>
                 <div class="form-row-grid">
                     <label class="font-medium text-gray-700">Aussage zum Sachverhalt</label>
                     <div class="space-y-2">
                         <div class="flex flex-wrap gap-x-4">
                             <label class="flex items-center"><input type="radio" name="owi_aussage" id="Aussage_Owi_Verweigert" value="Aussage_Owi_Verweigert" class="form-element form-radio"><span class="ml-2 text-sm">Aussage verweigert</span></label>
                             <label class="flex items-center"><input type="radio" name="owi_aussage" id="Aussage_Owi_Gemacht" value="Aussage_Owi_Gemacht" class="form-element form-radio"><span class="ml-2 text-sm">Aussage zum Sachverhalt</span></label>
                             <div id="owiAussageTextContainer" class="hidden flex-grow ml-4"><textarea id="AussageSachverhalt" class="form-element form-textarea" rows="2" placeholder="Angaben zur Sache..."></textarea></div>
                         </div>
                     </div>
                 </div>
            </div>
            
            <div id="owiFutureFeatureHint" class="hidden mt-4 p-4 text-sm text-blue-700 bg-blue-50 rounded-md">
                <p>Diese Art der Ordnungswidrigkeit ist in der Vorlagen-Engine implementiert, erfordert aber derzeit keine spezifischen zusätzlichen Angaben im Formular.</p>
            </div>
        </div> 

        <div class="flex justify-end items-center gap-4 pt-4"> 
            <button id="resetOwiFormBtn" class="btn btn-danger text-lg px-8 py-3"> 
                <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><use xlink:href="#icon-trash"></use></svg> 
                <span>Formular leeren</span> 
            </button> 
            <button id="generateOwiOutputBtn" class="btn btn-primary text-lg px-8 py-3"> 
                <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><use xlink:href="#icon-generate"></use></svg> 
                <span>Sachverhalt generieren</span> 
            </button> 
        </div> 
    </div> 
</div> 
`;

const OwiModul = {
    coreApp: null, // Referenz zur Haupt-App
    dom: {},       // Lokaler DOM-Cache für diesen Tab
    state: {},     // Lokaler State

    config: {
        countries: ["afghanisch","ägyptisch","albanisch","algerisch","amerikanisch", /* ... Ihre lange Länderliste ... */].sort((a, b) => a.localeCompare(b)),
        specialDropdowns: ['ReisepassArt','ReisepassGueltigkeit','Einreise','EinreiseAus','AufenthaltstitelGueltig','AufenthaltstitelSchengen','AufenthaltstitelUngueltigErklaert','VisumCGueltig','VisumCEinreisen','VisumDGueltig','Waffenart','Auffindeort', 'Auffindeort_waffg'],
    },

    init(coreAppInstance) {
        this.coreApp = coreAppInstance;
        this.cacheDom();
        this.bindEvents();

        // Initialisiere Selects (Dropdowns)
        this.coreApp.utils.populateSelect(this.dom.Staatsangehoerigkeit_owi, this.config.countries);
        this.coreApp.utils.populateSelect(this.dom.ReisepassHerkunft_owi, this.config.countries);
        // Setze die Standard-Anzeige
        this.handlers.handleOwiArtChange.call(this);
    },

    // Zeige/Verstecke Elemente basierend auf Dev-Modus
    toggleDevMode(isDev) {
        // Dev-Platzhalter (falls vorhanden) hier umschalten
    },

    cacheDom() {
        // ALLE IDs aus ordnungswidrigkeitenHTML mit Suffix _owi oder owi-spezifisch
        const ids = [
            'Datum_owi', 'todayBtn_owi', 'Uhrzeit_owi', 'Flughafen_owi', 'Flugnummer_owi',
            'Staatsangehoerigkeit_owi', 'ReisepassArt_owi', 'ReisepassGueltigkeit_owi', 'ReisepassHerkunft_owi',
            'radioOwiLuftSiG', 'radioOwiWaffGPlusLuftSiG', 'radioOwiWaffG',
            'owiWaffgDetailsContainer', 'owiFutureFeatureHint',
            'Zeuge1', 'Zeuge2', 'Waffenart', 'Auffindeort', 'Klingenlaenge', 'klingenlaengeContainer',
            'EinwilligungSicherstellung_Ja', 'EinwilligungSicherstellung_Nein',
            'ZBV_Owi_Ja', 'ZBV_Owi_NeinWohnort', 'ZBV_Owi_NeinDringlichkeit',
            'Aussage_Owi_Verweigert', 'Aussage_Owi_Gemacht', 'owiAussageTextContainer', 'AussageSachverhalt',
            'generateOwiOutputBtn', 'resetOwiFormBtn'
        ];

        ids.forEach(id => { this.dom[id] = document.getElementById(id); });

        // QuerySelector-Elemente
        this.dom.owiArtRadios = document.querySelectorAll('input[name="owi_art"]');
        this.dom.owiAussageRadios = document.querySelectorAll('input[name="owi_aussage"]');
    },

    bindEvents() {
        // Flugdaten & Reset
        this.dom.todayBtn_owi?.addEventListener('click', this.handlers.handleTodayClick.bind(this, 'Datum_owi'));
        this.dom.Datum_owi?.addEventListener('input', this.coreApp.utils.formatInputAsDate);
        this.dom.Uhrzeit_owi?.addEventListener('input', this.coreApp.utils.formatInputAsTime);
        this.dom.resetOwiFormBtn?.addEventListener('click', () => location.reload());

        // Personendaten & Reisepass
        this.dom.Staatsangehoerigkeit_owi?.addEventListener('change', (e) => { this.dom.ReisepassHerkunft_owi.value = e.target.value; });

        // Owi Art Wechsel
        this.dom.owiArtRadios?.forEach(radio => radio.addEventListener('change', this.handlers.handleOwiArtChange.bind(this)));
        
        // WaffG Details
        this.dom.Waffenart?.addEventListener('change', this.handlers.handleWaffenartChange.bind(this));
        this.dom.owiAussageRadios?.forEach(radio => radio.addEventListener('change', this.handlers.handleOwiAussageChange.bind(this)));

        // Generate Button
        this.dom.generateOwiOutputBtn?.addEventListener('click', this.handlers.generateOutput.bind(this));
    },

    // -----------------------------------------------------------------
    // LOKALE HANDLER
    // -----------------------------------------------------------------
    handlers: {
        handleTodayClick(targetId) {
            this.dom[targetId].value = this.coreApp.utils.formatDate(this.coreApp.utils.getCurrentDate());
        },

        handleOwiArtChange() {
            const isWaffGLuftSiG = this.dom.radioOwiWaffGPlusLuftSiG?.checked;
            const isOnlyWaffG = this.dom.radioOwiWaffG?.checked;
            const isOnlyLuftSiG = this.dom.radioOwiLuftSiG?.checked;

            // Details nur bei WaffG + LuftSiG anzeigen
            this.dom.owiWaffgDetailsContainer?.classList.toggle('hidden', !isWaffGLuftSiG);
            
            // Hinweis für zukünftige Features nur bei den einfachen OWis
            this.dom.owiFutureFeatureHint?.classList.toggle('hidden', !(isOnlyLuftSiG || isOnlyWaffG));
        },
        
        handleWaffenartChange() {
             // Zeige Klingenlänge nur bei Messern
             const selectedValue = this.dom.Waffenart?.value;
             const showKlinge = ['Einhandmesser', 'MesserUeber12'].includes(selectedValue);
             this.dom.klingenlaengeContainer?.classList.toggle('hidden', !showKlinge);
        },

        handleOwiAussageChange() {
             // Zeige Textarea nur, wenn "Aussage gemacht" ausgewählt ist
             this.dom.owiAussageTextContainer?.classList.toggle('hidden', !this.dom.Aussage_Owi_Gemacht?.checked);
        },

        // --- Generierungs Logik ---

        getValidationConfig() {
            // Nur WaffG+LuftSiG hat momentan detaillierte Felder
            if (this.dom.radioOwiWaffGPlusLuftSiG?.checked) {
                return {
                    basicFields: ['Datum', 'Uhrzeit', 'Flughafen', 'Flugnummer'],
                    specificChecks: [
                        {
                            condition: () => this.dom.Zeuge1?.value.trim() && this.dom.Zeuge2?.value.trim(),
                            message: "Bitte füllen Sie die Felder für Zeuge 1 und Zeuge 2 aus."
                        },
                        {
                            condition: () => document.querySelector('input[name="owi_einwilligung"]:checked') &&
                                             document.querySelector('input[name="owi_zbv"]:checked') &&
                                             document.querySelector('input[name="owi_aussage"]:checked'),
                            message: "Bitte treffen Sie eine Auswahl bei 'Einwilligung', 'ZBV' und 'Aussage'."
                        },
                        {
                            condition: () => {
                                const waffenart = this.dom.Waffenart?.value;
                                // Prüfe Klingenlänge nur für Messertypen, die Klingenlänge brauchen
                                if (waffenart === 'MesserUeber12' || waffenart === 'Einhandmesser') {
                                    const klingenlaenge = parseFloat(this.dom.Klingenlaenge?.value);
                                    // Annahme: Es muss > 6cm sein (wie in alter core.js Validation impliziert)
                                    return !isNaN(klingenlaenge) && klingenlaenge > 6; 
                                }
                                return true;
                            },
                            message: "Bei einer OWi nach LuftSiG muss die Klingenlänge mindestens 6cm betragen."
                        }
                    ]
                };
            }
            // Für OWi LuftSiG und OWi WaffG (einfach)
            return { basicFields: ['Datum', 'Uhrzeit', 'Flughafen', 'Flugnummer'], specificChecks: [] };
        },

        validateInput(config) {
            const { basicFields, specificChecks } = config;
            // Prüfe Basisfelder (Flugdaten)
            for (const field of basicFields) {
                if (!this.dom[`${field}_owi`]?.value) {
                    this.coreApp.ui.showErrorModal(`Bitte füllen Sie das Feld "${field}" aus.`);
                    return false;
                }
            }
            // Prüfe spezifische Bedingungen
            for (const check of specificChecks) {
                if (!check.condition()) {
                    const errorMessage = typeof check.message === 'function' ? check.message.call(this) : check.message;
                    this.coreApp.ui.showErrorModal(errorMessage);
                    return false;
                }
            }
            return true;
        },
        
        getTemplate() {
             // Zugriff auf das globale Einstellungsmodul
             if (this.dom.radioOwiWaffGPlusLuftSiG?.checked) {
                  return EinstellungenModul.getTemplate('OwiWaffGPlusLuftSiG');
             } else if (this.dom.radioOwiLuftSiG?.checked) {
                  return EinstellungenModul.getTemplate('OwiLuftSiG');
             } else if (this.dom.radioOwiWaffG?.checked) {
                  return EinstellungenModul.getTemplate('OwiWaffG');
             }
             return null;
        },

        collectAllValues() {
            const finalValues = new Map();
            const overrideValues = EinstellungenModul?.getPlaceholderOverrides?.() || new Map();
            
            // Sammle alle Werte mit Suffix _owi oder owi-spezifisch
            const formElements = document.getElementById('content-ordnungswidrigkeiten')?.querySelectorAll('input[id], select[id], textarea[id]');
            formElements?.forEach(el => {
                if (!el.id) return;
                const placeholderId = el.id.replace('_owi', '');
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

            // Spezielle Logik für Waffenart-Dropdown (für spezifische Platzhalter)
            const waffenartDropdown = this.dom.Waffenart;
             if (waffenartDropdown) {
                  const selectedOption = waffenartDropdown.options[waffenartDropdown.selectedIndex];
                  if (selectedOption && selectedOption.value) {
                       const valueKey = `[Waffenart_${selectedOption.value}]`;
                       const override = overrideValues.get(valueKey);
                       finalValues.set(valueKey, override ?? selectedOption.textContent);
                  }
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

            const template = this.getTemplate();
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

window.OwiModul = OwiModul;
