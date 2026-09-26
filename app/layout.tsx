import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/source-serif-4";
import "./globals.css";
import "./editorial.css";
import "./refinement.css";
import "./clean.css";
import "./airy.css";
import "./reference.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/providers/motion-provider";
import { getPublicSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://caballes-go.com"),
  title: {
    default: "Caballes-Go Securities | Philippine Equity Brokerage",
    template: "%s | Caballes-Go Securities",
  },
  description:
    "Philippine equity brokerage providing market access, research, execution, settlement support, and client service for retail and institutional investors.",
  keywords: [
    "Caballes-Go Securities",
    "CGSI",
    "Philippine stock broker",
    "PSE trading participant",
    "equity brokerage Philippines",
    "Philippine equities",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Caballes-Go Securities, Inc.",
    description:
      "Philippine equity brokerage for individual, corporate, and institutional clients.",
    type: "website",
    locale: "en_PH",
    images: [{ url: "/images/editorial/makati-dusk.jpg", width: 2400, height: 1600 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caballes-Go Securities, Inc.",
    description:
      "Philippine equity brokerage for individual, corporate, and institutional clients.",
    images: ["/images/editorial/makati-dusk.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Caballes-Go Securities, Inc.",
  alternateName: "CGSI",
  url: "https://caballes-go.com",
  telephone: "+63-2-7777-8970",
  email: "admin@caballes-go.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "16/F Robinsons Equitable Tower, ADB Avenue corner Poveda Street",
    addressLocality: "Pasig City",
    addressRegion: "Metro Manila",
    addressCountry: "PH",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getPublicSiteSettings();

  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          <SiteHeader settings={settings} />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <SiteFooter settings={settings} />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
