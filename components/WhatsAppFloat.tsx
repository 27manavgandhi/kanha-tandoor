"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappNumber = "918375894010";
  const message = encodeURIComponent("Hello! I'm interested in Khanha Tandoor products.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-7 h-7" />
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-green-500 px-4 py-2 rounded-lg whitespace-nowrap hidden group-hover:block"
      >
        Chat with us!
      </motion.span>
    </motion.a>
  );
}