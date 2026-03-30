import ScrollThemeSection from "@/components/scroll-theme-section";
import {
  ArrowRightIcon,
  BookCheckIcon,
  SearchIcon,
  SparkleIcon,
} from "lucide-react";
import Link from "next/link";

const list = [
  {
    title: "Brand & Positioning",
    des: "We craft positioning frameworks, messaging architecture, and visual identity that cuts through category noise and makes your brand instantly recognizable.",
    icon: SearchIcon,
  },
  {
    title: "Web Experiences That Convert",
    des: "Full-service website strategy, design, and development. We build digital properties that educate visitors, capture leads, and scale with your business.",
    icon: BookCheckIcon,
  },
  {
    title: "Paid Media That Performs",
    des: "Multi-platform ad campaigns, conversion optimization, and performance analytics. We launch and scale paid programs that generate qualified pipeline, not just traffic.",
    icon: SparkleIcon,
  },
];

export default function BeyondDemand() {
  return (
    <ScrollThemeSection className="container space-y-18">
      <div className="space-y-6">
        <h2>
          <span className="text-highlight">Beyond</span> Demand Generation
        </h2>
        <p className="lg:w-1/2">
          We build complete digital ecosystems. Discover how we strengthen
          brands, ship websites, and streamline your marketing tech, all without
          hiring full-time.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {list.map((item) => (
          <div key={item.title} className="bg-card p-6 rounded-3xl space-y-4">
            <div className="size-20 bg-primary flex items-center justify-center rounded-2xl">
              <item.icon className="size-11 text-white" />
            </div>
            <h4 className="mt-7">{item.title}</h4>
            <p>{item.des}</p>
            <Link
              href={"#"}
              className="text-primary font-medium flex items-center gap-2"
            >
              Learn More <ArrowRightIcon />
            </Link>
          </div>
        ))}
      </div>
    </ScrollThemeSection>
  );
}
