"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

interface MotionHeadingProps {
  tag?: HeadingTag;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const styles = {
  h1: "text-4xl lg:text-[64px] font-semibold leading-normal",
  h2: "text-3xl lg:text-5xl font-semibold leading-10 lg:leading-[64px]",
  h3: "text-2xl lg:text-[32px] font-semibold",
  h4: "lg:text-2xl font-semibold",
};

export default function MotionHeading({
  tag = "h1",
  children,
  className,
  delay = 0.3,
}: MotionHeadingProps) {
  const components = {
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    h4: motion.h4,
  };
  const Tag = components[tag];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Tag
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: delay,
      }}
      className={cn(styles[tag], className)}
    >
      {children}
    </Tag>
  );
}
