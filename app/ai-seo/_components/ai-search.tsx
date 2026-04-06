"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollThemeSection from "@/components/scroll-theme-section";
import { Icon } from "@iconify/react";

const list = [
  {
    title: "Search Engine Optimization (SEO)",
    des: "Rankings still matter. We build topical authority, technical excellence, and content depth that dominates traditional search results and drives sustained organic traffic.",
    icon: "hugeicons:ai-search-02",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    des: "ChatGPT, Claude, Gemini. When buyers ask AI tools for recommendations, your brand needs to be in the answer. We optimize content structure and authority signals for AI-generated responses",
    icon: "humbleicons:ai",
  },
  {
    title: "Answer Engine Optimization (AEO)",
    des: "Perplexity, Google AI Overviews, Bing Chat. We structure content to win featured positions in AI-powered answer engines that increasingly dominate search results pages.",
    icon: "si:ai-chat-line",
  },
  {
    title: "AI Voice & Assistant Search",
    des: "Optimizing for Siri, Alexa, and Google Assistant. We ensure your brand is the primary verbal recommendation when buyers search for solutions via voice-activated AI assistants.",
    icon: "hugeicons:ai-scan",
  },
];

export default function AiSearch() {
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
                The Complete{" "}
                <span className="text-highlight">AI Search Stack.</span>
              </h2>
              <p>
                We optimize for every discovery channel where your buyers look
                for solutions, from search engines to AI assistants.
              </p>
            </div>
          </ScrollThemeSection>

          {/* Horizontal track */}
          <div className="w-full">
            <motion.div
              style={{
                x,
                paddingLeft: "var(--container-offset)",
                paddingRight: "var(--container-offset)",
              }}
              className="flex gap-6 w-max will-change-transform"
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
