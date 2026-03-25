"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownRightIcon, ArrowRightIcon } from "lucide-react";

const list = [
  {
    step: 1,
    title: "Intelligence Gathering & Gap Analysis",
    points: [
      "Deep-dive your existing content library and competitive landscape",
      "Identify where buyers drop off and what questions go unanswered",
      "Audit search visibility, site performance, and conversion bottlenecks",
      "Pinpoint high-impact opportunities for immediate wins",
    ],
  },
  {
    step: 2,
    title: "Architecture & Keyword Strategy",
    points: [
      "Deep-dive your existing content library and competitive landscape",
      "Identify where buyers drop off and what questions go unanswered",
      "Audit search visibility, site performance, and conversion bottlenecks",
      "Pinpoint high-impact opportunities for immediate wins",
    ],
  },
  {
    step: 3,
    title: "Production & Quality Assurance",
    points: [
      "Deep-dive your existing content library and competitive landscape",
      "Identify where buyers drop off and what questions go unanswered",
      "Audit search visibility, site performance, and conversion bottlenecks",
      "Pinpoint high-impact opportunities for immediate wins",
    ],
  },
  {
    step: 4,
    title: "Distribution & Amplification Strategy",
    points: [
      "Deep-dive your existing content library and competitive landscape",
      "Identify where buyers drop off and what questions go unanswered",
      "Audit search visibility, site performance, and conversion bottlenecks",
      "Pinpoint high-impact opportunities for immediate wins",
    ],
  },
  {
    step: 5,
    title: "Performance Analysis & Iteration",
    points: [
      "Deep-dive your existing content library and competitive landscape",
      "Identify where buyers drop off and what questions go unanswered",
      "Audit search visibility, site performance, and conversion bottlenecks",
      "Pinpoint high-impact opportunities for immediate wins",
    ],
  },
];

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="container space-y-15">
      {/* Header */}
      <h2>
        Our Methodology: Signal-Driven, <br />{" "}
        <span className="text-highlight">Not Gut-Led.</span>
      </h2>

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
                  className={`flex-1 rounded-2xl border transition-colors duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "border-primary bg-[#121212]"
                      : "border-white/10 bg-[#121212] hover:border-white/20"
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
