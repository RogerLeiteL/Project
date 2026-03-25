import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { preventiveReasons, serviceSigns } from "@/data/content";
import { getWhatsAppLink } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CareSections() {
  return (
    <section className="section-space bg-white">
      <Container className="grid gap-6 lg:grid-cols-2">
        <div className="premium-card premium-outline p-8">
          <SectionHeading
            eyebrow="Quando procurar assistência"
            title="Quanto antes você agir, maior a chance de evitar dor de cabeça e custo maior."
            description="Orientações úteis para aumentar percepção de urgência e incentivar o cliente a pedir avaliação técnica no WhatsApp antes que o defeito evolua."
          />
          <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
            {serviceSigns.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">{item}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={getWhatsAppLink("Olá! Meu aparelho apresenta alguns desses sinais e quero uma avaliação.")}>Quero avaliar meu aparelho</Button>
            <Link target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Quero enviar os sintomas do meu equipamento para análise inicial.")} className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Enviar sintomas no WhatsApp <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-premium">
          <SectionHeading
            eyebrow="Manutenção preventiva"
            title="Prevenir falhas custa menos do que parar um equipamento no momento errado."
            description="Essa seção ajuda a Buutech Informática a vender manutenção preventiva e upgrades com argumentos que convidam o cliente a pedir orientação agora."
            tone="dark"
          />
          <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
            {preventiveReasons.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{item}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={getWhatsAppLink("Olá! Quero saber se vale a pena fazer manutenção preventiva no meu equipamento.")} className="bg-white text-slate-950 hover:bg-slate-100">Quero orientação preventiva</Button>
            <Link target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Quero saber se um upgrade ou manutenção preventiva faz sentido para meu equipamento.")} className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-300">
              Falar com um técnico agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}



