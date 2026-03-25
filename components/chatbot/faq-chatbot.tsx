"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronRight,
  LoaderCircle,
  MessageCircleMore,
  Search,
  SendHorizonal,
  Sparkles,
  X,
} from "lucide-react";
import { chatbotKnowledgeBase } from "@/data/faqs";
import { getWhatsAppLink } from "@/config/site";
import { getPagePath, trackEvent } from "@/lib/analytics";
import { saveLead } from "@/lib/leads";
import type { LeadPayload } from "@/types/leads";

type ChatMessage = {
  sender: "bot" | "user";
  text: string;
};

type DeviceOption = "Celular" | "Notebook" | "Computador";

type StatusOption = "Sim" | "Não" | "Às vezes";

type UrgencyOption = "Sim" | "Não";

type ChatStep =
  | "home"
  | "faq"
  | "collect_name"
  | "collect_device"
  | "collect_problem"
  | "collect_status"
  | "collect_urgency"
  | "ready";

type ChatLead = {
  name: string;
  device: string;
  problem: string;
  status: string;
  urgency: string;
};

const initialMessages: ChatMessage[] = [
  {
    sender: "bot",
    text: "Olá! 👋 Sou o assistente da Buutech Informática. Posso te ajudar com seu celular, notebook ou computador.",
  },
];

const initialLead: ChatLead = {
  name: "",
  device: "",
  problem: "",
  status: "",
  urgency: "",
};

const openingActions = [
  "Solicitar orçamento",
  "Tirar dúvida",
  "Falar com técnico",
] as const;

const faqSuggestions = [
  "troca de tela",
  "troca de bateria",
  "não liga",
  "notebook lento",
  "garantia",
  "upgrade SSD",
];

function buildWhatsAppMessage(lead: ChatLead) {
  return [
    "Olá! Vim pelo assistente da Buutech Informática.",
    `Nome: ${lead.name}`,
    `Aparelho: ${lead.device}`,
    `Problema: ${lead.problem}`,
    `Ele liga? ${lead.status}`,
    `Urgência: ${lead.urgency}`,
  ].join("\n");
}

function findFaqAnswer(input: string) {
  const normalized = input.toLowerCase();
  const match = chatbotKnowledgeBase.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  return match?.answer ?? "Posso te ajudar melhor direto no WhatsApp 👍";
}

export function FaqChatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("home");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSavingLead, setIsSavingLead] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [lead, setLead] = useState<ChatLead>(initialLead);
  const timersRef = useRef<number[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const whatsappLink = useMemo(() => {
    if (step === "ready") {
      return getWhatsAppLink(buildWhatsAppMessage(lead));
    }

    return getWhatsAppLink("Olá! Vim pelo assistente do site e preciso de ajuda com meu equipamento.");
  }, [lead, step]);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  useEffect(() => {
    const timers = timersRef.current;

    return () => {
      for (const timer of timers) {
        window.clearTimeout(timer);
      }
    };
  }, []);

  function queueBotMessages(nextMessages: string[], onDone?: () => void) {
    setIsTyping(true);

    nextMessages.forEach((message, index) => {
      const timer = window.setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: message }]);

        if (index === nextMessages.length - 1) {
          setIsTyping(false);
          onDone?.();
        }
      }, 450 + index * 700);

      timersRef.current.push(timer);
    });
  }

  function pushUserMessage(text: string) {
    setMessages((prev) => [...prev, { sender: "user", text }]);
  }

  function startTriage(mode: "quote" | "tech") {
    const intro =
      mode === "quote"
        ? "Perfeito. Vou organizar seu atendimento e preparar um orçamento mais direcionado."
        : "Certo. Vou fazer uma triagem rápida para te encaminhar com mais precisão.";

    setStep("collect_name");
    queueBotMessages([intro, "Qual seu nome?"]);
  }

  function handleOpeningAction(action: (typeof openingActions)[number]) {
    pushUserMessage(action);

    if (action === "Tirar dúvida") {
      setStep("faq");
      queueBotMessages([
        "Sem problema. Posso responder dúvidas sobre consertos, prazos, garantia, upgrades e atendimento.",
        "Se preferir, você pode tocar em uma dúvida comum abaixo ou escrever a sua pergunta.",
      ]);
      return;
    }

    startTriage(action === "Solicitar orçamento" ? "quote" : "tech");
  }

  function handleFaqQuestion(question: string) {
    pushUserMessage(question);
    queueBotMessages([findFaqAnswer(question)]);
    setInput("");
  }

  async function finalizeLead(nextLead: ChatLead) {
    setIsSavingLead(true);

    const payload: LeadPayload = {
      name: nextLead.name,
      device: nextLead.device,
      message: nextLead.problem,
      status: nextLead.status,
      urgency: nextLead.urgency,
      submittedAt: new Date().toISOString(),
      pagePath: getPagePath(),
      source: "chatbot",
    };

    try {
      await saveLead(payload);
    } finally {
      setIsSavingLead(false);
    }
  }

  async function handleTextSubmit() {
    const value = input.trim();
    if (!value || isTyping) return;

    pushUserMessage(value);
    setInput("");

    if (step === "faq") {
      queueBotMessages([findFaqAnswer(value)]);
      return;
    }

    if (step === "collect_name") {
      setLead((prev) => ({ ...prev, name: value }));
      setStep("collect_device");
      queueBotMessages([`Prazer, ${value}. Qual aparelho precisa de ajuda?`]);
      return;
    }

    if (step === "collect_problem") {
      setLead((prev) => ({ ...prev, problem: value }));
      setStep("collect_status");
      queueBotMessages(["Entendi. Ele liga?"]);
      return;
    }

    queueBotMessages(["Posso te ajudar melhor direto no WhatsApp 👍"]);
  }

  function handleDeviceSelect(device: DeviceOption) {
    pushUserMessage(device);
    setLead((prev) => ({ ...prev, device }));
    setStep("collect_problem");
    queueBotMessages(["Perfeito. O que está acontecendo com o aparelho?"]);
  }

  function handleStatusSelect(status: StatusOption) {
    pushUserMessage(status);
    setLead((prev) => ({ ...prev, status }));
    setStep("collect_urgency");
    queueBotMessages(["Entendi. É urgente?"]);
  }

  function handleUrgencySelect(urgency: UrgencyOption) {
    pushUserMessage(urgency);

    const nextLead = {
      ...lead,
      urgency,
    };

    setLead(nextLead);
    setStep("ready");

    void finalizeLead(nextLead);

    queueBotMessages([
      "Perfeito, já entendi seu caso 👍",
      "Vou te direcionar para continuar o atendimento no WhatsApp.",
    ]);
  }

  function openChatbot() {
    setOpen((prev) => {
      if (!prev) {
        trackEvent("chatbot_open", {
          page_path: getPagePath(),
          chatbot_name: "advanced_service_chatbot",
        });
      }
      return true;
    });
  }

  function toggleChatbot() {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        trackEvent("chatbot_open", {
          page_path: getPagePath(),
          chatbot_name: "advanced_service_chatbot",
        });
      }
      return next;
    });
  }

  function resetConversation() {
    setMessages(initialMessages);
    setLead(initialLead);
    setInput("");
    setStep("home");
    setIsTyping(false);
    setIsSavingLead(false);
  }

  useEffect(() => {
    const handler = () => openChatbot();
    window.addEventListener("buutech:open-chatbot", handler);

    return () => {
      window.removeEventListener("buutech:open-chatbot", handler);
    };
  }, []);

  const shouldShowInput = step === "faq" || step === "collect_name" || step === "collect_problem";

  return (
    <div className="fixed bottom-24 right-5 z-50 lg:bottom-8">
      {open ? (
        <div className="premium-outline w-[min(94vw,405px)] overflow-hidden rounded-[30px] border border-white/70 bg-white/92 shadow-[0_30px_90px_rgba(8,17,32,0.16)] backdrop-blur-2xl">
          <div className="flex items-center justify-between bg-[linear-gradient(135deg,#020617,#0f172a)] px-5 py-4 text-white">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-slate-300">
                <Sparkles className="h-3.5 w-3.5" /> Assistente Buutech Informática
              </div>
              <div className="mt-1 font-heading text-lg font-semibold">Atendimento, triagem e captação</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetConversation}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/20"
              >
                Reiniciar
              </button>
              <button type="button" onClick={toggleChatbot} aria-label="Fechar chatbot">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="chat-scrollbar flex max-h-[430px] flex-col gap-3 overflow-y-auto bg-slate-50/80 px-4 py-4"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={`max-w-[88%] rounded-[24px] px-4 py-3 text-sm leading-6 ${
                  message.sender === "bot"
                    ? "border border-white/80 bg-white text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                    : "ml-auto bg-slate-950 text-white shadow-[0_14px_32px_rgba(8,17,32,0.18)]"
                }`}
              >
                {message.text}
              </div>
            ))}

            {isTyping ? (
              <div className="inline-flex max-w-[88%] items-center gap-1 rounded-[24px] border border-white/80 bg-white px-4 py-3 text-sm text-slate-500 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400 [animation-delay:300ms]" />
              </div>
            ) : null}
          </div>

          <div className="border-t border-slate-200/80 px-4 py-4">
            {step === "home" ? (
              <div className="mb-3 flex flex-wrap gap-2">
                {openingActions.map((action) => (
                  <button
                    key={action}
                    type="button"
                    onClick={() => handleOpeningAction(action)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
                  >
                    {action}
                  </button>
                ))}
              </div>
            ) : null}

            {step === "faq" ? (
              <div className="mb-3 flex flex-wrap gap-2">
                {faqSuggestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => handleFaqQuestion(question)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-brand hover:bg-slate-50 hover:text-brand"
                  >
                    {question}
                  </button>
                ))}
              </div>
            ) : null}

            {step === "collect_device" ? (
              <div className="mb-3 flex flex-wrap gap-2">
                {(["Celular", "Notebook", "Computador"] as DeviceOption[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleDeviceSelect(option)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}

            {step === "collect_status" ? (
              <div className="mb-3 flex flex-wrap gap-2">
                {(["Sim", "Não", "Às vezes"] as StatusOption[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleStatusSelect(option)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}

            {step === "collect_urgency" ? (
              <div className="mb-3 flex flex-wrap gap-2">
                {(["Sim", "Não"] as UrgencyOption[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleUrgencySelect(option)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}

            {shouldShowInput ? (
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_24px_rgba(8,17,32,0.04)]">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={step === "faq" ? "Digite sua dúvida" : "Digite sua resposta"}
                  className="w-full bg-transparent text-sm outline-none"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      void handleTextSubmit();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => void handleTextSubmit()}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white"
                >
                  <SendHorizonal className="h-4 w-4" />
                </button>
              </div>
            ) : null}

            {step === "ready" ? (
              <div className="space-y-3">
                <div className="rounded-[24px] border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">
                  Lead captado com sucesso para acompanhamento e remarketing.
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  {isSavingLead ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
                  Falar no WhatsApp
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            ) : null}

            {step === "faq" ? (
              <button
                type="button"
                onClick={() => startTriage("tech")}
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950"
              >
                Solicitar atendimento guiado
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={toggleChatbot}
        className="premium-outline mt-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_22px_50px_rgba(16,185,129,0.28)] transition hover:scale-105 hover:bg-emerald-600"
        aria-label="Abrir assistente virtual"
      >
        <MessageCircleMore className="h-7 w-7" />
      </button>
    </div>
  );
}




