import { Icon } from "@iconify/react";

const marketingItems = [
  {
    title: "Start With the Buyer, Not The Channel",
    icon: "solar:tag-linear",
    description:
      "Forget funnels. We map content to how your buyers actually research, evaluate, and decide, then build around those moments.",
  },
  {
    title: "Sync Your Entire Revenue Engine",
    icon: "hugeicons:file-sync",
    description:
      "Content, CRM, attribution, sales enablement. When marketing and sales run on the same data, conversions stop falling through the cracks.",
  },
  {
    title: "Build Once, Scale Forever",
    icon: "solar:scale-broken",
    description:
      "No one-off campaigns. We design systems that compound so your content, brand, and distribution get stronger over time, not stale.",
  },
  {
    title: "Analytics That Actually Inform Decisions",
    icon: "tabler:home-stats",
    description:
      "Real-time dashboards. Closed-loop attribution. We track what drives revenue and cut what doesn't, so you're always optimizing toward impact.",
  },
];

export default function Marketing() {
  return (
    <div className="container flex flex-col lg:flex-row lg:items-start gap-24">
      <div className="w-full lg:w-[36%]">
        <h2>
          Your Marketing Doesn't Need More.{" "}
          <span className="text-highlight">It Needs Better.</span>
        </h2>
        <p>
          Most B2B teams are drowning in tactics pulled from someone else's
          playbook. We build tailored systems that align marketing, sales, and
          ops so every piece works together, not against each other.
        </p>
      </div>

      <div className="flex-1">
        {marketingItems.map((item) => (
          <div
            key={item.title}
            className="relative flex gap-10 items-start py-12 first:pt-0 last:pb-0 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-linear-to-r before:from-white/60 before:to-transparent first:before:hidden"
          >
            <div className="size-16 rounded-lg bg-primary dark:bg-white/5 border border-black/10 dark:border-white/10 shrink-0 flex items-center justify-center relative">
              <Icon icon={item.icon} className="size-8 text-white" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
