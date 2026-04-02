import Image from "next/image";
import WaveImg from "@/public/wave.png";

export default function ChooseUs() {
  const list = [
    {
      title: "Faster Activation.",
      des: "Zero hiring timelines. Zero ramp-up delays. We integrate with your team within days and launch campaigns immediately.",
      icon: "tag-linear",
    },
    {
      title: "Specialized Expertise.",
      des: "You access paid media strategists, platform specialists, and conversion optimization experts, not marketers juggling too many responsibilities with surface-level knowledge.",
      icon: "file-sync",
    },
    {
      title: "Reporting With Business Context.",
      des: "Our analytics transcend impressions and clicks. We report on cost-per-qualified-lead, channel contribution to pipeline, and ROAS by campaign type.",
      icon: "scale-broken",
    },
    {
      title: "From Insights to Action.",
      des: "Insights mean nothing without action. We don't just identify what's broken, we redesign the strategy and execute the fixes across ad creative, landing pages, and multi-channel campaigns",
      icon: "home-stats",
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
            Why Teams Choose Us{" "}
            <span className="text-highlight">Over Hiring.</span>
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
