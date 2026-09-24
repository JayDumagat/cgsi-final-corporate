"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribeTheme(onChange: () => void) {
  window.addEventListener("cgsi-theme-change", onChange);
  return () => window.removeEventListener("cgsi-theme-change", onChange);
}

function serverTheme(): Theme {
  return "light";
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const theme = useSyncExternalStore(subscribeTheme, currentTheme, serverTheme);

  function toggleTheme() {
    const theme = currentTheme();
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    try {
      window.localStorage.setItem("cgsi-theme", nextTheme);
    } catch {
      // The switch remains usable when browser storage is unavailable.
    }
    window.dispatchEvent(new Event("cgsi-theme-change"));
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
