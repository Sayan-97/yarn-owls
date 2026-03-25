"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollThemeSection from "@/components/scroll-theme-section";
import {
  ArrowRightIcon,
  BookCheckIcon,
  SearchIcon,
  SparkleIcon,
} from "lucide-react";
import Link from "next/link";

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
    des: "Founder-driven narratives, category education content, and POV-driven storytelling across LinkedIn, industry publications, and owned channels. Content that builds market credibility and generates qualified inbound interest.",
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

export default function RevenueEnfluence() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const scrollLocked = useRef(false);
  const [outerHeight, setOuterHeight] = useState<string>("auto");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  // Dynamically compute outer height from actual content height + advances needed
  useEffect(() => {
    if (!emblaApi || !innerRef.current) return;

    const updateHeight = () => {
      const contentHeight = innerRef.current?.offsetHeight ?? 0;
      if (contentHeight === 0) return;
      const snaps = emblaApi.scrollSnapList();
      const advances = Math.max(0, snaps.length - 1);
      // Content height (so it renders naturally) + 180px exit buffer per advance
      setOuterHeight(`${contentHeight + advances * 180}px`);
    };

    const ro = new ResizeObserver(updateHeight);
    ro.observe(innerRef.current);

    emblaApi.on("init", updateHeight);
    updateHeight(); // in case Embla already initialised

    return () => {
      ro.disconnect();
      emblaApi.off("init", updateHeight);
    };
  }, [emblaApi]);

  // Wheel hijack — intercept while outer div straddles the viewport
  useEffect(() => {
    if (!emblaApi) return;

    const onWheel = (e: WheelEvent) => {
      const outer = outerRef.current;
      if (!outer) return;

      const rect = outer.getBoundingClientRect();
      // "Pinned" = outer top has scrolled off-screen AND outer bottom is still below viewport
      const isPinned =
        rect.top <= 2 &&
        rect.bottom >= (innerRef.current?.offsetHeight ?? 0) - 2;
      if (!isPinned) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;
      const canGoNext = emblaApi.canScrollNext();
      const canGoPrev = emblaApi.canScrollPrev();

      if ((scrollingDown && canGoNext) || (scrollingUp && canGoPrev)) {
        // Always lock page scroll first — before any debounce/threshold check
        e.preventDefault();

        if (scrollLocked.current || Math.abs(e.deltaY) < 8) return;

        scrollLocked.current = true;
        if (scrollingDown) scrollNext();
        else scrollPrev();

        setTimeout(() => {
          scrollLocked.current = false;
        }, 280);
      }
      // Carousel exhausted → event falls through → page scrolls normally
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [emblaApi, scrollNext, scrollPrev]);

  return (
    // Outer wrapper height = content height + exit scroll buffer for all advances
    <div ref={outerRef} style={{ height: outerHeight }} className="relative">
      {/* Sticky inner uses content's natural height — no forced h-screen */}
      <div ref={innerRef} className="sticky top-5 lg:top-20 overflow-hidden">
        <ScrollThemeSection className="container gap-10 flex flex-col max-lg:overflow-hidden">
          <div className="lg:w-1/2 space-y-4">
            <h2>
              Engineered for Revenue Influence,{" "}
              <span className="text-highlight">Not Vanity.</span>
            </h2>
            <p>
              From anonymous visitors to qualified opportunities, our content
              infrastructure generates measurable pipeline contribution.
            </p>
          </div>

          <div ref={emblaRef}>
            <div className="flex gap-6">
              {list.map((item, i) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: static list
                  key={i}
                  className="flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_31%] min-w-0 bg-card rounded-4xl p-8 flex flex-col gap-5"
                >
                  <div className="size-20 bg-primary flex items-center justify-center rounded-2xl shrink-0">
                    <item.icon className="size-10 text-white" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h4 className="text-foreground font-bold">{item.title}</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.des}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="text-primary font-semibold flex items-center gap-2 text-sm group w-fit"
                  >
                    Learn More{" "}
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </ScrollThemeSection>
      </div>
    </div>
  );
}
