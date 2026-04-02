import DesignProcess from "./_components/design-process";
import BeyondDesign from "./_components/beyond-design";
import Testimonials from "@/components/testimonials";
import RevenueGoals from "./_components/revenue-goals";
import UIUXHero from "./_components/ui-ux-hero";
import ScrollThemeSection from "@/components/scroll-theme-section";

export default function UIUXPage() {
  return (
    <div className="space-y-20 lg:space-y-40">
      <UIUXHero />
      <RevenueGoals />
      <ScrollThemeSection
        theme="dark"
        className="space-y-20 lg:space-y-40 py-20 lg:py-40"
      >
        <DesignProcess />
      </ScrollThemeSection>
      <Testimonials />
      <BeyondDesign />
    </div>
  );
}
