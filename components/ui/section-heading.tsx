import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <span
        className={cn(
          "eyebrow",
          isDark && "border-white/10 bg-white/5 text-slate-300"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-6 font-heading text-3xl font-semibold tracking-tight sm:text-4xl",
          isDark ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-base leading-7 sm:text-lg",
          isDark ? "text-slate-300" : "text-slate-600"
        )}
      >
        {description}
      </p>
    </div>
  );
}
