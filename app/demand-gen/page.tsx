import ScrollThemeSection from "@/components/scroll-theme-section";
import BeyondDemand from "./_components/beyond-demand";
import Growth from "./_components/growth";
import TeamsPowered from "./_components/teams-powered";
import DemandIntoRevenue from "./_components/demand-into-revenue";
import Formulas from "./_components/formulas";
import Image from "next/image";
import HeroImg from "@/public/hero-bg-2.webp";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import ContactButton from "@/components/ui/contact-button";

export default function DemandGenPage() {
  return (
    <div className="space-y-20 lg:space-y-40">
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
              Marketing{" "}
              <span className="font-secondary font-normal">That Sticks,</span>{" "}
              Not Just{" "}
              <span className="font-secondary font-normal">Scrolls By</span>
            </h1>
            <p>
              SEO for rankings. AEO for voice and answer engines. GEO for
              ChatGPT and AI search. AIO for multi-modal discovery. We architect
              visibility strategies that intercept buyers wherever they
              research, across every discovery channel.
            </p>
          </div>
          <ContactButton size="lg" className="h-11">
            Get Started <ArrowUpRightIcon />
          </ContactButton>
        </div>
      </ScrollThemeSection>
      <Growth />
      <ScrollThemeSection
        theme="dark"
        className="space-y-20 lg:space-y-40 py-20 lg:py-40"
      >
        <DemandIntoRevenue />
        <Formulas />
      </ScrollThemeSection>
      <TeamsPowered />
      <BeyondDemand />
    </div>
  );
}
