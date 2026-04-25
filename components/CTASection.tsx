"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-tandoor-red to-tandoor-orange">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Elevate Your Kitchen?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get in touch with us today for bulk orders, custom sizing, and expert consultation
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-tandoor-red px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all group"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}