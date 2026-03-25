import Link from "next/link";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { businessInfo, getWhatsAppLink } from "@/config/site";
import { Container } from "@/components/ui/container";

export function FinalCtaSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="panel-dark relative overflow-hidden px-5 py-9 sm:px-10 sm:py-14">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/10 bg-white/5 text-slate-300">Atendimento imediato</span>
              <h2 className="mt-5 font-heading text-2xl font-semibold tracking-tight sm:mt-6 sm:text-4xl">
                Não deixe o problema aumentar.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-lg">
                Fale agora com a Buutech Informática e resolva seu aparelho com rapidez e segurança. Quanto antes você agir, maior a chance de evitar mais gasto e mais dor de cabeça.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link target="_blank" rel="noreferrer" href={getWhatsAppLink()} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:text-slate-950">
                <MessageCircleMore className="h-4 w-4" /> Falar no WhatsApp agora
              </Link>
              <Link target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Vim pelo site da Buutech Informática e quero fazer um orçamento rápido.")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">
                Fazer orçamento rápido <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-3 sm:mt-8">
            <div>Atendimento em <strong className="text-white">{businessInfo.city}</strong></div>
            <div>WhatsApp central <strong className="text-white">{businessInfo.whatsappDisplay}</strong></div>
            <div>Busca e entrega <strong className="text-white">quando aplicável</strong></div>
          </div>
        </div>
      </Container>
    </section>
  );
}



