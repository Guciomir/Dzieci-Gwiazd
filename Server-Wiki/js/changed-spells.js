const spellRows = document.querySelector("tbody[data-spell-category]");
const spellContent = document.getElementById("spell-content");

function appendSpellElement(parent, tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.append(element);
    return element;
}

if (spellRows) {
    const search = document.getElementById("searchInput");
    const levelTabs = document.querySelectorAll(".tab[data-level]");

    function renderChangedSpells() {
        const level = Number(document.querySelector(".tab.active[data-level]").dataset.level);
        const query = search.value.trim().toLowerCase();
        const spells = changedSpellData.filter(spell =>
            spell.category === spellRows.dataset.spellCategory &&
            spell.level === level && spell.name.toLowerCase().includes(query)
        );

        spellRows.replaceChildren();
        for (const spell of spells) {
            const row = spellRows.insertRow();
            const link = appendSpellElement(row.insertCell(), "a", spell.name);
            link.href = "changed_spell.html?id=" + encodeURIComponent(spell.id);

            for (const value of [spell.school, spell.castingTime, spell.range, spell.duration, spell.components]) {
                row.insertCell().textContent = value;
            }
        }

        if (spells.length === 0) {
            const cell = spellRows.insertRow().insertCell();
            cell.colSpan = 6;
            cell.textContent = "Brak zakl\u0119\u0107 do wy\u015bwietlenia.";
        }
    }

    for (const tab of levelTabs) {
        tab.addEventListener("click", renderChangedSpells);
    }
    search.addEventListener("input", renderChangedSpells);
    renderChangedSpells();
}

if (spellContent) {
    const id = new URLSearchParams(window.location.search).get("id");
    const spell = changedSpellData.find(entry => entry.id === id);

    if (spell) {
        document.title = spell.name + " | Server-Wiki";
        appendSpellElement(spellContent, "h2", spell.name);
        const school = spell.level === 0 ? spell.school + " cantrip" : spell.school + " (level " + spell.level + ")";
        appendSpellElement(spellContent, "p", school).className = "spell-school";

        const metadata = appendSpellElement(spellContent, "dl", "");
        const fields = [
            ["Casting Time", spell.castingTime],
            ["Range", spell.range],
            ["Components", spell.components],
            ["Duration", spell.duration],
        ];
        for (const [label, value] of fields) {
            const field = appendSpellElement(metadata, "div", "");
            appendSpellElement(field, "dt", label + ":");
            appendSpellElement(field, "dd", value);
        }
        for (const line of spell.description.filter(Boolean)) {
            const heading = "At Higher Levels.";
            if (line.startsWith(heading)) {
                const paragraph = appendSpellElement(spellContent, "p", "");
                appendSpellElement(paragraph, "strong", heading);
                paragraph.append(line.slice(heading.length));
            } else {
                appendSpellElement(spellContent, "p", line);
            }
        }
        if (spell.classes.length > 0) {
            const paragraph = appendSpellElement(spellContent, "p", "");
            appendSpellElement(paragraph, "strong", "Spell Lists.");
            paragraph.append(" " + spell.classes.join(", "));
        }
    } else {
        appendSpellElement(spellContent, "h2", "Nie znaleziono zakl\u0119cia");
    }
}
