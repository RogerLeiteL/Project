import Script from "next/script";
import { siteConfig } from "@/config/site";

export function GoogleAnalytics() {
  const measurementId = siteConfig.analytics.gaMeasurementId;

  if (!measurementId || measurementId === "G-XXXXXXXXXX") {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
