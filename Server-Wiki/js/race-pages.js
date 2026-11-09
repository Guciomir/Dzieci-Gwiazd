function appendRaceElement(parent, tag, text = "") {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.append(element);
    return element;
}

function renderRaceTraits(parent, lines) {
    for (const line of lines.filter(line => line.trim())) {
        const paragraph = appendRaceElement(parent, "p");
        const trait = /^([A-Z][\w' -]{1,55}\.)\s*(.*)$/.exec(line);
        if (trait) {
            appendRaceElement(paragraph, "b", trait[1]);
            paragraph.append(trait[2] ? " " + trait[2] : "");
        } else {
            paragraph.textContent = line.replaceAll("\t", " | ");
        }
    }
}

const raceRows = document.getElementById("race-rows");
if (raceRows) {
    for (const race of [...raceData].sort((a, b) => a.name.localeCompare(b.name))) {
        const row = raceRows.insertRow();
        const cell = row.insertCell();
        appendRaceElement(cell, "a", race.name).href = "race.html?id=" + encodeURIComponent(race.id);
        const sources = [...new Set(race.entries.map(entry => entry.source || "Nieustalone"))];
        row.insertCell().textContent = sources.join(" / ");
    }
}

const raceDetails = document.getElementById("race-details");
if (raceDetails) {
    const id = new URLSearchParams(window.location.search).get("id");
    const race = raceData.find(entry => entry.id === id);
    if (!race) {
        appendRaceElement(raceDetails, "h2", "Nie znaleziono rasy");
    } else {
        document.title = race.name + " | Server-Wiki";
        appendRaceElement(raceDetails, "h2", race.name);
        const sources = [...new Set(race.entries.map(entry => entry.source || "Nieustalone"))];
        appendRaceElement(raceDetails, "p", "\u0179r\u00f3d\u0142o: " + sources.join(" / "));
        const base = race.entries.find(entry => entry.variant === null);
        if (race.entries.length === 1) {
            const [entry] = race.entries;
            if (entry.variant) {
                appendRaceElement(raceDetails, "p", entry.variant).className = "spell-school";
            }
            renderRaceTraits(raceDetails, entry.lines);
        } else {
            if (base) {
                renderRaceTraits(raceDetails, base.lines);
            }
            appendRaceElement(raceDetails, "h3", "Podrasy i warianty");
            for (const entry of race.entries.filter(entry => entry.variant !== null)) {
                const variant = appendRaceElement(raceDetails, "details");
                const summary = appendRaceElement(variant, "summary");
                appendRaceElement(summary, "b", entry.variant);
                appendRaceElement(variant, "p", "\u0179r\u00f3d\u0142o: " + (entry.source || "Nieustalone"));
                renderRaceTraits(variant, entry.lines);
            }
        }
    }
}
