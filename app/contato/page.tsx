import { Metadata } from "next";
import Link from "next/link";
import { Clock3, HelpCircle, MapPin, MessageCircleMore } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { businessInfo, getWhatsAppLink } from "@/config/site";
import { quickQuestions } from "@/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Entre em contato com a Buutech Informática em Caieiras - SP. Solicite orçamento, fale com um técnico e envie sua demanda pelo WhatsApp.",
  path: "/contato",
  keywords: ["contato assistência técnica Caieiras", "WhatsApp assistência técnica Caieiras"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a Buutech Informática e receba atendimento rápido para resolver seu aparelho."
        description="Se você precisa de orçamento, orientação técnica ou quer confirmar atendimento em Caieiras e região, aqui é o caminho mais rápido para começar sem enrolação."
      />
      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-premium">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Atendimento imediato</div>
              <h2 className="mt-4 font-heading text-3xl font-semibold">Canal principal para orçamento e suporte inicial</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">O WhatsApp concentra o atendimento comercial da Buutech Informática para acelerar resposta, triagem inicial e envio das informações do serviço.</p>
              <Link target="_blank" rel="noreferrer" href={getWhatsAppLink()} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                <MessageCircleMore className="h-4 w-4" /> Falar no WhatsApp agora
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-start gap-3 text-sm text-slate-600"><MapPin className="mt-1 h-4 w-4 text-brand" /><div><div className="font-semibold text-slate-950">Localização</div><div>{businessInfo.address}</div></div></div>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-start gap-3 text-sm text-slate-600"><Clock3 className="mt-1 h-4 w-4 text-brand" /><div><div className="font-semibold text-slate-950">Horários</div><div>{businessInfo.hours.map((item) => <div key={item}>{item}</div>)}</div></div></div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand"><HelpCircle className="h-4 w-4" /> Perguntas rápidas</div>
              <div className="mt-6 flex flex-wrap gap-3">
                {quickQuestions.map((item) => (
                  <Link key={item} target="_blank" rel="noreferrer" href={getWhatsAppLink(`Olá! Gostaria de saber: ${item}`)} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 transition hover:border-brand hover:text-brand">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <ContactForm />
            <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-soft">
              <iframe
                src={businessInfo.googleMapsEmbed}
                title="Mapa de atendimento"
                className="h-[320px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
