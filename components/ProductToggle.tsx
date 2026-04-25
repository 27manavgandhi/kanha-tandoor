"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductToggleProps {
  currentProduct: "steel" | "clay";
  onToggle: () => void;
}

export default function ProductToggle({ currentProduct, onToggle }: ProductToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed left-1/2 -translate-x-1/2 bottom-32 z-40 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center space-x-3">
        <ChevronLeft className="w-5 h-5 text-tandoor-orange" />
        <span className="font-medium">
          Switch to {currentProduct === "steel" ? "Clay" : "Steel"} Tandoor
        </span>
        <ChevronRight className="w-5 h-5 text-tandoor-orange" />
      </div>
    </motion.button>
  );
}