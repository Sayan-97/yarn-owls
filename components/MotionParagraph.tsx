"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MotionParagraphProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function MotionParagraph({
  children,
  className,
  delay = 0.3,
}: MotionParagraphProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.p
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: delay,
      }}
      className={cn("text-muted font-medium leading-relaxed", className)}
    >
      {children}
    </motion.p>
  );
}
