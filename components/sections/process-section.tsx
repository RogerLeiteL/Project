import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceProcess } from "@/data/process";
import { getWhatsAppLink } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ProcessSection() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Autoridade e processo"
          title="Você fala com quem entende do problema e segue para o conserto com segurança."
          description="Mais de 5 anos de experiência em manutenção de celulares, notebooks e computadores, com atendimento estruturado para reduzir dúvidas e acelerar sua decisão."
          align="center"
        />
        <div className="mt-6 flex justify-center">
          <div className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-soft">
            Mais de 5 anos de experiência em assistência técnica em Caieiras
          </div>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-5 lg:gap-6">
          {serviceProcess.map((item, index) => (
            <Reveal key={item.step} delay={index * 80}>
              <div className="premium-card premium-outline relative h-full p-5 sm:p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Etapa {item.step}</div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href={getWhatsAppLink()}>Falar no WhatsApp agora</Button>
          <Link
            target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Vim pelo site da Buutech Informática e quero explicar o problema do meu aparelho.")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            Explicar meu problema <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}



