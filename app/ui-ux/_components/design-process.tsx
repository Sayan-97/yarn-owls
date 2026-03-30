"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownRightIcon, ArrowRightIcon } from "lucide-react";

const list = [
  {
    step: 1,
    title: "Uncover the Real Gaps",
    points: [
      "Deep-dive into your existing product experience and competitive landscape",
      "Identify where users drop off and which usability issues go unresolved",
      "Audit user flows, interface clarity, and interaction friction points",
      "Pinpoint high-impact opportunities for immediate UX improvements",
    ],
  },
  {
    step: 2,
    title: "Architect the Experience System",
    points: [
      "Design a scalable UX framework aligned with business and user goals",
      "Map user journeys, key interactions, and interface patterns",
      "Build design systems and reusable component libraries",
      "Set up usability benchmarks and feedback loops for validation",
    ],
  },
  {
    step: 3,
    title: "Design and Deliver at Scale",
    points: [
      "Create and iterate designs across web, mobile, and product interfaces",
      "Launch high-fidelity screens, prototypes, and interaction flows",
      "Test layouts, usability patterns, and user behaviors",
      "Ensure seamless handoff with developers for smooth implementation",
    ],
  },
  {
    step: 4,
    title: "Test, Learn, and Optimize",
    points: [
      "Monitor performance across usability, engagement, and conversion metrics",
      "Iterate based on user feedback and behavioral insights",
      "Refine high-impact flows and interface elements",
      "Continuously enhance experiences to drive long-term user satisfaction",
    ],
  },
];

export default function DesignProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="container space-y-15">
      {/* Header */}
      <div className="space-y-4">
        <h2>
          Our <span className="text-highlight">Design Process.</span>
        </h2>
        <p className="text-muted max-w-2xl">
          From initial discovery to final deployment, here's how we create
          experiences that generate results.
        </p>
      </div>

      {/* Accordion with Timeline */}
      <div className="relative">
        <div className="absolute left-4 top-10 bottom-10 w-px bg-primary/40 -translate-x-1/2" />

        <div className="space-y-3">
          {list.map((item) => {
            const isActive = activeStep === item.step;
            return (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="relative z-10 flex flex-col items-center w-8 shrink-0 pt-7">
                  <button
                    type="button"
                    onClick={() => setActiveStep(item.step)}
                    className={`size-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300 bg-[#0a0a0a] ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-primary/40 text-primary/50"
                    }`}
                  >
                    {String(item.step).padStart(2, "0")}
                  </button>
                </div>

                <motion.div
                  onClick={() => setActiveStep(item.step)}
                  className={`flex-1 rounded-2xl bg-card border transition-colors duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "border-primary"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  layout
                >
                  <div className="flex items-center justify-between px-7 py-6">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-white/40">
                        Step {item.step}
                      </p>
                      <h4 className="text-white font-bold">{item.title}</h4>
                    </div>

                    <div
                      className={`size-9 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "border-primary text-primary"
                          : "border-white/20 text-white/60"
                      }`}
                    >
                      {isActive ? (
                        <ArrowDownRightIcon className="size-4" />
                      ) : (
                        <ArrowRightIcon className="size-4" />
                      )}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <ul className="px-7 pb-7 space-y-3">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm font-medium text-white/70 leading-relaxed"
                            >
                              <span className="mt-1.5 size-2 rounded-full bg-primary shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
