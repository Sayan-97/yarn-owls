import ScrollThemeSection from "@/components/scroll-theme-section";
import Solutions from "./_components/solutions";
import Marketing from "./_components/marketing";
import Hero from "./_components/hero";
import Ecosystems from "./_components/ecosystem";
import { Testimonials } from "./_components/testimonials";
import CTASection from "./_components/cta";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Solutions />
      <ScrollThemeSection theme="dark" className="py-24">
        <Marketing />
        <Ecosystems />
      </ScrollThemeSection>
      <Testimonials />
      <CTASection />
    </div>
  );
}
