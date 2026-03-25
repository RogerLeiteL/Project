"use client";

import { MessageCircleMore } from "lucide-react";

export function MobileStickyCta() {
  function openChatbot() {
    window.dispatchEvent(new CustomEvent("buutech:open-chatbot"));
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/90 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 shadow-[0_-18px_44px_rgba(8,17,32,0.1)] backdrop-blur-xl lg:hidden">
      <button
        type="button"
        onClick={openChatbot}
        className="premium-outline flex w-full items-center justify-between rounded-[22px] bg-emerald-500 px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(16,185,129,0.28)] transition hover:bg-emerald-600"
      >
        <span className="inline-flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
            <MessageCircleMore className="h-5 w-5" />
          </span>
          <span>
            Abrir assistente
            <span className="block text-xs font-medium tracking-[0.01em] text-emerald-50">Atendimento guiado e rápido</span>
          </span>
        </span>
        <MessageCircleMore className="h-5 w-5" />
      </button>
    </div>
  );
}
