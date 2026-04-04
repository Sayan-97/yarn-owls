"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRightIcon } from "lucide-react";
import ScrollThemeSection from "@/components/scroll-theme-section";
import { Button } from "@/components/ui/button";
import MotionHeading from "@/components/MotionHeading";
import MotionParagraph from "@/components/MotionParagraph";
import Link from "next/link";

const deliveries = [
  {
    title: "Strategy That Dominates Discovery",
    description:
      "Multi-channel roadmaps, search visibility architecture, and campaign frameworks that don't just plan - they execute. We build digital strategies that integrate SEO, AEO, GEO, paid media, content, and automation into one AI-optimized, revenue-driving system.",
    href: "/demand-gen",
  },
  {
    title: "Content That Ranks & Converts",
    description:
      "SEO blogs that dominate search. Whitepapers that educate decision-makers. Landing pages that turn traffic into pipelines. We write for search engines and humans, because you need both.",
    href: "/inbound",
  },
  {
    title: "Brand Systems That Stick",
    description:
      "Visual identities that demand attention and systems that maintain it. We create brand guidelines, design systems, and creative assets that ensure your business looks as professional as it operates.",
    href: "/creative",
  },
  {
    title: "Websites That Work Harder",
    description:
      "High-performance websites designed for conversion. From speed optimization to intuitive UX, we build digital storefronts that don't just look good - they convert visitors into loyal customers.",
    href: "/ui-ux",
  },
];

export default function Deliver() {
  const [activeRow, setActiveRow] = useState<{
    row: number;
    index: number;
  } | null>(null);

  const rows = Array.from(
    { length: Math.ceil(deliveries.length / 2) },
    (_, i) => deliveries.slice(i * 2, i * 2 + 2),
  );

  return (
    <ScrollThemeSection className="container space-y-15">
      <div className="lg:w-1/2 flex flex-col gap-6">
        <MotionHeading tag="h2">
          What We <span className="text-highlight">Actually Deliver</span>
        </MotionHeading>
        <MotionParagraph>
          From meticulously crafted content to full-stack digital ecosystems,
          our services exist to transform scattered efforts into systems that
          scale, without the bloat.
        </MotionParagraph>
      </div>
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
                    flexGrow: isSameRow ? (isActive ? 3 : 2) : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                  }}
                  className="w-full lg:basis-0 lg:flex-1 h-full lg:h-[335px] bg-card rounded-[30px] lg:rounded-[40px] p-6 lg:p-10 group hover:bg-accent transition-colors duration-300"
                >
                  <Link
                    href={card.href}
                    className="h-full flex flex-col justify-between max-lg:gap-4"
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
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </ScrollThemeSection>
  );
}
