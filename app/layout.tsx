import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://khanhatandoor.com'),
  title: {
    default: "Khanha Tandoor Manufacture | Best Tandoor Makers in Delhi NCR",
    template: "%s | Khanha Tandoor Manufacture"
  },
  description: "Premium Clay & Stainless Steel Tandoor Manufacturers in Delhi NCR. Commercial Tandoor Oven, Clay Tandoor, Steel Tandoor for Restaurants. GST Registered. Pan India Delivery.",
  keywords: [
    "tandoor manufacturer delhi",
    "clay tandoor delhi ncr",
    "stainless steel tandoor",
    "commercial tandoor oven",
    "tandoor suppliers delhi",
    "restaurant tandoor",
    "tandoor makers swroop nagar",
    "best tandoor delhi",
    "tandoor manufacturer india",
    "clay tandoor price",
    "steel tandoor suppliers",
    "tandoor oven for sale",
    "traditional clay tandoor",
    "commercial kitchen tandoor",
    "tandoor manufacturers near me"
  ],
  authors: [{ name: "Om Shankar" }],
  creator: "Khanha Tandoor Manufacture",
  publisher: "Khanha Tandoor Manufacture",
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
    url: 'https://khanhatandoor.com',
    siteName: 'Khanha Tandoor Manufacture',
    title: 'Khanha Tandoor Manufacture | Best Tandoor Makers in Delhi NCR',
    description: 'Premium Clay & Stainless Steel Tandoor Manufacturers in Delhi NCR. Commercial Tandoor Oven for Restaurants. GST Registered. Pan India Delivery.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Khanha Tandoor Manufacture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khanha Tandoor Manufacture | Best Tandoor Makers in Delhi NCR',
    description: 'Premium Clay & Stainless Steel Tandoor Manufacturers in Delhi NCR',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://khanhatandoor.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.7041;77.1025" />
        <meta name="ICBM" content="28.7041, 77.1025" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}