"use client";

import dynamic from "next/dynamic";

const AnalyticsEvents = dynamic(
  () => import("@/components/analytics/analytics-events").then((mod) => mod.AnalyticsEvents),
  { ssr: false }
);

const FaqChatbot = dynamic(
  () => import("@/components/chatbot/faq-chatbot").then((mod) => mod.FaqChatbot),
  { ssr: false }
);

export function ClientEnhancers() {
  return (
    <>
      <AnalyticsEvents />
      <FaqChatbot />
    </>
  );
}
