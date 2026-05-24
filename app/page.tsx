import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { WhySection } from "@/components/sections/why";
import { ProcessFlowSection } from "@/components/sections/process-flow";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { ICPsSection } from "@/components/sections/icps";
import { SupportSection } from "@/components/sections/support";
import { SecuritySection } from "@/components/sections/security";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { IntegrationsSection } from "@/components/sections/integrations";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <WhySection />
        <ProcessFlowSection />
        <MarqueeBand variant="default" />
        <CaseStudiesSection />
        <ICPsSection />
        <SupportSection />
        <SecuritySection />
        <TestimonialsSection />
        <IntegrationsSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
