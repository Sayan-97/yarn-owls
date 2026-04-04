import ScrollThemeSection from "@/components/scroll-theme-section";
import { BookCheckIcon, SearchIcon, SparkleIcon } from "lucide-react";

const list = [
  {
    title: "Search-First Content",
    des: "More than rankings and traffic. We create content ecosystems that answer buyer questions, build topical authority, and drive conversions at every stage of the journey.",
    icon: SearchIcon,
  },
  {
    title: "High-Converting Copy",
    des: "Websites and landing pages that persuade because they're rooted in customer research, competitive positioning, and relentless A/B testing. Every word earns its place.",
    icon: BookCheckIcon,
  },
  {
    title: "Assets That Enable Sales",
    des: "Whitepapers, case studies, and pitch decks built from real deal conversations. We create collateral that handles objections, proves ROI, and shortens decision cycles.",
    icon: SparkleIcon,
  },
];

export default function Growth() {
  return (
    <ScrollThemeSection className="container space-y-18">
      <h2>
        The Full Stack for <br />{" "}
        <span className="text-highlight">Content-Led Growth.</span>
      </h2>
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
            {/* <Link
              href={"#"}
              className="text-primary group-hover:text-white font-medium flex items-center gap-2 transition-colors duration-300"
            >
              Learn More{" "}
              <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link> */}
          </div>
        ))}
      </div>
    </ScrollThemeSection>
  );
}
