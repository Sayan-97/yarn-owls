"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownRightIcon, ArrowRightIcon } from "lucide-react";

const list = [
  {
    step: 1,
    title: "Uncover the Real Gaps",
    points: [
      "Deep-dive your existing content library and competitive landscape",
      "Identify where buyers drop off and what questions go unanswered",
      "Audit search visibility, site performance, and conversion bottlenecks",
      "Pinpoint high-impact opportunities for immediate wins",
    ],
  },
  {
    step: 2,
    title: "Architect Your Content System",
    points: [
      "Design a content framework aligned to your revenue goals",
      "Map topics, formats, and CTAs to each buyer stage",
      "Build editorial workflows and distribution strategies",
      "Install measurement infrastructure for closed-loop attribution",
    ],
  },
  {
    step: 3,
    title: "Ship Quality at Scale",
    points: [
      "Produce and publish content across owned, earned, and paid channels",
      "Launch cornerstone assets, conversion pages, and email campaigns",
      "Experiment with angles, hooks, and audience segments",
      "Connect everything to your tech stack for seamless handoffs",
    ],
  },
  {
    step: 4,
    title: "Learn and Multiply Impact",
    points: [
      "Monitor performance across traffic, engagement, and pipeline metrics",
      "Iterate on what's working and kill what's not",
      "Double down on high-performing topics and distribution channels",
      "Continuously unlock new angles and audience segments",
    ],
  },
];

export default function DemandIntoRevenue() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="container space-y-15">
      {/* Header */}
      <div className="space-y-6">
        <h2>
          How We Turn Demand <br />{" "}
          <span className="text-highlight">Into Revenue.</span>
        </h2>
        <p className="lg:w-1/3">
          Our methodology is laser-focused on buyer behavior and designed to
          deliver results quickly.
        </p>
      </div>

      {/* Accordion with Timeline */}
      <div className="relative">
        {/* Continuous Connecting Line Overlay */}
        <div className="absolute left-4 top-10 bottom-10 w-px bg-primary/40 -translate-x-1/2" />

        <div className="space-y-3">
          {list.map((item) => {
            const isActive = activeStep === item.step;
            return (
              <div key={item.step} className="flex gap-6 items-start">
                {/* Timeline Circle */}
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

                {/* Card */}
                <motion.div
                  onClick={() => setActiveStep(item.step)}
                  className={`flex-1 rounded-2xl bg-card border transition-colors duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "border-primary"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  layout
                >
                  {/* Card Header */}
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

                  {/* Expandable Content */}
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
