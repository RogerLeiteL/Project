import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import type { LeadPayload } from "@/types/leads";

function normalizeSource(source?: string) {
  if (source === "chatbot") {
    return "chatbot";
  }

  if (source === "contact_form" || source === "site_form") {
    return "formulario";
  }

  return source?.trim() || "formulario";
}

function normalizeLead(payload: Partial<LeadPayload>) {
  return {
    name: payload.name?.trim() ?? "",
    phone: payload.phone?.trim() ?? "",
    device: payload.device?.trim() ?? "Não informado",
    message: payload.message?.trim() ?? "",
    status: payload.status?.trim() ?? "Não informado",
    urgency: payload.urgency?.trim() ?? "Não informado",
    submittedAt: payload.submittedAt?.trim() ?? new Date().toISOString(),
    pagePath: payload.pagePath?.trim() ?? "/",
    source: normalizeSource(payload.source),
  };
}

function isValidLead(lead: ReturnType<typeof normalizeLead>) {
  if (!lead.name || !lead.message) {
    return false;
  }

  if (lead.source === "chatbot") {
    return Boolean(lead.device && lead.urgency);
  }

  return Boolean(lead.phone);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<LeadPayload>;
    const lead = normalizeLead(payload);

    if (!isValidLead(lead)) {
      return NextResponse.json(
        { ok: false, error: "invalid_payload" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    const webhookSecret = process.env.LEADS_WEBHOOK_SECRET;

    if (!webhookUrl) {
      return NextResponse.json({
        ok: true,
        saved: false,
        reason: "webhook_not_configured",
      });
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(webhookSecret ? { "x-webhook-secret": webhookSecret } : {}),
      },
      body: JSON.stringify({
        ...lead,
        company: siteConfig.title,
        timestamp,
        secret: webhookSecret,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "webhook_failed",
          status: response.status,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, saved: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "unexpected_error" },
      { status: 500 }
    );
  }
}
