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
    title: "LinkedIn Ads",
    des: "Where B2B decision-makers research solutions, consume content, and engage with vendors. We deploy LinkedIn for account-based targeting, thought leadership amplification, and persona-specific campaigns that warm cold prospects and accelerate active opportunities.",
    icon: SearchIcon,
  },
  {
    title: "Google Ads",
    des: "Where purchase intent becomes explicit action. We intercept buyers through search intent targeting, with campaigns structured around conversion tracking, message-to-search alignment, and lead quality optimization.",
    icon: BookCheckIcon,
  },
  {
    title: "Meta Advertising",
    des: "Where brand awareness compounds through repetition. We execute retargeting sequences, top-of-funnel reach campaigns, and consideration-stage content promotion designed to maintain visibility throughout extended B2B sales cycles.",
    icon: SparkleIcon,
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
