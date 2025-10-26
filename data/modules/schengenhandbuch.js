const Schengenhandbuch = {
    // Statische Länderliste. Dokumente und Dossiers werden dynamisch geladen.
    countries: [
        // Deutschland zuerst
        { name: "Deutschland", code: "DE", type: "schengen" },
        // Nachbarländer
        { name: "Niederlande", code: "NL", type: "schengen" },
        { name: "Belgien", code: "BE", type: "schengen" },
        { name: "Polen", code: "PL", type: "schengen" },
        { name: "Frankreich", code: "FR", type: "schengen" },
        // Restliche Schengenländer alphabetisch - DEAKTIVIERT
        /*
        { name: "Bulgarien", code: "BG", type: "schengen" },
        { name: "Dänemark", code: "DK", type: "schengen" },
        { name: "Estland", code: "EE", type: "schengen" },
        { name: "Finnland", code: "FI", type: "schengen" },
        { name: "Griechenland", code: "GR", type: "schengen" },
        { name: "Island", code: "IS", type: "schengen" },
        { name: "Italien", code: "IT", type: "schengen" },
        { name: "Kroatien", code: "HR", type: "schengen" },
        { name: "Lettland", code: "LV", type: "schengen" },
        { name: "Liechtenstein", code: "LI", type: "schengen" },
        { name: "Litauen", code: "LT", type: "schengen" },
        { name: "Luxemburg", code: "LU", type: "schengen" },
        { name: "Malta", code: "MT", type: "schengen" },
        { name: "Norwegen", code: "NO", type: "schengen" },
        { name: "Österreich", code: "AT", type: "schengen" },
        { name: "Portugal", code: "PT", type: "schengen" },
        { name: "Rumänien", code: "RO", type: "schengen" },
        { name: "Schweden", code: "SE", type: "schengen" },
        { name: "Schweiz", code: "CH", type: "schengen" },
        { name: "Slowakei", code: "SK", type: "schengen" },
        { name: "Slowenien", code: "SI", type: "schengen" },
        { name: "Spanien", code: "ES", type: "schengen" },
        { name: "Tschechien", code: "CZ", type: "schengen" },
        { name: "Ungarn", code: "HU", type: "schengen" },
        */
        // Nicht-Schengenländer - JETZT AKTIVIERT
        { name: "Libanon", code: "LB", type: "non-schengen" },
        { name: "Afghanistan", code: "AF", type: "non-schengen" }
        // { name: "Syrien", code: "SY", type: "non-schengen" }, // Syrien bleibt optional deaktiviert
    ],
    // Zustandsvariablen
    currentCountry: null,
    currentDocumentType: null,
    dossiersByCountry: {}, // Cache für geladene Länderdaten
    dom: {},

    init() {
        this.renderSchengenUI();
        this.cacheDomElements();
        this.bindEvents();
    },

    // Globale Callback-Funktion, die von den Daten-Dateien aufgerufen wird
    registerData(countryCode, data) {
        this.dossiersByCountry[countryCode] = data;
        // Nach dem Laden der Daten die nächste Ansicht rendern
        // Nur rendern, wenn das aktuelle Land noch dem geladenen Code entspricht
        if (this.currentCountry && this.currentCountry.code === countryCode) {
            this.renderDocumentTypeFilter(this.currentCountry.name);
        }
        this.hideLoadingIndicator();
    },

    cacheDomElements() {
        this.dom.mainContainer = document.getElementById('content-schengenhandbuch');
        // Nur Elemente innerhalb des mainContainers suchen, um Konflikte zu vermeiden
        if (this.dom.mainContainer) {
            this.dom.homeBtn = this.dom.mainContainer.querySelector('#home-btn');
            this.dom.schengenChoiceContainer = this.dom.mainContainer.querySelector('#schengen-choice-container');
            this.dom.countryGroupContainer = this.dom.mainContainer.querySelector('#country-group-container');
            this.dom.dokumenteContainer = this.dom.mainContainer.querySelector('#dokumente-group-container');
            this.dom.documentTypeButtons = this.dom.mainContainer.querySelector('#schengen-document-type-buttons');
            this.dom.dokumenteImages = this.dom.mainContainer.querySelector('#schengen-dokumente-images');
            this.dom.dossierViewContainer = this.dom.mainContainer.querySelector('#schengen-dossier-container');
        } else {
            console.error("Schengenhandbuch: Hauptcontainer 'content-schengenhandbuch' nicht gefunden.");
        }
    },

    renderSchengenUI() {
        const mainContainer = document.getElementById('content-schengenhandbuch');
        if (!mainContainer) {
            console.error("Schengenhandbuch: Hauptcontainer 'content-schengenhandbuch' konnte nicht gefunden werden.");
            return;
        }
        mainContainer.innerHTML = `
            <div class="space-y-6">
                 <div id="schengen-header-container" class="bpol-card p-4 flex justify-between items-center">
                     <p id="header-text" class="app-main-header-text text-center flex-grow">Willkommen im Schengen-Handbuch. Bitte wählen Sie einen Landestyp.</p>
                     <button id="home-btn" title="Zurück zur Startseite" class="btn btn-secondary hidden flex items-center gap-2">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                         <span>Start</span>
                     </button>
                 </div>

                 <div id="schengen-choice-container" class="bpol-card p-4 space-y-4">
                     <div class="form-row-grid">
                         <label class="font-medium text-gray-700">Landestyp</label>
                         <div class="segmented-control w-full">
                             <input type="radio" name="schengen_choice" id="schengen-choice-yes" value="schengen">
                             <label for="schengen-choice-yes">Schengenland</label>
                             <input type="radio" name="schengen_choice" id="schengen-choice-no" value="non-schengen">
                             <label for="schengen-choice-no">Nicht-Schengenland</label>

 
                             <input type="radio" name="schengen_choice" id="schengen-choice-cmc" value="cmc" disabled>
                             <label for="schengen-choice-cmc" class="opacity-50 pointer-events-none cursor-not-allowed"><i>CMCs (noch nicht verfügbar)</i></label>
 
                         </div>
                     </div>
                 </div>

                 <div id="country-group-container" class="space-y-6 hidden"></div>
                 <div id="loading-indicator" class="hidden text-center p-4">Lade Daten...</div>

                 <div id="dokumente-group-container" class="bpol-card hidden">
                     <div class="bpol-card-header p-4 flex items-center justify-between">
                         <span id="dokumente-country-name"></span>
                         <button id="toggle-country-group-btn" title="Einen Schritt zurück" class="btn btn-secondary flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            <span>Zurück</span>
                         </button>
                     </div>
                     <div id="schengen-document-type-buttons" class="p-6 grid grid-cols-1 md:grid-cols-3 gap-4"></div>
                     <div id="schengen-dokumente-images" class="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
                     <div id="schengen-dossier-container" class="p-6 pt-0 space-y-4"></div>
                 </div>
            </div>
        `;
        // Cache muss hier aufgerufen werden, *nachdem* das HTML neu gesetzt wurde
        this.cacheDomElements();
        this.renderInitialChoice();
    },

    renderInitialChoice() {
        if (!this.dom.mainContainer) return;
        this.dom.mainContainer.querySelectorAll('.bpol-card, #country-group-container').forEach(el => el.classList.add('hidden'));
        const headerContainer = this.dom.mainContainer.querySelector('#schengen-header-container');
        if (headerContainer) headerContainer.classList.remove('hidden');
        if (this.dom.homeBtn) this.dom.homeBtn.classList.add('hidden');
        if (this.dom.schengenChoiceContainer) this.dom.schengenChoiceContainer.classList.remove('hidden');
        const headerText = this.dom.mainContainer.querySelector('#header-text');
        if (headerText) {
            headerText.textContent = 'Willkommen im Schengen-Handbuch. Bitte wählen Sie einen Landestyp.';
            headerText.style.display = 'block';
        }
        this.currentCountry = null;
        this.currentDocumentType = null;
        const radioYes = this.dom.mainContainer.querySelector('#schengen-choice-yes');
        const radioNo = this.dom.mainContainer.querySelector('#schengen-choice-no');
        if (radioYes) radioYes.checked = false;
        if (radioNo) radioNo.checked = false;
    },

    renderCountries(type) {
        if (!this.dom.countryGroupContainer) return;
        this.dom.countryGroupContainer.innerHTML = `
            <div class="bpol-card">
                <div class="bpol-card-header p-4">Gruppe ${type === 'schengen' ? 'Schengenländer' : 'Nicht-Schengenländer'}</div>
                <div id="country-buttons" class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
            </div>`;
        if (this.dom.schengenChoiceContainer) this.dom.schengenChoiceContainer.classList.add('hidden');
        this.dom.countryGroupContainer.classList.remove('hidden');
        if (this.dom.homeBtn) this.dom.homeBtn.classList.remove('hidden');
        const headerText = this.dom.mainContainer.querySelector('#header-text');
        if (headerText) {
            headerText.textContent = 'Bitte wählen Sie ein Land.';
            headerText.style.display = 'block';
        }
        const countryButtonsContainer = this.dom.countryGroupContainer.querySelector('#country-buttons');
        if (!countryButtonsContainer) return;
        const filteredCountries = this.countries.filter(c => c.type === type);
        filteredCountries.forEach(country => {
            const button = document.createElement('button');
            button.textContent = country.name;
            button.className = 'btn btn-secondary px-4 py-2 rounded-md';
            button.dataset.countryName = country.name;
            button.dataset.countryCode = country.code;
            countryButtonsContainer.appendChild(button);
        });
    },

    handleCountryClick(countryName, countryCode) {
        const headerText = this.dom.mainContainer.querySelector('#header-text');
        if (headerText) headerText.style.display = 'none';
        this.currentCountry = { name: countryName, code: countryCode };
        if (this.dossiersByCountry[countryCode]) {
            this.renderDocumentTypeFilter(countryName);
        } else {
            this.showLoadingIndicator();
            const script = document.createElement('script');
            script.src = `data/database/${countryCode}.js`;
            script.onerror = () => {
                this.hideLoadingIndicator();
                this.registerData(countryCode, []);
                console.warn(`Schengenhandbuch: Daten für ${countryCode} konnten nicht geladen werden.`);
                this.renderDocumentTypeFilter(countryName);
            };
            document.body.appendChild(script);
        }
    },

    renderDocumentTypeFilter(countryName) {
        this.currentDocumentType = null;
        if (this.dom.countryGroupContainer) this.dom.countryGroupContainer.classList.add('hidden');
        if (this.dom.dokumenteContainer) this.dom.dokumenteContainer.classList.remove('hidden');
        if (this.dom.documentTypeButtons) this.dom.documentTypeButtons.classList.remove('hidden');
        if (this.dom.dokumenteImages) this.dom.dokumenteImages.classList.add('hidden');
        if (this.dom.dossierViewContainer) this.dom.dossierViewContainer.innerHTML = '';
        const countryNameElement = this.dom.mainContainer.querySelector('#dokumente-country-name');
        if (countryNameElement) countryNameElement.textContent = `Dokumententyp für ${countryName} wählen`;
        const countryCode = this.currentCountry?.code;
        if (!countryCode) return;
        const dossiers = this.dossiersByCountry[countryCode] || [];
        const availableDocTypes = new Set(dossiers.map(d => d.art));
        const allDocTypes = ["Reisepass", "Aufenthaltstitel", "Aufenthaltsdokument", "Sonstiges Dokument"];
        const docTypesToShow = allDocTypes.filter(type => availableDocTypes.has(type));
        if (this.dom.documentTypeButtons) {
            if (docTypesToShow.length > 0) {
                this.dom.documentTypeButtons.innerHTML = docTypesToShow.map(type =>
                    `<button class="btn btn-secondary" data-doc-type="${type}">${type}</button>`
                ).join('');
            } else {
                this.dom.documentTypeButtons.innerHTML = `<p class="text-gray-500 col-span-full">Für dieses Land sind keine Dokumente hinterlegt.</p>`;
            }
        }
    },

    renderDocumentImages(countryName, documentType) {
        this.currentDocumentType = documentType;
        const countryCode = this.currentCountry?.code;
        if (!countryCode) return;
        const dossiers = this.dossiersByCountry[countryCode] || [];
        const filteredDossiers = dossiers.filter(d => d.art === documentType);
        filteredDossiers.sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
        if (this.dom.documentTypeButtons) this.dom.documentTypeButtons.classList.add('hidden');
        if (this.dom.dokumenteImages) {
            this.dom.dokumenteImages.classList.remove('hidden');
            this.dom.dokumenteImages.innerHTML = '';
        }
        if (this.dom.dossierViewContainer) this.dom.dossierViewContainer.innerHTML = '';
        const countryNameElement = this.dom.mainContainer.querySelector('#dokumente-country-name');
        if (countryNameElement) countryNameElement.textContent = `Dokumente für ${countryName}`;
        if (this.dom.dokumenteImages) {
            if (filteredDossiers.length > 0) {
                filteredDossiers.forEach(dossier => {
                    const clickContainer = document.createElement('div');
                    clickContainer.className = 'document-tile cursor-pointer border border-transparent hover:border-blue-300 p-2 rounded transition';
                    clickContainer.dataset.dossierId = dossier.id;
                    const img = document.createElement('img');
                    img.src = `data/images/${countryCode}/${dossier.imageFile}`;
                    img.onerror = () => { img.src = 'data/images/noimage.svg'; };
                    img.className = 'document-grid-image w-full h-auto object-contain rounded-md shadow-sm';
                    clickContainer.appendChild(img);
                    const originalNameLabel = document.createElement('p');
                    originalNameLabel.textContent = dossier.name;
                    originalNameLabel.className = 'text-center text-sm mt-2 font-semibold text-gray-800 break-words';
                    clickContainer.appendChild(originalNameLabel);
                    if (dossier.name_de) {
                        const germanNameLabel = document.createElement('p');
                        germanNameLabel.textContent = dossier.name_de;
                        germanNameLabel.className = 'text-center text-xs mt-1 text-gray-500 break-words';
                        clickContainer.appendChild(germanNameLabel);
                    }
                    this.dom.dokumenteImages.appendChild(clickContainer);
                });
            } else {
                this.dom.dokumenteImages.innerHTML = `<p class="text-gray-500 col-span-full">Für diesen Dokumententyp gibt es keine Einträge.</p>`;
            }
        }
    },

    renderDossier(dossierId) {
        const countryCode = this.currentCountry?.code;
        if (!countryCode) return;
        const dossiers = this.dossiersByCountry[countryCode] || [];
        const dossier = dossiers.find(d => d.id === dossierId);
        if (!this.dom.dossierViewContainer || !dossier) return;

        // --- Helper function to convert newlines to <br> ---
        const formatNewlines = (text) => {
            if (!text) return '';
            // Ersetze zuerst die literale Sequenz '\\n', dann echte Newlines '\n' mit <br>
            return text.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
        };

        // --- AKTUALISIERTE Helper function to get icon and class based on value ---
        const getStatusMarkup = (value, type) => {
            let icon = '';
            let textClass = 'text-gray-500'; // Standard für leer oder k.A.
            const valueLower = value?.toLowerCase(); // Behandelt möglichen undefined Wert

            if (type === 'schengen') {
                if (valueLower === 'ja') {
                    icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>';
                    textClass = 'text-green-600';
                } else if (valueLower === 'nein') {
                    icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>';
                    textClass = 'text-red-600';
                } else if (valueLower === 'teilweise') {
                    // Fragezeichen-Icon für Teilweise
                    icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>';
                    textClass = 'text-yellow-600';
                }
            } else if (type === 'anerkannt') {
                 if (valueLower === 'ja') {
                    icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>';
                    textClass = 'text-green-600';
                } else if (valueLower === 'nein') {
                    icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>';
                    textClass = 'text-red-600';
                }
            }

            // Fügt die Klassen 'icon-text', 'larger-text' und die Farbklasse hinzu
            return `<span class="icon-text font-semibold larger-text ${textClass}">${icon} ${value || 'k.A.'}</span>`;
        };
        // --- End Helper function ---

        let alternativeImagesHTML = '';
        if (dossier.alternativeImages && dossier.alternativeImages.length > 0) {
            alternativeImagesHTML = dossier.alternativeImages.map(imgFile => `
                 <img src="data/images/${countryCode}/${imgFile}"
                      onerror="this.src='data/images/noimage.svg';"
                      alt="Alternatives Bild für ${dossier.name_de || dossier.name}"
                      class="mt-4 rounded-md shadow-sm border">
            `).join('');
        }

        // Row for 'In DE anerkannt' using the helper function
        let inDeAnerkanntRow = '';
        if (dossier.hasOwnProperty('inDeutschlandAnerkannt')) { // Checkt, ob Property existiert
            inDeAnerkanntRow = `
                 <tr class="border-b">
                     <td class="py-2 pr-4 text-sm font-semibold text-gray-600 align-top">In DE anerkannt</td>
                     <td class="py-2 text-sm">${getStatusMarkup(dossier.inDeutschlandAnerkannt, 'anerkannt')}</td>
                 </tr>`;
        }

        // Row for 'Hinweise'
        let grenzhinweiseRow = '';
        if (dossier.grenzkontrollhinweise) {
             grenzhinweiseRow = `
                 <tr class="border-b">
                     <td class="py-2 pr-4 text-sm font-semibold text-gray-600 align-top" colspan="2">
                         <h3 class="text-md font-semibold text-gray-700 mb-2 mt-3">Besondere Hinweise für die Grenzkontrolle</h3>
                         <div class="text-sm text-gray-800 grenzkontrollhinweise-content"></div>
                     </td>
                 </tr>`;
        }

        const disclaimerHTML = `
            <div class="p-4 mb-6 bg-red-50 border-l-4 border-red-400 text-red-800" role="alert">
                <div class="flex">
                     <div class="py-1"><svg class="h-6 w-6 text-red-400 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg></div>
                    <div>
                        <p class="font-bold">Wichtiger Hinweis</p>
                        <p class="text-sm"> Dieses Handbuch ist weder Abschließend noch vollständig!</p>
                        <p class="text-sm">Die Informationen können veraltet oder fehlerhaft sein und dienen ausschließlich zur ersten Orientierung. Jede Information muss über die offiziellen Dokumente und Datenbanken verifiziert werden.</p>
                        <a href="data/pdf/Anhang22.pdf" target="_blank" class="mt-2 inline-block bg-red-100 text-red-800 font-bold py-1 px-3 rounded hover:bg-red-200 transition-colors text-sm">Anlage 22 hier öffnen</a><a href="XXXXXXXXXXXXXXXXXXXX" target="_blank" class="mt-2 inline-block bg-red-100 text-red-800 font-bold py-1 px-3 rounded hover:bg-red-200 transition-colors text-sm">LIES hier öffnen</a>
                    </div>
                </div>
            </div>`;

        this.dom.dossierViewContainer.innerHTML = `
            <div class="bpol-card-header p-4 mt-6 rounded-t-md">
                <span>Dossier: ${dossier.name_de || dossier.name}</span>
            </div>
            <div class="p-6 border border-t-0 rounded-b-md">
                ${disclaimerHTML}
                <div class="dossier-layout-grid">
                    <div class="dossier-details-column">
                        <table class="w-full">
                            <tbody class="align-top">
                                <tr class="border-b"><td class="py-2 pr-4 text-sm font-semibold text-gray-600 w-40">ID</td><td class="py-2 text-sm text-gray-800">${dossier.id}</td></tr>
                                <tr class="border-b"><td class="py-2 pr-4 text-sm font-semibold text-gray-600">Originalbez.</td><td class="py-2 text-sm text-gray-800">${dossier.name}</td></tr>
                                <tr class="border-b"><td class="py-2 pr-4 text-sm font-semibold text-gray-600">Deutsche Bez.</td><td class="py-2 text-sm text-gray-800">${dossier.name_de || '—'}</td></tr>
                                <tr class="border-b"><td class="py-2 pr-4 text-sm font-semibold text-gray-600">Art</td><td class="py-2 text-sm text-gray-800">${dossier.art}</td></tr>
                                ${inDeAnerkanntRow}
                                <tr class="border-b">
                                    <td class="py-2 pr-4 text-sm font-semibold text-gray-600">Schengengültig</td>
                                    <td class="py-2 text-sm">${getStatusMarkup(dossier.schengengueltig, 'schengen')}</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-2 pr-4 text-sm font-semibold text-gray-600 align-top" colspan="2">
                                        <h3 class="text-md font-semibold text-gray-700 mb-2 mt-3">Beschreibung</h3>
                                        <div class="text-sm text-gray-800 beschreibung-content"></div>
                                    </td>
                                </tr>
                                ${grenzhinweiseRow}
                            </tbody>
                        </table>
                    </div>
                    <div class="dossier-gallery-column">
                        <h3 class="text-center text-lg font-semibold text-gray-800 mb-4">Dokumentenansicht</h3>
                        <img src="data/images/${countryCode}/${dossier.imageFile}" onerror="this.src='data/images/noimage.svg';" alt="Hauptbild" class="rounded-md shadow-sm border">
                        ${alternativeImagesHTML}
                    </div>
                </div>
            </div>`;

            // Inhalt mit .innerHTML setzen und Newlines formatieren
            const beschreibungContent = this.dom.dossierViewContainer.querySelector('.beschreibung-content');
            if (beschreibungContent) {
                beschreibungContent.innerHTML = formatNewlines(dossier.beschreibung || '—');
            }

            const hinweiseContent = this.dom.dossierViewContainer.querySelector('.grenzkontrollhinweise-content');
            if (hinweiseContent && dossier.grenzkontrollhinweise) {
                hinweiseContent.innerHTML = formatNewlines(dossier.grenzkontrollhinweise);
            }
    }, // Ende renderDossier

    showLoadingIndicator() {
         const indicator = this.dom.mainContainer?.querySelector('#loading-indicator');
         if (this.dom.countryGroupContainer) this.dom.countryGroupContainer.classList.add('hidden');
         if (indicator) indicator.classList.remove('hidden');
    },

    hideLoadingIndicator() {
        const indicator = this.dom.mainContainer?.querySelector('#loading-indicator');
        if (indicator) indicator.classList.add('hidden');
    },

    bindEvents() {
        // Nur einmal Event Listener an das Haupt-Container binden
        if (this.dom.mainContainer && !this.dom.mainContainer.dataset.eventsBound) {
            this.dom.mainContainer.dataset.eventsBound = 'true';
            this.dom.mainContainer.addEventListener('click', (e) => {
                if (e.target.closest('#home-btn')) { this.renderInitialChoice(); return; }
                const countryButton = e.target.closest('#country-buttons button[data-country-code]');
                if (countryButton) { this.handleCountryClick(countryButton.dataset.countryName, countryButton.dataset.countryCode); return; }
                const docTypeButton = e.target.closest('#schengen-document-type-buttons button[data-doc-type]');
                if (docTypeButton && this.currentCountry) { this.renderDocumentImages(this.currentCountry.name, docTypeButton.dataset.docType); return; }
                const imageContainer = e.target.closest('#schengen-dokumente-images div[data-dossier-id]');
                if (imageContainer && this.currentCountry) {
                    document.querySelectorAll('#schengen-dokumente-images > div').forEach(div => div.classList.remove('bg-blue-100', 'border-blue-500'));
                    imageContainer.classList.add('bg-blue-100', 'border-blue-500');
                    this.renderDossier(imageContainer.dataset.dossierId);
                    setTimeout(() => { this.dom.dossierViewContainer?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
                    return;
                }
                const backButton = e.target.closest('#toggle-country-group-btn');
                if (backButton) {
                    if (this.currentDocumentType && this.currentCountry) { this.renderDocumentTypeFilter(this.currentCountry.name); }
                    else if (this.currentCountry) {
                        const countryType = this.countries.find(c => c.name === this.currentCountry.name)?.type;
                        if (countryType) { if (this.dom.dokumenteContainer) this.dom.dokumenteContainer.classList.add('hidden'); this.renderCountries(countryType); }
                    } else { this.renderInitialChoice(); }
                    return;
                }
            });
            if (this.dom.schengenChoiceContainer) {
                this.dom.schengenChoiceContainer.addEventListener('change', (e) => {
                    if (e.target.name === 'schengen_choice') { this.renderCountries(e.target.value); }
                });
            }
        }
    },
};

window.Schengenhandbuch = Schengenhandbuch;
