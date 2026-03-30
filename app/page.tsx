import ScrollThemeSection from "@/components/scroll-theme-section";
import Marketing from "./_components/marketing";
import Ecosystems from "./_components/ecosystem";
import Image from "next/image";
import HeroImg from "@/public/hero-bg-1.webp";
import { Button } from "@/components/ui/button";
import Deliver from "./_components/deliver";
import Testimonials from "@/components/testimonials";
import TrustedBrands from "./_components/trusted-brands";
import { ArrowUpRightIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-[130px]">
      {/* Hero */}
      <ScrollThemeSection className="relative p-2 lg:p-5">
        <Image
          src={HeroImg}
          alt="hero-bg"
          priority
          className="w-full h-[580px] lg:h-full max-h-[840px]"
        />
        <div className="absolute inset-0 container text-center flex flex-col justify-center gap-4">
          <p className="text-white">B2B Marketing</p>
          <h1 className="lg:w-1/2 mx-auto lg:text-[82px] text-white">
            Turning <span className="font-secondary font-normal">Motion</span>{" "}
            Into <span className="font-secondary font-normal">Momentum</span>
          </h1>
          <Button size="lg" className="h-11 mx-auto">
            Get Started <ArrowUpRightIcon />
          </Button>
        </div>
      </ScrollThemeSection>
      <TrustedBrands />
      <Deliver />
      <ScrollThemeSection theme="dark" className="pt-[130px]">
        <Marketing />
        <Ecosystems />
      </ScrollThemeSection>
      <Testimonials />
    </div>
  );
}
