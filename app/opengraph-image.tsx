import { ImageResponse } from "next/og";
import { businessInfo } from "@/config/site";

export const runtime = "edge";
export const alt = `${businessInfo.name} - Assistência técnica em ${businessInfo.city}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 46%, #0b1320 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(37,99,235,0.35), transparent 28%), radial-gradient(circle at bottom right, rgba(14,165,164,0.22), transparent 26%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "32px",
            padding: "44px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "22px",
                background: "white",
                color: "#020617",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              BT
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "22px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#cbd5e1" }}>
                Tecnologia e Servicos
              </div>
              <div style={{ fontSize: "42px", fontWeight: 800 }}>{businessInfo.name}</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "860px" }}>
            <div style={{ fontSize: "68px", lineHeight: 1.02, fontWeight: 800 }}>
              Assistencia tecnica premium em {businessInfo.city}
            </div>
            <div style={{ fontSize: "28px", lineHeight: 1.4, color: "#cbd5e1" }}>
              Celulares, notebooks e computadores com atendimento profissional, diagnostico transparente e foco em conversao pelo WhatsApp.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              {['Atendimento rapido', 'Diagnostico transparente', 'Busca e entrega'].map((item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "999px",
                    padding: "12px 18px",
                    fontSize: "20px",
                    color: "#e2e8f0",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div style={{ fontSize: "22px", color: "#93c5fd" }}>{businessInfo.whatsappDisplay}</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
