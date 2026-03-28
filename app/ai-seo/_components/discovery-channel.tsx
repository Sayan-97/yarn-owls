"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownRightIcon, ArrowRightIcon } from "lucide-react";

const list = [
  {
    step: 1,
    title: "Map Your Visibility Landscape",
    text: "Before optimizing anything, we diagnose where you're visible, where you're missing, and where the biggest opportunities exist.",
    points: [
      "Audit rankings across traditional search and AI platforms",
      "Identify keyword gaps and topic authority deficits",
      "Analyze competitor visibility across all discovery channels",
      "Pinpoint quick wins and strategic long-term plays",
    ],
  },
  {
    step: 2,
    title: "Build Your Authority Infrastructure",
    points: [
      "Audit rankings across traditional search and AI platforms",
      "Identify keyword gaps and topic authority deficits",
      "Analyze competitor visibility across all discovery channels",
      "Pinpoint quick wins and strategic long-term plays",
    ],
  },
  {
    step: 3,
    title: "Deploy Across All Channels",
    points: [
      "Audit rankings across traditional search and AI platforms",
      "Identify keyword gaps and topic authority deficits",
      "Analyze competitor visibility across all discovery channels",
      "Pinpoint quick wins and strategic long-term plays",
    ],
  },
  {
    step: 4,
    title: "Measure and Expand Dominance",
    points: [
      "Audit rankings across traditional search and AI platforms",
      "Identify keyword gaps and topic authority deficits",
      "Analyze competitor visibility across all discovery channels",
      "Pinpoint quick wins and strategic long-term plays",
    ],
  },
];

export default function DiscoveryChannel() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="container space-y-15">
      {/* Header */}
      <div className="space-y-4">
        <h2>
          How We Dominate Every <br />{" "}
          <span className="text-highlight">Discovery Channel.</span>
        </h2>
        <p className="text-muted max-w-2xl">
          Systematic approach built to win visibility wherever your buyers
          research solutions.
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
                  className={`flex-1 rounded-2xl border transition-colors duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "border-primary bg-[#121212]"
                      : "border-white/10 bg-[#121212] hover:border-white/20"
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
                        <div className="px-7 pb-7 space-y-5">
                          {item.text && (
                            <p className="text-muted text-sm leading-relaxed">
                              {item.text}
                            </p>
                          )}
                          <ul className="space-y-3">
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
                        </div>
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
