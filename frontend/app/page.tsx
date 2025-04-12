import Navbar from "@/components/Header/Navbar";
import BridgeSection from "@/components/Landing/BridgeSection";
import Features from "@/components/Landing/Features";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import Impact from "@/components/Landing/Impact";
import TechnologySection from "@/components/Landing/TechnologySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* <HowItWorks /> */}
        <BridgeSection />
        <TechnologySection />
        <Impact />
      </main>
    </div>
  );
}
