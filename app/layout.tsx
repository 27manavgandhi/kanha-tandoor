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
    default: "Kanha Tandoor | Best Tandoor Manufacturers in Delhi NCR | Clay, Steel & MS Tandoor",
    template: "%s | Kanha Tandoor Manufacture"
  },
  description: "Premium Clay, Stainless Steel & MS Square Tandoor Manufacturers in Delhi NCR. Commercial Tandoor for Restaurants, Hotels, Party, Wedding. SS Top MS Body Tandoor. 200 Roti/Hour Capacity. GST Registered. Pan India Delivery. Call: +91 8375894010",
  keywords: [
    "tandoor manufacturer delhi",
    "kanha tandoor",
    "clay tandoor delhi ncr",
    "stainless steel tandoor",
    "mild steel tandoor",
    "ss top ms body tandoor",
    "square tandoor",
    "commercial tandoor oven",
    "tandoor suppliers delhi",
    "restaurant tandoor",
    "party tandoor delhi",
    "wedding tandoor",
    "big tandoor",
    "200 roti per hour tandoor",
    "charcoal gas tandoor",
    "dual fuel tandoor",
    "tandoor with wheels",
    "mobile tandoor",
    "tandoor makers swaroop nagar",
    "best tandoor delhi",
    "tandoor manufacturer india",
    "clay tandoor price",
    "steel tandoor suppliers",
    "mild steel tandoor price",
    "ms tandoor delhi",
    "square tandoor manufacturers",
    "tandoor oven for sale",
    "traditional clay tandoor",
    "commercial kitchen tandoor",
    "heavy duty tandoor",
    "industrial tandoor",
    "tandoor manufacturers near me",
    "delhi tandoor",
    "ncr tandoor",
    "india tandoor",
    "bulk tandoor order",
    "custom tandoor",
    "hotel tandoor",
    "dhaba tandoor",
    "hostel mess tandoor",
    "catering tandoor",
    "225 kg tandoor",
    "30x30 tandoor",
    "gulshan tandoor delhi"
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
    description: 'Premium Clay, Stainless Steel & MS Square Tandoor for Restaurants, Hotels, Dhaba, Party, Wedding. SS Top MS Body. 200 Roti/Hour. GST Registered. Pan India Delivery.',
    images: [
      {
        url: '/steel-tandoor-main.png',
        width: 1200,
        height: 630,
        alt: 'Kanha Tandoor - Premium Stainless Steel Tandoor',
      },
      {
        url: '/clay-tandoor-main.png',
        width: 1200,
        height: 630,
        alt: 'Kanha Tandoor - Traditional Clay Tandoor',
      },
      {
        url: '/mild-steel-square-tandoor-main.png',
        width: 1200,
        height: 630,
        alt: 'Kanha Tandoor - SS Top MS Body Square Tandoor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanha Tandoor | Clay, Steel & MS Tandoor Manufacturers Delhi NCR',
    description: 'Premium Clay, Stainless Steel & MS Square Tandoor Manufacturers. 200 Roti/Hour Capacity. Pan India Delivery.',
    images: ['/steel-tandoor-main.png'],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.7041;77.1025" />
        <meta name="ICBM" content="28.7041, 77.1025" />
        <link rel="icon" href="/images/l2.png" />
        
        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kanha Tandoor Manufacture",
              "image": "https://kanhatandoor.com/steel-tandoor-main.png",
              "telephone": "+91-8375894010",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressRegion": "DL",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.7041,
                "longitude": 77.1025
              },
              "priceRange": "₹₹",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tandoor Products",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Stainless Steel Tandoor",
                      "description": "304 Grade Stainless Steel Tandoor for commercial use"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Clay Tandoor",
                      "description": "Traditional handcrafted clay tandoor"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "SS Top MS Body Square Tandoor",
                      "description": "Mild steel square tandoor with stainless steel top, 200 roti per hour capacity"
                    }
                  }
                ]
              }
            })
          }}
        />
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
