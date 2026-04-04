"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollThemeSection from "@/components/scroll-theme-section";
import { Globe, FileCheck, Award, Magnet } from "lucide-react";

const list = [
  {
    title: "SEO-Optimized Editorial",
    des: "High-conversion content targeting commercial intent keywords, decision-stage queries, and category comparison searches. Every asset is architected around SERP dominance and visitor-to-lead conversion optimization.",
    icon: Globe,
  },
  {
    title: "Technical SEO & Content Operations",
    des: "Beyond keyword targeting. We execute comprehensive site audits, schema markup implementation, Core Web Vitals optimization, and topical authority architecture designed to capture and convert purchase-ready traffic.",
    icon: FileCheck,
  },
  {
    title: "Executive & Thought Leadership",
    des: "Founder-driven narratives, category education content, and POV-driven storytelling across LinkedIn, industry publications, and owned channels. Content credibility and generates qualified inbound interest.",
    icon: Award,
  },
  {
    title: "Assets That Enable Sales",
    des: "Whitepapers, case studies, and pitch decks built from real deal conversations. We create collateral that handles objections, proves ROI, and shortens decision cycles.",
    icon: Magnet,
  },
];

export default function RevenueEnfluence() {
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
    <ScrollThemeSection className="">
      <div ref={targetRef} className="relative h-[250vh]">
        <div className="sticky top-20 overflow-hidden flex flex-col justify-center gap-10">
          <ScrollThemeSection className="container flex flex-col">
            <div className="lg:w-1/2 space-y-4">
              <h2>
                Engineered for Revenue Influence{" "}
                <span className="text-highlight">Not Vanity.</span>
              </h2>
              <p>
                From anonymous visitors to qualified opportunities, our content
                infrastructure generates measurable pipeline contribution.
              </p>
            </div>
          </ScrollThemeSection>

          {/* Horizontal track */}
          <div className="w-full">
            <motion.div
              style={{ x }}
              className="flex gap-6 w-max pl-5 md:pl-12.5 lg:pl-34 pr-5 lg:pr-34 will-change-transform"
            >
              {list.map((item) => (
                <div
                  key={item.title}
                  className="w-[85vw] sm:w-[55vw] lg:w-[400px] bg-card rounded-[40px] p-10 flex flex-col gap-5 h-[400px] group hover:bg-accent transition-colors duration-300"
                >
                  <div className="size-20 bg-primary group-hover:bg-white flex items-center justify-center rounded-2xl shrink-0 transition-colors duration-300">
                    <item.icon className="size-10 text-white group-hover:text-primary transition-colors duration-300" />
                  </div>

                  <div className="space-y-3 flex-1">
                    <h4 className="font-bold text-xl group-hover:text-accent-foreground transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted group-hover:text-accent-foreground/70 leading-relaxed transition-colors duration-300">
                      {item.des}
                    </p>
                  </div>

                  {/* <Link
                    href="#"
                    className="text-primary group-hover:text-white flex items-center gap-2 text-sm font-semibold mt-auto transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1 duration-300" />
                  </Link> */}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
