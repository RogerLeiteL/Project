import type { Metadata } from "next";
import { businessInfo, siteConfig } from "@/config/site";

const defaultOgImage = "/opengraph-image";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: SeoInput): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  const fullTitle = title.includes(businessInfo.name) ? title : `${title} | ${businessInfo.name}`;
  const mergedKeywords = [...siteConfig.keywords, ...keywords];

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: fullTitle,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: businessInfo.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${businessInfo.name} - Assistência técnica em ${businessInfo.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.legalName,
    alternateName: businessInfo.name,
    image: new URL(defaultOgImage, siteConfig.siteUrl).toString(),
    url: siteConfig.siteUrl,
    email: businessInfo.email,
    telephone: businessInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address,
      addressLocality: "Caieiras",
      addressRegion: "SP",
      postalCode: "07700-000",
      addressCountry: "BR",
    },
    areaServed: businessInfo.coverage.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
    sameAs: [businessInfo.instagramUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessInfo.phone,
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    makesOffer: [
      "Assistência técnica de celulares",
      "Manutenção de computadores",
      "Manutenção de notebooks",
      "Formatação e otimização",
      "Diagnóstico técnico",
      "Limpeza preventiva",
      "Upgrade de SSD e memória RAM",
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };
}
