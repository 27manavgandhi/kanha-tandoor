"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-black via-orange-950/10 to-black pt-24">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute left-10 top-10 h-64 w-64 md:h-96 md:w-96"
        >
          <Image
            src="/steel-tandoor-main.png"
            alt="Steel Tandoor"
            fill
            priority
            className="object-contain blur-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-10 right-10 h-64 w-64 md:h-96 md:w-96"
        >
          <Image
            src="/clay-tandoor-main.png"
            alt="Clay Tandoor"
            fill
            priority
            className="object-contain blur-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 md:h-96 md:w-96"
        >
          <Image
            src="/mild-steel-square-main.png"
            alt="Mild Steel Square Tandoor"
            fill
            priority
            className="object-contain blur-sm"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl gradient-text drop-shadow-2xl">
            Premium Tandoor Makers
          </h1>

          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            Authentic Clay, Stainless Steel & Mild Steel Square Tandoors
            for Restaurants, Hotels, Caterers, and Home Kitchens.
          </p>
        </motion.div>

        {/* Product Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          <span className="glass-effect rounded-full border border-orange-500/30 px-5 py-2 text-sm font-medium">
            🔥 Clay Tandoor
          </span>
          <span className="glass-effect rounded-full border border-orange-500/30 px-5 py-2 text-sm font-medium">
            ⚡ Stainless Steel
          </span>
          <span className="glass-effect rounded-full border border-orange-500/30 px-5 py-2 text-sm font-medium">
            🏗️ Mild Steel Square
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="/contact"
            className="rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-4 text-lg font-semibold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 active:scale-95"
          >
            Get Quote
          </a>

          <a
            href="tel:+918375894010"
            className="glass-effect rounded-full px-10 py-4 text-lg font-semibold transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
          >
            Call: +91 8375894010
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8"
        >
          <div>
            <div className="text-4xl font-bold gradient-text">1000+</div>
            <div className="mt-2 text-sm text-gray-400">
              Happy Customers
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold gradient-text">5+</div>
            <div className="mt-2 text-sm text-gray-400">
              Years Experience
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold gradient-text">200+</div>
            <div className="mt-2 text-sm text-gray-400">
              Roti Per Hour
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold gradient-text">100%</div>
            <div className="mt-2 text-sm text-gray-400">
              Quality Assured
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-5 text-sm text-gray-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            <span>Charcoal & Gas Compatible</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            <span>4 Wheels Mobility</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            <span>Premium Clay Insulation</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            <span>Stainless Steel Top</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}