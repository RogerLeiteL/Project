import type { LeadPayload } from "@/types/leads";

type SaveLeadResult = {
  ok: boolean;
  saved: boolean;
  reason?: string;
  status?: number;
  upstream?: string;
  message?: string;
};

export async function saveLead(data: LeadPayload): Promise<SaveLeadResult> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    keepalive: true,
  });

  let payload: Partial<SaveLeadResult> | null = null;

  try {
    payload = (await response.json()) as Partial<SaveLeadResult>;
  } catch {
    payload = null;
  }

  return {
    ok: response.ok,
    saved: Boolean(payload?.saved),
    reason: payload?.reason,
    status: payload?.status,
    upstream: payload?.upstream,
    message: payload?.message,
  };
}
