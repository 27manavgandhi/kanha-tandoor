"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ScrollSequenceProps {
  productType: "steel" | "clay";
  totalFrames: number;
}

export default function ScrollSequence({
  productType,
  totalFrames,
}: ScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ ALL HOOKS MOVED HERE (FIX)
  const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const leftTextOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45],
    [0, 1, 0]
  );

  const rightTextOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75],
    [0, 1, 0]
  );

  const ctaOpacity = useTransform(
    scrollYProgress,
    [0.85, 0.95],
    [0, 1]
  );

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalFrames - 1]
  );

  useEffect(() => {
    const loadImages = async () => {
      const imageArray: HTMLImageElement[] = [];

      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `/frames/${productType}/Kanha ${
          productType === "steel" ? "Stainless Steel" : "Clay"
        } Tandoor (${i}).jpg`;
        imageArray.push(img);
      }

      await Promise.all(
        imageArray.map(
          (img) =>
            new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
        )
      );

      setImages(imageArray);
      setImagesLoaded(true);
    };

    loadImages();
  }, [productType, totalFrames]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const index = Math.min(
        Math.floor(frameIndex.get()),
        images.length - 1
      );

      const img = images[index];

      if (img && img.complete) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scale = Math.min(
          canvas.width / img.width,
          canvas.height / img.height
        );

        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    const unsubscribe = frameIndex.on("change", render);
    render();

    return () => unsubscribe();
  }, [frameIndex, images, imagesLoaded]);

  // ✅ LOADING STATE
  if (!imagesLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0A0A0A]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-tandoor-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading Tandoor Experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0A0A]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 pointer-events-none">
          
          {/* INTRO */}
          <motion.div
            style={{ opacity: introOpacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-tandoor-red to-tandoor-orange bg-clip-text text-transparent">
              {productType === "steel"
                ? "Stainless Steel Tandoor"
                : "Traditional Clay Tandoor"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Premium Quality | Authentic Taste
            </p>
          </motion.div>

          {/* LEFT TEXT */}
          <motion.div
            style={{ opacity: leftTextOpacity }}
            className="absolute top-1/2 left-12 -translate-y-1/2 max-w-md"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              Precision Engineered
            </h2>
            <p className="text-gray-400">
              {productType === "steel"
                ? "Crafted from premium stainless steel for durability and hygiene"
                : "Handcrafted with authentic clay for traditional cooking"}
            </p>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            style={{ opacity: rightTextOpacity }}
            className="absolute top-1/2 right-12 -translate-y-1/2 max-w-md text-right"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              Superior Heat Retention
            </h2>
            <p className="text-gray-400">
              Advanced insulation technology for consistent high temperatures
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            style={{ opacity: ctaOpacity }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Ready to Order?
            </h2>

            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-tandoor-red to-tandoor-orange px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-tandoor-orange/50 transition-all pointer-events-auto"
            >
              Contact Us Today
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}