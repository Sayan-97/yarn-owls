import ScrollThemeSection from "@/components/scroll-theme-section";
import BeyondDemand from "./_components/beyond-demand";
import DemandGenHero from "./_components/demandgen-hero";
import Growth from "./_components/growth";
import TeamsPowered from "./_components/teams-powered";
import DemandIntoRevenue from "./_components/demand-into-revenue";
import Formulas from "./_components/formulas";

export default function DemandGenPage() {
  return (
    <div className="space-y-[130px]">
      <DemandGenHero />
      <Growth />
      <ScrollThemeSection theme="dark" className="space-y-[130px]">
        <DemandIntoRevenue />
        <Formulas />
      </ScrollThemeSection>
      <TeamsPowered />
      <BeyondDemand />
    </div>
  );
}
