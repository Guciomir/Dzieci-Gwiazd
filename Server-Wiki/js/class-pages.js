function appendClassElement(parent, tag, text = "") {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.append(element);
    return element;
}

function renderSubclass(parent, lines) {
    let table = null;
    for (const line of lines) {
        if (line.includes("\t")) {
            if (!table) {
                table = appendClassElement(parent, "table");
                table.className = "spell-table wiki-link-table";
            }
            const row = table.insertRow();
            for (const cell of line.split("\t")) {
                row.insertCell().textContent = cell;
            }
        } else {
            table = null;
            if (line.trim()) {
                const heading = /^[A-Z][\p{L}\d '’(),:&/-]{1,70}$/u.test(line.trim());
                appendClassElement(parent, heading ? "h4" : "p", line);
            }
        }
    }
}

const classRows = document.getElementById("class-rows");
if (classRows) {
    for (const entry of classData) {
        const row = classRows.insertRow();
        appendClassElement(row.insertCell(), "a", entry.name).href = "class.html?id=" + encodeURIComponent(entry.id);
        row.insertCell().textContent = String(entry.subclasses.length);
    }
}

const classDetails = document.getElementById("class-details");
if (classDetails) {
    const id = new URLSearchParams(window.location.search).get("id");
    const entry = classData.find(item => item.id === id);
    if (!entry) {
        appendClassElement(classDetails, "h2", "Nie znaleziono klasy");
    } else {
        document.title = entry.name + " | Server-Wiki";
        appendClassElement(classDetails, "h2", entry.name);
        appendClassElement(classDetails, "h3", "Podklasy");
        for (const subclass of entry.subclasses) {
            const panel = appendClassElement(classDetails, "details");
            const title = appendClassElement(panel, "summary");
            appendClassElement(title, "b", subclass.name);
            renderSubclass(panel, subclass.lines);
        }
    }
}
