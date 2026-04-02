import Testimonials from "@/components/testimonials";
import BeyondAdvertising from "./_components/beyond-advertising";
import Engagement from "./_components/engagement";
import Functions from "./_components/functions";
import PPCHero from "./_components/ppc-hero";
import ScrollThemeSection from "@/components/scroll-theme-section";
import QualifiedPipeline from "./_components/qualified-pipeline";
import ChooseUs from "./_components/choose-us";

export default function PPCPage() {
  return (
    <div className="space-y-20 lg:space-y-40">
      <PPCHero />
      <Engagement />
      <Functions />
      <ScrollThemeSection
        theme="dark"
        className="space-y-20 lg:space-y-40 py-20 lg:py-40"
      >
        <QualifiedPipeline />
        <ChooseUs />
      </ScrollThemeSection>
      <Testimonials />
      <BeyondAdvertising />
    </div>
  );
}
