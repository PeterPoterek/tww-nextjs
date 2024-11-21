import AboutSection from "@/components/about/about-section";
import HeroSection from "@/components/hero/hero-section";
import StatsSection from "@/components/stats/stats-section";
import CreationSection from "@/components/creation/creation-section";
import BannerContainer from "@/components/banner/banner-container";
import ContactSection from "@/components/contact/contact-section";

export default async function Home() {
  return (
    <main className={"bg-stone-900"}>
      <HeroSection />

      <AboutSection />

      <StatsSection />

      <CreationSection />

      <BannerContainer />

      <ContactSection />
    </main>
  );
}
