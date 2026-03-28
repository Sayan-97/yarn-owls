"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollThemeSection from "@/components/scroll-theme-section";
import { BookCheckIcon, SearchIcon, SparkleIcon } from "lucide-react";

const list = [
  {
    title: "SEO-Optimized Editorial",
    des: "High-conversion content targeting commercial intent keywords, decision-stage queries, and category comparison searches. Every asset is architected around SERP dominance and visitor-to-lead conversion optimization.",
    icon: SearchIcon,
  },
  {
    title: "Technical SEO & Content Operations",
    des: "Beyond keyword targeting. We execute comprehensive site audits, schema markup implementation, Core Web Vitals optimization, and topical authority architecture designed to capture and convert purchase-ready traffic.",
    icon: BookCheckIcon,
  },
  {
    title: "Executive & Thought Leadership",
    des: "Founder-driven narratives, category education content, and POV-driven storytelling across LinkedIn, industry publications, and owned channels. Content credibility and generates qualified inbound interest.",
    icon: SparkleIcon,
  },
  {
    title: "Assets That Enable Sales",
    des: "Whitepapers, case studies, and pitch decks built from real deal conversations. We create collateral that handles objections, proves ROI, and shortens decision cycles.",
    icon: SparkleIcon,
  },
  {
    title: "Automated Lead Nurture",
    des: "Multi-touch email sequences, behavior-triggered campaigns, and content-based lead scoring systems. We build nurture infrastructure that maintains engagement momentum and surfaces sales-ready signals.",
    icon: SparkleIcon,
  },
  {
    title: "Conversion-Optimized Landing Pages",
    des: "High-converting landing pages with persuasive copy, clear CTAs, and streamlined user journeys. Optimized for maximum lead capture and conversion rates.",
    icon: SparkleIcon,
  },
];

export default function Impact() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Framer motion maps progress cleanly if the string templates match perfectly.
  // We translate the container to exactly rest its right edge against the right side of the screen.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["calc(0% + 0vw)", "calc(-100% + 100vw)"],
  );

  return (
    <ScrollThemeSection theme="dark" className="">
      <div ref={targetRef} className="relative h-[250vh]">
        <div className="sticky top-5 overflow-hidden flex flex-col justify-center gap-10">
          <ScrollThemeSection className="container flex flex-col">
            <div className="lg:w-1/2 space-y-4">
              <h2>
                Engineered for Impact,{" "}
                <span className="text-highlight">Not Just Volume</span>
              </h2>
            </div>
          </ScrollThemeSection>

          {/* Horizontal track */}
          <div className="w-full">
            <motion.div
              style={{ x }}
              className="flex gap-6 w-max pl-5 md:pl-12.5 lg:pl-34 pr-5 lg:pr-34 will-change-transform"
            >
              {list.map((_item, i) => (
                <div
                  key={_item.title}
                  className="w-[85vw] sm:w-[55vw] lg:w-[696px] bg-card rounded-4xl p-8 flex flex-col gap-5 h-[562px]"
                ></div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
