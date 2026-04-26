"use client";

import { useState } from "react";
import ScrollSequence from "@/components/ScrollSequence";
import ProductToggle from "@/components/ProductToggle";
import SpecificationSection from "@/components/SpecificationSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import CTASection from "@/components/CTASection";

type ProductType = "steel" | "clay" | "mild-steel-square";

export default function Home() {
  const [currentProduct, setCurrentProduct] = useState<ProductType>("steel");

  const handleToggle = () => {
    setCurrentProduct((prev) => {
      // Cycle through all three products
      if (prev === "steel") return "clay";
      if (prev === "clay") return "mild-steel-square";
      return "steel";
    });
  };

  // Get total frames for each product type
  const getTotalFrames = () => {
    switch (currentProduct) {
      case "steel":
        return 17;
      case "clay":
        return 17;
      case "mild-steel-square":
        return 17; // Update this number based on actual frame count
      default:
        return 17;
    }
  };

  return (
    <main className="min-h-screen">
      <ScrollSequence 
        productType={currentProduct} 
        totalFrames={getTotalFrames()} 
      />

      <ProductToggle
        currentProduct={currentProduct}
        onToggle={handleToggle}
      />

      <SpecificationSection productType={currentProduct} />

      <GalleryCarousel productType={currentProduct} />

      <CTASection />
    </main>
  );
}