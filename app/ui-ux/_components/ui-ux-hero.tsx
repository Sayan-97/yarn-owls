import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import HeroImg from "@/public/hero-bg-5.webp";
import HeroImgSm from "@/public/hero-bg-5-sm.png";
import { ArrowUpRightIcon } from "lucide-react";
import ContactButton from "@/components/ui/contact-button";

export default function UIUXHero() {
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
            Websites That Convert Visitors Into{" "}
            <span className="font-secondary font-normal">Qualified Leads.</span>
          </h1>
          <p className="text-white font-normal">
            We don't compromise between aesthetics and results. Strategic design
            delivers both.
          </p>
        </div>
        <ContactButton>Get Started</ContactButton>
      </div>
    </ScrollThemeSection>
  );
}
