import Link from "next/link";
import { quickQuestions } from "@/data/content";
import { businessInfo, getWhatsAppLink } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function QuickContactStrip() {
  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="premium-card premium-outline grid gap-5 p-5 sm:p-6 lg:grid-cols-[0.85fr_1.15fr_0.8fr] lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">Solução rápida</div>
            <div className="mt-2 font-heading text-xl font-semibold text-slate-950 sm:text-2xl">
              Quando seu celular ou notebook dá problema, você precisa de solução rápida, não de tempo perdido tentando adivinhar.
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
              Aqui na Buutech Informática, você tem diagnóstico direto, atendimento rápido e a tranquilidade de saber que seu aparelho está em boas mãos.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {quickQuestions.map((item) => (
              <Link
                key={item}
                target="_blank" rel="noreferrer" href={getWhatsAppLink(`Olá! Vim pelo site da Buutech Informática e gostaria de saber: ${item}`)}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <div className="text-sm text-slate-500">WhatsApp: {businessInfo.whatsappDisplay}</div>
            <Button href={getWhatsAppLink()}>
              Solicitar atendimento
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}



