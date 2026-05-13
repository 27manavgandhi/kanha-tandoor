"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Ruler, Gauge, Thermometer, Weight, Sparkles, Flame, Users } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import CartPopup from "@/components/CartPopup";

interface SpecificationSectionProps {
  productType: "steel" | "clay" | "mild-steel-square";
}

export default function SpecificationSection({ productType }: SpecificationSectionProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const getSpecs = () => {
    switch (productType) {
      case "steel":
        return {
          dimensions: { height: "34-30 inches", diameter: "18 inches", weight: "45 kg" },
          material: "304 Grade Stainless Steel",
          capacity: "20-25 rotis per batch",
          temperature: "Up to 500°C",
          title: "Stainless Steel Tandoor",
          image: "/steel-tandoor-meas.png",
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
        };
      case "clay":
        return {
          dimensions: { height: "30-34 inches", diameter: "18 inches", weight: "60 kg" },
          material: "Premium Quality Clay",
          capacity: "25-30 rotis per batch",
          temperature: "Up to 550°C",
          title: "Clay Tandoor Classic",
          image: "/clay-tandoor-meas.png",
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
      case "mild-steel-square":
        return {
          dimensions: { height: "36 inches", size: "30 x 30 inches", weight: "225 kg" },
          material: "Mild Steel with SS Top",
          capacity: "200 rotis per hour",
          temperature: "Up to 250°C",
          title: "SS Top MS Body Tandoor",
          image: "/mild-steel-square-tandoor-meas.png",
          features: [
            "SS top cover with MS body construction",
            "Clay inner lining with insulation",
            "Square design for space efficiency",
            "4 wheels for easy mobility",
            "Dual fuel: Charcoal & Gas compatible",
            "Includes gas burner and MS hot plate",
            "1.5mm wall thickness for durability",
            "Perfect for restaurants, hotels & dhabas",
          ],
        };
    }
  };

  const specs = getSpecs();

  const getSpecItems = () => {
    const baseSpecs = [
      { icon: Thermometer, label: "Max Temp", value: specs.temperature },
      { icon: Weight, label: "Weight", value: specs.dimensions.weight },
    ];

    if (productType === "mild-steel-square") {
      return [
        { icon: Ruler, label: "Height", value: specs.dimensions.height },
        { icon: Gauge, label: "Size", value: specs.dimensions.size },
        ...baseSpecs,
        { icon: Users, label: "Capacity", value: specs.capacity },
        { icon: Flame, label: "Fuel Type", value: "Charcoal/Gas" },
      ];
    } else {
      return [
        { icon: Ruler, label: "Height", value: specs.dimensions.height },
        { icon: Gauge, label: "Diameter", value: specs.dimensions.diameter },
        ...baseSpecs,
      ];
    }
  };

  const specItems = getSpecItems();

  return (
    <>
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
                      {specs.title}
                    </CardItem>

                    <CardItem translateZ="60" as="p" className="text-gray-400 text-sm mb-6">
                      Hover to experience 3D interaction
                    </CardItem>
                  </div>

                  {/* BIG IMAGE */}
                  <CardItem translateZ="120" className="flex-1 w-full">
                    <div className="relative w-full h-full min-h-[400px]">
                      <Image
                        src={specs.image}
                        alt={`${specs.title}`}
                        fill
                        className="object-contain rounded-2xl group-hover/card:scale-105 transition-all duration-500"
                      />
                    </div>
                  </CardItem>

                  {/* CTA */}
                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => setIsCartOpen(true)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-bold hover:scale-105 active:scale-95 transition cursor-pointer"
                    >
                      Add to Cart →
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
              <div className={`grid ${productType === "mild-steel-square" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2"} gap-4 mb-8`}>
                {specItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="p-6 rounded-2xl border border-orange-500/30 hover:scale-105 transition bg-white/5 backdrop-blur">
                      <Icon className="w-8 h-8 text-orange-500 mb-3" />
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-xl md:text-2xl font-bold text-white">{item.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* Material Badge */}
              <div className="p-4 rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Material</p>
                    <p className="text-xl font-bold text-white">{specs.material}</p>
                  </div>
                  <Sparkles className="w-10 h-10 text-orange-500" />
                </div>
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

      {/* Cart Popup */}
      <CartPopup 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        productName={specs.title}
        productType={productType}
      />
    </>
  );
}