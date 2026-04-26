"use client";

import { useState } from "react";
import ScrollSequence from "@/components/ScrollSequence";
import ProductToggle from "@/components/ProductToggle";
import SpecificationSection from "@/components/SpecificationSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import CTASection from "@/components/CTASection";

type ProductType = "steel" | "clay";

export default function Home() {
  const [currentProduct, setCurrentProduct] = useState<ProductType>("steel");

  const steelImages: string[] = [
    "/images/gallery/Kanha Tandoor (1).jpeg",
    "/images/gallery/Kanha Tandoor (2).jpeg",
    "/images/gallery/Kanha Tandoor (3).jpeg",
    "/images/gallery/Kanha Tandoor (4).jpeg",
    "/images/gallery/Kanha Tandoor (5).jpeg",
  ];

  const clayImages: string[] = [
    "/images/gallery/Kanha Tandoor (6).jpeg",
    "/images/gallery/Kanha Tandoor (7).jpeg",
    "/images/gallery/Kanha Tandoor (8).jpeg",
    "/images/gallery/Kanha Tandoor (9).jpeg",
    "/images/gallery/Kanha Tandoor (10).jpeg",
  ];

  const handleToggle = () => {
    setCurrentProduct((prev) => (prev === "steel" ? "clay" : "steel"));
  };

  return (
    <main className="min-h-screen">
      <ScrollSequence productType={currentProduct} totalFrames={17} />
      <ProductToggle
        currentProduct={currentProduct}
        onToggle={handleToggle}
      />
      <SpecificationSection productType={currentProduct} />
      <GalleryCarousel
        productType={currentProduct}
        images={currentProduct === "steel" ? steelImages : clayImages}
      />
      <CTASection />
    </main>
  );
}