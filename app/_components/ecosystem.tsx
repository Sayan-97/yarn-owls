"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import Image from "next/image";
import { useRef, useMemo } from "react";
import EcosystemImg from "@/public/hero-bg.png";
import WaveImg from "@/public/wave.png";

const PARTS = [
  { text: "We build ", className: "" },
  {
    text: "Integrated Marketing Ecosystems",
    className: "font-secondary font-normal text-primary capitalize",
  },
  {
    text: " where every asset, campaign, and touchpoint feeds the same goal: ",
    className: "",
  },
  {
    text: "Sustainable Growth.",
    className: "font-secondary font-normal text-primary capitalize",
  },
];

function Word({
  text,
  index,
  total,
  scrollYProgress,
  className,
}: {
  text: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  className: string;
}) {
  // Reveal across the first 45% of scroll
  const start = (index / total) * 0.45;
  const end = Math.min(start + 0.05, 0.48); // Each word has a small overlap window

  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const blurValue = useTransform(scrollYProgress, [start, end], [12, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.span
      style={{ opacity, filter, display: "inline-block" }}
      className={`relative z-10 ${className}`}
    >
      {text === " " ? "\u00A0" : text}
    </motion.span>
  );
}

export default function Ecosystems() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  // Split parts into words while keeping spaces
  const words = useMemo(() => {
    return PARTS.flatMap((part) =>
      part.text
        .split(/(\s+)/)
        .filter((t) => t !== "")
        .map((text) => ({ text, className: part.className })),
    );
  }, []);

  // Image: starts appearing after text finishes (0.5), finishes by 95% scroll
  const imageScale = useTransform(scrollYProgress, [0.5, 0.95], [0, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.5, 0.95], [100, 0]);

  return (
    <section ref={containerRef} className="relative h-screen md:h-[130vh]">
      {/* Sticky frame covers the full screen while scrolling through the 350vh track */}
      <div className="sticky top-0 h-svh w-full overflow-hidden isolate">
        {/* Background Wave - Forced to the very back */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={WaveImg}
            alt="Background Wave"
            fill
            className="object-cover pointer-events-none opacity-50"
            priority
          />
        </div>

        {/* Content Layer - Centered vertically in viewport */}
        <div className="container relative h-full flex flex-col items-start justify-center">
          <div className="relative w-full group/content">
            {/* ── Text (On top of Wave, behind Ecosystem Image) ────────────── */}
            <div className="w-full text-left relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
                {words.map((item, i) => (
                  <Word
                    key={`${item.text}-${i}`}
                    text={item.text}
                    index={i}
                    total={words.length}
                    scrollYProgress={scrollYProgress}
                    className={item.className}
                  />
                ))}
              </h2>
            </div>

            {/* ── Image Reveal (On Top of Everything) ──────────────────────── */}
            <motion.div
              style={{
                scale: imageScale,
                opacity: imageOpacity,
                y: imageY,
              }}
              // Constrained to container width (w-full), centered vertically over text
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[300px] md:h-[500px] lg:h-[577px] rounded-[32px] md:rounded-[48px] overflow-hidden z-20 origin-center shadow-[0_16px_32px_-12px_rgba(0,0,0,0.2)]"
            >
              <Image
                src={EcosystemImg}
                alt="Integrated Marketing Ecosystems"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
