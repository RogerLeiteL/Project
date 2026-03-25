export const businessInfo = {
  name: "Buutech Informática",
  legalName: "Buutech Informática Assistência Técnica",
  city: "Caieiras - SP",
  neighborhood: "Caieiras",
  address: "Caieiras - SP",
  phone: "(11) 97682-9270",
  whatsappNumber: "5511976829270",
  whatsappDisplay: "(11) 97682-9270",
  whatsappMessage:
    "Olá! Vim pelo site da Buutech Informática e preciso de ajuda com meu aparelho.",
  email: "contato@buutechinfo.com.br",
  instagram: "@buutechinfo",
  instagramUrl: "https://www.instagram.com/buutechinfo/",
  googleMapsEmbed: "https://www.google.com/maps?q=Caieiras%20SP&output=embed",
  googleMapsUrl: "https://www.google.com/maps?q=Caieiras%20SP",
  hours: [
    "Horário a confirmar",
  ],
  coverage: [
    "Caieiras - SP",
    "Regiões próximas mediante consulta",
  ],
};

export const siteConfig = {
  siteUrl: "https://www.buutechinfo.com.br",
  title: "Buutech Informática | Assistência Técnica em Caieiras - SP",
  description:
    "Assistência técnica especializada em celulares, notebooks e computadores em Caieiras - SP. Diagnóstico transparente, atendimento profissional e opção de busca e entrega.",
  keywords: [
    "assistência técnica em Caieiras",
    "manutenção de celular em Caieiras",
    "manutenção de notebook em Caieiras",
    "manutenção de computador em Caieiras",
    "conserto de celular em Caieiras",
    "assistência técnica de informática em Caieiras",
  ],
  analytics: {
    gaMeasurementId: "G-XXXXXXXXXX",
    clarityProjectId: "CLARITY_PROJECT_ID",
  },
  integrations: {
    leadsWebhookEnv: "LEADS_WEBHOOK_URL",
    leadsWebhookSecretEnv: "LEADS_WEBHOOK_SECRET",
  },
};

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? businessInfo.whatsappMessage);
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${text}`;
}
