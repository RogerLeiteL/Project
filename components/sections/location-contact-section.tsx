import Link from "next/link";
import { Clock3, MapPin, Phone } from "lucide-react";
import { businessInfo, getWhatsAppLink } from "@/config/site";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function LocationContactSection() {
  return (
    <section className="section-space bg-white">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Localização e contato"
            title="Fale agora com a Buutech Informática e descubra a forma mais rápida de resolver seu aparelho."
            description="Se você precisa de orçamento, orientação inicial ou quer confirmar busca e entrega em Caieiras, este é o melhor ponto para iniciar o atendimento sem enrolação."
          />
          <div className="mt-8 space-y-4">
            <div className="premium-card premium-outline rounded-[24px] p-5 text-sm text-slate-600">
              <div className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-brand" /><div><div className="font-semibold text-slate-950">Telefone / WhatsApp</div><div>{businessInfo.whatsappDisplay}</div></div></div>
            </div>
            <div className="premium-card premium-outline rounded-[24px] p-5 text-sm text-slate-600">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand" /><div><div className="font-semibold text-slate-950">Endereço</div><div>{businessInfo.address}</div></div></div>
            </div>
            <div className="premium-card premium-outline rounded-[24px] p-5 text-sm text-slate-600">
              <div className="flex items-start gap-3"><Clock3 className="mt-0.5 h-4 w-4 text-brand" /><div><div className="font-semibold text-slate-950">Horário de atendimento</div><div>{businessInfo.hours.map((item) => <div key={item}>{item}</div>)}</div></div></div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={getWhatsAppLink("Olá! Quero falar com um técnico agora e receber uma orientação sobre o meu aparelho.")}>
                Falar com um técnico no WhatsApp
              </Button>
              <Link
                target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Quero verificar se vocês podem buscar e entregar meu aparelho.")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
              >
                Confirmar busca e entrega <LinkArrow />
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <ContactForm />
          <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-soft">
            <iframe
              src={businessInfo.googleMapsEmbed}
              title="Mapa da Buutech Informática"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function LinkArrow() {
  return <span aria-hidden="true">→</span>;
}



