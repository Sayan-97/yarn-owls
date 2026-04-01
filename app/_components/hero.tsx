"use client";

import { Button } from "@/components/ui/button";
import HeroBg from "@/public/hero-bg.png";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { contactModalState } from "@/components/contact-modal";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center m-5 rounded-3xl overflow-hidden">
      <Image
        src={HeroBg}
        alt="img"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative text-white text-center">
        <span>B2B Marketing</span>
        <h1>
          Turning <span className="font-secondary font-normal">Motion</span>{" "}
          <br /> Into{" "}
          <span className="font-secondary font-normal">Momentum</span>
        </h1>
        <Button
          className="h-11 font-semibold rounded-xl mt-2 cursor-pointer"
          onClick={() => contactModalState.open()}
        >
          Get Started <ArrowUpRightIcon className="size-5" />
        </Button>
      </div>
    </section>
  );
}
