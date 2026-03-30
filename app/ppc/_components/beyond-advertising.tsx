import Link from "next/link";
import {
  ArrowRightIcon,
  BookCheckIcon,
  SearchIcon,
  SparkleIcon,
} from "lucide-react";
import ScrollThemeSection from "@/components/scroll-theme-section";

const list = [
  {
    title: "AI Search & Visibility Strategy",
    des: "From SEO to AEO to GEO optimization, we generate visibility across traditional search engines, AI assistants, and generative platforms that captures qualified traffic and converts discovery into pipeline.",
    icon: SearchIcon,
  },
  {
    title: "Demand Generation",
    des: "Multi-channel strategies that unify organic, paid, and content into one coordinated system. We build demand engines that capture intent across every touchpoint and convert it into qualified pipeline.",
    icon: BookCheckIcon,
  },
  {
    title: "Website Strategy & Design",
    des: "We create digital experiences that convert efficiently, load quickly, and scale seamlessly. From messaging architecture to conversion-optimized UX, our web builds combine strategic copy with user-centric design.",
    icon: SparkleIcon,
  },
];

export default function BeyondAdvertising() {
  return (
    <ScrollThemeSection className="container space-y-18">
      <div className="space-y-6">
        <h2>
          Beyond <span className="text-highlight">Paid Advertising</span>
        </h2>
        <p className="lg:w-1/2">
          We build integrated growth systems. Explore our expertise in AI SEO,
          content strategy, brand development, and marketing strategy
          implementation.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {list.map((item) => (
          <div
            key={item.title}
            className="bg-card p-10 rounded-[40px] space-y-4 group hover:bg-accent transition-colors duration-300"
          >
            <div className="size-20 bg-primary group-hover:bg-white flex items-center justify-center rounded-2xl transition-colors duration-300">
              <item.icon className="size-11 text-white group-hover:text-primary transition-colors duration-300" />
            </div>
            <h4 className="mt-7 group-hover:text-accent-foreground transition-colors duration-300">
              {item.title}
            </h4>
            <p className="group-hover:text-accent-foreground/70 transition-colors duration-300">
              {item.des}
            </p>
            <Link
              href={"#"}
              className="text-primary group-hover:text-white font-medium flex items-center gap-2 transition-colors duration-300"
            >
              Learn More{" "}
              <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        ))}
      </div>
    </ScrollThemeSection>
  );
}
