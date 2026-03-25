import Link from "next/link";
import { businessInfo, getWhatsAppLink } from "@/config/site";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-2xl">
      <div className="section-shell py-3">
        <div className="flex items-center justify-between gap-6 rounded-[28px] border border-white/70 bg-white/60 px-4 py-3 shadow-[0_16px_50px_rgba(8,17,32,0.06)] backdrop-blur-xl sm:px-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="premium-outline flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold tracking-[0.08em] text-white shadow-[0_14px_36px_rgba(8,17,32,0.2)]">
              BT
            </div>
            <div>
              <div className="font-heading text-lg font-semibold tracking-tight text-slate-950">
                {businessInfo.name}
              </div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
                Tecnologia e Serviços
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition duration-300 hover:bg-slate-950 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button href={getWhatsAppLink("Olá! Quero atendimento rápido e um orçamento pelo WhatsApp.")} className="hidden lg:inline-flex lg:px-5">
            Pedir orçamento
          </Button>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_24px_rgba(8,17,32,0.04)] transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            target="_blank" rel="noreferrer" href={getWhatsAppLink("Olá! Quero atendimento rápido e um orçamento pelo WhatsApp.")}
            className="whitespace-nowrap rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(8,17,32,0.16)]"
          >
            Orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}

