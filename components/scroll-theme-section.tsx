"use client";

import type React from "react";

interface ScrollThemeSectionProps {
  children: React.ReactNode;
  theme?: "light" | "dark";
  className?: string;
}

export default function ScrollThemeSection({
  children,
  theme,
  className = "",
}: ScrollThemeSectionProps) {
  let themeClasses = "";
  if (theme === "dark") {
    themeClasses = "dark bg-background text-foreground";
  } else if (theme === "light") {
    themeClasses = "light bg-background text-foreground";
  }

  return (
    <section className={`${themeClasses} ${className}`.trim()}>
      {children}
    </section>
  );
}
