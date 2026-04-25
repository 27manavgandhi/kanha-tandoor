"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
  productType: "steel" | "clay";
  images: string[];
}

export default function GalleryCarousel({ productType, images }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-tandoor-red to-tandoor-orange bg-clip-text text-transparent">
          Product Gallery
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl bg-gray-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${productType} tandoor ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-tandoor-orange w-8" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}