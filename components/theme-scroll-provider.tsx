"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeScrollContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeScrollContext = createContext<ThemeScrollContextType | undefined>(
  undefined,
);

export function ThemeScrollProvider({
  children,
  initialTheme = "light",
}: {
  children: React.ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // Apply the theme class to the document element or body
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeScrollContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeScrollContext.Provider>
  );
}

export function useThemeScroll() {
  const context = useContext(ThemeScrollContext);
  if (context === undefined) {
    throw new Error("useThemeScroll must be used within a ThemeScrollProvider");
  }
  return context;
}
