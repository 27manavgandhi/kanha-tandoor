"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center text-center"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Ready to Elevate Your Kitchen?
          </h2>
          <p className="mt-4 text-lg text-white/90 md:mt-6 md:text-xl lg:text-2xl">
            Join 500+ restaurants and hotels across India already cooking with Kanha Tandoor
          </p>
          
          <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-10 md:flex-row md:self-center md:gap-4">
            {/* Secondary Button - Learn More */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/20 hover:scale-105 active:scale-95 md:text-lg"
            >
              <span>Learn More</span>
            </Link>

            {/* Primary Button - Contact Us */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-95 md:text-lg"
            >
              <Phone className="h-5 w-5" />
              <span>Contact Us Now</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-10"
          >
            <p className="text-sm text-white/80 md:text-base">
              ✓ GST Registered • ✓ Pan India Delivery • ✓ Bulk Orders Welcome
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}