import Image from "next/image";
import WaveImg from "@/public/wave.png";

export default function Formulas() {
  const list = [
    {
      title: "Integrated, Not Isolated",
      des: "Most teams run separate efforts and hope they connect. We build systems where every channel feeds the next.",
      icon: "file-sync",
    },
    {
      title: "Data-Driven, Not Guesswork",
      des: "We base decisions on search behavior, conversion patterns, and attribution data. Strategy flows from evidence, not hunches.",
      icon: "scale-broken",
    },
    {
      title: "Built for You, Not Borrowed",
      des: "Generic playbooks ignore your market reality. We design around your actual buyers, deal cycles, and business model",
      icon: "tag-linear",
    },
    {
      title: "Strategy First, Channels Second",
      des: "We don't default to tactics. The right mix depends on where your buyers are and how they decide.",
      icon: "home-stats",
    },
    {
      title: "Expertise Without Headcount",
      des: "Great marketing needs the right skills at the right time, not permanent teams. We deliver both without expanding your payroll.",
      icon: "home-stats",
    },
  ];

  return (
    <div className="relative">
      <Image
        src={WaveImg}
        alt="img"
        className="absolute w-full top-1/2 -translate-y-1/2"
      />
      <div className="container grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6 lg:sticky lg:top-20">
          <h2>
            Buyers Don't Follow Formulas. <br />{" "}
            <span className="text-highlight">
              Neither Should Your Marketing.
            </span>
          </h2>
          <p>
            Modern research happens everywhere: search engines, AI tools, social
            feeds, peer networks. Real growth comes from meeting buyers across
            all these moments, not betting on one channel. We unify SEO, AI
            optimization, content, and paid into systems that actually work
            together.
          </p>
        </div>
        <div className="flex flex-col">
          {list.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-6 py-12 first:pt-0 last:pb-0 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-linear-to-r before:from-white/20 before:to-transparent first:before:hidden"
            >
              <div className="size-20 shrink-0 bg-primary dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center relative">
                <Image
                  src={`/${item.icon}-dark.svg`}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="hidden dark:block"
                />
                <Image
                  src={`/${item.icon}-light.svg`}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="block dark:hidden"
                />
              </div>
              <div className="space-y-3.5">
                <h4>{item.title}</h4>
                <p>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
