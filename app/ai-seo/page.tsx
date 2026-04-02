import BeyondOptimization from "./_components/beyond-optimization";
import ChooseUs from "./_components/choose-us";
import DiscoveryChannel from "./_components/discovery-channel";
import AiSeoHero from "./_components/ai-seo-hero";
import ScrollThemeSection from "@/components/scroll-theme-section";
import Testimonials from "@/components/testimonials";
import AiSearch from "./_components/ai-search";

export default function AiSeoPage() {
  return (
    <div className="space-y-20 lg:space-y-40">
      <AiSeoHero />
      <AiSearch />
      <ScrollThemeSection
        theme="dark"
        className="space-y-20 lg:space-y-40 py-20 lg:py-40"
      >
        <DiscoveryChannel />
        <ChooseUs />
      </ScrollThemeSection>
      <Testimonials />
      <BeyondOptimization />
    </div>
  );
}
