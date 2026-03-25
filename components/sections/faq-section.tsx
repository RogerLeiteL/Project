import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqs } from "@/data/faqs";
import { getWhatsAppLink } from "@/config/site";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section className="section-space">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Se a sua dúvida está te fazendo adiar o conserto, aqui estão as respostas mais importantes."
            description="Respondemos as perguntas que mais travam a decisão de quem precisa de assistência técnica. Se preferir, você pode pular essa etapa e falar direto com a Buutech Informática no WhatsApp."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={getWhatsAppLink("Olá! Quero tirar minhas dúvidas e solicitar um orçamento pelo WhatsApp.")}>
              Tirar dúvida e pedir orçamento
            </Button>
            <Link
              target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Tenho uma dúvida específica sobre o meu aparelho e quero falar com um técnico.")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Falar com um técnico agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <Accordion items={faqs.slice(0, 6)} />
      </Container>
    </section>
  );
}



