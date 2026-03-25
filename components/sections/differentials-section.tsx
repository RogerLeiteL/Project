import Link from "next/link";
import { ArrowRight, Bolt, CarFront, CircleCheckBig, Shield, Wrench } from "lucide-react";
import { differentiators } from "@/data/content";
import { getWhatsAppLink } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const icons = [Bolt, Shield, Wrench, CircleCheckBig, CarFront, CircleCheckBig];

export function DifferentialsSection() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Benefícios"
          title="Assistência técnica em Caieiras para quem quer resolver rápido, com segurança e sem enrolação."
          description="Cada detalhe do atendimento foi pensado para aumentar sua confiança, reduzir o tempo sem aparelho e facilitar sua decisão no primeiro contato."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = icons[index] ?? CircleCheckBig;
            return (
              <Reveal key={item} delay={index * 80}>
                <div className="premium-card premium-outline group h-full p-5 sm:p-6">
                  <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-white transition group-hover:bg-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-base font-medium leading-7 text-slate-900 sm:mt-5">{item}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-950 px-5 py-6 text-white shadow-premium sm:px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Urgência</div>
            <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight">Quanto antes você agir, maior a chance de resolver o problema sem gastar mais.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Não espere o defeito piorar. Fale agora com a Buutech Informática e descubra a melhor solução para o seu aparelho em Caieiras e região.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={getWhatsAppLink()} className="bg-white text-slate-950 hover:bg-slate-100 hover:text-slate-950">Resolver meu problema agora</Button>
            <Link target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Vim pelo site da Buutech Informática e quero um orçamento rápido para meu aparelho.")} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
              Fazer orçamento rápido <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}



