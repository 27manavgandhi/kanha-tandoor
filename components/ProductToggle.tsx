"use client";

import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

interface ProductToggleProps {
  currentProduct: "steel" | "clay";
  onToggle: () => void;
}

export default function ProductToggle({ currentProduct, onToggle }: ProductToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50"
    >
      <button
        onClick={onToggle}
        className="glass-effect px-8 py-4 rounded-full border-2 border-orange-500/50 hover:border-orange-500 transition-all group hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/20"
      >
        <div className="flex items-center space-x-3">
          <ArrowLeftRight className="w-5 h-5 text-orange-500 group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-bold text-white text-lg">
            Switch to {currentProduct === "steel" ? "Clay" : "Steel"} Tandoor
          </span>
        </div>
      </button>
    </motion.div>
  );
}