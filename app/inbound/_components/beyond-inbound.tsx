import ScrollThemeSection from "@/components/scroll-theme-section";
import {
  ArrowRightIcon,
  Goal,
  SquareMousePointer,
  BanknoteArrowUp,
} from "lucide-react";
import Link from "next/link";

const list = [
  {
    title: "Brand & Positioning",
    des: "We craft positioning frameworks, messaging architecture, and visual identity that cuts through category noise and makes your brand instantly recognizable.",
    icon: Goal,
    href: "/creative",
  },
  {
    title: "Web Experiences That Convert",
    des: "Full-service website strategy, design, and development. We build digital properties that educate visitors, capture leads, and scale with your business.",
    icon: SquareMousePointer,
    href: "/ui-ux",
  },
  {
    title: "Paid Media That Performs",
    des: "Multi-platform ad campaigns, conversion optimization, and performance analytics. We launch and scale paid programs that generate qualified pipeline, not just traffic.",
    icon: BanknoteArrowUp,
    href: "/ppc",
  },
];

export default function BeyondInbound() {
  return (
    <ScrollThemeSection className="container space-y-18">
      <div className="space-y-6">
        <h2>
          <span className="text-highlight">Beyond</span> Inbound
        </h2>
        <p className="lg:w-1/2">
          We build complete digital ecosystems. Discover how we strengthen
          brands, ship websites, and streamline your marketing tech, all without
          hiring full-time.
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
              href={item.href}
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
