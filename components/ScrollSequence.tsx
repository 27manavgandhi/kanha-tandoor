"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

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

  // ✅ hooks at top
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/frames/${productType}/Kanha ${
        productType === "steel" ? "Stainless Steel" : "Clay"
      } Tandoor (${i}).jpg`;
      imgs.push(img);
    }

    setImages(imgs);
    setImagesLoaded(true);
  }, [productType, totalFrames]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const i = Math.floor(frameIndex.get());
      const img = images[i];
      if (!img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const unsub = frameIndex.on("change", render);
    render();

    return () => unsub();
  }, [frameIndex, images, imagesLoaded]);

  if (!imagesLoaded) {
    return <div className="h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        <div className="absolute inset-0 pointer-events-none">
          
          <motion.div style={{ opacity: heroOpacity }} className="absolute center">
            <h1 className="text-5xl text-white text-center">
              {productType === "steel" ? "Stainless Steel" : "Clay"} Tandoor
            </h1>
          </motion.div>

          <motion.div style={{ opacity: leftOpacity }} className="absolute left-10 top-1/2">
            Precision Engineered
          </motion.div>

          <motion.div style={{ opacity: rightOpacity }} className="absolute right-10 top-1/2">
            Superior Heat
          </motion.div>

          <motion.div style={{ opacity: ctaOpacity }} className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-3xl text-white mb-4">Ready to Order?</h2>

            {/* ✅ FIXED */}
            <Link
              href="/contact"
              className="bg-orange-500 px-6 py-3 rounded-full text-white"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}