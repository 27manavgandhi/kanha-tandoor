import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kanhatandoor.com'),
  title: {
    default: "Kanha Tandoor | Best Tandoor Manufacturers in Delhi NCR | Clay & Steel Tandoor",
    template: "%s | Kanha Tandoor Manufacture"
  },
  description: "Premium Clay & Stainless Steel Tandoor Manufacturers in Delhi NCR. Commercial Tandoor for Restaurants, Hotels, Party, Wedding. GST Registered. Pan India Delivery. Call: +91 8375894010",
  keywords: [
    "tandoor manufacturer delhi",
    "kanha tandoor",
    "clay tandoor delhi ncr",
    "stainless steel tandoor",
    "commercial tandoor oven",
    "tandoor suppliers delhi",
    "restaurant tandoor",
    "party tandoor delhi",
    "wedding tandoor",
    "big tandoor",
    "tandoor makers swroop nagar",
    "best tandoor delhi",
    "tandoor manufacturer india",
    "clay tandoor price",
    "steel tandoor suppliers",
    "tandoor oven for sale",
    "traditional clay tandoor",
    "commercial kitchen tandoor",
    "tandoor manufacturers near me",
    "delhi tandoor",
    "ncr tandoor",
    "india tandoor",
    "bulk tandoor order",
    "custom tandoor",
    "hotel tandoor",
    "dhaba tandoor"
  ],
  authors: [{ name: "Om Shankar - Kanha Tandoor" }],
  creator: "Kanha Tandoor Manufacture",
  publisher: "Kanha Tandoor Manufacture",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kanhatandoor.com',
    siteName: 'Kanha Tandoor Manufacture',
    title: 'Kanha Tandoor | Best Tandoor Manufacturers in Delhi NCR',
    description: 'Premium Clay & Stainless Steel Tandoor for Restaurants, Hotels, Party, Wedding. GST Registered. Pan India Delivery.',
    images: [
      {
        url: '/steel-tandoor-main.png',
        width: 1200,
        height: 630,
        alt: 'Kanha Tandoor - Premium Stainless Steel Tandoor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanha Tandoor | Best Tandoor Manufacturers in Delhi NCR',
    description: 'Premium Clay & Stainless Steel Tandoor Manufacturers',
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  alternates: {
    canonical: 'https://kanhatandoor.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.7041;77.1025" />
        <meta name="ICBM" content="28.7041, 77.1025" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}