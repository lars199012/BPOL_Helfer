const einstellungenHTML = `
<div id="content-einstellungen">
    <div class="bpol-card mb-8 p-4">
        <h3 class="font-semibold text-lg text-gray-800 mb-2">Globaler Import / Export</h3>
        <p class="text-sm text-gray-600 mb-4">Speichern oder laden Sie alle Vorlagen und benutzerdefinierten Werte in einer einzigen Datei.</p>
        <div class="flex flex-wrap gap-2">
            <button id="importAllBtn" class="btn btn-primary px-4 py-2">
                <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><use xlink:href="#icon-import"></use></svg>
                <span>Alles Importieren</span>
            </button>
            <button id="exportAllBtn" class="btn btn-primary px-4 py-2">
                <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><use xlink:href="#icon-export"></use></svg>
                <span>Alles Exportieren</span>
            </button>
            <button id="showExportAsTextBtn" class="btn btn-secondary px-4 py-2">
                <svg class="btn-icon"><use xlink:href="#icon-custom-copy"></use></svg>
                <span>Als Text anzeigen</span>
            </button>
            <input type="file" id="allDataFileInput" class="hidden" accept=".js,.json,.txt">
        </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div class="space-y-8">
            <div class="bpol-card space-y-4 p-4">
                <div>
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">Vorlage: Positivstaater</h3>
                    <textarea id="vorlageTextPositiv" class="form-element form-textarea h-48" placeholder="Vorlage für Positivstaater..."></textarea>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="save" data-target="Positiv">Speichern</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="load" data-target="Positiv">Laden</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="import" data-target="Positiv">Import .txt</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="export" data-target="Positiv">Export .txt</button>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">Vorlage: Negativstaater</h3>
                    <textarea id="vorlageTextNegativ" class="form-element form-textarea h-48" placeholder="Vorlage für Negativstaater..."></textarea>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="save" data-target="Negativ">Speichern</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="load" data-target="Negativ">Laden</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="import" data-target="Negativ">Import .txt</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="export" data-target="Negativ">Export .txt</button>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">Vorlage: Fahndungstreffer</h3>
                    <textarea id="vorlageTextFahndung" class="form-element form-textarea h-48" placeholder="Vorlage bei INPOL-Treffer..."></textarea>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="save" data-target="Fahndung">Speichern</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="load" data-target="Fahndung">Laden</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="import" data-target="Fahndung">Import .txt</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="export" data-target="Fahndung">Export .txt</button>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">Vorlage: Strafanzeige nach WaffG</h3>
                    <textarea id="vorlageTextStraftatWaffG" class="form-element form-textarea h-48" placeholder="Vorlage für Strafanzeigen nach dem Waffengesetz..."></textarea>
                     <div class="flex flex-wrap gap-2 mt-2">
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="save" data-target="StraftatWaffG">Speichern</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="load" data-target="StraftatWaffG">Laden</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="import" data-target="StraftatWaffG">Import .txt</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="export" data-target="StraftatWaffG">Export .txt</button>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">Vorlage: Owi nach LuftSiG</h3>
                    <textarea id="vorlageOwiLuftSiG" class="form-element form-textarea h-48" placeholder="Vorlage für Ordnungswidrigkeiten nach dem Luftsicherheitsgesetz..."></textarea>
                     <div class="flex flex-wrap gap-2 mt-2">
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="save" data-target="OwiLuftSiG">Speichern</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="load" data-target="OwiLuftSiG">Laden</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="import" data-target="OwiLuftSiG">Import .txt</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="export" data-target="OwiLuftSiG">Export .txt</button>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">Vorlage: Owi nach WaffG + LuftSiG</h3>
                    <textarea id="vorlageOwiWaffGPlusLuftSiG" class="form-element form-textarea h-48" placeholder="Vorlage für Ordnungswidrigkeiten nach dem Waffengesetz und Luftsicherheitsgesetz..."></textarea>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="save" data-target="OwiWaffGPlusLuftSiG">Speichern</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="load" data-target="OwiWaffGPlusLuftSiG">Laden</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="import" data-target="OwiWaffGPlusLuftSiG">Import .txt</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="export" data-target="OwiWaffGPlusLuftSiG">Export .txt</button>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">Vorlage: Owi nach WaffG</h3>
                    <textarea id="vorlageOwiWaffG" class="form-element form-textarea h-48" placeholder="Vorlage für Ordnungswidrigkeiten nach dem Waffengesetz..."></textarea>
                     <div class="flex flex-wrap gap-2 mt-2">
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="save" data-target="OwiWaffG">Speichern</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="load" data-target="OwiWaffG">Laden</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="import" data-target="OwiWaffG">Import .txt</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="export" data-target="OwiWaffG">Export .txt</button>
                    </div>
                </div>
		<div>
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">Vorlage: Fahndungsausschreibungen</h3>
                    <textarea id="vorlageFahndungsausschreibung" class="form-element form-textarea h-48" placeholder="Vorlage für Fahndungsausschreibungen..."></textarea>
                     <div class="flex flex-wrap gap-2 mt-2">
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="save" data-target="Fahndungsausschreibung">Speichern</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="load" data-target="Fahndungsausschreibung">Laden</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="import" data-target="Fahndungsausschreibung">Import .txt</button>
                        <button class="btn btn-secondary px-3 py-1 text-sm" data-action="export" data-target="Fahndungsausschreibung">Export .txt</button>
                    </div>
                </div>
                <input type="file" id="templateFileInput" class="hidden" accept=".txt">
            </div>
            
            <!-- Schengenhandbuch Dossier-Editor -->
            <div class="bpol-card">
                <div class="bpol-card-header p-4">Schengenhandbuch Dossier-Editor</div>
                <div class="p-6 space-y-4">
                    <div>
                        <label for="dossierLoadCodeArea" class="block text-sm font-medium text-gray-700 mb-1">Vorhandenen Dossier-Code laden</label>
                        <textarea id="dossierLoadCodeArea" class="form-element form-textarea h-24 font-mono text-xs" placeholder="Hier JSON-Code eines Dossiers einfügen..."></textarea>
                        <button id="loadDossierCodeBtn" class="btn btn-secondary w-full mt-2">Code in Editor laden</button>
                    </div>
                    
                    <div id="dossierEditorForm" class="pt-4 border-t space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label for="dossierId" class="block text-sm font-medium text-gray-700 mb-1">ID (z.B. NL-7)</label>
                                <input type="text" id="dossierId" class="form-element form-input">
                            </div>
                            <div>
                                <label for="dossierSortOrder" class="block text-sm font-medium text-gray-700 mb-1">Sortierzahl</label>
                                <input type="number" id="dossierSortOrder" class="form-element form-input" value="999">
                            </div>
                            <div>
                                <label for="dossierArt" class="block text-sm font-medium text-gray-700 mb-1">Dokumentenart</label>
                                <select id="dossierArt" class="form-element form-select">
                                    <option value="Reisepass">Reisepass</option>
                                    <option value="Aufenthaltstitel">Aufenthaltstitel</option>
                                    <option value="Aufenthaltsdokument">Aufenthaltsdokument</option>
                                    <option value="Sonstiges Dokument">Sonstiges Dokument</option>
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="dossierName" class="block text-sm font-medium text-gray-700 mb-1">Originalbezeichnung</label>
                                <input type="text" id="dossierName" class="form-element form-input">
                            </div>
                            <div>
                                <label for="dossierNameDe" class="block text-sm font-medium text-gray-700 mb-1">Deutsche Bezeichnung</label>
                                <input type="text" id="dossierNameDe" class="form-element form-input">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="dossierSchengengueltig" class="block text-sm font-medium text-gray-700 mb-1">Schengengültig?</label>
                                <select id="dossierSchengengueltig" class="form-element form-select">
                                    <option value="">-- Bitte wählen --</option>
                                    <option value="Ja">Ja</option>
                                    <option value="Nein">Nein</option>
                                    <option value="Teilweise">Teilweise</option>
                                </select>
                            </div>
                            <div>
                                <label for="dossierInDeAnerkannt" class="block text-sm font-medium text-gray-700 mb-1">In DE anerkannt?</label>
                                <select id="dossierInDeAnerkannt" class="form-element form-select">
                                    <option value="">-- Bitte wählen --</option>
                                    <option value="Ja">Ja</option>
                                    <option value="Nein">Nein</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="dossierBeschreibung" class="block text-sm font-medium text-gray-700 mb-1">Beschreibung</label>
                            <div class="flex gap-1 mb-1 flex-wrap">
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-format-btn" data-tag="b" data-target="dossierBeschreibung">Fett</button>
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-format-btn" data-tag="i" data-target="dossierBeschreibung">Kursiv</button>
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-format-btn" data-tag="u" data-target="dossierBeschreibung">Unterstr.</button>
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-format-btn" data-style="color:red;" data-target="dossierBeschreibung">Rot</button>
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-list-btn" data-target="dossierBeschreibung">Liste</button>
                            </div>
                            <textarea id="dossierBeschreibung" class="form-element form-textarea h-32" placeholder="Beschreibung (HTML erlaubt)"></textarea>
                        </div>
                        <div>
                            <label for="dossierGrenzhinweise" class="block text-sm font-medium text-gray-700 mb-1">Besondere Hinweise für Grenzkontrolle</label>
                            <div class="flex gap-1 mb-1 flex-wrap">
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-format-btn" data-tag="b" data-target="dossierGrenzhinweise">Fett</button>
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-format-btn" data-tag="i" data-target="dossierGrenzhinweise">Kursiv</button>
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-format-btn" data-tag="u" data-target="dossierGrenzhinweise">Unterstr.</button>
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-format-btn" data-style="color:red;" data-target="dossierGrenzhinweise">Rot</button>
                                 <button type="button" class="btn btn-secondary px-2 py-0.5 text-xs dossier-list-btn" data-target="dossierGrenzhinweise">Liste</button>
                            </div>
                            <textarea id="dossierGrenzhinweise" class="form-element form-textarea h-24" placeholder="Hinweise (HTML erlaubt)"></textarea>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="dossierImageFile" class="block text-sm font-medium text-gray-700 mb-1">Bilddatei (Hauptbild)</label>
                                <input type="text" id="dossierImageFile" class="form-element form-input" placeholder="z.b. NL_RP_01.jpg">
                            </div>
                            <div>
                                <label for="dossierAlternativeImages" class="block text-sm font-medium text-gray-700 mb-1">Alternative Bilder (kommagetrennt)</label>
                                <input type="text" id="dossierAlternativeImages" class="form-element form-input" placeholder="bild2.jpg,bild3.png">
                            </div>
                        </div>

                        <div class="pt-4 border-t">
                             <button id="generateDossierCodeBtn" class="btn btn-primary w-full">Dossier Code generieren</button>
                        </div>

                        <div>
                            <label for="dossierOutputCode" class="block text-sm font-medium text-gray-700 mb-1">Generierter Code (zum Kopieren)</label>
                            <textarea id="dossierOutputCode" readonly class="form-element form-textarea h-48 bg-gray-100 font-mono text-xs" placeholder="Hier erscheint der Code..."></textarea>
                             <p class="text-xs text-gray-500 mt-1">Hinweis: Füge diesen Code in die entsprechende Länder-JS-Datei ein. Achte darauf, ggf. ein Komma nach dem vorherigen Eintrag zu setzen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bpol-card">
            <div class="bpol-card-header p-4 flex justify-between items-center">
                <span>Benutzerdefinierte Platzhalter-Werte</span>
                <button id="listPlaceholdersBtn" class="btn btn-secondary px-3 py-1 text-sm">Felder generieren/zurücksetzen</button>
            </div>
            <div class="p-6">
                <div class="mb-4">
                    <input type="search" id="placeholderSearchInput" class="form-element" placeholder="Platzhalter durchsuchen...">
                </div>
                <div id="placeholderInputsContainer" class="bg-gray-100 p-4 rounded-md h-[450px] overflow-y-auto"></div>
                <div class="flex flex-wrap gap-2 mt-4">
                    <button id="importValuesBtn" class="btn btn-secondary px-4 py-2">Werte importieren</button>
                    <button id="exportValuesBtn" class="btn btn-secondary px-4 py-2">Werte exportieren</button>
                    <input type="file" id="valuesFileInput" class="hidden" accept=".txt,.json">
                </div>
            </div>
        </div>

    </div>
</div>
`;

/**
 * Das Einstellungsmodul enthält die gesamte Logik für Vorlagen- und Datenverwaltung.
 */
const EinstellungenModul = {
    coreApp: null, // Referenz auf die globale App
    dom: {},
    
    // Speicherschlüssel
    TEMPLATES_STORAGE_KEY: 'bpolVorlagenData', // Vorlagen werden jetzt als JSON gespeichert
    PLACEHOLDER_VALUES_KEY: 'BPOL_HELPER_PLACEHOLDER_VALUES',

    /**
     * Öffentliche Funktion: Wird von anderen Modulen (Strafanzeigen, Fahndungen)
     * aufgerufen, um einen spezifischen Vorlagentext abzurufen.
     * @param {string} key - Der Schlüssel der Vorlage (z.B. 'Positiv', 'Fahndung').
     * @returns {string|null} Der Vorlagentext oder null.
     */
    getTemplate(key) {
        if (!key) return null;
        const textarea = this.dom.templateTextareas ? this.dom.templateTextareas[key] : null;
        return textarea ? textarea.value : null;
    },

    /**
     * Öffentliche Funktion: Wird von anderen Modulen aufgerufen, um
     * die benutzerdefinierten Platzhalter-Werte abzurufen (für Überschreibung).
     * @returns {Map<string, string>} Map der Platzhalter-Overrides im Format "[PLATZHALTER]": "Wert".
     */
    getPlaceholderOverrides() {
        // Diese Funktion liest die Werte direkt aus dem LocalStorage.
        // Die Generierungsmodule müssen diese Map verwenden, um die Standardwerte zu überschreiben.
        const overrides = this.placeholders.getCustomValues();
        const map = new Map();
        for (const key in overrides) {
            // Speichere im Format, das die Ersetzungslogik erwartet
            map.set(`[${key}]`, overrides[key]);
        }
        return map;
    },
    
    /**
     * Helper: Lädt Daten aus localStorage.
     */
    loadData(key) {
        try {
            const data = localStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
        } catch (error) {
            console.error(`Fehler beim Laden von ${key}:`, error);
        }
        return null;
    },

    /**
     * Helper: Speichert Daten in localStorage.
     */
    saveData(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error(`Fehler beim Speichern von ${key}:`, error);
        }
    },

    /**
     * Extrahiert alle eindeutigen Platzhalter aus allen Vorlagen.
     * @returns {string[]} Ein Array von eindeutigen Platzhalter-Schlüsseln.
     */
    extractAllPlaceholders() {
        const placeholders = new Set();
        // Verwenden Sie die aktuellen Werte aus den Textareas für die Platzhalter-Generierung
        const currentTemplates = this.dom.templateTextareas;

        for (const key in currentTemplates) {
            const textarea = currentTemplates[key];
            if (textarea) {
                const templateString = textarea.value;
                const regex = /\[([^\[\]]+)\]/g; // Sucht nach [Platzhalter]
                let match;
                while ((match = regex.exec(templateString)) !== null) {
                    placeholders.add(match[1]);
                }
            }
        }

        // Sortiert und gibt das Array zurück, schließt leere Platzhalter aus
        return Array.from(placeholders)
            .filter(p => p.trim() !== '')
            .sort((a, b) => a.localeCompare(b));
    },

    /**
     * Initialisiert das Modul.
     */
    init(coreAppInstance) {
        this.coreApp = coreAppInstance;
        this.cacheDom();
        this.bindEvents();
        
        // 1. Lade gespeicherte Vorlagen (aus localStorage). loadTemplatesFromStorage gibt zurück, ob etwas geladen wurde.
        const loadedFromStorage = this.storage.loadTemplatesFromStorage();
        
        // 2. Lade Standardvorlagen (aus Vorlagen.js) NUR, wenn localStorage leer ist
        // autoImportOnLoad wird nun den renderPlaceholderInputs-Aufruf nach erfolgreichem Import übernehmen.
        if (!loadedFromStorage) {
             this.storage.autoImportOnLoad(); 
        }
        
        // 3. Generiere Platzhalter-Inputs - Nur, wenn weder LocalStorage noch Auto-Import etwas gefunden hat
        const templatesFound = this.extractAllPlaceholders();
        // Wenn templatesFound > 0, aber loadedFromStorage false war, bedeutet das, dass der AutoImport die Daten erfolgreich gesetzt hat.
        if (templatesFound.length > 0 || loadedFromStorage) {
             this.placeholders.renderPlaceholderInputs.call(this); // Rendere, sobald Daten da sind.
        } else if (typeof window.vorlagenData === 'undefined') {
             // Wenn keine Vorlagen gefunden wurden, zeige die leere Meldung an.
             this.placeholders.renderPlaceholderInputs.call(this);
        }
        
        // Lade die Custom Values beim Start
        const customValues = this.placeholders.getCustomValues();
        if (Object.keys(customValues).length > 0) {
             console.log("Custom Placeholder Values geladen und zur Generierung bereit.");
        }
    },

    /**
     * Cache aller DOM-Elemente dieses Tabs.
     */
    cacheDom() {
        const container = document.getElementById('content-einstellungen');
        if (!container) return;

        // Caching globaler Buttons, da sie Aktionen auslösen
        this.dom = {
            // Global IO
            importAllBtn: container.querySelector('#importAllBtn'),
            exportAllBtn: container.querySelector('#exportAllBtn'),
            showExportAsTextBtn: container.querySelector('#showExportAsTextBtn'),
            allDataFileInput: container.querySelector('#allDataFileInput'),
            templateFileInput: container.querySelector('#templateFileInput'),
            
            // Platzhalter IO
            listPlaceholdersBtn: container.querySelector('#listPlaceholdersBtn'),
            placeholderSearchInput: container.querySelector('#placeholderSearchInput'),
            placeholderInputsContainer: container.querySelector('#placeholderInputsContainer'),
            importValuesBtn: container.querySelector('#importValuesBtn'),
            exportValuesBtn: container.querySelector('#exportValuesBtn'),
            valuesFileInput: container.querySelector('#valuesFileInput'),

            // Dossier Editor
            dossierLoadCodeArea: container.querySelector('#dossierLoadCodeArea'),
            loadDossierCodeBtn: container.querySelector('#loadDossierCodeBtn'),
            dossierEditorForm: container.querySelector('#dossierEditorForm'),
            generateDossierCodeBtn: container.querySelector('#generateDossierCodeBtn'),
            dossierOutputCode: container.querySelector('#dossierOutputCode'),
            laenderCodeSelect: container.querySelector('#laenderCodeSelect'),
            generateLaenderCodeBtn: container.querySelector('#generateLaenderCodeBtn'),
            laenderCodeOutput: container.querySelector('#laenderCodeOutput'),

            // Vorlagen Textareas
            vorlageTextPositiv: container.querySelector('#vorlageTextPositiv'),
            vorlageTextNegativ: container.querySelector('#vorlageTextNegativ'),
            vorlageTextFahndung: container.querySelector('#vorlageTextFahndung'),
            vorlageTextStraftatWaffG: container.querySelector('#vorlageTextStraftatWaffG'),
            vorlageOwiLuftSiG: container.querySelector('#vorlageOwiLuftSiG'),
            vorlageOwiWaffGPlusLuftSiG: container.querySelector('#vorlageOwiWaffGPlusLuftSiG'),
            vorlageOwiWaffG: container.querySelector('#vorlageOwiWaffG'),
            vorlageFahndungsausschreibung: container.querySelector('#vorlageFahndungsausschreibung'),
        };

        // Gruppiert alle Textareas für einfachen Zugriff
        this.dom.templateTextareas = {
            Positiv: this.dom.vorlageTextPositiv,
            Negativ: this.dom.vorlageTextNegativ,
            Fahndung: this.dom.vorlageTextFahndung,
            StraftatWaffG: this.dom.vorlageTextStraftatWaffG,
            OwiLuftSiG: this.dom.vorlageOwiLuftSiG,
            OwiWaffGPlusLuftSiG: this.dom.vorlageOwiWaffGPlusLuftSiG,
            OwiWaffG: this.dom.vorlageOwiWaffG,
            Fahndungsausschreibung: this.dom.vorlageFahndungsausschreibung,
        };

        this.dom.templateButtons = container.querySelectorAll('[data-target]');
    },

    /**
     * Registriert alle Event-Listener für die UI-Interaktion.
     */
    bindEvents() {
        // Vorlagen-Buttons (Speichern/Laden/Import/Export)
        this.dom.templateButtons?.forEach(button => button.addEventListener('click', this.storage.handleTemplateAction.bind(this)));
        this.dom.templateFileInput?.addEventListener('change', this.storage.handleTemplateFileImport.bind(this));

        // Globaler Import/Export
        this.dom.exportAllBtn?.addEventListener('click', this.storage.exportAll.bind(this));
        this.dom.importAllBtn?.addEventListener('click', () => this.dom.allDataFileInput?.click());
        this.dom.allDataFileInput?.addEventListener('change', this.storage.importAll.bind(this));
        this.dom.showExportAsTextBtn?.addEventListener('click', this.storage.showExportAsText.bind(this));

        // Platzhalter-Verwaltung
        this.dom.listPlaceholdersBtn?.addEventListener('click', this.placeholders.renderPlaceholderInputs.bind(this));
        this.dom.placeholderSearchInput?.addEventListener('input', this.placeholders.searchPlaceholders.bind(this));
        this.dom.exportValuesBtn?.addEventListener('click', this.placeholders.exportValues.bind(this));
        this.dom.importValuesBtn?.addEventListener('click', () => this.dom.valuesFileInput?.click());
        this.dom.valuesFileInput?.addEventListener('change', this.placeholders.importValues.bind(this));

        // Dossier Editor und Ländercode
        this.dom.generateLaenderCodeBtn?.addEventListener('click', this.dossierEditor.generateLaenderCode.bind(this));
        this.dom.loadDossierCodeBtn?.addEventListener('click', this.dossierEditor.loadCodeIntoEditor.bind(this));
        this.dom.generateDossierCodeBtn?.addEventListener('click', this.dossierEditor.generateCode.bind(this));
        this.dom.dossierEditorForm?.addEventListener('click', this.dossierEditor.handleFormatButtonClick.bind(this));
    },
    
    /**
     * Speicher-Logik: Verwaltet Vorlagen und globalen IO (aus core.js verschoben).
     */
    storage: {
        /**
         * Lädt Vorlagen beim App-Start aus localStorage.
         * @returns {boolean} True, wenn Vorlagen geladen wurden, false sonst.
         */
        loadTemplatesFromStorage() {
            const savedTemplates = EinstellungenModul.loadData(EinstellungenModul.TEMPLATES_STORAGE_KEY) || {};
            let templatesLoaded = false;
            
            // Fülle die Textareas mit den gespeicherten Werten
            Object.keys(EinstellungenModul.dom.templateTextareas).forEach(key => {
                const textarea = EinstellungenModul.dom.templateTextareas[key];
                if (textarea && savedTemplates[key]) {
                    textarea.value = savedTemplates[key];
                    if (savedTemplates[key].trim().length > 0) {
                         templatesLoaded = true;
                    }
                } else if (textarea) {
                    textarea.value = ''; // Leere Felder löschen
                }
            });
            
            return templatesLoaded;
        },

        /**
         * Verwaltet Klicks auf Speichern/Laden/Import/Export-Buttons der Vorlagen.
         */
        handleTemplateAction(e) {
            const { action, target: targetKey } = e.target.dataset;
            const textarea = EinstellungenModul.dom.templateTextareas[targetKey];
            if (!textarea) return;

            const fileName = `bpol_vorlage_${targetKey.toLowerCase()}.txt`;

            if (action === 'save') {
                // Speichere alle aktuellen Vorlagen in einem JSON-Objekt im localStorage
                const allTemplates = {};
                Object.keys(EinstellungenModul.dom.templateTextareas).forEach(key => {
                    allTemplates[key] = EinstellungenModul.dom.templateTextareas[key].value;
                });
                EinstellungenModul.saveData(EinstellungenModul.TEMPLATES_STORAGE_KEY, allTemplates);
                EinstellungenModul.coreApp.ui.showInfoModal('Gespeichert', `Alle Vorlagen wurden erfolgreich im Browser gespeichert.`);
                
                // Nach dem Speichern die Platzhalter neu rendern, falls sich welche geändert haben
                EinstellungenModul.placeholders.renderPlaceholderInputs.call(EinstellungenModul);
            }
            else if (action === 'load') {
                EinstellungenModul.storage.loadTemplatesFromStorage(); // Lädt alle Vorlagen neu
                EinstellungenModul.coreApp.ui.showInfoModal('Geladen', `Vorlage "${targetKey}" wurde erfolgreich aus dem Browser geladen.`);
            }
            else if (action === 'import') {
                EinstellungenModul.dom.templateFileInput.dataset.currentTarget = targetKey;
                EinstellungenModul.dom.templateFileInput.click();
            }
            else if (action === 'export') {
                EinstellungenModul.storage.exportTextFile(textarea.value, fileName);
            }
        },

        /**
         * Importiert eine einzelne Vorlage aus einer Datei.
         */
        handleTemplateFileImport(event) {
            const targetKey = event.target.dataset.currentTarget, file = event.target.files[0];
            if (!targetKey || !file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const textarea = EinstellungenModul.dom.templateTextareas[targetKey];
                if (textarea) {
                    textarea.value = e.target.result;
                    // Nach dem Import die Platzhalter neu rendern
                    EinstellungenModul.placeholders.renderPlaceholderInputs.call(EinstellungenModul);
                    EinstellungenModul.coreApp.ui.showInfoModal('Importiert', `Vorlage "${targetKey}" wurde aus der Datei geladen.`);
                }
            };
            reader.onerror = () => EinstellungenModul.coreApp.ui.showErrorModal('Fehler beim Lesen der Datei.');
            reader.readAsText(file);
            event.target.value = '';
        },

        /**
         * Exportiert alle Vorlagen und Platzhalter in eine Datei (JSON/JS).
         */
        exportAll() {
            const allData = { 
                templates: {}, 
                customPlaceholders: EinstellungenModul.placeholders.getCustomValues() 
            };
            
            // Sammle alle Vorlagen aus den Textareas (aktuelle Werte)
            Object.keys(EinstellungenModul.dom.templateTextareas).forEach(key => {
                allData.templates[key] = EinstellungenModul.dom.templateTextareas[key].value;
            });

            const jsonDataString = JSON.stringify(allData, null, 2);
            const jsFileContent = `const vorlagenData = ${jsonDataString};`;

            // NEU: Exportiere mit spezifischeren Namen und korrigiere den .js Namen
            EinstellungenModul.storage.exportTextFile(jsFileContent, 'bpol_vorlagen_data.js'); // Korrigierter Name
            EinstellungenModul.storage.exportTextFile(jsonDataString, 'bpol_vorlagen_data.json');
            EinstellungenModul.storage.exportTextFile(jsonDataString, 'bpol_vorlagen_data.txt');
            
            EinstellungenModul.coreApp.ui.showInfoModal('Exportiert', 'Alle Vorlagen und Werte wurden in JS, JSON und TXT exportiert.');
        },

        /**
         * Importiert alle Daten aus einer Datei (JSON/JS).
         */
        importAll(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    let textContent = e.target.result.trim();
                    // Versuche, den JS-Wrapper 'const vorlagenData = ...' zu entfernen
                    if (textContent.startsWith('const vorlagenData =')) {
                        textContent = textContent.substring('const vorlagenData ='.length);
                    }
                    if (textContent.endsWith(';')) {
                        textContent = textContent.slice(0, -1);
                    }
                    const importedData = JSON.parse(textContent);
                    
                    // 1. Vorlagen importieren und speichern
                    if (importedData.templates) {
                        Object.keys(importedData.templates).forEach(key => { 
                            if (EinstellungenModul.dom.templateTextareas[key]) { 
                                EinstellungenModul.dom.templateTextareas[key].value = importedData.templates[key]; 
                            } 
                        });
                        // Vorlagen im localStorage speichern
                        EinstellungenModul.saveData(EinstellungenModul.TEMPLATES_STORAGE_KEY, importedData.templates);
                    }

                    // 2. Benutzerdefinierte Platzhalterwerte importieren und speichern
                    // Prüfen auf customPlaceholders UND den alten Schlüssel 'values'
                    const customValuesToImport = importedData.customPlaceholders || importedData.values;
                    
                    if (customValuesToImport) {
                        EinstellungenModul.placeholders.setCustomValues(customValuesToImport);
                    }
                    
                    EinstellungenModul.placeholders.renderPlaceholderInputs.call(EinstellungenModul); // UI aktualisieren
                    EinstellungenModul.coreApp.ui.showInfoModal('Import Erfolgreich', 'Alle Daten (Vorlagen und Platzhalter) wurden erfolgreich importiert und gespeichert.');

                } catch (error) {
                    EinstellungenModul.coreApp.ui.showErrorModal('Import Fehler', 'Ungültiges Datenformat. Die Datei konnte nicht als gültiges JSON/JS-Vorlagenformat geparst werden.');
                    console.error('Import Error:', error);
                }
            };
            reader.readAsText(file);
            event.target.value = '';
        },
        
        /**
         * Zeigt den Export-Text (JSON) im Modal an.
         */
        showExportAsText() {
             const data = {
                templates: {},
                customPlaceholders: EinstellungenModul.placeholders.getCustomValues(),
            };

            Object.keys(EinstellungenModul.dom.templateTextareas).forEach(key => {
                data.templates[key] = EinstellungenModul.dom.templateTextareas[key].value;
            });

            const jsonString = JSON.stringify(data, null, 2);
            
            EinstellungenModul.coreApp.dom.exportAsTextOutput.value = jsonString;
            EinstellungenModul.coreApp.ui.showModal('exportTextModal');
        },
        
        /**
         * Exportiert beliebigen Text in eine lokale Datei.
         */
        exportTextFile(content, fileName) {
             const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
             const a = document.createElement('a');
             a.href = URL.createObjectURL(blob);
             a.download = fileName;
             document.body.appendChild(a);
             a.click();
             document.body.removeChild(a);
             URL.revokeObjectURL(a.href);
        },

        /**
         * Automatisch importieren beim Start, wenn vorlagenData global verfügbar ist
         * UND localStorage KEINE Vorlagen gespeichert hat.
         */
        autoImportOnLoad() {
             // Prüfe, ob localStorage Vorlagen enthält. Wenn ja, überspringe Auto-Import.
             // loadTemplatesFromStorage wird in init() bereits aufgerufen. Wir prüfen hier nur
             // zur Sicherheit die Existenz von Vorlagen im DOM.
             const templatesFoundInDOM = EinstellungenModul.extractAllPlaceholders().length > 0;

             if (templatesFoundInDOM) {
                 return; // Bereits geladen
             }

             // Prüfe, ob die globale Variable vorlagenData (aus Vorlagen.js) existiert
             if (typeof window.vorlagenData !== 'undefined' && window.vorlagenData.templates) {
                 EinstellungenModul.storage.importAllFromVariable(window.vorlagenData);
                 console.log("Standardvorlagen aus Vorlagen.js wurden automatisch geladen.");
             }
        },
        
        // Helfer für den Auto-Import
        importAllFromVariable(data) {
             if (data.templates) {
                Object.keys(data.templates).forEach(key => { 
                    if (EinstellungenModul.dom.templateTextareas[key]) { 
                        EinstellungenModul.dom.templateTextareas[key].value = data.templates[key]; 
                    } 
                });
                EinstellungenModul.saveData(EinstellungenModul.TEMPLATES_STORAGE_KEY, data.templates);
            }
            
            // NEU: Prüfen auf customPlaceholders UND den alten Schlüssel 'values'
            const customValuesToImport = data.customPlaceholders || data.values;
            if (customValuesToImport) {
                EinstellungenModul.placeholders.setCustomValues(customValuesToImport);
            }
             // Triggere das Rendering, da nun Daten verfügbar sind
             EinstellungenModul.placeholders.renderPlaceholderInputs.call(EinstellungenModul); 
             EinstellungenModul.coreApp.ui.showInfoModal('Standard-Import', 'Standardvorlagen wurden aus Vorlagen.js geladen, da keine lokalen Daten gefunden wurden.', 2000);
        }
    },
    
    /**
     * Platzhalter-Logik: Verwaltet Custom Values (aus core.js verschoben).
     */
    placeholders: {
        
        getCustomValues() {
             // WICHTIG: Die Werte werden immer aus dem LocalStorage gelesen,
             // unabhängig davon, ob sie im Einstellungs-Tab angezeigt werden oder nicht.
             const values = EinstellungenModul.loadData(EinstellungenModul.PLACEHOLDER_VALUES_KEY) || {};
             return values;
        },

        setCustomValues(values) {
             EinstellungenModul.saveData(EinstellungenModul.PLACEHOLDER_VALUES_KEY, values);
        },
        
        /**
         * Rendert die Input-Felder für alle Platzhalter.
         */
        renderPlaceholderInputs() {
             const allPlaceholders = EinstellungenModul.extractAllPlaceholders();
             const customValues = EinstellungenModul.placeholders.getCustomValues();
             let html = '';

             if (allPlaceholders.length === 0) {
                  // Dies ist die Stelle, an der die Fehlermeldung/der Hinweis angezeigt wird
                  EinstellungenModul.dom.placeholderInputsContainer.innerHTML = `<div class="text-center p-8 text-gray-500"><p>Keine Platzhalter in den Vorlagen gefunden. Bitte Vorlagen prüfen.</p></div>`;
                  return;
             }

             allPlaceholders.forEach(placeholder => {
                 const id = `custom_placeholder_${placeholder}`;
                 // Der Wert wird direkt aus den gespeicherten Custom Values gelesen
                 const currentValue = customValues[placeholder] || '';
                 const isEmptyClass = currentValue.trim() === '' ? 'text-gray-400' : 'text-gray-700';

                 html += `
                     <div class="p-2 border-b border-gray-200 flex items-center justify-between placeholder-item" data-placeholder="${placeholder}">
                         <label for="${id}" class="text-xs font-mono w-1/3 mr-4 flex-shrink-0 ${isEmptyClass}">[${placeholder}]</label>
                         <input type="text" id="${id}" class="form-element form-input text-sm flex-grow"
                                data-placeholder-key="${placeholder}" value="${currentValue}"
                                placeholder="Benutzerdefinierter Wert">
                     </div>
                 `;
             });

             EinstellungenModul.dom.placeholderInputsContainer.innerHTML = `<div class="space-y-1">${html}</div>`;

             EinstellungenModul.dom.placeholderInputsContainer.querySelectorAll('input[data-placeholder-key]').forEach(input => {
                 input.addEventListener('input', EinstellungenModul.placeholders.updateCustomValue);
             });
        },

        /**
         * Aktualisiert den Wert eines Platzhalters.
         */
        updateCustomValue(e) {
             const input = e.target;
             const key = input.dataset.placeholderKey;
             const value = input.value.trim();

             const customValues = EinstellungenModul.placeholders.getCustomValues();
             if (value === '') {
                 delete customValues[key]; 
             } else {
                 customValues[key] = value;
             }
             EinstellungenModul.placeholders.setCustomValues(customValues); // Speichert sofort im LocalStorage

             const label = input.closest('.placeholder-item').querySelector('label');
             if (label) {
                 if (value === '') {
                     label.classList.remove('text-gray-700');
                     label.classList.add('text-gray-400');
                 } else {
                     label.classList.remove('text-gray-400');
                     label.classList.add('text-gray-700');
                 }
             }
        },

        /**
         * Sucht Platzhalter-Inputs.
         */
        searchPlaceholders() {
             const query = EinstellungenModul.dom.placeholderSearchInput.value.toLowerCase();
             const items = EinstellungenModul.dom.placeholderInputsContainer.querySelectorAll('.placeholder-item');

             items.forEach(item => {
                 const placeholder = item.dataset.placeholder.toLowerCase();
                 item.classList.toggle('hidden', !placeholder.includes(query));
             });
        },
        
        /**
         * Exportiert nur die Platzhalter-Werte.
         */
        exportValues() {
             const data = EinstellungenModul.placeholders.getCustomValues();
             const jsonString = JSON.stringify(data, null, 2);
             EinstellungenModul.storage.exportTextFile(jsonString, 'bpol_helfer_values.json');
        },

        /**
         * Importiert nur die Platzhalter-Werte.
         */
        importValues(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedData = JSON.parse(event.target.result);
                    
                    // ZUSÄTZLICHE PRÜFUNG: Sicherstellen, dass es ein einfaches Key-Value-Objekt ist
                    const isValidObject = (obj) => {
                        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false;
                        for (const key in obj) {
                            if (typeof key !== 'string' || typeof obj[key] !== 'string') {
                                return false; // Schlüssel oder Wert sind keine Strings
                            }
                        }
                        return true;
                    };

                    let finalValues = null;

                    // Fall 1: Importierte Datei ist bereits ein reines KV-Objekt
                    if (isValidObject(importedData)) {
                        finalValues = importedData;
                    } 
                    // Fall 2: Importierte Datei ist ein Global-Export (mit values oder customPlaceholders)
                    else if (typeof importedData === 'object' && importedData !== null) {
                        const valuesKey = importedData.customPlaceholders ? 'customPlaceholders' : 'values';
                        if (importedData[valuesKey] && isValidObject(importedData[valuesKey])) {
                             finalValues = importedData[valuesKey];
                        }
                    }

                    if (finalValues) {
                        EinstellungenModul.placeholders.setCustomValues(finalValues);
                        EinstellungenModul.placeholders.renderPlaceholderInputs.call(EinstellungenModul);
                        EinstellungenModul.coreApp.ui.showInfoModal('Import Erfolgreich', 'Die benutzerdefinierten Platzhalterwerte wurden erfolgreich importiert und gespeichert.');
                    } else {
                         EinstellungenModul.coreApp.ui.showErrorModal('Import Fehler', 'Ungültige Struktur. Die Datei enthielt kein gültiges JSON-Objekt mit Platzhalterwerten.');
                    }

                } catch (error) {
                    // Zeige eine spezifische Fehlermeldung für ungültiges JSON
                    EinstellungenModul.coreApp.ui.showErrorModal('Import Fehler', 'Ungültiges Dateiformat. Stellen Sie sicher, dass der Inhalt der Datei ein gültiges JSON-Objekt ist.');
                    console.error('Import Error:', error);
                }
            };
            reader.readAsText(file);
            e.target.value = null;
        }
    },
    
    /**
     * Dossier-Editor Logik (aus core.js verschoben).
     */
    dossierEditor: {
        handleFormatButtonClick(e) {
            const target = e.target;
            if (target.matches('.dossier-format-btn') || target.matches('.dossier-list-btn')) {
                 const tag = target.dataset.tag;
                 const style = target.dataset.style;
                 const targetId = target.dataset.target;
                 
                 if (target.matches('.dossier-format-btn')) {
                      EinstellungenModul.dossierEditor.applyFormat(targetId, tag, style); 
                 } else if (target.matches('.dossier-list-btn')) {
                      EinstellungenModul.dossierEditor.insertList(targetId);
                 }
            }
        },

        // Wendet HTML-Tag oder Style auf markierten Text an
        applyFormat(targetId, tag = null, style = null) {
            const textarea = document.getElementById(targetId);
            if (!textarea) return;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = textarea.value.substring(start, end);
            if (!selectedText) return;

            const before = textarea.value.substring(0, start);
            const after = textarea.value.substring(end);
            let formattedText = selectedText;

            if (tag) {
                formattedText = `<${tag}>${selectedText}</${tag}>`;
            } else if (style) {
                formattedText = `<span style="${style}">${selectedText}</span>`;
            }

            textarea.value = before + formattedText + after;
            textarea.focus();
            
            // Cursorposition nach der Einfügung anpassen
             if (tag) {
                 textarea.setSelectionRange(start + tag.length + 2, end + tag.length + 2);
             } else if (style) {
                 // Einfacher: Cursor ans Ende des neuen Texts
                 textarea.setSelectionRange(start + formattedText.length, start + formattedText.length);
             }
        },

        // Wandelt markierte Zeilen in eine HTML-Liste um
        insertList(targetId) {
            const textarea = document.getElementById(targetId);
            if (!textarea) return;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            let selectedText = textarea.value.substring(start, end);
            const originalSelectionLength = selectedText.length;

            if (!selectedText) { 
                 selectedText = 'Punkt 1\nPunkt 2'; 
            }

            const lines = selectedText.split(/\r?\n/).filter(line => line.trim() !== '');
            if (lines.length === 0 && originalSelectionLength === 0) {
                 return;
            }
             if (lines.length === 0 && selectedText) {
                 lines.push(''); 
            }

            const listItems = lines.map(line => `     <li>${line.trim()}</li>`).join('\n');
            const listHTML = `<ul>\n${listItems}\n</ul>`;

            const before = textarea.value.substring(0, start);
            const after = textarea.value.substring(end);

            textarea.value = before + listHTML + after;
            textarea.focus();
            textarea.setSelectionRange(start + listHTML.length, start + listHTML.length);
        },

        // Generiert den Code für das Dossier Objekt
        generateCode() {
             const dossier = {};
             // Helper function to add property only if value exists
             const addProp = (key, value) => {
                 if (value !== null && value !== undefined && value !== '') {
                     dossier[key] = value;
                 }
             };

             const getVal = (id) => document.getElementById(id)?.value;

             addProp('id', getVal('dossierId'));
             addProp('sortOrder', parseInt(getVal('dossierSortOrder') || 999, 10));
             addProp('art', getVal('dossierArt'));
             addProp('name', getVal('dossierName'));
             addProp('name_de', getVal('dossierNameDe'));
             addProp('schengengueltig', getVal('dossierSchengengueltig'));
             addProp('inDeutschlandAnerkannt', getVal('dossierInDeAnerkannt'));
             addProp('beschreibung', getVal('dossierBeschreibung'));
             addProp('grenzkontrollhinweise', getVal('dossierGrenzhinweise'));
             addProp('imageFile', getVal('dossierImageFile'));

             const altImagesRaw = getVal('dossierAlternativeImages') || '';
             const alternativeImages = altImagesRaw ? altImagesRaw.split(',').map(s => s.trim()).filter(s => s) : [];
             if (alternativeImages.length > 0) {
                 dossier.alternativeImages = alternativeImages;
             }

             const codeString = JSON.stringify(dossier, null, 2).replace(/"/g, '`').replace(/\\n/g, '\n'); // Code in Backticks umwandeln und Zeilenumbrüche fixen

             const outputArea = document.getElementById('dossierOutputCode');
             if(outputArea) {
                 outputArea.value = codeString;
                 EinstellungenModul.coreApp.ui.showInfoModal('Code Generiert', 'Der Dossier Code ist im Ausgabefeld verfügbar.', 1500);
             }
        },

        // Lädt JSON Code in den Editor
        loadCodeIntoEditor() {
             const codeArea = document.getElementById('dossierLoadCodeArea');
             const outputArea = document.getElementById('dossierOutputCode'); 
             if (!codeArea || !outputArea) return;

             const codeToLoad = codeArea.value.trim();
             if (!codeToLoad) {
                 outputArea.value = 'Fehler: Kein Code zum Laden eingefügt.';
                 return;
             }

             try {
                 // Ersetze Backticks wieder durch Quotes, um es als valides JSON zu parsen
                 const parsableCode = codeToLoad.replace(/`/g, '"').replace(/\\n/g, '\\n');
                 const dossier = JSON.parse(parsableCode);

                 // Felder füllen
                 document.getElementById('dossierId').value = dossier.id || '';
                 document.getElementById('dossierSortOrder').value = dossier.sortOrder || 999;
                 document.getElementById('dossierArt').value = dossier.art || 'Reisepass';
                 document.getElementById('dossierName').value = dossier.name || '';
                 document.getElementById('dossierNameDe').value = dossier.name_de || '';
                 document.getElementById('dossierSchengengueltig').value = dossier.schengengueltig || '';
                 document.getElementById('dossierInDeAnerkannt').value = dossier.inDeutschlandAnerkannt || '';
                 document.getElementById('dossierBeschreibung').value = dossier.beschreibung || '';
                 document.getElementById('dossierGrenzhinweise').value = dossier.grenzkontrollhinweise || '';
                 document.getElementById('dossierImageFile').value = dossier.imageFile || '';
                 document.getElementById('dossierAlternativeImages').value = (dossier.alternativeImages || []).join(', ');

                 outputArea.value = 'Code erfolgreich in den Editor geladen.';
             } catch (error) {
                 console.error("Fehler beim Parsen des Dossier-Codes:", error);
                 outputArea.value = `Fehler beim Laden: Ungültiger JSON-Code.\n${error.message}`;
             }
        },
        
        // Generiert den JSON-Code für Ländervorlagen.
        generateLaenderCode() {
             const code = EinstellungenModul.dom.laenderCodeSelect.value.toUpperCase().trim();
             if (code.length !== 2) {
                 EinstellungenModul.coreApp.ui.showErrorModal('Bitte geben Sie einen gültigen 2-stelligen Ländercode ein (z.B. NL).');
                 EinstellungenModul.dom.laenderCodeOutput.value = '';
                 return;
             }

             if (typeof window.Schengenhandbuch === 'undefined' || typeof window.Schengenhandbuch.getCountryDataForExport !== 'function') {
                 EinstellungenModul.coreApp.ui.showErrorModal('Das Schengenhandbuch-Modul ist nicht geladen oder die Exportfunktion fehlt.');
                 EinstellungenModul.dom.laenderCodeOutput.value = '// Fehler: Schengenhandbuch-Modul nicht gefunden.';
                 return;
             }

             const countryData = window.Schengenhandbuch.getCountryDataForExport(code);

             if (Object.keys(countryData).length === 0) {
                 EinstellungenModul.coreApp.ui.showInfoModal('Hinweis', `Für Ländercode ${code} wurden keine spezifischen Vorlagen gefunden.`);
                 EinstellungenModul.dom.laenderCodeOutput.value = `// Keine länderspezifischen Vorlagen für ${code} gefunden.`;
                 return;
             }

             // Formatiere den Code für die JS-Datei
             const output = `/* Ländervorlagen für ${code} */
    '${code}': ${JSON.stringify(countryData, null, 4).replace(/"/g, '`')}`; // JSON mit Backticks statt Quotes

             EinstellungenModul.dom.laenderCodeOutput.value = output;
             EinstellungenModul.coreApp.ui.showInfoModal('Code generiert', `Der Code für Ländercode ${code} wurde in das Textfeld kopiert.`, 1500);
        }
    }
};

window.EinstellungenModul = Einstellungen;
