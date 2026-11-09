const featCategories = {
    changed: { status: "Zmiana", group: "Zmienione featy" },
    allowed: { status: "Dozwolony", group: "Dozwolone featy" },
    new: { status: "Nowy", group: "Nowe featy" },
};

function featUrl(feat) {
    return "feat.html?id=" + encodeURIComponent(feat.id);
}

function appendWikiText(parent, tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.append(element);
    return element;
}

const featRows = document.getElementById("feat-rows");
if (featRows) {
    const featTabs = document.querySelectorAll("[data-feat-category]");
    const sortedFeats = [...featData].sort((a, b) => a.name.localeCompare(b.name));

    function showFeatCategory(category) {
        for (const tab of featTabs) {
            tab.setAttribute("aria-pressed", String(tab.dataset.featCategory === category));
        }
        featRows.replaceChildren();
        const feats = sortedFeats.filter(entry => entry.category === category);
        for (const feat of feats) {
            const cell = featRows.insertRow().insertCell();
            appendWikiText(cell, "a", feat.name).href = featUrl(feat);
        }
        if (feats.length === 0) {
            featRows.insertRow().insertCell().textContent = "Brak featów w tej kategorii.";
        }
    }

    for (const tab of featTabs) {
        tab.addEventListener("click", () => showFeatCategory(tab.dataset.featCategory));
    }
    showFeatCategory("changed");
}

const featDetails = document.getElementById("feat-details");
if (featDetails) {
    const id = new URLSearchParams(window.location.search).get("id");
    const feat = featData.find(entry => entry.id === id);
    if (feat) {
        document.title = feat.name + " | Server-Wiki";
        appendWikiText(featDetails, "h2", feat.name);
        const status = appendWikiText(featDetails, "p", "");
        appendWikiText(status, "strong", featCategories[feat.category].status);
        for (const paragraph of feat.description) {
            appendWikiText(featDetails, "p", paragraph);
        }
    } else {
        appendWikiText(featDetails, "h2", "Nie znaleziono featu");
    }
}

const searchResults = document.getElementById("search-results");
if (searchResults) {
    const query = (new URLSearchParams(window.location.search).get("q") || "").trim();
    const status = document.getElementById("search-status");
    document.getElementById("searchInput").value = query;

    if (query) {
        const entries = [
            ...classData.map(entry => ({
                name: entry.name,
                aliases: entry.subclasses.map(subclass => subclass.name).join(" "),
                group: "Klasy",
                url: "class.html?id=" + encodeURIComponent(entry.id),
            })),
            ...raceData.map(race => ({
                name: race.name,
                aliases: race.entries.map(entry => entry.variant || "").join(" "),
                group: "Rasy",
                url: "race.html?id=" + encodeURIComponent(race.id),
            })),
            ...featData.map(feat => ({
                name: feat.name,
                group: featCategories[feat.category].group,
                url: featUrl(feat),
            })),
            ...changedSpellData.map(spell => ({
                name: spell.name,
                group: spell.category === "new" ? "Nowe spelle" : "Zmienione spelle",
                url: "changed_spell.html?id=" + encodeURIComponent(spell.id),
            })),
        ];
        const results = entries
            .filter(entry => (entry.name + " " + (entry.aliases || "")).toLowerCase().includes(query.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name));

        status.textContent = results.length ? "Szukana nazwa: " + query : "Brak wynik\u00f3w dla: " + query;
        for (const result of results) {
            const item = appendWikiText(searchResults, "li", "");
            appendWikiText(item, "a", result.name).href = result.url;
            item.append(" (" + result.group + ")");
        }
    } else {
        status.textContent = "Wpisz nazw\u0119 rasy, klasy, featu lub zakl\u0119cia.";
    }
}
