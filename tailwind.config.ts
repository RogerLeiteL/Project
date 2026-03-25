import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0B1320",
        accent: "#0EA5A4",
        brand: "#1D4ED8",
        ink: "#0F172A",
        muted: "#5B6473",
        panel: "#111827",
        line: "#D8E0EA"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.08)",
        premium: "0 28px 90px rgba(8, 15, 31, 0.18)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.85)", opacity: "0.65" },
          "70%, 100%": { transform: "scale(1.15)", opacity: "0" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        pulseRing: "pulseRing 2s ease-out infinite",
        fadeUp: "fadeUp 0.7s ease forwards"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)"],
        body: ["var(--font-manrope)"]
      }
    },
  },
  plugins: [],
};

export default config;
