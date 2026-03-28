import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import TagLinearIcon from "@/public/tag-linear.png";

export default function RevenueGoals() {
  const list = [
    {
      title: "Built for Your Sales Motion",
      des: "Every page maps to your GTM reality: deal complexity, sales cycle length, and buying committee structure. Whether self-serve or enterprise, we design flows that match how your revenue actually happens.",
      icon: "",
    },
    {
      title: "Rooted in Research, Not Assumptions",
      des: "We study how your market searches, what objections surface, and where prospects hesitate. Then build navigation, messaging hierarchy, and conversion moments around those insights.",
      icon: "",
    },
    {
      title: "Visual Impact That Earns Trust Instantly",
      des: "Design quality signals brand credibility before prospects read a word. We apply sharp visual execution to every screen because polished interfaces communicate competence and reduce purchase anxiety.",
      icon: "",
    },
    {
      title: "Continuously Optimized for What Works",
      des: "Post-launch, we instrument everything: scroll depth, click patterns, form abandonment. Then we test, refine, and double down on what actually moves conversion rates, not designer opinions.",
      icon: "",
    },
  ];

  return (
    <ScrollThemeSection className="container grid lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-6 lg:sticky lg:top-20">
        <h2>
          Websites Engineered Around{" "}
          <span className="text-highlight">Revenue Goals</span>
        </h2>
        <p>
          We combine buyer psychology, competitive intelligence, and conversion
          science to build experiences that turn traffic into pipeline.
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
