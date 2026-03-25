import Link from "next/link";
import { ArrowRight, Clock3, MapPin, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { businessInfo, getWhatsAppLink } from "@/config/site";
import { trustIndicators } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-16 pt-12 text-white sm:pb-24 sm:pt-16 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.34),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,164,0.18),transparent_24%),linear-gradient(180deg,rgba(8,17,32,0.92),rgba(8,17,32,1))]" />
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
        <Reveal>
          <span className="eyebrow border-white/10 bg-white/5 text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            Assistência técnica em {businessInfo.city}
          </span>
          <h1 className="mt-6 max-w-4xl font-heading text-[2.2rem] font-semibold tracking-[-0.05em] text-white sm:text-[3.5rem] lg:text-[4.45rem] lg:leading-[1.02]">
            Seu celular ou notebook parou? Resolva hoje com atendimento rápido em Caieiras.
          </h1>
          <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:text-[1.16rem]">
            A Buutech Informática oferece conserto rápido, diagnóstico preciso e solução sem enrolação para você voltar à sua rotina sem dor de cabeça.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
            {trustIndicators.map((item) => (
              <span key={item} className="soft-label border-white/10 bg-white/[0.08] text-slate-100">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={getWhatsAppLink()} className="min-w-[240px] bg-white text-slate-950 hover:bg-slate-100 hover:text-slate-950">
              Falar no WhatsApp agora
            </Button>
            <Button href={getWhatsAppLink("Olá! Vim pelo site da Buutech Informática e quero fazer um orçamento rápido.")} variant="secondary" className="min-w-[220px] border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/15 hover:text-white">
              Fazer orçamento rápido
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glow-border relative rounded-[30px] border border-white/10 bg-white/5 p-3 sm:rounded-[34px] sm:p-4 backdrop-blur-xl">
            <div className="premium-outline rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.98))] p-5 shadow-premium sm:rounded-[30px] sm:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Central Buutech Informática</div>
                  <div className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-[1.9rem]">Atendimento profissional para resolver sem perder tempo</div>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">Online</div>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="premium-outline rounded-[24px] border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:bg-white/[0.08] sm:rounded-[28px] sm:p-5">
                  <Clock3 className="h-6 w-6 text-sky-300" />
                  <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight">Atendimento ágil</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Você explica o problema e já recebe uma orientação clara para agir hoje, sem ficar parado esperando.</p>
                </div>
                <div className="premium-outline rounded-[24px] border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:bg-white/[0.08] sm:rounded-[28px] sm:p-5">
                  <ShieldCheck className="h-6 w-6 text-emerald-300" />
                  <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight">Diagnóstico preciso</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Você entende o que aconteceu com o aparelho e qual é a melhor solução antes de aprovar qualquer serviço.</p>
                </div>
                <div className="premium-outline rounded-[24px] border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:bg-white/[0.08] sm:rounded-[28px] sm:p-5">
                  <Truck className="h-6 w-6 text-cyan-300" />
                  <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight">Busca e entrega</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Quando aplicável, você ganha praticidade para resolver seu aparelho sem complicar ainda mais o seu dia.</p>
                </div>
                <div className="premium-outline rounded-[24px] border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:bg-white/[0.08] sm:rounded-[28px] sm:p-5">
                  <MapPin className="h-6 w-6 text-slate-200" />
                  <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight">Atendimento em Caieiras</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Assistência técnica em Caieiras e região para quem quer resolver com confiança e atendimento profissional de verdade.</p>
                </div>
              </div>
              <Link target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Vim pelo site da Buutech Informática e quero falar com um técnico sobre meu aparelho.")} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-300 sm:mt-6">
                Falar com um técnico <ArrowRight className="h-4 w-4 transition-transform duration-300 hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}




