import { Metadata } from "next";
import { CareSections } from "@/components/sections/care-sections";
import { CoverageSection } from "@/components/sections/coverage-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocationContactSection } from "@/components/sections/location-contact-section";
import { ProcessSection } from "@/components/sections/process-section";
import { QuickContactStrip } from "@/components/sections/quick-contact-strip";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  keywords: ["conserto de notebook em Caieiras", "orçamento de assistência técnica em Caieiras"],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickContactStrip />
      <ServicesPreviewSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <ProcessSection />
      <CareSections />
      <FaqSection />
      <CoverageSection />
      <LocationContactSection />
      <FinalCtaSection />
    </>
  );
}
