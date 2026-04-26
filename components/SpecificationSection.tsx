"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ruler, Gauge, Thermometer, Weight } from "lucide-react";

interface SpecificationSectionProps {
  productType: "steel" | "clay";
}

export default function SpecificationSection({ productType }: SpecificationSectionProps) {
  const specs = productType === "steel" ? {
    dimensions: { height: "36 inches", diameter: "18 inches", weight: "45 kg" },
    material: "304 Grade Stainless Steel",
    capacity: "20-25 rotis per batch",
    temperature: "Up to 500°C",
    features: [
      "Corrosion resistant outer shell",
      "Clay pot inner lining for authentic taste",
      "Thermal insulation layer",
      "Adjustable air vents",
      "Easy ash removal system",
      "Ergonomic handles"
    ]
  } : {
    dimensions: { height: "40 inches", diameter: "20 inches", weight: "60 kg" },
    material: "Premium Quality Clay",
    capacity: "25-30 rotis per batch",
    temperature: "Up to 550°C",
    features: [
      "Handcrafted authentic clay body",
      "Natural heat retention",
      "Thick clay walls for insulation",
      "Traditional charcoal base",
      "Reinforced metal bands",
      "Wide mouth opening"
    ]
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-tandoor-dark to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* Floating Image */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-square max-w-md mx-auto"
            >
              <Image
                src={productType === "steel" ? "/steel-tandoor-main.png" : "/clay-tandoor-main.png"}
                alt={`${productType} tandoor`}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Specifications */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 gradient-text">
              Technical Specifications
            </h2>

            {/* Dimensions Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="glass-effect p-4 rounded-lg hover:border-tandoor-orange/30 transition-all">
                <Ruler className="w-5 h-5 sm:w-6 sm:h-6 text-tandoor-orange mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">Height</p>
                <p className="text-lg sm:text-xl font-bold text-white">{specs.dimensions.height}</p>
              </div>
              <div className="glass-effect p-4 rounded-lg hover:border-tandoor-orange/30 transition-all">
                <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-tandoor-orange mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">Diameter</p>
                <p className="text-lg sm:text-xl font-bold text-white">{specs.dimensions.diameter}</p>
              </div>
              <div className="glass-effect p-4 rounded-lg hover:border-tandoor-orange/30 transition-all">
                <Thermometer className="w-5 h-5 sm:w-6 sm:h-6 text-tandoor-orange mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">Max Temp</p>
                <p className="text-lg sm:text-xl font-bold text-white">{specs.temperature}</p>
              </div>
              <div className="glass-effect p-4 rounded-lg hover:border-tandoor-orange/30 transition-all">
                <Weight className="w-5 h-5 sm:w-6 sm:h-6 text-tandoor-orange mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">Weight</p>
                <p className="text-lg sm:text-xl font-bold text-white">{specs.dimensions.weight}</p>
              </div>
            </div>

            {/* Features List */}
            <div className="glass-effect p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">Key Features</h3>
              <ul className="space-y-2">
                {specs.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2 text-gray-300 text-sm sm:text-base"
                  >
                    <span className="text-tandoor-orange mt-1 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}