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
import OwlImg from "@/public/cta-img.png";
import { MoveUpRight } from "lucide-react";

/** Word component for the reveal effect */
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
  const opacity = useTransform(scrollYProgress, range, [0.1, 1]);
  const blurValue = useTransform(scrollYProgress, range, [10, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.span
      style={{ opacity, filter, display: "inline-block" }}
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
    offset: ["start center", "end end"],
  });

  // Calculate words with ranges for heading and paragraph
  const headingWords = useMemo(() => {
    const rawWords = HEADING_PARTS.flatMap((part) =>
      part.text
        .split(/(\s+)/)
        .filter((t) => t !== "")
        .map((text) => ({ text, className: part.className })),
    );

    const totalWords = rawWords.length;
    return rawWords.map((word, i) => {
      const start = (i / totalWords) * 0.4;
      const end = start + 0.1;
      return {
        ...word,
        range: [start, Math.min(end, 0.45)] as [number, number],
      };
    });
  }, []);

  const paragraphWords = useMemo(() => {
    const rawWords = PARAGRAPH_TEXT.split(/(\s+)/).filter((t) => t !== "");
    const totalWords = rawWords.length;
    return rawWords.map((word, i) => {
      const start = 0.5 + (i / totalWords) * 0.4;
      const end = start + 0.05;
      return {
        text: word,
        range: [start, Math.min(end, 0.95)] as [number, number],
      };
    });
  }, []);

  // Heading container motion
  const containerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // Button motion
  const btnOpacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.9, 0.95], [20, 0]);

  return (
    <section ref={containerRef} className="relative h-[100vh] w-full">
      <div className="sticky top-30 w-full flex items-center overflow-hidden">
        {/* Large Owl Watermark Background */}
        <Image
          src={OwlImg}
          alt=""
          className="absolute right-0 opacity-10 bottom-0 w-[20%] object-contain"
        />

        <div className="container relative z-10">
          <motion.div
            style={{ opacity: containerOpacity }}
            className="space-y-10"
          >
            {/* Heading Section */}
            <motion.div className="relative">
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
            </motion.div>

            {/* Paragraph Section */}
            <div className="w-full">
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
            </div>

            {/* Button Section */}
            <motion.div style={{ opacity: btnOpacity, y: btnY }}>
              <button
                type="button"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:gap-3 group cursor-pointer"
              >
                Explore Our Work{" "}
                <MoveUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
