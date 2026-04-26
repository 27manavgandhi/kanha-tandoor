"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

interface ScrollSequenceProps {
  productType: "steel" | "clay";
  totalFrames: number;
}

export default function ScrollSequence({ productType, totalFrames }: ScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  // All useTransform hooks must be called at the top level
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const feature1Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const feature2Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  useEffect(() => {
    const loadImages = async () => {
      const imageArray: HTMLImageElement[] = [];
      let loadedCount = 0;

      const productName = productType === "steel" 
        ? "Kanha Stainless Steel Tandoor" 
        : "Kanha Clay Tandoor";

      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `/frames/${productType}/${productName} (${i}).jpg`;
        
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.floor((loadedCount / totalFrames) * 100));
        };
        
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress(Math.floor((loadedCount / totalFrames) * 100));
        };
        
        imageArray.push(img);
      }

      await Promise.all(
        imageArray.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }
            })
        )
      );

      setImages(imageArray);
      setImagesLoaded(true);
    };

    loadImages();
  }, [productType, totalFrames]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const index = Math.min(
        Math.max(0, Math.floor(frameIndex.get())),
        images.length - 1
      );
      const img = images[index];

      if (img && img.complete && img.naturalWidth > 0) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Fill canvas completely - no corners visible
        const scale = Math.max(
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

  if (!imagesLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="w-32 h-32 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold gradient-text">{loadingProgress}%</span>
            </div>
          </div>
          <p className="text-gray-300 text-xl font-semibold">Loading Tandoor Experience...</p>
          <p className="text-gray-500 text-sm mt-3">Preparing the magic for you</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 pointer-events-none">
          {/* Hero Title - 0-15% scroll */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
          >
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 gradient-text drop-shadow-2xl"
            >
              {productType === "steel" ? "Stainless Steel Tandoor" : "Traditional Clay Tandoor"}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl text-white font-semibold drop-shadow-lg"
            >
              Premium Quality • Authentic Taste • Trusted Nationwide
            </motion.p>
          </motion.div>

          {/* Feature 1 - 25-45% scroll */}
          <motion.div
            style={{ opacity: feature1Opacity }}
            className="absolute top-1/2 left-4 sm:left-12 md:left-20 -translate-y-1/2 max-w-xs sm:max-w-md"
          >
            <div className="glass-effect p-6 sm:p-8 rounded-3xl border-2 border-orange-500/30">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                ✨ Precision Engineered
              </h2>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                {productType === "steel"
                  ? "Crafted from premium 304-grade stainless steel for unmatched durability and hygiene standards"
                  : "Handcrafted with authentic clay using traditional methods perfected over generations"}
              </p>
            </div>
          </motion.div>

          {/* Feature 2 - 55-75% scroll */}
          <motion.div
            style={{ opacity: feature2Opacity }}
            className="absolute top-1/2 right-4 sm:right-12 md:right-20 -translate-y-1/2 max-w-xs sm:max-w-md text-right"
          >
            <div className="glass-effect p-6 sm:p-8 rounded-3xl border-2 border-orange-500/30">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                🔥 Superior Heat Retention
              </h2>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                Advanced multi-layer insulation technology maintains consistent high temperatures for perfect cooking
              </p>
            </div>
          </motion.div>

          {/* CTA - 85-100% scroll */}
          <motion.div
            style={{ opacity: ctaOpacity }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center w-full px-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Ready to Order?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all pointer-events-auto hover:scale-110 active:scale-95"
            >
              Get Your Tandoor Today →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}