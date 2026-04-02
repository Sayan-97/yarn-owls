import ScrollThemeSection from "@/components/scroll-theme-section";
import InboundHero from "./_components/inbound-hero";
import RevenueEnfluence from "./_components/revenue-enfluence";
import Methodology from "./_components/methodology";
import ChooseUs from "./_components/choose-us";
import Testimonials from "@/components/testimonials";
import BeyondInbound from "./_components/beyond-inbound";

export default function InboundPage() {
  return (
    <div className="space-y-20 lg:space-y-40">
      <InboundHero />
      <RevenueEnfluence />
      <ScrollThemeSection
        theme="dark"
        className="space-y-20 lg:space-y-40 py-20 lg:py-40"
      >
        <Methodology />
        <ChooseUs />
      </ScrollThemeSection>
      <Testimonials />
      <BeyondInbound />
    </div>
  );
}
