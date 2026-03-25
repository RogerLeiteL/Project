"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, LoaderCircle, Send } from "lucide-react";
import { businessInfo, getWhatsAppLink } from "@/config/site";
import { getPagePath, trackEvent } from "@/lib/analytics";
import { saveLead } from "@/lib/leads";
import type { LeadPayload } from "@/types/leads";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  device: "",
  message: "",
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isValidPhone(value: string) {
  return value.replace(/\D/g, "").length === 11;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function getLeadFeedback(reason?: string, status?: number, upstream?: string) {
  if (reason === "webhook_not_configured") {
    return "O webhook de leads não está configurado na hospedagem. Cadastre LEADS_WEBHOOK_URL e LEADS_WEBHOOK_SECRET na Vercel e faça novo deploy.";
  }

  if (reason === "webhook_failed") {
    const suffix = status ? ` Status do webhook: ${status}.` : "";
    const detail = upstream ? ` Retorno: ${upstream}` : "";
    return `O site tentou enviar o lead para o Google Sheets, mas o Apps Script recusou ou falhou.${suffix}${detail}`;
  }

  if (reason === "unexpected_error") {
    return "O envio do lead falhou no servidor antes de chegar ao Google Sheets.";
  }

  return "O lead não foi confirmado no Google Sheets, mas o WhatsApp será aberto normalmente.";
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const whatsappLink = useMemo(() => {
    const composedMessage = `Olá! Meu nome é ${form.name || ""}. Telefone: ${form.phone || ""}. E-mail: ${form.email || ""}. Equipamento: ${form.device || ""}. Problema: ${form.message || ""}`;
    return getWhatsAppLink(composedMessage);
  }, [form]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) {
      setFeedback("Preencha seu nome para continuar o atendimento.");
      return;
    }

    if (!isValidPhone(form.phone)) {
      setFeedback("Digite um telefone válido com DDD + 9 dígitos. Exemplo: (11) 97682-9270.");
      return;
    }

    if (!isValidEmail(form.email)) {
      setFeedback("Digite um e-mail válido para recebermos seu contato corretamente.");
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    const pagePath = getPagePath();
    const leadPayload: LeadPayload = {
      ...form,
      phone: form.phone.replace(/\D/g, ""),
      email: form.email.trim(),
      device: form.device || "Não informado",
      pagePath,
      source: "contact_form",
    };

    trackEvent("form_submit", {
      page_path: pagePath,
      form_name: "contact_form",
      device_type: form.device || "not_selected",
    });

    try {
      const result = await saveLead(leadPayload);

      if (!result.saved) {
        setFeedback(getLeadFeedback(result.reason, result.status, result.upstream));
      }
    } catch {
      setFeedback("Não foi possível confirmar o envio para o Google Sheets, mas o atendimento no WhatsApp continuará normalmente.");
    } finally {
      setIsSubmitting(false);
      setForm(initialForm);
      window.location.href = whatsappLink;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card premium-outline rounded-[30px] p-6 sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">Solicitar orçamento</div>
          <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-slate-950">Envie os dados e receba atendimento mais rápido</h3>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Nome
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
            placeholder="Como podemos te chamar?"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Telefone
          <input
            required
            autoComplete="tel"
            inputMode="numeric"
            maxLength={15}
            pattern="\(\d{2}\) \d{5}-\d{4}"
            title="Digite um telefone com DDD e 9 dígitos. Exemplo: (11) 97682-9270"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: formatPhone(event.target.value) }))}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
            placeholder="(11) 97682-9270"
          />
        </label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          E-mail
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
            placeholder="seuemail@exemplo.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Equipamento
          <select
            value={form.device}
            onChange={(event) => setForm((prev) => ({ ...prev, device: event.target.value }))}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Selecione</option>
            <option value="Celular">Celular</option>
            <option value="Notebook">Notebook</option>
            <option value="Computador">Computador</option>
            <option value="Outro">Outro</option>
          </select>
        </label>
      </div>
      <div className="mt-5 rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4 text-sm leading-7 text-slate-600">
        <p className="font-semibold text-slate-950">Seu atendimento já sai mais adiantado</p>
        <p className="mt-1">Ao enviar, seus dados podem ser registrados e o WhatsApp abre com a mensagem pronta para você não precisar repetir tudo de novo.</p>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">Retorno pelo WhatsApp: {businessInfo.whatsappDisplay}</p>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700">
        Descreva o problema
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="rounded-[24px] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
          placeholder="Ex.: notebook não liga, celular com tela quebrada, computador muito lento ou travando..."
        />
      </label>
      {feedback ? (
        <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {feedback}
        </p>
      ) : null}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(8,17,32,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-80"
        >
          {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {isSubmitting ? "Enviando e abrindo atendimento..." : "Receber atendimento no WhatsApp"}
        </button>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-950"
        >
          Falar direto no WhatsApp <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </form>
  );
}
