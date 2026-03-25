import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import BgImg from "@/public/demandgen-hero-bg.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function DemandGenHero() {
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
            Marketing{" "}
            <span className="font-secondary font-normal">That Sticks</span>,{" "}
            <br /> Not Just{" "}
            <span className="font-secondary font-normal">Scrolls By</span>
          </h1>
          <p className="dark text-muted w-[85%]">
            SEO for rankings. AEO for voice and answer engines. GEO for ChatGPT
            and AI search. AIO for multi-modal discovery. We architect
            visibility strategies that intercept buyers wherever they research,
            across every discovery channel.
          </p>
          <Button size="lg" className="h-11">
            Get Started <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
