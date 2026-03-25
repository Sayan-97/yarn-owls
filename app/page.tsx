import ScrollThemeSection from "@/components/scroll-theme-section";
import Solutions from "./_components/solutions";
import Marketing from "./_components/marketing";
import Hero from "./_components/hero";
import Ecosystems from "./_components/ecosystem";
import { Testimonials } from "./_components/testimonials";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[130px]">
      <Hero />
      <Solutions />
      <ScrollThemeSection theme="dark" className="pt-[130px]">
        <Marketing />
        <Ecosystems />
      </ScrollThemeSection>
      <Testimonials />
    </div>
  );
}
