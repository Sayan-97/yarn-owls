import ScrollThemeSection from "@/components/scroll-theme-section";
import ContactButton from "@/components/ui/contact-button";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import HeroImg from "@/public/aboutus-hero-img.webp";
import Us from "./_components/us";
import TheTeam from "./_components/the-team";
import Work from "./_components/work";

export default function AboutUs() {
  return (
    <div className="space-y-20 lg:space-y-40">
      <ScrollThemeSection className="relative p-2 lg:p-5">
        <Image
          src={HeroImg}
          alt="hero-bg"
          priority
          className="w-full h-[580px] lg:h-full max-h-[840px]"
        />
        <div className="absolute inset-0 container text-center flex flex-col justify-center gap-8">
          <h1 className="lg:w-full mx-auto text-white">
            What makes us, <span className="text-highlight">us?</span>
          </h1>
          <p className="lg:w-2/3 text-[#e9e9e9] lg:leading-6 mx-auto">
            Yarn Owls was built for B2B brands that are done with disconnected
            tactics, slow execution, and marketing that looks active but
            underdelivers. We bring strategy, content, design, and digital
            execution into one system so brands don’t just get visibility. They
            build momentum.
          </p>
          <ContactButton size="lg" className="h-11 mx-auto">
            Get Started <ArrowUpRightIcon />
          </ContactButton>
        </div>
      </ScrollThemeSection>
      <Work />
      <TheTeam />
      <Us />
    </div>
  );
}
