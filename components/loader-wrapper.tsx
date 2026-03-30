"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Loader from "./loader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for at least 2 seconds or until the window is fully loaded
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      {children}
    </>
  );
}
