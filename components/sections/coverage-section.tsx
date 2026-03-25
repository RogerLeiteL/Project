import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";
import { businessInfo, getWhatsAppLink } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CoverageSection() {
  return (
    <section className="section-space">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Área de atendimento"
            title="Atendemos Caieiras e regiões próximas com resposta rápida e atendimento organizado."
            description="Essa seção reforça presença local, estrutura profissional e cria mais um ponto natural para o cliente abrir o WhatsApp e confirmar atendimento na sua região."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={getWhatsAppLink("Olá! Quero confirmar atendimento na minha região e solicitar um orçamento.")}>Confirmar atendimento na minha região</Button>
            <Link target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Quero saber se vocês atendem meu bairro.")} className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Consultar bairro pelo WhatsApp <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="premium-card premium-outline p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">Regiões atendidas</div>
            <div className="mt-5 flex flex-wrap gap-3">
              {businessInfo.coverage.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{item}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-premium">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Marcas e categorias atendidas</div>
            <div className="mt-5 flex flex-wrap gap-3">
              {brands.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100">{item}</span>
              ))}
            </div>
            <Link target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Quero saber se vocês atendem a marca ou modelo do meu aparelho.")} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-300">
              Consultar meu aparelho agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

