const strafanzeigenHTML = `
<div id="content-strafanzeigen"> 
    <div class="space-y-6"> 
        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe Flugdaten</div> 
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
                <div> 
                    <label for="Datum" class="block text-sm font-medium text-gray-700 mb-1">Datum <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[Datum]</span></label> 
                    <div class="flex"> 
                        <input type="text" id="Datum" class="form-element form-input" placeholder="TT.MM.JJJJ"> 
                        <button id="todayBtn" class="btn btn-secondary ml-2 px-3 flex-shrink-0" title="Heutiges Datum einfügen">Heute</button> 
                    </div> 
                </div> 
                <div> 
                    <label for="Uhrzeit" class="block text-sm font-medium text-gray-700 mb-1 flex items-center"> 
                        <span>Uhrzeit</span> 
                        <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Trage hier die Feststellzeit bzw. Tatzeit ein.</div></div> 
                        <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[Uhrzeit]</span> 
                    </label> 
                    <input type="text" id="Uhrzeit" class="form-element form-input" placeholder="HH:MM"> 
                </div> 
                <div> 
                    <label for="Flughafen" class="block text-sm font-medium text-gray-700 mb-1 flex items-center"> 
                        <span>Zielflughafen</span> 
                        <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Trage hier den Zielflughafen der Person ein, nicht Düsseldorf.</div></div> 
                        <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[Flughafen]</span> 
                    </label> 
                    <input type="text" id="Flughafen" class="form-element form-input"> 
                </div> 
                <div> 
                    <label for="Flugnummer" class="block text-sm font-medium text-gray-700 mb-1">Flugnummer <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[Flugnummer]</span></label> 
                    <input type="text" id="Flugnummer" class="form-element form-input"> 
                </div> 
            </div> 
        </div> 

        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe Personendaten</div> 
            <div class="p-6 space-y-4"> 
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                    <div class="form-row-grid">
<label class="font-medium text-gray-700">Geschlecht <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[Geschlecht_...]</span></label>
<div class="segmented-control">
    <input type="radio" name="geschlecht_strafanzeige" id="geschlecht_maennlich" value="Geschlecht_maennlich">
    <label for="geschlecht_maennlich">männlich</label>
    <input type="radio" name="geschlecht_strafanzeige" id="geschlecht_weiblich" value="Geschlecht_weiblich">
    <label for="geschlecht_weiblich">weiblich</label>
</div>
</div>
                    <div> 
                        <label for="Staatsangehoerigkeit" class="block text-sm font-medium text-gray-700 mb-1">Staatsangehörigkeit</label> 
                        <select id="Staatsangehoerigkeit" class="form-element form-select"></select> 
                    </div> 
                </div> 
            </div> 
        </div> 

        <div class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe Reisedokumente</div> 
            <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-4"> 
                <div> 
                    <label for="ReisepassArt" class="block text-sm font-medium text-gray-700 mb-1">Reisepass <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[ReisepassArt_...]</span></label> 
                    <select id="ReisepassArt" class="form-element form-select"> 
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
                    <label for="ReisepassGueltigkeit" class="block text-sm font-medium text-gray-700 mb-1">Gültigkeit <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[ReisepassGueltigkeit_...]</span></label> 
                    <select id="ReisepassGueltigkeit" class="form-element form-select"> 
                        <option value="Gueltig">Gültig</option> 
                        <option value="Abgelaufen">zeitlich ungültig</option> 
                        <option value="NichtAnerkannt">Nicht anerkannt</option> 
                    </select> 
                </div> 
                <div> 
                    <label for="ReisepassHerkunft" class="block text-sm font-medium text-gray-700 mb-1">Herkunftsland Reisepass</label> 
                    <select id="ReisepassHerkunft" class="form-element form-select"></select> 
                </div> 
            </div> 
        </div> 

        <div class="bpol-card p-4 flex justify-center"> 
            <div class="radio-button-group"> 
                <label> 
                    <input type="radio" name="straftat_art" id="radioStraftatAufenthG" class="radio-button-input" value="aufenthg" checked> 
                    <span class="radio-button-label flex items-center gap-2 straftat-art-button"> 
                        <svg fill="#000000" height="40px" width="40px"><use xlink:href="#icon-aufenthg"></use></svg> 
                        Straftat nach AufenthG 
                    </span> 
                </label> 
                <label> 
                    <input type="radio" name="straftat_art" id="radioStraftatWaffG" class="radio-button-input" value="waffg"> 
                    <span class="radio-button-label flex items-center gap-2 straftat-art-button"> 
                        <svg width="40px" height="40px" fill="#000000"><use xlink:href="#icon-waffg"></use></svg> 
                        Straftat nach WaffG 
                    </span> 
                </label> 
            </div> 
        </div> 
        
        <div id="aufenthg-content" class="space-y-6"> 
            <div class="bpol-card"> 
                <div class="bpol-card-header p-4">Gruppe Aufenthaltstitel & Visa</div> 
                <div class="p-6 space-y-4"> 
                    <div> 
                        <label class="block text-sm font-medium text-gray-700 mb-2">Status</label> 
                        <div class="radio-button-group"> 
                            <label><input type="radio" name="aufenthalt_status" id="radioPositivstaater" class="radio-button-input" value="Positivstaater_Ja"><span class="radio-button-label">Positivstaater</span></label> 
                            <label><input type="radio" name="aufenthalt_status" id="radioPositivstaaterMitAT" class="radio-button-input" value="PositivstaaterMitAT_Ja"><span class="radio-button-label">Positivstaater mit Aufenthaltstitel</span></label> 
                            <label><input type="radio" name="aufenthalt_status" id="radioNegativstaater" class="radio-button-input" value="Positivstaater_Nein" checked><span class="radio-button-label">Negativstaater</span></label> 
                        </div> 
                    </div> 

                    <div id="aufenthaltDetailsContainer"> 
                        <div class="pt-4 border-t mt-4"> 
                            <label class="block text-sm font-medium text-gray-700 mb-2">Art des Dokuments</label> 
                            <div class="flex flex-wrap gap-x-6 gap-y-2"> 
                                <label class="flex items-center"><input type="checkbox" name="aufenthalt_art" id="checkOhneAufenthaltstitel" class="form-element form-checkbox" value="checkOhneAufenthaltstitel"><span class="ml-2 text-sm">ohne Aufenthaltstitel</span></label> 
                                <label class="flex items-center"><input type="checkbox" name="aufenthalt_art" id="checkMitAufenthaltstitel" class="form-element form-checkbox" value="checkMitAufenthaltstitel"><span class="ml-2 text-sm">mit Aufenthaltstitel</span></label> 
                                <label class="flex items-center"><input type="checkbox" name="aufenthalt_art" id="checkMitVisumC" class="form-element form-checkbox" value="checkMitVisumC"><span class="ml-2 text-sm">mit Visum Kat. C</span></label> 
                                <label class="flex items-center"><input type="checkbox" name="aufenthalt_art" id="checkMitVisumD" class="form-element form-checkbox" value="checkMitVisumD"><span class="ml-2 text-sm">mit Visum Kat. D</span></label> 
                                <label class="flex items-center hidden" id="tuerkischerSpezialpassContainer"><input type="checkbox" name="aufenthalt_art" id="tuerkischerSpezialpass" class="form-element form-checkbox" value="tuerkischerSpezialpass"><span class="ml-2 text-sm">türkischer Spezialpass</span></label> 
                            </div> 
                        </div> 

                        <div id="aufenthaltHerkunftContainer" class="hidden pt-4 border-t mt-4"> 
                            <label for="AufenthaltHerkunft" class="block text-sm font-medium text-gray-700 mb-1">Herkunft <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[AufenthaltHerkunft]</span></label> 
                            <select id="AufenthaltHerkunft" class="form-element form-select"></select> 
                        </div> 

                        <div id="detailsMitAufenthaltstitel" class="hidden space-y-4 pt-4 border-t mt-4"> 
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"> 
                                <div> 
                                    <label for="AufenthaltstitelGueltig" class="block text-sm font-medium text-gray-700 mb-1">Zeitlich gültig <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[AufenthaltstitelGueltig_...]</span></label> 
                                    <select id="AufenthaltstitelGueltig" class="form-element form-select"><option value="Ja">Ja</option><option value="Nein">Nein</option></select> 
                                </div> 
                                <div id="aufenthaltstitelUngueltigSeitContainer" class="hidden"> 
                                    <label for="AufenthaltstitelUngueltigSeit" class="block text-sm font-medium text-gray-700 mb-1">Zeitlich ungültig seit <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[AufenthaltstitelUngueltigSeit]</span></label> 
                                    <input type="date" id="AufenthaltstitelUngueltigSeit" class="form-element form-input"> 
                                </div> 
                                <div> 
                                    <label for="AufenthaltstitelSchengen" class="block text-sm font-medium text-gray-700 mb-1">Schengenwirksam <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[AufenthaltstitelSchengen_...]</span></label> 
                                    <select id="AufenthaltstitelSchengen" class="form-element form-select"><option value="Ja">Ja</option><option value="Nein">Nein</option></select> 
                                </div> 
                                <div> 
                                    <label for="AufenthaltstitelUngueltigErklaert" class="block text-sm font-medium text-gray-700 mb-1">Für ungültig erklärt <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[AufenthaltstitelUngueltigErklaert_...]</span></label> 
                                    <select id="AufenthaltstitelUngueltigErklaert" class="form-element form-select"><option value="Nein">Nein</option><option value="Ja">Ja</option></select> 
                                </div> 
                            </div> 
                        </div> 

                        <div id="detailsMitVisumC" class="hidden space-y-4 pt-4 border-t mt-4"> 
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start"> 
                                <div> 
                                    <label for="VisumCGueltig" class="block text-sm font-medium text-gray-700 mb-1">Zeitlich gültig <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[VisumCGueltig_...]</span></label> 
                                    <select id="VisumCGueltig" class="form-element form-select"><option value="Ja">Ja</option><option value="Nein">Nein</option></select> 
                                </div> 
                                <div id="visumCUngueltigSeitContainer" class="hidden"> 
                                    <label for="VisumCUngueltigSeit" class="block text-sm font-medium text-gray-700 mb-1">Zeitlich ungültig seit <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[VisumCUngueltigSeit]</span></label> 
                                    <input type="date" id="VisumCUngueltigSeit" class="form-element form-input"> 
                                </div> 
                                <div> 
                                    <label for="VisumCTage" class="block text-sm font-medium text-gray-700 mb-1">für X Tage <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[VisumCTage]</span></label> 
                                    <input type="text" id="VisumCTage" class="form-element form-input" value="90"> 
                                </div> 
                                <div> 
                                    <label for="VisumCEinreisen" class="block text-sm font-medium text-gray-700 mb-1">Anzahl Einreisen <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[VisumCEinreisen_...]</span></label> 
                                    <select id="VisumCEinreisen" class="form-element form-select"><option value="MULT">MULT</option><option value="1">1</option></select> 
                                </div> 
                            </div> 
                        </div> 

                        <div id="detailsMitVisumD" class="hidden space-y-4 pt-4 border-t mt-4"> 
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"> 
                                <div> 
                                    <label for="VisumDGueltig" class="block text-sm font-medium text-gray-700 mb-1">Zeitlich gültig <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[VisumDGueltig_...]</span></label> 
                                    <select id="VisumDGueltig" class="form-element form-select"><option value="Ja">Ja</option><option value="Nein">Nein</option></select> 
                                </div> 
                                <div id="visumDUngueltigSeitContainer" class="hidden"> 
                                    <label for="VisumDUngueltigSeit" class="block text-sm font-medium text-gray-700 mb-1">Zeitlich ungültig seit <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[VisumDUngueltigSeit]</span></label> 
                                    <input type="date" id="VisumDUngueltigSeit" class="form-element form-input"> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
            
            <div class="bpol-card"> 
                <div class="bpol-card-header p-4 flex items-center justify-between"> 
                    <span>Gruppe Reisedaten</span> 
                    <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Fügt Daten aus der PDF-Ausgabe des Aufenthaltsrechners der Bundespolizei ein.</div></div> 
                </div> 
                <div class="p-6 space-y-4"> 
                    <div class="space-y-4"> 
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> 
                            <label for="aufenthaltsrechnerImportCheckbox" class="import-button-label p-3 md:col-span-3"> 
                                <input type="checkbox" id="aufenthaltsrechnerImportCheckbox"> 
                                <span class="font-semibold text-md text-gray-800">Aufenthaltsrechner Datenimport</span> 
                                <span class="block text-xs text-gray-500 mt-1">Klicken, um Daten einzufügen</span> 
                            </label> 
                            <button id="showAnleitungBtn" class="btn btn-secondary h-full p-3">Anleitung</button> 
                        </div> 
                        <div id="aufenthaltsrechnerImportContainer" class="hidden space-y-2 pt-2"> 
                            <textarea id="aufenthaltsrechnerImportText" class="form-element form-textarea" rows="3" placeholder="Daten aus Aufenthaltsrechner hier einfügen..."></textarea> 
                            <div class="flex justify-end"> 
                                <button id="aufenthaltsrechnerImportBtn" class="btn btn-secondary px-4 py-2">Import</button> 
                            </div> 
                        </div> 
                    </div> 
                    <div class="pt-4 border-t"> 
                        <label for="aufenthaltszeitraeumeEingeben" class="import-button-label"> 
                            <input type="checkbox" id="aufenthaltszeitraeumeEingeben" value="aufenthaltszeitraeumeEingeben"> 
                            <span class="font-semibold text-md text-gray-800">Aufenthaltszeiträume manuell eingeben</span> 
                            <span class="block text-xs text-gray-500 mt-1">Klicken, um Zeiträume hinzuzufügen</span> 
                        </label> 
                    </div> 
                    <div id="aufenthaltszeitraeumeContainer" class="hidden space-y-4"> 
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-end"> 
                            <div> 
                                <label for="einreiseDatum" class="block text-sm font-medium text-gray-700 mb-1">Einreise (Aufenthaltszeitraum)</label> 
                                <input type="date" id="einreiseDatum" class="form-element form-input"> 
                            </div> 
                            <div> 
                                <label for="ausreiseDatum" class="block text-sm font-medium text-gray-700 mb-1">Ausreise (Aufenthaltszeitraum)</label> 
                                <div class="flex"> 
                                    <input type="date" id="ausreiseDatum" class="form-element form-input"> 
                                    <button id="ausreiseHeuteBtn" class="btn btn-secondary ml-2 px-3 flex-shrink-0" title="Heutiges Datum einfügen">Heute</button> 
                                </div> 
                            </div> 
                        </div> 
                        <div class="flex justify-end"> 
                            <button id="addReise" class="btn btn-secondary px-4 py-2 w-full md:w-auto mt-2">Aufenthaltszeitraum hinzufügen</button> 
                        </div> 
                        <div id="reisenInputContainer" class="space-y-4 pt-4 border-t"></div> 
                        <div class="pt-4 border-t"> 
                            <label for="Gesamtaufenthaltstage" class="block text-sm font-medium text-gray-700 mb-1">Gesamtaufenthalt (Tage) <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[Gesamtaufenthaltstage]</span></label> 
                            <input type="text" id="Gesamtaufenthaltstage" class="form-element form-input bg-gray-100" readonly> 
                        </div> 
                    </div> 
                    <div class="pt-4 border-t"> 
                        <label for="Einreise" class="block text-sm font-medium text-gray-700 mb-1">Einreise über Binnengrenze <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[Einreise_...]</span></label> 
                        <select id="Einreise" class="form-element form-select"><option value="Nein">Nein</option><option value="Ja">Ja</option></select> 
                    </div> 
                    <div id="einreiseDetailsContainer" class="hidden space-y-4 pt-4 border-t"> 
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                            <div> 
                                <label for="EinreiseAus" class="block text-sm font-medium text-gray-700 mb-1">Einreise aus <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[EinreiseAus]</span></label> 
                                <select id="EinreiseAus" class="form-element form-select"><option value="Niederlande">Niederlande</option><option value="Belgien">Belgien</option><option value="Frankreich">Frankreich</option><option value="Schweiz">Schweiz</option><option value="Oesterreich">Österreich</option><option value="Ungarn">Ungarn</option><option value="Tschechien">Tschechien</option><option value="Polen">Polen</option><option value="Daenemark">Dänemark</option></select> 
                            </div> 
                            <div> 
                                <label for="Verkehrsmittel" class="block text-sm font-medium text-gray-700 mb-1">Verkehrsmittel <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[Verkehrsmittel]</span></label> 
                                <select id="Verkehrsmittel" class="form-element form-select"><option value="Auto">Auto</option><option value="Zug">Zug</option><option value="Flugzeug">Flugzeug</option></select> 
                            </div> 
                            <div> 
                                <label for="ZeitpunktDerEinreise" class="block text-sm font-medium text-gray-700 mb-1">Zeitpunkt der Einreise <span class="debug-placeholder hidden text-xs text-gray-500 ml-2 font-mono">[ZeitpunktDerEinreise]</span></label> 
                                <input type="date" id="ZeitpunktDerEinreise" class="form-element form-input"> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 

            <div class="grid grid-cols-1 gap-6"> 
                
                <div class="bpol-card"> 
                    <div class="bpol-card-header p-4">Gruppe StGB</div> 
                    <div class="p-6"> 
                        <div class="form-row-grid">
<label class="font-medium text-gray-700">Straftatbestand</label>

<div class="stgb-grid-container">

        <label class="stgb-grid-button">
            <input type="radio" name="stgb_radio" id="stgb_einreiseAufenthaltOhnePassAT" value="stgb_einreiseAufenthaltOhnePassAT">
            <img src="data/images/nopassport.jpg" alt="Kein Reisepass Icon" style="max-height: 60px; width: auto;">
            <img src="data/images/nocard.jpg" alt="Kein Aufenthaltstitel Icon" style="max-height: 60px; width: auto;">
            <span>unerlaubte <u>Einreise</u> und <u>Aufenthalt</u> <br>ohne -Pass- und -AT-</span>
        </label>

        <label class="stgb-grid-button">
            <input type="radio" name="stgb_radio" id="stgb_einreiseAufenthaltOhneAT" value="stgb_einreiseAufenthaltOhneAT">
            <img src="data/images/nocard.jpg" alt="Kein Aufenthaltstitel Icon" style="max-height: 60px; width: auto;">
            <span>unerlaubte <u>Einreise</u> und <u>Aufenthalt</u> <br>ohne -AT-</span>
        </label>

        <label class="stgb-grid-button">
            <input type="radio" name="stgb_radio" id="stgb_aufenthaltOhneAT" value="stgb_aufenthaltOhneAT">
            <img src="data/images/nocard.jpg" alt="Kein Aufenthaltstitel Icon" style="max-height: 60px; width: auto;">
            <span>unerlaubter <u>Aufenthalt</u> <br> ohne -AT-</span>
        </label>

</div>
</div>
                        
                        <div class="pt-4 border-t mt-6"> 
                            <label for="UnerlaubtEingereistAm" class="block text-sm font-medium text-gray-700 mb-1">Unerlaubt eingereist am</label> 
                            <input type="date" id="UnerlaubtEingereistAm" class="form-element form-input"> 
                        </div> 
                        <div class="pt-4 border-t mt-4"> 
                            <label class="block text-sm font-medium text-gray-700 mb-2">Zeitraum unerlaubter Aufenthalt im Bundesgebiet</label> 
                            <div class="grid grid-cols-2 gap-4"> 
                                <div> 
                                    <label for="UnerlaubtVon" class="block text-xs font-medium text-gray-600 mb-1">von</label> 
                                    <input type="date" id="UnerlaubtVon" class="form-element form-input"> 
                                </div> 
<div>
<label for="UnerlaubtBis" class="block text-xs font-medium text-gray-600 mb-1">bis</label>
<div class="flex">
    <input type="date" id="UnerlaubtBis" class="form-element form-input">
    <button id="unerlaubtBisHeuteBtn" class="btn btn-secondary ml-2 px-3 flex-shrink-0" title="Heutiges Datum einfügen">Heute</button>
</div>
</div> 
                            </div> 
                        </div> 
                        <div> 
                            <label for="TageUnerlaubtImBundesgebiet" class="block text-sm font-medium text-gray-700 mb-1 flex items-center"> 
                                <span>Anzahl Tage unerlaubt im Bundesgebiet</span> 
                                <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Trage hier die Gesamtanzahl der Tage ein, die sich die Person unerlaubt im Bundesgebiet aufgehalten hat. Nicht im Schengengebiet!</div></div> 
                            </label> 
                            <input type="text" id="TageUnerlaubtImBundesgebiet" class="form-element form-input"> 
                        </div> 
                        <div id="letzterTagAusreiseContainer" class="hidden pt-4 border-t"> 
                            <label for="LetzterTagAusreiseDisplay" class="block text-sm font-medium text-gray-700 mb-1">Letzter erlaubter Ausreisetag (berechnet)</label> 
                            <input type="text" id="LetzterTagAusreiseDisplay" class="form-element form-input bg-gray-100" readonly> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 

        <div id="waffg-content" class="hidden space-y-6"> 
           <div class="bpol-card">
<div class="bpol-card-header p-4">Gruppe Waffe</div>
<div class="p-6 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label for="Zeuge1_waffg" class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <span>Zeuge 1 (Monitorkraft, Nachname)</span>
                <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Bestenfalls die Namen der Zeugen in Großbuchstaben schreiben, das hilft bei der Lesbarkeit.</div></div>
            </label>
            <input type="text" id="Zeuge1_waffg" class="form-element form-input">
        </div>
        <div>
            <label for="Zeuge2_waffg" class="block text-sm font-medium text-gray-700 mb-1">Zeuge 2 (Nachkontrollkraft, Nachname)</label>
            <input type="text" id="Zeuge2_waffg" class="form-element form-input">
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
            <label for="Waffenart_waffg" class="block text-sm font-medium text-gray-700 mb-1">Waffenart</label>
            <select id="Waffenart_waffg" class="form-element form-select">
                <option value="Schlagring">Schlagring</option>
                <option value="Butterflymesser">Butterflymesser</option>
                <option value="Springmesser">Springmesser</option>
                <option value="Faustmesser">Faustmesser (noch nicht verfügbar)</option>
                <option value="Munition">Munition</option>
                <option value="Stahlrute">Stahlrute (noch nicht verfügbar)</option>
            </select>
        </div>
        <div>
            <label for="Auffindeort_waffg" class="block text-sm font-medium text-gray-700 mb-1">Auffindeort</label>
            <select id="Auffindeort_waffg" class="form-element form-select">
                <option value="Koffer">Koffer</option>
                <option value="Handtasche">Handtasche</option>
                <option value="Rucksack">Rucksack</option>
            </select>
        </div>
        <div id="klingenlaengeContainer_waffg" class="hidden">
            <label for="Klingenlaenge_waffg" class="block text-sm font-medium text-gray-700 mb-1">Klingenlänge in cm</label>
            <input type="text" id="Klingenlaenge_waffg" class="form-element form-input">
        </div>
        <div id="kaliberContainer_waffg" class="hidden">
            <label for="Kaliber_waffg" class="block text-sm font-medium text-gray-700 mb-1">Kaliber</label>
            <input type="text" id="Kaliber_waffg" class="form-element form-input" placeholder="z.B. 9x19mm">
        </div>
    </div>
    <div class="form-row-grid">
        <label class="font-medium text-gray-700">Einwilligung über die Sicherstellung</label>
        <div class="segmented-control">
            <input type="radio" name="waffg_einwilligung" id="EinwilligungSicherstellung_Ja_waffg" value="EinwilligungSicherstellung_Ja_waffg">
            <label for="EinwilligungSicherstellung_Ja_waffg">Ja</label>
            <input type="radio" name="waffg_einwilligung" id="EinwilligungSicherstellung_Nein_waffg" value="EinwilligungSicherstellung_Nein_waffg">
            <label for="EinwilligungSicherstellung_Nein_waffg">Nein</label>
        </div>
    </div>
    <div class="form-row-grid">
        <label class="font-medium text-gray-700">ZBV</label>
        <div class="segmented-control">
            <input type="radio" name="waffg_zbv" id="ZBV_Ja_waffg" value="ZBV_Owi_Ja_waffg">
            <label for="ZBV_Ja_waffg">Ja</label>
            <input type="radio" name="waffg_zbv" id="ZBV_NeinWohnort_waffg" value="ZBV_Owi_NeinWohnort_waffg">
            <label for="ZBV_NeinWohnort_waffg">Nein (Wohnort in DE)</label>
            <input type="radio" name="waffg_zbv" id="ZBV_NeinDringlichkeit_waffg" value="ZBV_Owi_NeinDringlichkeit_waffg">
            <label for="ZBV_NeinDringlichkeit_waffg">Nein (zeitliche Dringlichkeit)</label>
        </div>
    </div>
    <div class="form-row-grid">
        <label class="font-medium text-gray-700">Aussage zum Sachverhalt</label>
        <div>
            <div class="segmented-control">
                <input type="radio" name="waffg_aussage" id="Aussage_waffg_Verweigert" value="Aussage_waffg_Verweigert">
                <label for="Aussage_waffg_Verweigert">Aussage verweigert</label>
                <input type="radio" name="waffg_aussage" id="Aussage_waffg_Gemacht" value="Aussage_waffg_Gemacht">
                <label for="Aussage_waffg_Gemacht">Aussage gemacht</label>
            </div>
            <div id="aussageTextContainer_waffg" class="segmented-control hidden mt-2" style="border: none; padding: 0;">
                <textarea id="AussageSachverhalt_waffg" class="form-element form-textarea" rows="2" placeholder="Angaben zur Sache..."></textarea>
            </div>
        </div>
    </div>
    <div class="form-row-grid">
        <label class="font-medium text-gray-700">Sicherheitsleistung</label>
        <div>
            <div class="segmented-control">
                <input type="radio" name="waffg_sicherheitsleistung" id="Sicherheitsleistung_Ja_waffg" value="Sicherheitsleistung_waffg_ja">
                <label for="Sicherheitsleistung_Ja_waffg">Ja</label>
                <input type="radio" name="waffg_sicherheitsleistung" id="Sicherheitsleistung_Nein_waffg" value="Sicherheitsleistung_waffg_nein">
                <label for="Sicherheitsleistung_Nein_waffg">Nein</label>
            </div>
            <div id="sicherheitsleistungBetragContainer_waffg" class="segmented-control hidden mt-2" style="border: none; padding: 0;">
                <input type="text" id="Sicherheitsleistung_waffg_betrag" class="form-element form-input" placeholder="Betrag in €">
            </div>
        </div>
    </div>
</div> 
</div>

        </div> 

        <div id="stpo-content" class="bpol-card"> 
            <div class="bpol-card-header p-4">Gruppe StPO</div> 
            <div class="p-6"> 
                <div class="form-row-grid"> 
                    <label class="font-medium text-gray-700">ZBV</label> 
                    <div class="segmented-control"> 
                        <input type="radio" name="stpo_zbv" id="ZBV_Ja" value="ZBV_Ja"> 
                        <label for="ZBV_Ja">Ja</label> 
                        <input type="radio" name="stpo_zbv" id="ZBV_NeinDringlichkeit" value="ZBV_NeinDringlichkeit"> 
                        <label for="ZBV_NeinDringlichkeit">Nein (zeitliche Dringlichkeit)</label> 
                    </div> 
                </div> 

                <div class="form-row-grid"> 
                    <label class="font-medium text-gray-700">Erklärung zur Vernehmung</label> 
                    <div class="segmented-control"> 
                        <input type="radio" name="stpo_vernehmung" id="Vernehmung_Ja" value="Vernehmung_Ja"> 
                        <label for="Vernehmung_Ja">Ja</label> 
                        <input type="radio" name="stpo_vernehmung" id="Vernehmung_NeinDringlichkeit" value="Vernehmung_NeinDringlichkeit"> 
                        <label for="Vernehmung_NeinDringlichkeit">Nein (zeitliche Dringlichkeit)</label> 
                    </div> 
                </div> 

                <div class="form-row-grid"> 
                    <div class="label-with-tooltip"> 
                        <label class="font-medium text-gray-700">Aussage</label> 
                        <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Hier bitte auswählen, was die Beschuldigte Person in der Erklärung zur Vernehmung angekreuzt hat.</div></div> 
                    </div> 
                    <div class="segmented-control"> 
                        <input type="radio" name="stpo_aussage" id="Aussage_AussageVerweigert" value="Aussage_AussageVerweigert"> 
                        <label for="Aussage_AussageVerweigert">Aussage verweigert</label> 
                        <input type="radio" name="stpo_aussage" id="Aussage_TatZugegeben" value="Aussage_TatZugegeben"> 
                        <label for="Aussage_TatZugegeben">Tat zugegeben</label> 
                    </div> 
                </div> 

                <div class="form-row-grid"> 
                    <div class="label-with-tooltip"> 
                        <label class="font-medium text-gray-700">ED-Behandlung</label> 
                        <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Wir sind verpflichtet bei einem unerlaubten Aufenthalt von über 10 Tagen und bei jeder unerlaubten Einreise eine ED-Maßnahme durchzuführen.</div></div> 
                    </div> 
                    <div class="segmented-control"> 
                        <input type="radio" name="ed_behandlung" id="EDBehandlung_Ja" value="EDBehandlung_Ja"> 
                        <label for="EDBehandlung_Ja">Ja</label> 
                        <input type="radio" name="ed_behandlung" id="EDBehandlung_Nein" value="EDBehandlung_Nein"> 
                        <label for="EDBehandlung_Nein">Nein</label> 
                    </div> 
                </div> 

                <div class="form-row-grid"> 
                    <div class="label-with-tooltip"> 
                        <label class="font-medium text-gray-700">Sicherheitsleistung</label> 
                        <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Bei einem unerlaubten Aufenthalt über einen längeren Zeitraum können wir bei der Staatsanwaltschaft eine Sicherheitsleistung anordnen lassen. Der Regelsatz beträgt hier 300€ und kann nur angeordnet werden, wenn der Beschuldigte diesen Betrag vor Ort zahlen kann. Außerhalb der Geschäftszeiten haben wir die Anordnungskompetenz selbst.</div></div> 
                    </div> 
                    <div> 
                        <div class="segmented-control"> 
                            <input type="radio" name="stpo_sicherheitsleistung" id="Sicherheitsleistung_Ja" value="Sicherheitsleistung_Ja"> 
                            <label for="Sicherheitsleistung_Ja">Ja</label> 
                            <input type="radio" name="stpo_sicherheitsleistung" id="Sicherheitsleistung_Nein" value="Sicherheitsleistung_Nein"> 
                            <label for="Sicherheitsleistung_Nein">Nein</label> 
                            <input type="radio" name="stpo_sicherheitsleistung" id="Sicherheitsleistung_NeinFehlendeMittel" value="Sicherheitsleistung_NeinFehlendeMittel"> 
                            <label for="Sicherheitsleistung_NeinFehlendeMittel">Nein <br>(fehlende Mittel)</label> 
                            <input type="radio" name="stpo_sicherheitsleistung" id="Sicherheitsleistung_NeinDringlichkeit" value="Sicherheitsleistung_NeinDringlichkeit"> 
                            <label for="Sicherheitsleistung_NeinDringlichkeit">Nein <br>(zeitliche Dringlichkeit)</label> 
                        </div> 
                        <input type="text" id="SicherheitsleistungBetrag" class="form-element form-input w-48 hidden" placeholder="Betrag in €" style="margin-top: 0.5rem;"> 
                    </div> 
                </div> 

                <div class="form-row-grid"> 
                    <div class="label-with-tooltip"> 
                        <label class="font-medium text-gray-700">AZR Datensatz gespeichert</label> 
                        <div class="tooltip-container"><span class="tooltip-trigger">?</span><div class="tooltip-content">Wenn der Beschuldigte sich länger als 10 Tage unerlaubt im Bundesgebiet aufgehalten hat, oder unerlaubt in dieses eingereist ist, dann MUSS ein AZR Datensatz angelegt oder der bestehende mit den entsprechenden Einträgen erweitert werden.</div></div> 
                    </div> 
                    <div class="segmented-control"> 
                        <input type="radio" name="azr_daten" id="AZRDatenJa" value="AZRDatenJa"> 
                        <label for="AZRDatenJa">Ja</label> 
                        <input type="radio" name="azr_daten" id="AZRDatenNein" value="AZRDatenNein"> 
                        <label for="AZRDatenNein">Nein</label> 
                    </div> 
                </div> 
            </div> 
        </div> 

        
        <div class="flex justify-end items-center gap-4 pt-4"> 
            <button id="resetFormBtn" class="btn btn-danger text-lg px-8 py-3"> 
                <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><use xlink:href="#icon-trash"></use></svg> 
                <span>Formular leeren</span> 
            </button> 
            <button id="generateOutputBtn" class="btn btn-primary text-lg px-8 py-3"> 
                <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><use xlink:href="#icon-generate"></use></svg> 
                <span>Sachverhalt generieren</span> 
            </button> 
        </div> 
    </div> 
</div> 
`;

const StrafanzeigenModul = {
    coreApp: null, // Referenz zur Haupt-App
    dom: {},       // Lokaler DOM-Cache für diesen Tab
    state: {
        reisePerioden: [],
        letzterTagAusreise: ''
    },
    config: {
        countries: ["afghanisch","ägyptisch","albanisch","algerisch","amerikanisch","andorranisch","angolanisch","antiguanisch","äquatorialguineisch","argentinisch","armenisch","aserbaidschanisch","äthiopisch","australisch","bahamaisch","bahrainisch","bangladeschisch","barbadisch","belgisch","belizisch","beninisch","bhutanisch","bolivianisch","bosnisch-herzegowinisch","botsuanisch","brasilianisch","britisch","bruneiisch","bulgarisch","burkinisch","burundisch","chilenisch","chinesisch","costa-ricanisch","dänisch","deutsch","dominicanisch","dschibutisch","ecuadorianisch","eritreisch","estnisch","fidschianisch","finnisch","französisch","gabunisch","gambisch","georgisch","ghanaisch","grenadisch","griechisch","guatemaltekisch","guineisch","guinea-bissauisch","guyanisch","haitianisch","honduranisch","indisch","indonesisch","irakisch","iranisch","irisch","isländisch","israelisch","italienisch","ivorisch","jamaikanisch","japanisch","jemenitisch","jordanisch","kambodschanisch","kamerunisch","kanadisch","kapverdisch","kasachisch","katarisch","kenianisch","kirgisisch","kiribatisch","kolumbianisch","komorisch","kongolesisch","koreanisch","kosovarisch","kroatisch","kubanisch","kuwaitisch","laotisch","lesothisch","lettisch","libanesisch","liberianisch","libysch","liechtensteinisch","litauisch","luxemburgisch","madagassisch","malawisch","malaysisch","maledivisch","malisch","maltesisch","marokkanisch","marshallisch","mauretanisch","mauritisch","mexikanisch","mikronesisch","moldauisch","monacassisch","mongolisch","montenegrinisch","mosambikanisch","myanmarisch","namibisch","nauruisch","nepalesisch","neuseeländisch","nicaraguanisch","niederländisch","nigrisch","nigerianisch","nordmazedonisch","norwegisch","omanisch","österreichisch","osttimoresisch","pakistanisch","palauisch","panamaisch","papua-neuguineisch","paraguayisch","peruanisch","philippinisch","polnisch","portugiesisch","ruandisch","rumänisch","russisch","salomonisch","salvadorianisch","samoanisch","san-marinesisch","são-toméisch","saudi-arabisch","schwedisch","schweizerisch","senegalesisch","serbisch","seychellisch","sierra-leonisch","simbabwisch","singapurisch","slowakisch","slowenisch","somalisch","spanisch","sri-lankisch","südafrikanisch","sudanesisch","surinamisch","swasiländisch","syrisch","tadschikisch","tansanisch","thailändisch","togoisch","tongaisch","trinidadisch","tschadisch","tschechisch","tunesisch","türkisch","turkmenisch","tuvaluisch","ugandisch","ukrainisch","ungarisch","uruguayisch","usbekisch","vanuatuisch","vatikanisch","venezolanisch","vietnamisisch","weißrussisch","zentralafrikanisch","zyprisch"].sort((a, b) => a.localeCompare(b)),
        schengenCountries: ["belgisch","dänisch","deutsch","estnisch","finnisch","französisch","griechisch","isländisch","italienisch","kroatisch","lettisch","liechtensteinisch","litauisch","luxemburgisch","maltesisch","niederländisch","norwegisch","österreichisch","polnisch","portugiesisch","schwedisch","schweizerisch","slowakisch","slowenisch","spanisch","tschechisch","ungarisch"].sort((a, b) => a.localeCompare(b)),
        stpoRadioGroups: ['stpo_zbv','stpo_vernehmung','stpo_aussage','ed_behandlung','stpo_sicherheitsleistung'],
        specialDropdowns: ['ReisepassArt','ReisepassGueltigkeit','Einreise','EinreiseAus','AufenthaltstitelGueltig','AufenthaltstitelSchengen','AufenthaltstitelUngueltigErklaert','VisumCGueltig','VisumCEinreisen','VisumDGueltig','Waffenart','Auffindeort', 'Auffindeort_waffg'],
        maxReisePerioden: 5
    },

    init(coreAppInstance) {
        this.coreApp = coreAppInstance;
        this.cacheDom();
        this.bindEvents();

        // Initialisiere Selects (Dropdowns)
        this.coreApp.utils.populateSelect(this.dom.Staatsangehoerigkeit, this.config.countries);
        this.coreApp.utils.populateSelect(this.dom.ReisepassHerkunft, this.config.countries);
        this.coreApp.utils.populateSelect(this.dom.AufenthaltHerkunft, this.config.schengenCountries, true);

        // Initialisiere UI-Status
        this.handlers.handleStraftatArtChange.call(this);
        this.ui.updateAufenthaltUI.call(this);
        this.handlers.updateLetzterTagAusreise.call(this);
        this.handlers.checkTuerkischerSpezialpassVisibility.call(this);
        this.handlers.handleWaffenartWaffGChange.call(this); // WaffG Kaliber/Klinge initial verstecken
    },

    // Zeige/Verstecke Elemente basierend auf Dev-Modus
    toggleDevMode(isDev) {
        this.dom.letzterTagAusreiseContainer?.classList.toggle('hidden', !isDev);
    },

    cacheDom() {
        // NUR Elemente innerhalb von #content-strafanzeigen
        const ids = [
            'Datum', 'todayBtn', 'Uhrzeit', 'Flughafen', 'Flugnummer',
            'Staatsangehoerigkeit', 'ReisepassArt', 'ReisepassGueltigkeit', 'ReisepassHerkunft',
            'radioStraftatAufenthG', 'radioStraftatWaffG', 'aufenthg-content', 'waffg-content', 'stpo-content',
            'radioPositivstaater', 'radioPositivstaaterMitAT', 'radioNegativstaater',
            'checkOhneAufenthaltstitel', 'checkMitAufenthaltstitel', 'checkMitVisumC', 'checkMitVisumD',
            'tuerkischerSpezialpassContainer', 'tuerkischerSpezialpass',
            'aufenthaltDetailsContainer', 'aufenthaltHerkunftContainer', 'AufenthaltHerkunft',
            'detailsMitAufenthaltstitel', 'AufenthaltstitelGueltig', 'aufenthaltstitelUngueltigSeitContainer', 'AufenthaltstitelUngueltigSeit', 'AufenthaltstitelSchengen', 'AufenthaltstitelUngueltigErklaert',
            'detailsMitVisumC', 'VisumCGueltig', 'visumCUngueltigSeitContainer', 'VisumCUngueltigSeit', 'VisumCTage', 'VisumCEinreisen',
            'detailsMitVisumD', 'VisumDGueltig', 'visumDUngueltigSeitContainer', 'VisumDUngueltigSeit',
            'aufenthaltsrechnerImportCheckbox', 'aufenthaltsrechnerImportContainer', 'aufenthaltsrechnerImportText', 'aufenthaltsrechnerImportBtn', 'showAnleitungBtn',
            'addReise', 'einreiseDatum', 'ausreiseDatum', 'ausreiseHeuteBtn', 'reisenInputContainer', 'Gesamtaufenthaltstage', 'aufenthaltszeitraeumeEingeben', 'aufenthaltszeitraeumeContainer',
            'Einreise', 'einreiseDetailsContainer', 'ZeitpunktDerEinreise', 'Verkehrsmittel', 'EinreiseAus',
            'UnerlaubtEingereistAm', 'UnerlaubtVon', 'UnerlaubtBis', 'unerlaubtBisHeuteBtn', 'TageUnerlaubtImBundesgebiet',
            'letzterTagAusreiseContainer', 'LetzterTagAusreiseDisplay',
            'stgb_aufenthaltOhneAT',
            'AZRDatenJa', 'AZRDatenNein',
            'SicherheitsleistungBetrag',
            'generateOutputBtn', 'resetFormBtn',
            // WaffG-Elemente
            'Zeuge1_waffg', 'Zeuge2_waffg', 'Waffenart_waffg', 'Auffindeort_waffg', 'klingenlaengeContainer_waffg', 'Klingenlaenge_waffg',
            'kaliberContainer_waffg', 'Kaliber_waffg', 'Aussage_waffg_Gemacht', 'aussageTextContainer_waffg', 'AussageSachverhalt_waffg',
            'Sicherheitsleistung_Ja_waffg', 'sicherheitsleistungBetragContainer_waffg', 'Sicherheitsleistung_waffg_betrag'
        ];
        ids.forEach(id => { this.dom[id] = document.getElementById(id); });

        // QuerySelector-basierte Elemente
        this.dom.straftatArtRadios = document.querySelectorAll('input[name="straftat_art"]');
        this.dom.aufenthaltArtCheckboxes = document.querySelectorAll('input[name="aufenthalt_art"]');
        this.dom.aufenthaltStatusRadios = document.querySelectorAll('input[name="aufenthalt_status"]');
        this.dom.stpoSicherheitsleistungRadios = document.querySelectorAll('input[name="stpo_sicherheitsleistung"]');
        this.dom.waffgAussageRadios = document.querySelectorAll('input[name="waffg_aussage"]');
        this.dom.waffgSicherheitsleistungRadios = document.querySelectorAll('input[name="waffg_sicherheitsleistung"]');
    },

    bindEvents() {
        // Flugdaten & Reset
        this.dom.todayBtn?.addEventListener('click', this.handlers.handleTodayClick.bind(this, 'Datum'));
        this.dom.Datum?.addEventListener('input', this.coreApp.utils.formatInputAsDate);
        this.dom.Uhrzeit?.addEventListener('input', this.coreApp.utils.formatInputAsTime);
        this.dom.resetFormBtn?.addEventListener('click', () => location.reload()); // Einfacher Reload

        // Straftat-Art Wechsel
        this.dom.straftatArtRadios?.forEach(radio => radio.addEventListener('change', this.handlers.handleStraftatArtChange.bind(this)));

        // Personendaten & Reisepass
        this.dom.Staatsangehoerigkeit?.addEventListener('change', (e) => { this.dom.ReisepassHerkunft.value = e.target.value; this.handlers.checkTuerkischerSpezialpassVisibility.call(this); });
        this.dom.ReisepassArt?.addEventListener('change', this.handlers.checkTuerkischerSpezialpassVisibility.bind(this));
        this.dom.ReisepassHerkunft?.addEventListener('change', this.handlers.checkTuerkischerSpezialpassVisibility.bind(this));

        // Aufenthaltstitel & Visa
        this.dom.aufenthaltStatusRadios?.forEach(radio => radio.addEventListener('change', this.handlers.handleAufenthaltStatusChange.bind(this)));
        this.dom.aufenthaltArtCheckboxes?.forEach(box => box.addEventListener('change', this.handlers.handleAufenthaltArtChange.bind(this)));
        this.dom.AufenthaltstitelGueltig?.addEventListener('change', () => this.dom.aufenthaltstitelUngueltigSeitContainer?.classList.toggle('hidden', this.dom.AufenthaltstitelGueltig.value !== 'Nein'));
        this.dom.VisumCGueltig?.addEventListener('change', () => this.dom.visumCUngueltigSeitContainer?.classList.toggle('hidden', this.dom.VisumCGueltig.value !== 'Nein'));
        this.dom.VisumDGueltig?.addEventListener('change', () => this.dom.visumDUngueltigSeitContainer?.classList.toggle('hidden', this.dom.VisumDGueltig.value !== 'Nein'));
        this.dom.aufenthaltsrechnerImportCheckbox?.addEventListener('change', () => this.dom.aufenthaltsrechnerImportContainer?.classList.toggle('hidden', !this.dom.aufenthaltsrechnerImportCheckbox.checked));
        this.dom.aufenthaltsrechnerImportBtn?.addEventListener('click', this.handlers.handleAufenthaltsrechnerImport.bind(this));
        this.dom.showAnleitungBtn?.addEventListener('click', () => this.coreApp.ui.showAnleitungModal());

        // Reisedaten & Aufenthaltszeiträume
        this.dom.aufenthaltszeitraeumeEingeben?.addEventListener('change', () => this.dom.aufenthaltszeitraeumeContainer?.classList.toggle('hidden', !this.dom.aufenthaltszeitraeumeEingeben.checked));
        this.dom.addReise?.addEventListener('click', this.handlers.handleAddReise.bind(this));
        this.dom.ausreiseHeuteBtn?.addEventListener('click', this.handlers.handleAusreiseHeuteClick.bind(this));
        this.dom.Einreise?.addEventListener('change', () => this.dom.einreiseDetailsContainer?.classList.toggle('hidden', this.dom.Einreise.value !== 'Ja'));
        this.dom.ZeitpunktDerEinreise?.addEventListener('change', this.handlers.handleEinreiseDateChange.bind(this)); // Fragt nach unerlaubter Einreise

        // StGB & Unerlaubter Aufenthalt
        this.dom.UnerlaubtEingereistAm?.addEventListener('change', this.handlers.handleUnerlaubtEingereistChange.bind(this));
        this.dom.UnerlaubtVon?.addEventListener('change', this.handlers.updateUnerlaubteTage.bind(this));
        this.dom.UnerlaubtBis?.addEventListener('change', this.handlers.updateUnerlaubteTage.bind(this));
        this.dom.unerlaubtBisHeuteBtn?.addEventListener('click', this.handlers.handleUnerlaubtBisHeuteClick.bind(this));

        // StPO
        this.dom.stpoSicherheitsleistungRadios?.forEach(radio => radio.addEventListener('change', () => this.dom.SicherheitsleistungBetrag?.classList.toggle('hidden', !document.querySelector('#Sicherheitsleistung_Ja:checked'))));
        this.dom.AZRDatenJa?.addEventListener('change', this.handlers.handleAzrNeinCheck.bind(this));
        this.dom.AZRDatenNein?.addEventListener('change', this.handlers.handleAzrNeinCheck.bind(this));

        // WaffG (Straftat)
        this.dom.waffgAussageRadios?.forEach(radio => radio.addEventListener('change', () => this.dom.aussageTextContainer_waffg?.classList.toggle('hidden', !this.dom.Aussage_waffg_Gemacht.checked)));
        this.dom.waffgSicherheitsleistungRadios?.forEach(radio => radio.addEventListener('change', () => this.dom.sicherheitsleistungBetragContainer_waffg?.classList.toggle('hidden', !this.dom.Sicherheitsleistung_Ja_waffg.checked)));
        this.dom.Waffenart_waffg?.addEventListener('change', this.handlers.handleWaffenartWaffGChange.bind(this));

        // Generate Button
        this.dom.generateOutputBtn?.addEventListener('click', this.handlers.generateOutput.bind(this));
    },

    // -----------------------------------------------------------------
    // LOKALE UI-FUNKTIONEN (nur für diesen Tab)
    // -----------------------------------------------------------------
    ui: {
        updateAufenthaltUI() {
            const { checkOhneAufenthaltstitel, checkMitAufenthaltstitel, checkMitVisumC, checkMitVisumD, aufenthaltHerkunftContainer, detailsMitAufenthaltstitel, detailsMitVisumC, detailsMitVisumD, aufenthaltDetailsContainer, radioPositivstaater } = this.dom;
            aufenthaltDetailsContainer?.classList.toggle('hidden', radioPositivstaater.checked);
            aufenthaltHerkunftContainer?.classList.toggle('hidden', checkOhneAufenthaltstitel.checked);
            detailsMitAufenthaltstitel?.classList.toggle('hidden', !checkMitAufenthaltstitel.checked);
            detailsMitVisumC?.classList.toggle('hidden', !checkMitVisumC.checked);
            detailsMitVisumD?.classList.toggle('hidden', !checkMitVisumD.checked);
        }
    },

    // -----------------------------------------------------------------
    // LOKALE HANDLER (nur für diesen Tab)
    // -----------------------------------------------------------------
    handlers: {
        handleTodayClick(targetId) {
            this.dom[targetId].value = this.coreApp.utils.formatDate(this.coreApp.utils.getCurrentDate());
        },

        handleAusreiseHeuteClick() {
            this.dom.ausreiseDatum.value = this.coreApp.utils.getCurrentDate();
        },

        handleUnerlaubtBisHeuteClick() {
            this.dom.UnerlaubtBis.value = this.coreApp.utils.getCurrentDate();
            this.dom.UnerlaubtBis.dispatchEvent(new Event('change')); // Löst Neuberechnung aus
        },

        handleAufenthaltArtChange(e) {
            this.dom.aufenthaltArtCheckboxes.forEach(box => { if (box !== e.target) box.checked = false; });
            this.ui.updateAufenthaltUI.call(this);
        },

        handleAufenthaltStatusChange() {
            this.ui.updateAufenthaltUI.call(this);
        },

        checkTuerkischerSpezialpassVisibility() {
            const { ReisepassArt, ReisepassHerkunft, tuerkischerSpezialpassContainer } = this.dom;
            const isSpezialpass = ReisepassArt.value === 'Spezialpass';
            const isTuerkisch = ReisepassHerkunft.value === 'türkisch';
            tuerkischerSpezialpassContainer?.classList.toggle('hidden', !(isSpezialpass && isTuerkisch));
        },

        handleAddReise() {
            const { reisePerioden } = this.state;
            const { maxReisePerioden } = this.config;
            if (reisePerioden.length >= maxReisePerioden) {
                this.coreApp.ui.showErrorModal(`Es können maximal ${maxReisePerioden} Reisezeiträume hinzugefügt werden.`);
                return;
            }
            const { einreiseDatum, ausreiseDatum, reisenInputContainer, Gesamtaufenthaltstage } = this.dom;
            const startDate = einreiseDatum.value, endDate = ausreiseDatum.value;
            if (startDate && endDate) {
                if (new Date(startDate) > new Date(endDate)) {
                    this.coreApp.ui.showErrorModal('Das Einreisedatum muss vor dem Ausreisedatum liegen.');
                    return;
                }
                const days = this.coreApp.utils.daysBetween(startDate, endDate);
                reisePerioden.push({ start: new Date(startDate), end: new Date(endDate), days: days });
                const reiseIndex = reisePerioden.length;
                const reiseDiv = document.createElement('div');
                reiseDiv.className = 'grid grid-cols-1 md:grid-cols-3 gap-4 p-2 bg-gray-100 rounded';
                reiseDiv.innerHTML = `<div><label for="Reise${reiseIndex}_Einreise" class="block text-xs font-medium text-gray-600">Reise ${reiseIndex} Einreise</label><input type="text" id="Reise${reiseIndex}_Einreise" value="${this.coreApp.utils.formatDate(startDate)}" class="form-element form-input bg-gray-200 text-sm" readonly></div><div><label for="Reise${reiseIndex}_Ausreise" class="block text-xs font-medium text-gray-600">Reise ${reiseIndex} Ausreise</label><input type="text" id="Reise${reiseIndex}_Ausreise" value="${this.coreApp.utils.formatDate(endDate)}" class="form-element form-input bg-gray-200 text-sm" readonly></div><div><label for="Reise${reiseIndex}_Tage" class="block text-xs font-medium text-gray-600">Tage</label><input type="text" id="Reise${reiseIndex}_Tage" value="${days}" class="form-element form-input bg-gray-200 text-sm" readonly></div>`;
                reisenInputContainer.appendChild(reiseDiv);
                Gesamtaufenthaltstage.value = reisePerioden.reduce((acc, reise) => acc + reise.days, 0);
                einreiseDatum.value = ''; ausreiseDatum.value = '';
            } else { this.coreApp.ui.showErrorModal('Bitte wählen Sie ein Ein- und Ausreisedatum.'); }
        },

        updateUnerlaubteTage() {
            const von = this.dom.UnerlaubtVon.value, bis = this.dom.UnerlaubtBis.value;
            this.dom.TageUnerlaubtImBundesgebiet.value = this.coreApp.utils.daysBetween(von, bis);
            this.handlers.updateLetzterTagAusreise.call(this);
        },

        updateLetzterTagAusreise() {
            const vonDateValue = this.dom.UnerlaubtVon.value;
            if (vonDateValue) {
                const vonDate = new Date(vonDateValue);
                if (!isNaN(vonDate)) {
                    vonDate.setDate(vonDate.getDate() - 1);
                    this.state.letzterTagAusreise = this.coreApp.utils.formatDate(vonDate);
                    this.dom.LetzterTagAusreiseDisplay.value = this.state.letzterTagAusreise;
                    return;
                }
            }
            this.state.letzterTagAusreise = ''; this.dom.LetzterTagAusreiseDisplay.value = '';
        },

        handleUnerlaubtEingereistChange(e) {
            const eingereistAm = e.target.value;
            const unerlaubtVon = this.dom.UnerlaubtVon.value;

            // Logik: Anfangsdatum des unerlaubten Aufenthalts an Einreisedatum anpassen
            if (eingereistAm && eingereistAm !== unerlaubtVon) {
                this.dom.UnerlaubtVon.value = eingereistAm;
                this.coreApp.ui.showInfoModal('Hinweis', 'Das Anfangsdatum des unerlaubten Aufenthalts wurde automatisch an das Datum der unerlaubten Einreise angepasst.');
                this.handlers.updateUnerlaubteTage.call(this);
            }

            // Logik: Bei Eingabe eines Datums den "Aufenthalt ohne AT"-Radiobutton deaktivieren
            const hasDate = !!eingereistAm;
            const checkboxToDisable = this.dom.stgb_aufenthaltOhneAT;
            if (checkboxToDisable) {
                checkboxToDisable.disabled = hasDate;
                if (hasDate && checkboxToDisable.checked) { checkboxToDisable.checked = false; }
            }
            this.handlers.updateLetzterTagAusreise.call(this);
        },

        handleAufenthaltsrechnerImport() {
            const text = this.dom.aufenthaltsrechnerImportText.value;
            if (!text) { this.coreApp.ui.showErrorModal('Bitte fügen Sie den Text aus dem Aufenthaltsrechner in das Textfeld ein.'); return; }
            let importSuccess = false;

            // Import Unerlaubter Aufenthalt (für StGB-Sektion)
            const unerlaubtMatch = text.match(/unerlaubter Aufenthalt:\s*"(\d{2}\/\d{2}\/\d{4})"\s*-\s*"(\d{2}\/\d{2}\/\d{4})"\s*\((\d+)\)/);
            if (unerlaubtMatch) {
                const [_, fromDateStr, toDateStr, days] = unerlaubtMatch;
                const convertDate = (dateStr) => { const parts = dateStr.split('/'); return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : ''; };
                this.dom.UnerlaubtVon.value = convertDate(fromDateStr); this.dom.UnerlaubtBis.value = convertDate(toDateStr); this.dom.TageUnerlaubtImBundesgebiet.value = days; importSuccess = true;
            }
            // Import Aufenthaltszeiträume (für 90/180-Regel)
            const berechnungPhrase = "möglich ist.";
            if (text.includes(berechnungPhrase)) {
                this.dom.aufenthaltszeitraeumeEingeben.checked = true; this.dom.aufenthaltszeitraeumeEingeben.dispatchEvent(new Event('change'));
                let relevantText = text.substring(text.indexOf(berechnungPhrase) + berechnungPhrase.length);
                if (relevantText.includes("Einreise Ausreise")) { relevantText = relevantText.split("Einreise Ausreise")[0]; }
                let dates = relevantText.match(/(\d{2}\/\d{2}\/\d{4})/g);
                if (text.includes("Visa-1")) {
                    if (dates && dates.length >= 2) { dates = dates.slice(2); }
                }
                if (dates && dates.length > 0 && dates.length % 2 === 0) {
                    for (let i = 0; i < dates.length; i += 2) {
                        const convertDate = (dateStr) => { const parts = dateStr.split('/'); return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : ''; };
                        this.dom.einreiseDatum.value = convertDate(dates[i]); this.dom.ausreiseDatum.value = convertDate(dates[i + 1]);
                        // Füge nur hinzu, wenn Zeitraum gültig ist (nicht zu viele Perioden)
                        if (this.state.reisePerioden.length < this.config.maxReisePerioden) {
                            this.dom.addReise.click();
                        }
                    }
                    importSuccess = true;
                }
            }
            if(importSuccess){
                this.coreApp.ui.showInfoModal('Import erfolgreich', 'Die Daten wurden erfolgreich übernommen.');
                this.dom.aufenthaltsrechnerImportCheckbox.checked = false;
                this.dom.aufenthaltsrechnerImportCheckbox.dispatchEvent(new Event('change'));
                this.handlers.updateLetzterTagAusreise.call(this);
            } else {
                this.coreApp.ui.showErrorModal('Die Daten konnten nicht im Text gefunden werden. Bitte prüfen Sie das Format.');
            }
        },

        handleEinreiseDateChange(e) {
            const einreiseDate = e.target.value;
            if (!einreiseDate) return;
            this.coreApp.ui.showConfirmModal('Unerlaubte Einreise?', 'Ist die Person bei der Einreise über die Binnengrenze unerlaubt eingereist?', () => {
                if (!this.dom.UnerlaubtEingereistAm.value) {
                    this.dom.UnerlaubtEingereistAm.value = einreiseDate;
                    this.dom.UnerlaubtEingereistAm.dispatchEvent(new Event('change'));
                }
            });
        },

        handleStraftatArtChange() {
            const isAufenthG = this.dom.radioStraftatAufenthG.checked;
            this.dom['aufenthg-content']?.classList.toggle('hidden', !isAufenthG);
            this.dom['waffg-content']?.classList.toggle('hidden', isAufenthG);
            this.dom['stpo-content']?.classList.toggle('hidden', !isAufenthG);
        },

        handleWaffenartWaffGChange() {
            const selectedValue = this.dom.Waffenart_waffg.value;
            const showKlinge = ['Butterflymesser', 'Springmesser', 'Faustmesser'].includes(selectedValue);
            const showKaliber = selectedValue === 'Munition';

            this.dom.klingenlaengeContainer_waffg?.classList.toggle('hidden', !showKlinge);
            this.dom.kaliberContainer_waffg?.classList.toggle('hidden', !showKaliber);
        },

        handleAzrNeinCheck() {
            if (this.dom.AZRDatenNein.checked) {
                const tageUnerlaubt = parseInt(this.dom.TageUnerlaubtImBundesgebiet.value, 10);
                const unerlaubtEingereist = this.dom.UnerlaubtEingereistAm.value;
                if ((!isNaN(tageUnerlaubt) && tageUnerlaubt > 10) || unerlaubtEingereist) {
                    this.coreApp.ui.showErrorModal("Wenn der Beschuldigte sich länger als 10 Tage unerlaubt im Bundesgebiet aufgehalten hat, oder unerlaubt in dieses eingereist ist, dann MUSS ein AZR Datensatz angelegt oder der bestehende mit den entsprechenden Einträgen erweitert werden.");
                }
            }
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
        },
        
        // --- Interne Helper für GenerateOutput ---

        getValidationConfig() {
            if (this.dom.radioStraftatAufenthG?.checked) {
                return {
                    basicFields: ['Datum', 'Uhrzeit', 'Flughafen', 'Flugnummer'],
                    specificChecks: [
                        { condition: () => document.querySelector('input[name="stgb_radio"]:checked') && this.dom.TageUnerlaubtImBundesgebiet?.value, message: "Bitte vervollständige die Angaben zur Straftat und der Anzahl an unerlaubten Tagen" },
                        { condition: () => this.config.stpoRadioGroups.every(group => document.querySelector(`input[name="${group}"]:checked`)), message: "Bitte vervollständige die Angaben zu StPO" }
                    ]
                };
            } else if (this.dom.radioStraftatWaffG?.checked) {
                return {
                     basicFields: ['Datum', 'Uhrzeit', 'Flughafen', 'Flugnummer'],
                     specificChecks: [
                          { condition: () => this.dom.Zeuge1_waffg?.value.trim() && this.dom.Zeuge2_waffg?.value.trim(), message: "Bitte füllen Sie die Felder für Zeuge 1 und Zeuge 2 aus." },
                          { condition: () => document.querySelector('input[name="waffg_einwilligung"]:checked') && document.querySelector('input[name="waffg_zbv"]:checked') && document.querySelector('input[name="waffg_aussage"]:checked'), message: "Bitte treffen Sie eine Auswahl bei 'Einwilligung', 'ZBV' und 'Aussage'." },
                          { condition: () => { if (this.dom.Waffenart_waffg?.value === 'Munition') { return this.dom.Kaliber_waffg?.value.trim() !== ''; } return true; }, message: "Bitte das Kaliber der Patrone angeben." }
                     ]
                };
            }
            return { basicFields: ['Datum', 'Uhrzeit'], specificChecks: [] };
        },

        validateInput(config) {
            const { basicFields, specificChecks } = config;
            for (const field of basicFields) {
                if (!this.dom[field]?.value) {
                    this.coreApp.ui.showErrorModal(`Bitte füllen Sie das Feld "${field}" aus.`);
                    return false;
                }
            }
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
             if (this.dom.radioStraftatAufenthG?.checked) {
                  const isPositiv = this.dom.radioPositivstaater?.checked || this.dom.radioPositivstaaterMitAT?.checked;
                  return EinstellungenModul.getTemplate(isPositiv ? 'Positiv' : 'Negativ');
             } else if (this.dom.radioStraftatWaffG?.checked) {
                  return EinstellungenModul.getTemplate('StraftatWaffG');
             }
             return null;
        },

        collectAllValues() {
            const finalValues = new Map();
            const overrideValues = EinstellungenModul.getPlaceholderOverrides();

            // 1. Spezielle Werte
             finalValues.set('[LetzterTagAusreise]', this.state.letzterTagAusreise);

            // 2. Alle Formularelemente durchgehen
            const formElements = document.getElementById('content-strafanzeigen')?.querySelectorAll('input[id], select[id], textarea[id]');
            formElements?.forEach(el => {
                if (!el.id) return;
                const placeholderId = el.id;

                if (el.type === 'checkbox' || el.type === 'radio') {
                    if (el.checked) {
                        const placeholder = `[${el.value || placeholderId}]`;
                        const override = overrideValues.get(placeholder);
                        finalValues.set(placeholder, override ?? el.nextElementSibling?.textContent.trim() ?? 'Ja');
                    } else {
                         // Setze leeren String für alle nicht ausgewählten Checkboxen/Radios (um sie zu entfernen)
                         finalValues.set(`[${el.value || placeholderId}]`, '');
                    }
                } else if (el.tagName === 'SELECT') {
                    const selectedOption = el.options[el.selectedIndex];
                    if (selectedOption && selectedOption.value) {
                         const isSpecial = this.config.specialDropdowns.includes(placeholderId.replace('_waffg', '')); // Anpassung für WaffG
                         const valueKey = isSpecial ? `[${placeholderId}_${selectedOption.value}]` : `[${placeholderId}]`;
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

             // 3. Spezielle Logik (z.B. Reiseperioden)
             this.state.reisePerioden.forEach((reise, index) => {
                 const i = index + 1;
                 finalValues.set(`[Reisezeitraum${i}]`, `\nEinreise: ${this.coreApp.utils.formatDate(reise.start)} - Ausreise: ${this.coreApp.utils.formatDate(reise.end)} - Aufenthaltstage: ${reise.days}`);
                 finalValues.set(`[Reise${i}_Einreise]`, this.coreApp.utils.formatDate(reise.start));
                 finalValues.set(`[Reise${i}_Ausreise]`, this.coreApp.utils.formatDate(reise.end));
                 finalValues.set(`[Reise${i}_Tage]`, reise.days.toString());
             });
             // Fehlende Reiseperioden leeren
             for (let i = this.state.reisePerioden.length + 1; i <= this.config.maxReisePerioden; i++) {
                 finalValues.set(`[Reisezeitraum${i}]`, '');
                 finalValues.set(`[Reise${i}_Einreise]`, '');
                 finalValues.set(`[Reise${i}_Ausreise]`, '');
                 finalValues.set(`[Reise${i}_Tage]`, '');
             }

            // 4. WaffG Dropdown (muss separat behandelt werden, da es Platzhalter setzt)
             const waffenartDropdown = this.dom.Waffenart_waffg;
             if (waffenartDropdown && !this.dom['waffg-content']?.classList.contains('hidden')) {
                  const selectedOption = waffenartDropdown.options[waffenartDropdown.selectedIndex];
                  if (selectedOption && selectedOption.value) {
                       const valueKey = `[Waffenart_${selectedOption.value}]`;
                       const override = overrideValues.get(valueKey);
                       finalValues.set(valueKey, override ?? selectedOption.textContent);

                       // Setze alle anderen Waffenart-Platzhalter auf leer
                       Array.from(waffenartDropdown.options).forEach(opt => {
                            if (opt.value !== selectedOption.value) {
                                finalValues.set(`[Waffenart_${opt.value}]`, '');
                            }
                       });
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
                     // Verwende leeren String, falls Wert null oder undefined
                     const replacement = value === null || value === undefined ? '' : value;
                     outputText = outputText.replace(regex, replacement);
                 });

                 if (outputText === lastOutput) break;
                 iterations++;
             }

             // Entferne alle verbleibenden (nicht ersetzten) Platzhalter
             outputText = outputText.replace(/\[[^\]]+?\]/g, '');

             return outputText;
        }
    }
};

window.StrafanzeigenModul = StrafanzeigenModul;
