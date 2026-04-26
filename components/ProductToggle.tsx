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
      className="fixed left-1/2 -translate-x-1/2 bottom-24 sm:bottom-32 z-40 glass-effect px-4 sm:px-6 py-3 rounded-full hover:bg-white/20 transition-all group shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center space-x-2 sm:space-x-3">
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-tandoor-orange" />
        <span className="font-medium text-sm sm:text-base text-white">
          Switch to {currentProduct === "steel" ? "Clay" : "Steel"} Tandoor
        </span>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-tandoor-orange" />
      </div>
    </motion.button>
  );
}