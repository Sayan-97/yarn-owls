import ScrollThemeSection from "@/components/scroll-theme-section";
import {
  CirclePlus,
  MessageCircle,
  Filter,
  SquareStar,
  FileSliders,
  Cable,
} from "lucide-react";

export default function ContentStrategy() {
  const list = [
    {
      title: "Understand Your Market Position",
      des: "Every content strategy begins with deep audience research, competitive positioning analysis, and understanding the information overload your prospects navigate daily.",
      icon: CirclePlus,
    },
    {
      title: "Define Your Message Architecture",
      des: "We establish your brand's voice guidelines, core narratives, and content territories. All informed by audience intelligence and strategic differentiation goals.",
      icon: MessageCircle,
    },
    {
      title: "Select High-Impact Channels",
      des: "We don't dilute efforts across every platform. We identify where your audience evaluates solutions and concentrate resources on channels that generate measurable results.",
      icon: Filter,
    },
    {
      title: "Design Your Content Framework",
      des: "Different stages demand different formats. We match your strategic message to the asset type, content depth, and distribution channel that maximizes engagement and conversion.",
      icon: SquareStar,
    },
    {
      title: "Implement Scalable Systems",
      des: "We establish sustainable production workflows, from editorial calendars to design systems, engineered for consistent execution and continuous improvement.",
      icon: FileSliders,
    },
    {
      title: "Measure, Learn, Optimize",
      des: "No guesswork. We instrument performance tracking, analyze what drives results, refine the approach based on data, and compound effectiveness with each iteration.",
      icon: Cable,
    },
  ];

  return (
    <ScrollThemeSection className="container grid lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-6 lg:sticky lg:top-20">
        <h2>
          Content Strategy Rooted in Buyer Psychology,{" "}
          <span className="text-highlight">Not Trends</span>
        </h2>
        <p>
          We architect messaging frameworks, align formats to decision stages,
          and build systems that capture intent signals.
        </p>
      </div>
      <div className="grid gap-20">
        {list.map((item) => (
          <div key={item.title} className="flex items-center gap-6">
            <div className="size-20 shrink-0 bg-primary dark:bg-[#202020] flex items-center justify-center rounded-lg">
              <item.icon size={32} className="text-white" />
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
