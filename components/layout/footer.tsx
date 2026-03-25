import Link from "next/link";
import { Clock3, Instagram, MapPin, Phone } from "lucide-react";
import { businessInfo, getWhatsAppLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="section-shell grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <span className="eyebrow border-white/10 bg-white/5 text-slate-300">
            Buutech Informática
          </span>
          <h2 className="mt-6 font-heading text-3xl font-semibold tracking-tight">
            Atendimento técnico com resposta rápida e caminho direto para o seu orçamento.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Assistência técnica especializada em celulares, notebooks e computadores em Caieiras - SP, com atendimento profissional, diagnóstico transparente e comunicação pensada para resolver sem enrolação.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Quero solicitar um orçamento pelo site.")} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
              Pedir orçamento no WhatsApp
            </Link>
            <Link target="_blank" rel="noreferrer" href={businessInfo.instagramUrl} className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40">
              Instagram
            </Link>
          </div>
        </div>

        <div className="space-y-5 text-sm text-slate-300">
          <h3 className="font-heading text-lg font-semibold text-white">Contato</h3>
          <p className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4" /> {businessInfo.phone}</p>
          <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4" /> {businessInfo.address}</p>
          <div className="flex items-start gap-3"><Clock3 className="mt-0.5 h-4 w-4" /> <div>{businessInfo.hours.map((item) => <div key={item}>{item}</div>)}</div></div>
        </div>

        <div className="space-y-5 text-sm text-slate-300">
          <h3 className="font-heading text-lg font-semibold text-white">Navegação</h3>
          <div className="grid gap-3">
            <Link href="/">Início</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/faq">FAQ</Link>
            <Link target="_blank" rel="noreferrer" href={businessInfo.instagramUrl} className="inline-flex items-center gap-2">
              <Instagram className="h-4 w-4" /> {businessInfo.instagram}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        {businessInfo.name} © 2026. Todos os direitos reservados.
      </div>
    </footer>
  );
}



