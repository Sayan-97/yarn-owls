import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import HeroImg from "@/public/hero-bg-3.webp";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function InboundHero() {
  return (
    <ScrollThemeSection className="relative p-2 lg:p-5">
      <Image
        src={HeroImg}
        alt="hero-bg"
        priority
        className="w-full h-[580px] lg:h-full max-h-[840px]"
      />
      <div className="absolute inset-0 container flex flex-col items-start justify-center gap-6">
        <div className="lg:w-1/2">
          <h1 className="text-white">
            AI SEO & Content That{" "}
            <span className="text-highlight">Drives Deals,</span> Not Just
            Downloads.
          </h1>
          <p>
            Most agencies write for algorithms and vanity metrics. We architect
            content systems that capture buying intent, educate decision-makers,
            and accelerate your sales velocity.
          </p>
        </div>
        <Button size="lg" className="h-11">
          Get Started <ArrowUpRightIcon />
        </Button>
      </div>
    </ScrollThemeSection>
  );
}
