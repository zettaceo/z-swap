import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import LiquiditySection from "@/components/LiquiditySection";
import ArchitectureSection from "@/components/ArchitectureSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AILayerSection from "@/components/AILayerSection";
import SecuritySection from "@/components/SecuritySection";
import EcosystemSection from "@/components/EcosystemSection";
import FutureSection from "@/components/FutureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zs-bg">
      <Navigation />
      <HeroSection />
      <WhatIsSection />
      <LiquiditySection />
      <ArchitectureSection />
      <CapabilitiesSection />
      <AILayerSection />
      <SecuritySection />
      <EcosystemSection />
      <FutureSection />
      <CTASection />
      <Footer />
    </main>
  );
}
