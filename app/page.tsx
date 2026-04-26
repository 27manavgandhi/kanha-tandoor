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

      {/* ✅ Fixed: removed images prop */}
      <GalleryCarousel productType={currentProduct} />

      <CTASection />
    </main>
  );
}