import type { LeadPayload } from "@/types/leads";

export async function saveLead(data: LeadPayload) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.ok;
}
