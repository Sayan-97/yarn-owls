import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import TagLinearIcon from "@/public/tag-linear.png";

export default function Engagement() {
  const list = [
    {
      title: "Campaign Strategy & Messaging",
      des: "We map ad campaigns to buyer research stages and intent signals, so every dollar reaches the right prospect with the right message at the moment they're most likely to engage.",
      icon: "",
    },
    {
      title: "Channel Strategy & Execution",
      des: "We select platforms based on where your buyers actually spend time and what each channel does best. No spreading budget thin, we concentrate on where performance data proves it works.",
      icon: "",
    },
    {
      title: "Landing Pages Built to Convert",
      des: "We design post-click experiences that match ad promise to page delivery. Consistent messaging, clear value props, and optimized conversion flows that turn paid traffic into qualified leads.",
      icon: "",
    },
    {
      title: "Attribution & Performance Intelligence",
      des: "We build tracking systems that show true revenue impact, not just platform metrics. Clear visibility into what's generating pipeline so you can scale what works and cut what doesn't.",
      icon: "",
    },
    {
      title: "Relentless Testing & Optimization",
      des: "We treat every campaign as a learning system. Constant experimentation with audiences, creative angles, bidding models, and formats to extract maximum value from your ad spend.",
      icon: "",
    },
  ];

  return (
    <ScrollThemeSection className="container grid lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-6 lg:sticky lg:top-20">
        <h2>
          What We Execute in Every{" "}
          <span className="text-highlight">Paid Media Engagement</span>
        </h2>
        <p>
          We strategize, launch, and optimize every dimension of paid
          advertising, informed by market positioning and purchase intent.
          Whether it's ad creative, platform selection, or post-click
          experiences, every decision maps to how your prospects discover and
          evaluate solutions.
        </p>
      </div>
      <div className="grid gap-20">
        {list.map((item) => (
          <div key={item.title} className="flex items-center gap-6">
            <div className="size-20 shrink-0 bg-primary dark:bg-[#202020] flex items-center justify-center rounded-lg">
              <Image src={TagLinearIcon} alt="img" />
            </div>
            <div className="space-y-3.5">
              <h4>{item.title}</h4>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollThemeSection>
  );
}
