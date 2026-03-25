import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { getWhatsAppLink } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function TestimonialsSection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <SectionHeading
          eyebrow="Prova social"
          title="Clientes que chegam com problema saem com a tranquilidade de saber que foi bem resolvido."
          description="Atendimento rápido, transparente e com resultado de verdade. Os depoimentos abaixo ajudam a mostrar por que tanta gente prefere falar direto com a Buutech Informática quando o aparelho para de funcionar."
        />
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 font-semibold text-amber-700">Nota alta de satisfação</span>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 font-semibold text-emerald-700">Atendimento transparente</span>
          <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 font-semibold text-sky-700">Resultado com confiança</span>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <div className="premium-card premium-outline h-full p-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="mt-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Atendimento aprovado
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950">{item.summary}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.comment}</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <div className="font-semibold text-slate-950">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href={getWhatsAppLink()}>Falar no WhatsApp agora</Button>
          <Link
            target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Vim pelo site da Buutech Informática e quero falar com um técnico sobre meu aparelho.")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            Falar com a equipe agora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}



