import Image from "next/image";
import WaveImg from "@/public/wave.png";

export default function ChooseUs() {
  const list = [
    {
      title: "Specialized Across All Platforms",
      des: "Most SEO teams know Google. We're experts across traditional search, generative AI, answer engines, and emerging discovery platforms.",
      icon: "file-sync",
    },
    {
      title: "Faster Results",
      des: "Skip the learning curve. We're already optimizing for AI search while others are still reading about it.",
      icon: "tag-linear",
    },
    {
      title: "Multi-Platform Expertise",
      des: "You get specialists in technical SEO, content optimization, AI prompt engineering, and structured data, not one generalist trying to keep up.",
      icon: "scale-broken",
    },
    {
      title: "Performance Tracking That Matters",
      des: "We monitor visibility across every discovery platform, track AI citation rates, and measure traffic quality, not just keyword rankings.",
      icon: "home-stats",
    },
    {
      title: "Strategy Plus Execution",
      des: "Insights mean nothing without action. We don't just audit what's missing, we build the content, implement the technical fixes, and execute the link building across all channels.",
      icon: "file-sync",
    },
  ];

  return (
    <div className="relative">
      <Image
        src={WaveImg}
        alt="img"
        className="absolute w-full top-1/2 -translate-y-1/2 opacity-20"
      />
      <div className="container grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6 lg:sticky lg:top-20">
          <h2>
            Why Teams <br /> <span className="text-highlight">Choose Us</span>
          </h2>
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
