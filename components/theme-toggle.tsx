"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const current = document.documentElement.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("links-theme", next);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Alternar tema de cores">
      <span className="theme-icon-dark" aria-hidden="true">◑</span>
      <span className="theme-icon-light" aria-hidden="true">◐</span>
    </button>
  );
}
