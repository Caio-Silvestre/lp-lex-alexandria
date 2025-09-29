import Section from "@/components/custom-components/section";
import Footer from "@/components/custom-components/Footer";
import Hero from "@/components/custom-components/Hero";
import TransformSection from "@/components/custom-components/TransformSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      <Section className="bg-[#FAFAFA]">
        <TransformSection />
      </Section>
      <Section>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Welcome to the Alexandria</h1>
          <p className="text-sm text-gray-500">
            This is the Alexandria project.
          </p>
        </div>
      </Section>
      <Section className="bg-image-full-dark bg-cover bg-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Welcome to the Alexandria</h1>
          <p className="text-sm text-gray-500">
            This is the Alexandria project.
          </p>
        </div>
      </Section>
      <Section className="bg-[#FAFAFA]">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Welcome to the Alexandria</h1>
          <p className="text-sm text-gray-500">
            This is the Alexandria project.
          </p>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Welcome to the Alexandria</h1>
          <p className="text-sm text-gray-500">
            This is the Alexandria project.
          </p>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
