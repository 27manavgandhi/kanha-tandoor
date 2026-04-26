"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-black via-orange-950/10 to-black pt-24">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-10 left-10 w-64 h-64 md:w-96 md:h-96"
        >
          <Image
            src="/steel-tandoor-main.png"
            alt="Steel Tandoor"
            fill
            className="object-contain blur-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-10 right-10 w-64 h-64 md:w-96 md:h-96"
        >
          <Image
            src="/clay-tandoor-main.png"
            alt="Clay Tandoor"
            fill
            className="object-contain blur-sm"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text drop-shadow-2xl mb-4">
            Premium Tandoor Makers
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Authentic Clay & Stainless Steel Tandoors for Restaurants, Hotels, and Home Kitchens
          </p>
        </motion.div>

        {/* ✅ FIXED BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a
            href="/contact"
            className="bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 active:scale-95"
          >
            Get Quote
          </a>

          <a
            href="tel:+918375894010"
            className="glass-effect px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            Call: +91 8375894010
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold gradient-text">1000+</div>
            <div className="text-sm text-gray-400 mt-2">Happy Customers</div>
          </div>

          <div>
            <div className="text-4xl font-bold gradient-text">5+</div>
            <div className="text-sm text-gray-400 mt-2">Years Experience</div>
          </div>

          <div>
            <div className="text-4xl font-bold gradient-text">100%</div>
            <div className="text-sm text-gray-400 mt-2">Quality Assured</div>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[5]" />
    </div>
  );
}