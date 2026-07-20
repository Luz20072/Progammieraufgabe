export function initTheme(id) {
    const html = document.documentElement;
    const button = document.querySelector(id);

    const savedTheme = localStorage.getItem("theme") || "dark";
    html.dataset.theme = savedTheme;

    button.addEventListener("click", () => {
        const newTheme = html.dataset.theme === "dark"
            ? "light"
            : "dark";

        html.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
    });
}