import Image from "next/image";
import TagLinearIcon from "@/public/tag-linear.png";

export default function ChooseUs() {
  const list = [
    {
      title: "Specialized Across All Platforms",
      des: "Most SEO teams know Google. We're experts across traditional search, generative AI, answer engines, and emerging discovery platforms.",
      icon: "",
    },
    {
      title: "Faster Results",
      des: "Skip the learning curve. We're already optimizing for AI search while others are still reading about it.",
      icon: "",
    },
    {
      title: "Multi-Platform Expertise",
      des: "You get specialists in technical SEO, content optimization, AI prompt engineering, and structured data, not one generalist trying to keep up.",
      icon: "",
    },
    {
      title: "Performance Tracking That Matters",
      des: "We monitor visibility across every discovery platform, track AI citation rates, and measure traffic quality, not just keyword rankings.",
      icon: "",
    },
    {
      title: "Strategy Plus Execution",
      des: "Insights mean nothing without action. We don't just audit what's missing, we build the content, implement the technical fixes, and execute the link building across all channels.",
      icon: "",
    },
  ];

  return (
    <div className="container grid lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-6 lg:sticky lg:top-20">
        <h2>
          Why Teams <br /> <span className="text-highlight">Choose Us</span>
        </h2>
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
    </div>
  );
}
