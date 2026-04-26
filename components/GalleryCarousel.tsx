

"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
  productType: "steel" | "clay";
}

export default function GalleryCarousel({ productType }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(
    () => [
      "/images/gallery/Kanha Tandoor (9).png",
      "/images/gallery/Kanha Tandoor (1).png",
      "/images/gallery/Kanha Tandoor (2).png",
      "/images/gallery/Kanha Tandoor (3).png",
      "/images/gallery/Kanha Tandoor (4).png",
      "/images/gallery/Kanha Tandoor (5).png",
      "/images/gallery/Kanha Tandoor (6).png",
      "/images/gallery/Kanha Tandoor (7).png",
      "/images/gallery/Kanha Tandoor (8).png",
    ],
    []
  );

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-16 sm:py-20 bg-tandoor-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text"
        >
          Product Gallery
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* 🔥 FIXED CONTAINER */}
          <div className="relative h-64 sm:h-96 md:h-[500px] overflow-hidden rounded-2xl bg-black shadow-2xl">
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
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 glass-effect p-2 sm:p-3 rounded-full hover:bg-black/70 transition z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 glass-effect p-2 sm:p-3 rounded-full hover:bg-black/70 transition z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-tandoor-orange w-8" : "bg-gray-600 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}