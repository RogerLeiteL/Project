import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { Container } from "@/components/ui/container";
import { detailedServices } from "@/data/services";
import { getWhatsAppLink } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Serviços",
  description:
    "Conheça os serviços da Buutech Informática: manutenção de celulares, notebooks, computadores, formatação, diagnóstico técnico e upgrades em Caieiras - SP.",
  path: "/servicos",
  keywords: [
    "upgrade de SSD em Caieiras",
    "formatação de computador em Caieiras",
    "troca de tela de celular em Caieiras",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Conserto de celular, manutenção de notebook e suporte técnico com atendimento rápido em Caieiras."
        description="Aqui você encontra serviços claros, atendimento profissional e orçamento rápido para resolver celular, notebook ou computador sem enrolação e com mais segurança na decisão."
      />
      <section className="section-space">
        <Container className="grid gap-6 xl:grid-cols-2">
          {detailedServices.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-heading text-2xl font-semibold text-slate-950">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Problemas resolvidos</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                      {service.problems.map((item) => (
                        <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Benefícios</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                      {service.benefits.map((item) => (
                        <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link target="_blank" rel="noreferrer" href={getWhatsAppLink(`Olá! Gostaria de um orçamento para ${service.title.toLowerCase()}.`)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
                  Falar no WhatsApp agora <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </Container>
      </section>
      <FinalCtaSection />
    </>
  );
}
