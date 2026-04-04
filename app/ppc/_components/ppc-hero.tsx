import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import HeroImg from "@/public/hero-bg-6.webp";
import HeroImgSm from "@/public/hero-bg-6-sm.png";
import { ArrowUpRightIcon } from "lucide-react";
import ContactButton from "@/components/ui/contact-button";

export default function PPCHero() {
  return (
    <ScrollThemeSection className="relative p-2 lg:p-5">
      <Image
        src={HeroImg}
        alt="hero-bg"
        priority
        className="max-lg:hidden w-full h-[580px] lg:h-full max-h-[840px]"
      />
      <Image
        src={HeroImgSm}
        alt="hero-bg"
        priority
        className="lg:hidden w-full h-[580px] lg:h-full max-h-[840px]"
      />
      <div className="absolute inset-0 container flex flex-col items-start justify-center gap-6">
        <div className="lg:w-1/2">
          <h1 className="text-white">
            Ad Campaigns That Generate{" "}
            <span className="font-secondary font-normal">
              Qualified Pipeline
            </span>
          </h1>
          <p>
            We sync ad strategy to buyer research patterns, then build campaigns
            that intercept them at every stage. From awareness to consideration
            to demo requests, we architect the complete paid journey.
          </p>
        </div>
        <ContactButton size="lg" className="h-11">
          Get Started <ArrowUpRightIcon />
        </ContactButton>
      </div>
    </ScrollThemeSection>
  );
}
