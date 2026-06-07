const btn = document.querySelector("button");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

function setTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        applyTheme(savedTheme);
        return;
    }

    applyTheme(mediaQuery.matches ? "dark" : "light");
}

// Initial theme
setTheme();

// Listen for OS theme changes
mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        setTheme();
    }
});

// Toggle theme
btn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ?
        "light" :
        "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});