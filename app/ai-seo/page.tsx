import BeyondOptimization from "./_components/beyond-optimization";
import ChooseUs from "./_components/choose-us";
import DiscoveryChannel from "./_components/discovery-channel";
import AiSeoHero from "./_components/ai-seo-hero";
import ScrollThemeSection from "@/components/scroll-theme-section";
import Testimonials from "@/components/testimonials";

export default function AiSeoPage() {
  return (
    <div className="space-y-[130px]">
      <AiSeoHero />
      <ScrollThemeSection theme="dark" className="space-y-[130px]">
        <DiscoveryChannel />
        <ChooseUs />
      </ScrollThemeSection>
      <Testimonials />
      <BeyondOptimization />
    </div>
  );
}
