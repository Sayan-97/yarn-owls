import DesignProcess from "./_components/design-process";
import BeyondDesign from "./_components/beyond-design";
import Testimonials from "@/components/testimonials";
import RevenueGoals from "./_components/revenue-goals";
import UIUXHero from "./_components/ui-ux-hero";
import ScrollThemeSection from "@/components/scroll-theme-section";

export default function UIUXPage() {
  return (
    <div className="space-y-[130px]">
      <UIUXHero />
      <RevenueGoals />
      <ScrollThemeSection theme="dark" className="space-y-[130px] py-[130px]">
        <DesignProcess />
      </ScrollThemeSection>
      <Testimonials />
      <BeyondDesign />
    </div>
  );
}
