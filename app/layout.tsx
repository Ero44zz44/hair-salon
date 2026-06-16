import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Céleste - Salon de Coiffure Paris",
  description:
    "Salon de coiffure de luxe à Paris. Coupes, colorations, soins et coiffures de mariage. Expertise, créativité et soin personnalisé.",
  keywords: ["salon coiffure paris", "hair salon paris", "coiffeur paris", "balayage paris", "coloration paris"],
  openGraph: {
    title: "Maison Céleste - Salon de Coiffure Paris",
    description: "Salon de coiffure de luxe à Paris. Coupes, colorations, soins et coiffures de mariage.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
