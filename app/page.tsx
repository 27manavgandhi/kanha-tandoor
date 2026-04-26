"use client";

import { useState } from "react";
import ScrollSequence from "@/components/ScrollSequence";
import ProductToggle from "@/components/ProductToggle";
import SpecificationSection from "@/components/SpecificationSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import CTASection from "@/components/CTASection";

export default function Home() {
  const [currentProduct, setCurrentProduct] = useState<"steel" | "clay">("steel");

  const steelImages = [
    "/images/gallery/Kanha Tandoor (1).jpeg",
    "/images/gallery/Kanha Tandoor (2).jpeg",
    "/images/gallery/Kanha Tandoor (3).jpeg",
    "/images/gallery/Kanha Tandoor (4).jpeg",
    "/images/gallery/Kanha Tandoor (5).jpeg",
  ];

  const clayImages = [
    "/images/gallery/Kanha Tandoor (6).jpeg",
    "/images/gallery/Kanha Tandoor (7).jpeg",
    "/images/gallery/Kanha Tandoor (8).jpeg",
    "/images/gallery/Kanha Tandoor (9).jpeg",
    "/images/gallery/Kanha Tandoor (10).jpeg",
  ];

  return (
    <>
      <ScrollSequence productType={currentProduct} totalFrames={17} />
      <ProductToggle
        currentProduct={currentProduct}
        onToggle={() => setCurrentProduct(prev => prev === "steel" ? "clay" : "steel")}
      />
      <SpecificationSection productType={currentProduct} />
      <GalleryCarousel
        productType={currentProduct}
        images={currentProduct === "steel" ? steelImages : clayImages}
      />
      <CTASection />
    </>
  );
}