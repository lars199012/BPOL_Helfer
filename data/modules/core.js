/* =============================================
 * core.js - Der Dirigent (Globale App-Logik)
 * ============================================= */

const App = {
    config: {
        version: '0.6.0' // Globale Konfiguration
    },
    dom: {}, // Cache für GLOBALE DOM-Elemente (Tabs, Modals, etc.)
    state: {
        confirmAction: null // Für das Bestätigungs-Modal
    },

    // -----------------------------------------------------------------
    // INITIALISIERUNG
    // -----------------------------------------------------------------
    init() {
        console.log("App.init() gestartet...");

        // 1. Lade HTML für alle Tabs (aus den jeweiligen .js Dateien)
        this.loadTabHTML();

        // 2. Cache GLOBALE DOM-Elemente
        this.cacheGlobalDom();
        console.log("Global DOM gecached:", Object.keys(this.dom));

        // 3. Binde GLOBALE Events (Tab-Wechsel, Modal-Schließer etc.)
        this.bindGlobalEvents();
        console.log("Global Events gebunden.");

        // 4. Initialisiere alle Fach-Module
        // Übergabe von 'this' (App), damit Module auf globale Funktionen zugreifen können
        if (typeof StrafanzeigenModul !== 'undefined') StrafanzeigenModul.init(this); else console.error("StrafanzeigenModul nicht gefunden!");
        if (typeof FahndungenModul !== 'undefined') FahndungenModul.init(this); else console.error("FahndungenModul nicht gefunden!");
        if (typeof OwiModul !== 'undefined') OwiModul.init(this); else console.error("OwiModul nicht gefunden!");
        if (typeof EinstellungenModul !== 'undefined') EinstellungenModul.init(this); else console.error("EinstellungenModul nicht gefunden!");
        if (typeof Schengenhandbuch !== 'undefined') Schengenhandbuch.init(this); else console.error("Schengenhandbuch nicht gefunden!"); // Schengenhandbuch braucht ggf. auch App-Referenz

        // 5. Setze globale UI-Elemente (Version, Mail-Link)
        if (this.dom.versionDisplay) this.dom.versionDisplay.textContent = `Version ${this.config.version}`;
        if (this.dom['tab-fehlermelden']) this.dom['tab-fehlermelden'].href = `mailto:Lars.Schuemer@polizei.bund.de?subject=Fehlermeldung%20Version%20${this.config.version}`;

        // 6. Entwickler-Tabs initial deaktivieren
        this.dom['tab-einstellungen']?.classList.add('disabled-tab');
        this.dom['tab-schengenhandbuch']?.classList.add('disabled-tab');

        // 7. Auto-Import aus Vorlagen.js (wird vom EinstellungenModul gehandhabt)
        EinstellungenModul?.storage?.autoImportOnLoad?.(); // Sicherer Aufruf

        console.log("App.init() abgeschlossen.");
    },

    loadTabHTML() {
        const load = (containerId, htmlContent) => {
            const container = document.getElementById(containerId);
            if (container && typeof htmlContent !== 'undefined') {
                container.innerHTML = htmlContent;
            } else {
                console.warn(`Container ${containerId} oder HTML-Inhalt nicht gefunden.`);
            }
        };
        load('content-strafanzeigen', typeof strafanzeigenHTML !== 'undefined' ? strafanzeigenHTML : undefined);
        load('content-fahndungen', typeof fahndungenHTML !== 'undefined' ? fahndungenHTML : undefined);
        load('content-ordnungswidrigkeiten', typeof ordnungswidrigkeitenHTML !== 'undefined' ? ordnungswidrigkeitenHTML : undefined);
        load('content-einstellungen', typeof einstellungenHTML !== 'undefined' ? einstellungenHTML : undefined);
        // Schengenhandbuch wird durch sein eigenes init() gerendert
        // Berichte/Hilfe sind statisch oder könnten auch so geladen werden
    },

    cacheGlobalDom() {
        // Nur Elemente, die *nicht* spezifisch für einen Tab sind oder von mehreren Tabs gebraucht werden (Modals!)
        const ids = [
            'versionDisplay', 'tab-fehlermelden', 'developerModeToggle', 'developerModeCheckbox',
            // Tabs und Content-Container (für switchTab)
            'tab-strafanzeigen', 'tab-ordnungswidrigkeiten', 'tab-fahndungen', 'tab-berichte', 'tab-einstellungen', 'tab-schengenhandbuch',
            'content-strafanzeigen', 'content-ordnungswidrigkeiten', 'content-fahndungen', 'content-berichte', 'content-einstellungen', 'content-schengenhandbuch',
            // Modals und ihre Controls
            'outputModal', 'closeModalBtn', 'copyOutputBtn', 'finalOutput',
            'errorModal', 'errorModalText', 'closeErrorModalBtn',
            'infoModal', 'infoModalTitle', 'infoModalText', 'closeInfoModalBtn',
            'confirmModal', 'confirmModalTitle', 'confirmModalText', 'confirmModalYesBtn', 'confirmModalNoBtn',
            'anleitungModal', 'closeAnleitungModalBtn', // showAnleitungBtn ist in Modulen, da mehrfach vorhanden
            'exportTextModal', 'exportAsTextOutput', 'copyExportTextBtn', 'closeExportTextModalBtn'
        ];
        ids.forEach(id => {
            const element = document.getElementById(id);
            //if (element) { // Nur cachen, wenn gefunden
                this.dom[id] = element;
            //} else {
            //    console.warn(`Global DOM Element mit ID "${id}" nicht gefunden.`);
            //}
        });
    },

    bindGlobalEvents() {
        // Nur Events für globale Elemente
        this.dom['tab-strafanzeigen']?.parentElement?.addEventListener('click', this.handlers.handleTabClick.bind(this)); // Event Delegation am Nav-Container
        this.dom.closeModalBtn?.addEventListener('click', () => this.ui.hideModal('outputModal'));
        this.dom.closeErrorModalBtn?.addEventListener('click', () => this.ui.hideModal('errorModal'));
        this.dom.closeInfoModalBtn?.addEventListener('click', () => this.ui.hideModal('infoModal'));
        this.dom.closeAnleitungModalBtn?.addEventListener('click', () => this.ui.hideModal('anleitungModal'));
        this.dom.closeExportTextModalBtn?.addEventListener('click', () => this.ui.hideModal('exportTextModal'));

        this.dom.confirmModalYesBtn?.addEventListener('click', () => {
            if (typeof this.state.confirmAction === 'function') { this.state.confirmAction(); }
            this.ui.hideModal('confirmModal');
            this.state.confirmAction = null;
        });
        this.dom.confirmModalNoBtn?.addEventListener('click', () => {
            this.ui.hideModal('confirmModal');
            this.state.confirmAction = null;
        });

        this.dom.copyOutputBtn?.addEventListener('click', this.handlers.handleCopyClick.bind(this, this.dom.finalOutput, this.dom.copyOutputBtn));
        this.dom.copyExportTextBtn?.addEventListener('click', this.handlers.handleCopyClick.bind(this, this.dom.exportAsTextOutput, this.dom.copyExportTextBtn));

        this.dom.developerModeToggle?.addEventListener('click', this.handlers.handleDeveloperModeToggle.bind(this));
    },

    // -----------------------------------------------------------------
    // GLOBALE HANDLER
    // -----------------------------------------------------------------
    handlers: {
        handleTabClick(e) {
            const button = e.target.closest('.tab-button'); // Finde den geklickten Button
            if (!button || !button.id) return; // Klick war nicht auf einem Button oder Button hat keine ID

            const tabId = button.id.replace('tab-', '');
            const isDevMode = this.dom.developerModeCheckbox?.checked;
            const isDevTab = ['einstellungen', 'schengenhandbuch'].includes(tabId);

            if (isDevTab && !isDevMode) {
                this.ui.showErrorModal("Diese Funktionen sind momentan nur Entwicklern zugängig.");
                return;
            }

            const allTabs = ['strafanzeigen', 'fahndungen', 'ordnungswidrigkeiten', 'berichte', 'einstellungen', 'schengenhandbuch'];
            if (allTabs.includes(tabId)) {
                this.ui.switchTab(tabId);
            }

            // Ggf. Modul neu initialisieren, wenn es dynamisch Inhalte nachlädt (wie Schengenhandbuch)
            if (tabId === 'schengenhandbuch' && typeof Schengenhandbuch !== 'undefined') {
                 // Schengenhandbuch rendert sich selbst neu bei Bedarf oder in seinem init
                 // Hier könnte man sicherstellen, dass es initialisiert ist, falls es komplexer wird.
                 // Schengenhandbuch.init(this); // Nur wenn nötig
            }
        },

        handleCopyClick(textareaElement, buttonElement) { // Generischer Copy-Handler
            if (!textareaElement || !buttonElement) return;
            const originalText = buttonElement.innerHTML; // Speichere originalen Button-Inhalt
            textareaElement.select();
            try {
                document.execCommand('copy');
                buttonElement.innerHTML = '<span>Kopiert!</span>';
                setTimeout(() => {
                    buttonElement.innerHTML = originalText; // Stelle originalen Inhalt wieder her
                }, 2000);
            } catch (err) {
                console.error('Fehler beim Kopieren:', err);
                buttonElement.innerHTML = '<span>Fehler!</span>';
                 setTimeout(() => {
                    buttonElement.innerHTML = originalText;
                }, 2000);
            }
        },

        handleDeveloperModeToggle() {
            const checkbox = this.dom.developerModeCheckbox;
            const button = this.dom.developerModeToggle;
            if (!checkbox || !button) return;

            checkbox.checked = !checkbox.checked;
            const isChecked = checkbox.checked;

            button.textContent = `Entwicklermodus: ${isChecked ? 'An' : 'Aus'}`;
            button.classList.toggle('active-dev-mode', isChecked);
            // Globale Debug-Platzhalter (falls vorhanden)
            document.querySelectorAll('.debug-placeholder').forEach(span => span.classList.toggle('hidden', !isChecked));

            // Dev-Tabs aktivieren/deaktivieren
            this.dom['tab-einstellungen']?.classList.toggle('disabled-tab', !isChecked);
            this.dom['tab-schengenhandbuch']?.classList.toggle('disabled-tab', !isChecked);

            // Informiere Module über den Dev-Modus-Wechsel
            StrafanzeigenModul?.toggleDevMode?.(isChecked);
            FahndungenModul?.toggleDevMode?.(isChecked);
            OwiModul?.toggleDevMode?.(isChecked);
            EinstellungenModul?.toggleDevMode?.(isChecked);
            // Schengenhandbuch hat vielleicht keine Dev-Elemente

            // Falls Dev-Modus aus und ein Dev-Tab aktiv war -> wechsle zurück
            if (!isChecked) {
                const activeTab = document.querySelector('.tab-button.active')?.id;
                if (activeTab === 'tab-einstellungen' || activeTab === 'tab-schengenhandbuch') {
                    this.ui.switchTab('strafanzeigen');
                }
            }
        }
    },

    // -----------------------------------------------------------------
    // GLOBALE UI-FUNKTIONEN (Services für Module)
    // -----------------------------------------------------------------
    ui: {
        showModal(modalId) {
            App.dom[modalId]?.classList.remove('hidden');
        },
        hideModal(modalId) {
            App.dom[modalId]?.classList.add('hidden');
        },
        showErrorModal(message) {
            if (App.dom.errorModalText) App.dom.errorModalText.textContent = message;
            App.ui.showModal('errorModal');
        },
        showInfoModal(title, message) {
            if (App.dom.infoModalTitle) App.dom.infoModalTitle.textContent = title;
            if (App.dom.infoModalText) App.dom.infoModalText.textContent = message;
            App.ui.showModal('infoModal');
        },
        showConfirmModal(title, message, onConfirm) {
            if (App.dom.confirmModalTitle) App.dom.confirmModalTitle.textContent = title;
            if (App.dom.confirmModalText) App.dom.confirmModalText.textContent = message;
            App.state.confirmAction = onConfirm;
            App.ui.showModal('confirmModal');
        },
        showAnleitungModal() {
            App.ui.showModal('anleitungModal');
        },
        switchTab(activeTabId) {
            ['strafanzeigen', 'fahndungen', 'ordnungswidrigkeiten', 'berichte', 'einstellungen', 'schengenhandbuch'].forEach(tab => {
                const isTabActive = activeTabId === tab;
                App.dom[`tab-${tab}`]?.classList.toggle('active', isTabActive);
                App.dom[`content-${tab}`]?.classList.toggle('hidden', !isTabActive);
            });
        },
        // Zeige den generierten Output im globalen Modal an
        displayGeneratedOutput(outputText) {
             if (App.dom.finalOutput) App.dom.finalOutput.value = outputText;
             App.ui.showModal('outputModal');
        }
    },

    // -----------------------------------------------------------------
    // GLOBALE UTILITY-FUNKTIONEN (Services für Module)
    // -----------------------------------------------------------------
    utils: {
        formatDate(date) {
            if (!date || isNaN(new Date(date))) return '';
            const d = new Date(date);
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            return `${day}.${month}.${year}`;
        },
        getCurrentDate() {
            return new Date().toISOString().split('T')[0]; // YYYY-MM-DD Format für <input type="date">
        },
        daysBetween(d1Str, d2Str) {
            if (!d1Str || !d2Str) return '';
            try {
                // Versuche, Datum im Format YYYY-MM-DD oder DD.MM.YYYY zu parsen
                const parseDate = (str) => {
                    if (str.includes('-')) return new Date(str);
                    if (str.includes('.')) {
                        const parts = str.split('.');
                        if (parts.length === 3) return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                    }
                    return new Date(NaN); // Ungültiges Format
                };

                const date1 = parseDate(d1Str);
                const date2 = parseDate(d2Str);

                if (isNaN(date1) || isNaN(date2)) return '';

                const oneDay = 86400000; // Millisekunden pro Tag
                 // Setze die Zeit auf Mittag, um Sommer-/Winterzeitprobleme zu vermeiden
                date1.setHours(12, 0, 0, 0);
                date2.setHours(12, 0, 0, 0);

                const diffTime = Math.abs(date2.getTime() - date1.getTime());
                const diffDays = Math.round(diffTime / oneDay);
                return diffDays + 1; // Inklusive Start- und Endtag
            } catch (e) {
                console.error("Fehler bei daysBetween:", e);
                return '';
            }
        },
        populateSelect(selectElement, options, addEmptyOption = false) {
            if (!selectElement) {
                console.warn("populateSelect: Select-Element nicht gefunden.");
                return;
            }
            selectElement.innerHTML = ''; // Vorherigen Inhalt leeren
            if (addEmptyOption) {
                const emptyOption = document.createElement('option');
                emptyOption.value = '';
                emptyOption.textContent = '-- Bitte wählen --';
                selectElement.appendChild(emptyOption);
            }
            if (Array.isArray(options)) {
                options.forEach(optionValue => {
                    if (optionValue === null || optionValue === undefined) return;
                    const option = document.createElement('option');
                    option.value = typeof optionValue === 'string' ? optionValue.toLowerCase() : optionValue; // Wert klein schreiben für Konsistenz?
                    option.textContent = typeof optionValue === 'string' ? optionValue.charAt(0).toUpperCase() + optionValue.slice(1) : optionValue;
                    selectElement.appendChild(option);
                });
            } else {
                 console.warn("populateSelect: options ist kein Array.", options);
            }
        },
        // Generische Input-Formatierer (können hier zentral sein)
        formatInputAsDate(e) {
            let value = e.target.value.replace(/[^\d]/g, '');
            if (value.length > 4) value = value.slice(0, 2) + '.' + value.slice(2, 4) + '.' + value.slice(4, 8);
            else if (value.length > 2) value = value.slice(0, 2) + '.' + value.slice(2, 4);
            e.target.value = value;
        },
        formatInputAsTime(e) {
            let value = e.target.value.replace(/[^\d]/g, '');
            if (value.length > 2) value = value.slice(0, 2) + ':' + value.slice(2, 4);
            e.target.value = value;
        }
    }
};

// Startet die Anwendung
document.addEventListener('DOMContentLoaded', () => {
    // Sicherstellen, dass alle Module geladen sind, bevor App.init() aufgerufen wird
    // Normalerweise durch die Reihenfolge der <script>-Tags gewährleistet
    App.init();
});
