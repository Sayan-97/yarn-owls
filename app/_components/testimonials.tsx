"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { testimonials } from "@/constants";
import { Button } from "@/components/ui/button";
import ScrollThemeSection from "@/components/scroll-theme-section";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on("reInit", onSelect).on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <ScrollThemeSection
      theme="light"
      className="container pb-100 lg:pb-[370px] max-lg:overflow-hidden"
    >
      {/* Header Row */}
      <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-foreground leading-tight max-w-2xl">
          Hear From Teams{" "}
          <span className="font-secondary italic font-normal text-primary">
            We&apos;ve Powered.
          </span>
        </h2>

        <div className="flex gap-3 md:gap-4 shrink-0">
          <Button
            type="button"
            variant="outline"
            size="icon"
            disabled={prevBtnDisabled}
            onClick={scrollPrev}
            className="size-12 md:size-14 rounded-full border-foreground/20 text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground disabled:opacity-30"
          >
            <ArrowLeftIcon className="size-5 md:size-6" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            disabled={nextBtnDisabled}
            onClick={scrollNext}
            className="size-12 md:size-14 rounded-full border-foreground/20 text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground disabled:opacity-30"
          >
            <ArrowRightIcon className="size-5 md:size-6" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="flex-[0_0_88%] sm:flex-[0_0_75%] md:flex-[0_0_75%] lg:flex-[0_0_68%] min-w-0 rounded-[28px] md:rounded-[40px] p-7 md:p-10 lg:p-14 transition-all duration-500 flex flex-col justify-between min-h-[300px] md:h-[380px] lg:h-[420px] bg-card text-foreground hover:bg-accent group cursor-pointer"
            >
              <p className="text-base md:text-xl lg:text-2xl leading-relaxed font-medium text-muted group-hover:text-primary-foreground/80 transition-colors duration-500">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 md:mt-8">
                <p className="font-semibold text-base md:text-lg text-primary group-hover:text-primary-foreground transition-colors duration-500">
                  {item.author}
                </p>
                <p className="text-sm font-medium text-muted group-hover:text-primary-foreground/70 transition-colors duration-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full mt-8 md:mt-12">
        <div className="h-[5px] w-full bg-foreground/10 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 bottom-0 left-0 bg-primary rounded-full transition-[width] duration-300 ease-out"
            style={{
              width: `${((selectedIndex + 1) / testimonials.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </ScrollThemeSection>
  );
}
