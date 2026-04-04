"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollThemeSection from "@/components/scroll-theme-section";
import { Icon } from "@iconify/react";

const list = [
  {
    title: "Strategy Before Output",
    des: "We do not lead with deliverables. We start with the problem, the audience, and the business goal. Then we build the system that moves all three in the right direction.",
    icon: "humbleicons:ai",
  },
  {
    title: "Tailored, Never Templated",
    des: "No copied frameworks. No recycled messaging. No content produced just to fill a calendar. We build around your category, your buyers, and your growth reality.",
    icon: "lucide:square-pen",
  },
  {
    title: "Clarity Over Noise",
    des: "The market is already crowded with inflated claims and forgettable content. We help brands say the right thing, in the right way, at the right moment.",
    icon: "hugeicons:ai-search-02",
  },
  {
    title: "Systems That Compound",
    des: "We think beyond isolated campaigns. Strong marketing should get sharper over time, not weaker. Every asset should strengthen the next.",
    icon: "lucide:lightbulb",
  },
];

export default function Us() {
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
                What defines our{" "}
                <span className="text-highlight">approach.</span>
              </h2>
              <p>
                We go beyond tactics to build systems that drive real growth.
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
                    <Icon
                      icon={item.icon}
                      className="size-10 text-white group-hover:text-primary transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-3 flex-1">
                    <h4 className="font-bold text-xl group-hover:text-accent-foreground transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-muted group-hover:text-accent-foreground/70 leading-relaxed transition-colors duration-300">
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
