"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

interface ScrollSequenceProps {
  productType: "steel" | "clay" | "mild-steel-square";
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
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalFrames - 1]
  );

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const feature1Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45],
    [0, 1, 0]
  );
  const feature2Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75],
    [0, 1, 0]
  );
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  // ✅ FIXED IMAGE PATH CONFIG
  const productConfig = {
    steel: {
      folder: "steel",
      name: "Kanha Stainless Steel Tandoor",
    },
    clay: {
      folder: "clay",
      name: "Kanha Clay Tandoor",
    },
    "mild-steel-square": {
      folder: "mild steel square",
      name: "Kanha MS Square Tandoor", // ✅ FIXED
    },
  };

  useEffect(() => {
    const loadImages = async () => {
      const imageArray: HTMLImageElement[] = [];
      let loadedCount = 0;

      const config = productConfig[productType];

      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `/frames/${config.folder}/${config.name} (${i}).jpg`;

        img.onload = img.onerror = () => {
          loadedCount++;
          setLoadingProgress(
            Math.floor((loadedCount / totalFrames) * 100)
          );
        };

        imageArray.push(img);
      }

      await Promise.all(
        imageArray.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) resolve();
              else {
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
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const index = Math.min(
        Math.max(0, Math.floor(frameIndex.get())),
        images.length - 1
      );

      const img = images[index];
      if (!img || !img.complete) return;

      const { innerWidth, innerHeight } = window;

      canvas.width = innerWidth;
      canvas.height = innerHeight;

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        x,
        y,
        img.width * scale,
        img.height * scale
      );
    };

    const unsubscribe = frameIndex.on("change", render);

    window.addEventListener("resize", render);
    render();

    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
    };
  }, [frameIndex, images, imagesLoaded]);

  const content = {
    steel: {
      title: "Stainless Steel Tandoor",
      subtitle: "Premium Quality • Authentic Taste • Trusted Nationwide",
      feature1: {
        title: "✨ Precision Engineered",
        description:
          "Crafted from premium stainless steel for durability and hygiene",
      },
      feature2: {
        title: "🔥 Superior Heat Retention",
        description:
          "Maintains consistent high temperatures for perfect cooking",
      },
    },
    clay: {
      title: "Traditional Clay Tandoor",
      subtitle: "Authentic • Traditional • Timeless",
      feature1: {
        title: "✨ Handcrafted Excellence",
        description: "Made using traditional clay techniques",
      },
      feature2: {
        title: "🔥 Natural Heat Retention",
        description: "Perfect for authentic smoky flavor",
      },
    },
    "mild-steel-square": {
      title: "Mild Steel Square Tandoor",
      subtitle: "Durable • Efficient • Commercial Grade",
      feature1: {
        title: "✨ Heavy Duty Build",
        description: "Built for commercial kitchen performance",
      },
      feature2: {
        title: "🔥 Uniform Heating",
        description: "Even heat distribution across the surface",
      },
    },
  }[productType];

  if (!imagesLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <p className="text-white text-xl">
          Loading... {loadingProgress}%
        </p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full bg-black overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0" />

        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <h1 className="text-6xl font-bold text-white">
              {content.title}
            </h1>
            <p className="text-xl text-gray-300 mt-4">
              {content.subtitle}
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: ctaOpacity }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center"
          >
            <Link
              href="/contact"
              className="bg-orange-500 px-8 py-4 rounded-full text-lg font-bold pointer-events-auto"
            >
              Order Now →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}