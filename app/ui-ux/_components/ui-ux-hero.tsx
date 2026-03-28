import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import BgImg from "@/public/ui-ux-hero-bg.webp";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function UIUXHero() {
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
            Websites That Convert Visitors Into{" "}
            <span className="font-secondary font-normal">Qualified Leads.</span>
          </h1>
          <p className="dark text-muted w-[85%]">
            We don't compromise between aesthetics and results. Strategic design
            delivers both.
          </p>
          <Button size="lg" className="h-11">
            Get Started <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
