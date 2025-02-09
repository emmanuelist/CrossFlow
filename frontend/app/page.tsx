import Features from "@/components/Landing/Features";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import Impact from "@/components/Landing/Impact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
      </main>
    </div>
  );
}
