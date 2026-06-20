import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "workers compensation exemptions",
    "workers comp exemptions by state",
    "LLC workers comp exemption",
    "family member workers comp exemption",
    "independent contractor workers comp",
    "workers comp exemption all 50 states",
    "workers comp exemption California",
    "workers comp exemption Florida",
    "workers comp exemption Texas",
    "workers comp opt out",
    "seasonal worker workers comp",
    "corporate officer exemption workers comp",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "The comprehensive guide to workers' compensation exemptions across all 50 states — LLC member exemptions, family member exclusions, independent contractor classification, corporate officer rules, and alternative WC solutions. Licensed agency, 20+ years.",
    images: [{ url: "/images/og-image.jpg", width: 1216, height: 640, alt: `${SITE.name} — WC exemption guidance` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Workers' comp exemptions by state — LLC member, family member, corporate officer, independent contractor rules, and alternative WC solutions. All 50 states. 15-minute response.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "State-by-State Workers' Comp Exemption Guide",
      "LLC Member Workers' Comp Exemption Rules",
      "Family Member Workers' Comp Exemptions",
      "Independent Contractor Classification for Workers' Comp",
      "Corporate Officer Workers' Comp Exemption",
      "Seasonal Worker Workers' Comp Coverage Rules",
      "Alternative Workers' Comp Solutions (Occ-Acc, PEO, Non-Subscriber)",
      "Workers' Comp Exemption Compliance Audit",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
