import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/data/services";
import { getWhatsAppLink } from "@/config/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function ServicesPreviewSection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Serviços principais"
            title="Conserto de celular em Caieiras e manutenção de notebook com atendimento comercial claro e direto."
            description="Celulares, notebooks e computadores com problema exigem uma resposta prática. Aqui você entende rápido o que fazemos e já pode seguir para o WhatsApp com a mensagem pronta."
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={getWhatsAppLink("Olá! Vim pelo site da Buutech Informática e quero fazer um orçamento rápido.")}>Fazer orçamento rápido</Button>
            <Link href="/servicos" className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Ver serviços completos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 90}>
                <div className="premium-card premium-outline group flex h-full flex-col p-5 sm:p-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-brand">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950 sm:mt-6">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
                  <Link target="_blank" rel="noreferrer" href={getWhatsAppLink(`Olá! Vim pelo site da Buutech Informática e preciso de ajuda com ${service.title.toLowerCase()}.`)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-brand sm:mt-6">
                    Solicitar atendimento <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-950 px-5 py-6 text-white shadow-premium sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Serviços em destaque</div>
            <div className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">Celulares: troca de tela, bateria, conector, camera e reparos em geral.</div>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">Notebooks e computadores: formatacao, limpeza, upgrade SSD, memoria e manutencao completa para quem precisa resolver rapido e com seguranca.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button href={getWhatsAppLink()} className="bg-white text-slate-950 hover:bg-slate-100 hover:text-slate-950">Falar com um técnico</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}



