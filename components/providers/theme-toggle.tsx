"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>(() => currentTheme());

  function toggleTheme() {
    const theme = currentTheme();
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("cgsi-theme", nextTheme);
    setTheme(nextTheme);
  }

  const toggleLabel = theme === "dark" ? "Switch to day mode" : "Switch to night mode";

  return (
    <button
      type="button"
      className={compact ? "theme-toggle theme-toggle-compact" : "theme-toggle"}
      onClick={toggleTheme}
      aria-label={toggleLabel}
      title={toggleLabel}
    >
      {compact ? (
        theme === "dark" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />
      ) : (
        <span aria-hidden="true">Day / Night</span>
      )}
      {!compact ? <span className="theme-toggle-mode"> display</span> : null}
    </button>
  );
}
