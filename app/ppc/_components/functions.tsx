import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Icon } from "@iconify/react";
import ScrollThemeSection from "@/components/scroll-theme-section";

const list = [
  {
    title: "LinkedIn Ads",
    des: "Where B2B decision-makers research solutions, consume content, and engage with vendors. We deploy LinkedIn for account-based targeting, thought leadership amplification, and persona-specific campaigns that warm cold prospects and accelerate active opportunities.",
    icon: "basil:linkedin-outline",
  },
  {
    title: "Google Ads",
    des: "Where purchase intent becomes explicit action. We intercept buyers through search intent targeting, with campaigns structured around conversion tracking, message-to-search alignment, and lead quality optimization.",
    icon: "streamline-logos:google-ads-logo",
  },
  {
    title: "Meta Advertising",
    des: "Where brand awareness compounds through repetition. We execute retargeting sequences, top-of-funnel reach campaigns, and consideration-stage content promotion designed to maintain visibility throughout extended B2B sales cycles.",
    icon: "hugeicons:meta",
  },
];

export default function Functions() {
  return (
    <ScrollThemeSection className="container space-y-18">
      <div className="space-y-6">
        <h2>
          Each Platform Serves{" "}
          <span className="text-highlight">Distinct Functions</span>
        </h2>
        <p className="lg:w-1/2">
          Every advertising channel plays a unique role in the purchase journey.
          We align message type and creative format to what each platform
          delivers best.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {list.map((item) => (
          <div
            key={item.title}
            className="bg-card p-10 rounded-[40px] space-y-4 group hover:bg-accent transition-colors duration-300"
          >
            <div className="size-20 bg-primary group-hover:bg-white flex items-center justify-center rounded-2xl transition-colors duration-300">
              <Icon
                icon={item.icon}
                className="size-11 text-white group-hover:text-primary transition-colors duration-300"
              />
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
