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
    title: "AI Search & Visibility Strategy",
    des: "From SEO to AEO to GEO optimization, we generate visibility across traditional search engines, AI assistants, and generative platforms that captures qualified traffic and converts discovery into pipeline.",
    icon: SearchIcon,
  },
  {
    title: "Paid Media & Performance Marketing",
    des: "Multi-platform campaign management, audience targeting, conversion optimization, and ROI tracking built to generate qualified leads and scale what works, not just spend budget.",
    icon: BookCheckIcon,
  },
  {
    title: "Website Strategy & Design",
    des: "We create digital experiences that convert efficiently, load quickly, and scale seamlessly. From messaging architecture to conversion-optimized UX, our web builds combine strategic copy with user-centric design.",
    icon: SparkleIcon,
  },
];

export default function BeyondCreative() {
  return (
    <ScrollThemeSection className="container space-y-18">
      <div className="space-y-6">
        <h2>
          <span className="text-highlight">Beyond</span> Creative Execution
        </h2>
        <p className="lg:w-1/2">
          We build complete marketing systems. Discover our capabilities in AI
          SEO-driven content, website development, and marketing operations
          optimization.
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
