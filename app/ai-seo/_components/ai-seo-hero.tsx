import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import BgImg from "@/public/ai-seo-hero-bg.webp";
import { ArrowUpRightIcon } from "lucide-react";
import ContactButton from "@/components/ui/contact-button";

export default function AiSeoHero() {
  return (
    <ScrollThemeSection className="relative h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 px-2 lg:px-5 pt-2 lg:pt-5">
        <div className="relative size-full overflow-hidden rounded-2xl">
          <Image src={BgImg} alt="img" fill className="object-cover" priority />
        </div>
      </div>
      <div className="container relative">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-white lg:text-[64px]">
            Ranked Where Decisions{" "}
            <span className="font-secondary font-normal italic">Get Made.</span>
          </h1>
          <p className="dark text-muted w-[85%]">
            SEO for Google. GEO for ChatGPT. AEO for Perplexity. AIO for voice
            and visual search. We engineer discovery strategies that capture
            intent across every platform where B2B buyers research solutions.
          </p>
          <ContactButton size="lg" className="h-11">
            Get Started <ArrowUpRightIcon />
          </ContactButton>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
