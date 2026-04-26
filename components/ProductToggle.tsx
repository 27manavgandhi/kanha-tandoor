"use client";

import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

interface ProductToggleProps {
  currentProduct: "steel" | "clay" | "mild-steel-square";
  onToggle: () => void;
}

export default function ProductToggle({
  currentProduct,
  onToggle,
}: ProductToggleProps) {
  // Determine next product in rotation
  const getNextProduct = () => {
    switch (currentProduct) {
      case "steel":
        return "Clay";
      case "clay":
        return "SS Top MS Body";
      case "mild-steel-square":
        return "Steel";
      default:
        return "Clay";
    }
  };

  // Get display name for current product
  const getCurrentProductName = () => {
    switch (currentProduct) {
      case "steel":
        return "Stainless Steel";
      case "clay":
        return "Clay";
      case "mild-steel-square":
        return "SS Top MS Body";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-24 md:bottom-8 left-0 w-full flex justify-center z-50 px-4"
    >
      <div className="flex flex-col items-center gap-3">
        {/* Current Product Indicator */}
        <div className="glass-effect px-4 py-2 rounded-full border border-orange-500/30">
          <span className="text-xs md:text-sm text-gray-300">
            Viewing: <span className="font-bold gradient-text">{getCurrentProductName()}</span>
          </span>
        </div>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="glass-effect px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-orange-500/50 hover:border-orange-500 transition-all group hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/20 max-w-max"
        >
          <div className="flex items-center space-x-2 md:space-x-3">
            <ArrowLeftRight className="w-5 h-5 text-orange-500 group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-bold text-white text-sm md:text-lg">
              Switch to {getNextProduct()} Tandoor
            </span>
          </div>
        </button>

        {/* Product Dots Indicator */}
        <div className="flex gap-2">
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentProduct === "steel"
                ? "bg-orange-500 w-8"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentProduct === "clay"
                ? "bg-orange-500 w-8"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentProduct === "mild-steel-square"
                ? "bg-orange-500 w-8"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}