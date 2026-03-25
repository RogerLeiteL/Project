import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { businessInfo, getWhatsAppLink } from "@/config/site";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <div className="max-w-4xl">
          <span className="eyebrow border-white/10 bg-white/5 text-slate-300">{eyebrow}</span>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={getWhatsAppLink("Olá! Quero atendimento no WhatsApp e um orçamento para o meu aparelho.")} className="bg-white text-slate-950 hover:bg-slate-100">
              Falar no WhatsApp agora
            </Button>
            <Link href="/contato" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">
              Enviar meus dados e agilizar atendimento <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 text-sm text-slate-400">Atendimento especializado em {businessInfo.city}</div>
        </div>
      </Container>
    </section>
  );
}
