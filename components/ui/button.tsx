import Link from "next/link";
import { cn } from "@/lib/utils";

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const normalizedClassName = className ?? "";
  const usesWhiteText = /(^|\s)text-white(\s|$)/.test(normalizedClassName);
  const usesDarkText = /(^|\s)text-slate-950(\s|$)|(^|\s)text-slate-900(\s|$)/.test(normalizedClassName);
  const usesLightSurface = /bg-white|bg-slate-50|bg-slate-100/.test(normalizedClassName);
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.01em] transition-all duration-300 will-change-transform",
        variant === "primary" &&
          "bg-slate-950 text-white shadow-[0_18px_40px_rgba(8,17,32,0.16)] hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-[0_24px_60px_rgba(8,17,32,0.22)]",
        variant === "secondary" &&
          "border border-slate-300/90 bg-white/90 text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:border-slate-950 hover:bg-white hover:text-slate-950 hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)]",
        variant === "ghost" && "text-slate-900 hover:text-brand",
        usesWhiteText && "!text-white hover:!text-white",
        (usesDarkText || usesLightSurface) && "!text-slate-950 hover:!text-slate-950",
        className
      )}
    >
      {children}
    </Link>
  );
}
