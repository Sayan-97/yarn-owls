import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import HeroImg from "@/public/hero-bg-3.webp";
import HeroImgSm from "@/public/hero-bg-3-sm.png";
import { ArrowUpRightIcon } from "lucide-react";
import ContactButton from "@/components/ui/contact-button";

export default function InboundHero() {
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
        className="lg:hidden w-full h-[580px] lg:h-full max-h-[840px] rounded-xl"
      />
      <div className="absolute inset-0 container flex flex-col items-start justify-center gap-6">
        <div className="lg:w-1/2">
          <h1 className="text-white">
            AI SEO & Content That{" "}
            <span className="text-highlight">Drives Deals,</span> Not Just
            Downloads.
          </h1>
          <p className="text-white font-normal">
            Most agencies write for algorithms and vanity metrics. We architect
            content systems that capture buying intent, educate decision-makers,
            and accelerate your sales velocity.
          </p>
        </div>
        <ContactButton>Get Started</ContactButton>
      </div>
    </ScrollThemeSection>
  );
}
