import Section from "@/components/custom-components/section";
import Footer from "@/components/custom-components/Footer";
import Hero from "@/components/custom-components/Hero";
import TransformSection from "@/components/custom-components/TransformSection";
import BenefitsSection from "@/components/custom-components/BenefitsSection";
import AppToolsSection from "@/components/custom-components/AppToolsSection";
import TestimonialsSection from "@/components/custom-components/TestimonialsSection";
import AboutSection from "@/components/custom-components/AboutSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      <Section className="bg-[#FAFAFA]">
        <TransformSection />
      </Section>
      <Section>
        <BenefitsSection />
      </Section>
      <Section className="bg-image-full-dark bg-cover bg-center flex flex-col justify-center items-center">
        <AppToolsSection />
      </Section>
      <Section className="bg-[#FAFAFA] pt-[15vh] md:pt-0">
        <TestimonialsSection />
      </Section>
      <Section>
        <AboutSection />
      </Section>
      <Footer />
    </main>
  );
}
