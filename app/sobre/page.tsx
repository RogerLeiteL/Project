import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

const values = [
  "Rapidez com responsabilidade",
  "Transparência no diagnóstico e no atendimento",
  "Compromisso com a satisfação do cliente",
  "Postura profissional do início ao fim",
];

const commitments = [
  "Atendimento com linguagem clara e orientação objetiva",
  "Processo organizado para reduzir retrabalho e dúvida",
  "Foco em solução prática, sem complicar o cliente",
  "Atuação em Caieiras - SP com proximidade e confiança",
];

export const metadata: Metadata = buildMetadata({
  title: "Sobre",
  description:
    "Conheça a Buutech Informática, assistência técnica em Caieiras - SP com foco em agilidade, transparência, confiança e atendimento profissional.",
  path: "/sobre",
  keywords: ["empresa de assistência técnica em Caieiras", "assistência técnica confiável em Caieiras"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Buutech Informática"
        title="Uma assistência técnica em Caieiras feita para transmitir confiança, rapidez e segurança desde o primeiro contato."
        description="A Buutech Informática trabalha para resolver problemas com agilidade, transparência e atendimento profissional, para que você volte a usar seu aparelho sem dor de cabeça e com mais tranquilidade."
      />
      <section className="section-space">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">Missão</div>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-slate-950">Resolver com agilidade e transparência, sem dor de cabeça para o cliente.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">A Buutech Informática oferece assistência técnica com foco em agilidade, transparência e confiança. Trabalhamos para que você volte a usar seus aparelhos com tranquilidade, sem perder tempo e com atendimento profissional do início ao fim.</p>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-premium">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Valores</div>
            <div className="mt-6 grid gap-4">
              {values.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-24">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-soft">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">Compromisso com o atendimento</div>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-slate-950">Atendimento humano, postura profissional e foco real em satisfação.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">A relação com o cliente precisa ser simples, objetiva e confiável. Por isso, a Buutech Informática organiza o atendimento para orientar com clareza, explicar o diagnóstico e conduzir o processo com mais previsibilidade e segurança.</p>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Diferenciais da empresa</div>
            <div className="mt-6 grid gap-4">
              {commitments.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <FinalCtaSection />
    </>
  );
}
