"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ruler, Gauge, Thermometer, Weight, Sparkles } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface SpecificationSectionProps {
  productType: "steel" | "clay";
}

export default function SpecificationSection({ productType }: SpecificationSectionProps) {
  const specs =
    productType === "steel"
      ? {
          dimensions: { height: "34-30 inches", diameter: "18 inches", weight: "45 kg" },
          material: "304 Grade Stainless Steel",
          capacity: "20-25 rotis per batch",
          temperature: "Up to 500°C",
          features: [
            "Corrosion resistant outer shell",
            "Clay pot inner lining for authentic taste",
            "Multi-layer thermal insulation",
            "Adjustable air vents for temperature control",
            "Easy ash removal system",
            "Ergonomic cool-touch handles",
            "Powder-coated exterior finish",
            "Professional grade construction",
          ],
        }
      : {
          dimensions: { height: "30-34 inches", diameter: "18 inches", weight: "60 kg" },
          material: "Premium Quality Clay",
          capacity: "25-30 rotis per batch",
          temperature: "Up to 550°C",
          features: [
            "100% handcrafted authentic clay body",
            "Natural superior heat retention",
            "Thick clay walls for perfect insulation",
            "Traditional charcoal base design",
            "Reinforced metal bands for durability",
            "Wide mouth opening for easy access",
            "Traditional tandoor taste guaranteed",
            "Environmentally friendly cooking",
          ],
        };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-black via-orange-950/10 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Precision-engineered for professional performance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* 3D CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            <CardContainer className="w-full h-full">
              <CardBody className="flex flex-col justify-between w-full h-full min-h-[600px] rounded-3xl p-8 border border-orange-500/30 bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-orange-500/20">

                {/* Title */}
                <div>
                  <CardItem translateZ="50" className="text-2xl font-bold text-white mb-2">
                    <Sparkles className="inline w-6 h-6 text-orange-500 mr-2" />
                    {productType === "steel" ? "Steel Tandoor Pro" : "Clay Tandoor Classic"}
                  </CardItem>

                  <CardItem translateZ="60" as="p" className="text-gray-400 text-sm mb-6">
                    Hover to experience 3D interaction
                  </CardItem>
                </div>

                {/* BIG IMAGE */}
                <CardItem translateZ="120" className="flex-1 w-full">
                  <div className="relative w-full h-full min-h-[400px]">
                    <Image
                      src={
                        productType === "steel"
                          ? "/steel-tandoor-meas.png"
                          : "/clay-tandoor-meas.png"
                      }
                      alt={`${productType} tandoor`}
                      fill
                      className="object-contain rounded-2xl group-hover/card:scale-105 transition-all duration-500"
                    />
                  </div>
                </CardItem>

                {/* CTA */}
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="/contact"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-bold hover:scale-105 active:scale-95 transition"
                  >
                    Order Now →
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white text-sm"
                  >
                    ₹ Best Price
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[ 
                { icon: Ruler, label: "Height", value: specs.dimensions.height },
                { icon: Gauge, label: "Diameter", value: specs.dimensions.diameter },
                { icon: Thermometer, label: "Max Temp", value: specs.temperature },
                { icon: Weight, label: "Weight", value: specs.dimensions.weight },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl border border-orange-500/30 hover:scale-105 transition bg-white/5 backdrop-blur">
                    <Icon className="w-8 h-8 text-orange-500 mb-3" />
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <div className="p-8 rounded-2xl border border-orange-500/30 bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <Sparkles className="w-6 h-6 text-orange-500 mr-3" />
                Key Features
              </h3>

              <ul className="space-y-3">
                {specs.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex space-x-3 text-gray-200"
                  >
                    <span className="text-orange-500">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}