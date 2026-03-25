import { Metadata } from "next";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Dúvidas frequentes sobre orçamento, prazos, garantia, manutenção de celular, notebook e computador em Caieiras - SP.",
  path: "/faq",
  keywords: ["FAQ assistência técnica Caieiras", "quanto tempo demora conserto notebook Caieiras"],
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Tire suas dúvidas sobre orçamento, prazos, garantia e atendimento antes mesmo de falar com um técnico."
        description="Esta página foi feita para reduzir insegurança, responder as dúvidas mais comuns e facilitar sua decisão de falar com a Buutech Informática pelo WhatsApp."
      />
      <section className="section-space">
        <Container>
          <Accordion items={faqs} />
        </Container>
      </section>
      <FinalCtaSection />
    </>
  );
}
