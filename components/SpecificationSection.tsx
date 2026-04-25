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
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={productType === "steel" ? "/steel-tandoor-main.png" : "/clay-tandoor-main.png"}
                alt={`${productType} tandoor`}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-tandoor-red to-tandoor-orange bg-clip-text text-transparent">
              Technical Specifications
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <Ruler className="w-6 h-6 text-tandoor-orange mb-2" />
                <p className="text-sm text-gray-400">Height</p>
                <p className="text-xl font-bold text-white">{specs.dimensions.height}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <Gauge className="w-6 h-6 text-tandoor-orange mb-2" />
                <p className="text-sm text-gray-400">Diameter</p>
                <p className="text-xl font-bold text-white">{specs.dimensions.diameter}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <Thermometer className="w-6 h-6 text-tandoor-orange mb-2" />
                <p className="text-sm text-gray-400">Max Temp</p>
                <p className="text-xl font-bold text-white">{specs.temperature}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <Weight className="w-6 h-6 text-tandoor-orange mb-2" />
                <p className="text-sm text-gray-400">Weight</p>
                <p className="text-xl font-bold text-white">{specs.dimensions.weight}</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">Key Features</h3>
              <ul className="space-y-2">
                {specs.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-300">
                    <span className="text-tandoor-orange mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}