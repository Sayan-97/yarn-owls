import Testimonials from "@/components/testimonials";
import ContentStrategy from "./_components/content-strategy";
import CreativeHero from "./_components/creative-hero";
import BeyondCreative from "./_components/beyond-creative";
import Impact from "./_components/impact";

export default function CreativePage() {
  return (
    <div className="space-y-20 lg:space-y-40">
      <CreativeHero />
      <ContentStrategy />
      <Impact />
      <Testimonials />
      <BeyondCreative />
    </div>
  );
}
