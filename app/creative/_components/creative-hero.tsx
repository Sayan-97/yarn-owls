import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import HeroImg from "@/public/hero-bg-4.webp";
import HeroImgSm from "@/public/hero-bg-4-sm.png";
import { ArrowUpRightIcon } from "lucide-react";
import ContactButton from "@/components/ui/contact-button";

export default function CreativeHero() {
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
        className="lg:hidden w-full h-[707px] lg:h-full max-h-[840px] rounded-xl"
      />
      <div className="absolute inset-0 container flex flex-col items-start justify-center gap-6">
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-white">
            Copy, Design, and Narratives That{" "}
            <span className="font-secondary font-normal">Drive Action</span>
          </h1>
          <p className="text-white font-normal">
            From conversion-focused landing pages to category-defining thought
            leadership, we build assets that generate clarity, credibility, and
            qualified pipeline.
          </p>
        </div>
        <ContactButton>Get Started</ContactButton>
      </div>
    </ScrollThemeSection>
  );
}
