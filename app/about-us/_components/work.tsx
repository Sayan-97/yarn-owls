"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  cubicBezier,
  type MotionValue,
} from "motion/react";
import Image from "next/image";
import { useRef, useMemo } from "react";
import OwlImg from "@/public/cta-img.png";
import { MoveUpRight } from "lucide-react";

const ease = cubicBezier(0.25, 1, 0.5, 1);

/** Word component */
function Word({
  text,
  range,
  scrollYProgress,
  className,
}: {
  text: string;
  range: [number, number];
  scrollYProgress: MotionValue<number>;
  className?: string;
}) {
  const opacity = useTransform(scrollYProgress, range, [0, 1], { ease });
  const blurValue = useTransform(scrollYProgress, range, [10, 0]);
  const y = useTransform(scrollYProgress, range, [20, 0]);

  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.span
      style={{ opacity, filter, y, display: "inline-block" }}
      className={className}
    >
      {text === " " ? "\u00A0" : text}
    </motion.span>
  );
}

const HEADING_PARTS = [
  { text: "We're Not Here To Add More Marketing. ", className: "" },
  {
    text: "We're Here To Make It Work Harder.",
    className: "text-primary font-secondary italic font-normal block mt-2",
  },
];

const PARAGRAPH_TEXT =
  "Founded in 2020, Yarn Owls was built on a simple belief: B2B growth does not come from generic playbooks or content churn. It comes from sharp positioning, deliberate execution, and systems that turn attention into pipeline. We work like an embedded growth partner for brands that need stronger visibility, clearer messaging, better-performing digital assets, and content that supports revenue, not just reach.";

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // important for pinned sections
  });

  /** Heading */
  const headingWords = useMemo(() => {
    const rawWords = HEADING_PARTS.flatMap((part) =>
      part.text
        .split(/(\s+)/)
        .filter((t) => t !== "")
        .map((text) => ({ text, className: part.className })),
    );

    const totalWords = rawWords.length;

    return rawWords.map((word, i) => {
      const start = (i / totalWords) * 0.35;
      const end = start + 0.15;

      return { ...word, range: [start, end] as [number, number] };
    });
  }, []);

  /** Paragraph */
  const paragraphWords = useMemo(() => {
    const rawWords = PARAGRAPH_TEXT.split(/(\s+)/).filter((t) => t !== "");
    const totalWords = rawWords.length;

    return rawWords.map((word, i) => {
      const start = 0.35 + (i / totalWords) * 0.4;
      const end = start + 0.1;

      return { text: word, range: [start, end] as [number, number] };
    });
  }, []);

  /** Button */
  const btnOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.8, 1], [40, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[180vh] w-full -mt-[30vh]" // controlled scroll space
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center">
        {/* Background */}
        <Image
          src={OwlImg}
          alt=""
          className="absolute right-0 opacity-10 bottom-0 w-[20%] object-contain pointer-events-none"
        />

        <div className="container relative z-10">
          <div className="space-y-10">
            {/* Heading */}
            <h2 className="w-3/4 text-4xl md:text-5xl lg:text-[48px] leading-tight font-semibold">
              {headingWords.map((word, i) => (
                <Word
                  key={`h-${i}-${word.text}`}
                  text={word.text}
                  range={word.range}
                  scrollYProgress={scrollYProgress}
                  className={word.className}
                />
              ))}
            </h2>

            {/* Paragraph */}
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-muted leading-relaxed">
              {paragraphWords.map((word, i) => (
                <Word
                  key={`p-${i}-${word.text}`}
                  text={word.text}
                  range={word.range}
                  scrollYProgress={scrollYProgress}
                  className="text-muted"
                />
              ))}
            </p>

            {/* Button */}
            <motion.div style={{ opacity: btnOpacity, y: btnY }}>
              <button
                type="button"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:gap-3 group cursor-pointer"
              >
                Explore Our Work
                <MoveUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
