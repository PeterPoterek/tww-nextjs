import AboutSection from "@/components/about/about-section";
import HeroSection from "@/components/hero/hero-section";
import StatsSection from "@/components/stats/stats-section";

export default async function Home() {
  return (
    <main>
      <HeroSection />

      <AboutSection />

      <StatsSection />
    </main>
  );
}
