"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { solutions } from "@/constants";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollThemeSection from "@/components/scroll-theme-section";

export default function Solutions() {
  const [activeRow, setActiveRow] = useState<{
    row: number;
    index: number;
  } | null>(null);

  const rows = Array.from({ length: Math.ceil(solutions.length / 2) }, (_, i) =>
    solutions.slice(i * 2, i * 2 + 2),
  );

  return (
    <ScrollThemeSection
      theme="light"
      className="container space-y-12 lg:space-y-24"
    >
      {/* Heading */}
      <div className="flex flex-col gap-5">
        <h2>
          What We <span className="text-highlight">Actually Deliver</span>
        </h2>
        <p className="max-w-xl text-lg font-medium leading-relaxed">
          From meticulously crafted content to full-stack digital ecosystems,
          our services exist to transform scattered efforts into systems that
          scale, without the bloat.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        {rows.map((row) => (
          <div
            key={`row-${row[0].title}`}
            className="flex flex-col lg:flex-row gap-6"
          >
            {row.map((card, index) => {
              const rowIndex = rows.indexOf(row);
              const isActive =
                activeRow?.row === rowIndex && activeRow?.index === index;

              const isSameRow = activeRow?.row === rowIndex;

              return (
                <motion.div
                  key={card.title}
                  onHoverStart={() => setActiveRow({ row: rowIndex, index })}
                  onHoverEnd={() => setActiveRow(null)}
                  initial={false}
                  animate={{
                    flexGrow:
                      typeof window !== "undefined" && window.innerWidth >= 1024
                        ? !isSameRow
                          ? 1
                          : isActive
                            ? 3
                            : 2
                        : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                  }}
                  className="
                    w-full
                    lg:basis-0
                    lg:flex-1
                    h-full lg:h-[335px]
                    bg-card
                    flex flex-col justify-between max-lg:gap-4
                    rounded-[30px] lg:rounded-[40px]
                    p-6 lg:p-10
                    group
                    hover:bg-accent
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="group-hover:text-accent-foreground max-w-md">
                      {card.title}
                    </h3>

                    <Button
                      size="icon"
                      className="size-12 lg:size-14 group-hover:bg-white rounded-full"
                    >
                      <ArrowRightIcon className="size-5 lg:size-6 group-hover:text-primary -rotate-45 group-hover:rotate-0 transition-transform duration-200" />
                    </Button>
                  </div>

                  <p className="max-w-xl text-sm lg:text-base group-hover:text-accent-foreground/80 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </ScrollThemeSection>
  );
}
