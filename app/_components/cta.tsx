import { MoveUpRight } from "lucide-react";
import OwlImg from "@/public/cta-img.png";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="container relative z-20 h-0 -mt-[130px]">
      <div className="bg-primary text-primary-foreground rounded-[32px] p-12 md:p-20 relative overflow-hidden -translate-y-1/2">
        <div className=" space-y-8 relative z-10">
          <h2>
            We're Your Marketing Team's{" "}
            <span className="font-secondary italic font-normal">
              Extend Button.
            </span>
          </h2>
          <p className="lg:max-w-3xl text-white/80 text-lg leading-relaxed font-light">
            We exist to help B2B brands close the gap between what marketing
            could be and what it actually delivers, without the fluff, filler,
            or cookie-cutter templates.
          </p>
          <button
            type="button"
            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-zinc-100 transition-all hover:gap-3 group"
          >
            Book a call{" "}
            <MoveUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Decorative Owl Watermark Placeholder */}
        <div className="absolute w-64 right-0 bottom-0 opacity-70 mix-blend-plus-lighter pointer-events-none select-none">
          {/* We will add the owl svg/image here later */}
          <Image src={OwlImg} alt="Owl" />
        </div>
      </div>
    </section>
  );
}
