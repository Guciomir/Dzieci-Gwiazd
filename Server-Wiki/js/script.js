const wikiPanels = [
    { button: document.getElementById("searchBtn"), panel: document.getElementById("searchBar") },
    { button: document.getElementById("menuBtn"), panel: document.getElementById("wiki-menu") },
];

function setWikiPanel({ button, panel }, open) {
    if (panel.id === "wiki-menu") {
        panel.inert = !open;
    } else {
        panel.hidden = !open;
    }
    button.setAttribute("aria-expanded", String(open));
    if (open) {
        panel.querySelector("input, a").focus();
    }
}

for (const item of wikiPanels) {
    item.button.addEventListener("click", () => {
        const open = item.button.getAttribute("aria-expanded") === "false";
        for (const other of wikiPanels) {
            setWikiPanel(other, other === item && open);
        }
    });
}

document.addEventListener("click", event => {
    for (const item of wikiPanels) {
        if (item.button.getAttribute("aria-expanded") === "true" && !item.panel.contains(event.target) && !item.button.contains(event.target)) {
            setWikiPanel(item, false);
        }
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        for (const item of wikiPanels) {
            if (item.button.getAttribute("aria-expanded") === "true") {
                setWikiPanel(item, false);
                item.button.focus();
            }
        }
    }
});

const wikiSearch = document.getElementById("searchBar");
wikiSearch.addEventListener("submit", event => {
    event.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
        const target = new URL(wikiSearch.action);
        target.searchParams.set("q", query);
        window.location.assign(target.href);
    }
});

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});