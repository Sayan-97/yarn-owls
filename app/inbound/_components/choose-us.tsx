import Image from "next/image";

export default function ChooseUs() {
  const list = [
    {
      title: "Launch Velocity.",
      des: "Zero recruiting friction. Zero knowledge transfer delays. We embed with your team in under a week and ship production-ready content immediately.",
      icon: "tag-linear",
    },
    {
      title: "Specialized Talent Stack.",
      des: "Access strategists with vertical expertise. SEO specialists, conversion copywriters, and content operations pros, not mid-level marketers wearing too many hats.",
      icon: "file-sync",
    },
    {
      title: "Analytics That Inform Budget Decisions.",
      des: "We report on pipeline contribution, cost-per-MQL by topic cluster, content ROI, and buyer journey attribution, not just traffic and time-on-page.",
      icon: "scale-broken",
    },
    {
      title: "Strategy Meets Execution Capacity.",
      des: "Recommendations without implementation create zero value. We combine strategic consulting depth with full production capability across research, writing, design, technical implementation, and multi-channel distribution.",
      icon: "home-stats",
    },
  ];

  return (
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
  );
}
