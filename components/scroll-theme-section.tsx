"use client";

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { useThemeScroll } from "./theme-scroll-provider";

interface ScrollThemeSectionProps {
  children: React.ReactNode;
  theme: "light" | "dark";
  className?: string;
}

export default function ScrollThemeSection({
  children,
  theme,
  className = "",
}: ScrollThemeSectionProps) {
  const ref = useRef(null);
  const { setTheme } = useThemeScroll();

  // amount: 0 means it triggers as soon as even 1px enters the area
  // margin: "-50% 0px -50% 0px" means we are only looking at the middle line of the viewport
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setTheme(theme);
    }
  }, [isInView, theme, setTheme]);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
