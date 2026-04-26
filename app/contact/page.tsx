"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-24 bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-orange-500 via-transparent to-yellow-500" />

      {/* CONTENT */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-8"
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Let’s Talk 🔥
          </h1>

          <p className="text-gray-400 max-w-md">
            Have a question, order, or just want to say hi? Reach out anytime.
          </p>

          {/* Contact Cards */}
          <div className="grid gap-4">
            {[
              { icon: MapPin, text: "Gali No.8, Swroop Nagar, Delhi-110042" },
              { icon: Phone, text: "+91 8375894010" },
              { icon: Mail, text: "Omshankartandoor@gmail.com" },
              { icon: Clock, text: "9AM - 7PM" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 px-5 py-4 rounded-xl shadow-lg"
                >
                  <Icon className="text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="tel:+918375894010"
              className="px-6 py-3 rounded-xl bg-primary font-semibold hover:scale-105 active:scale-95 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918375894010"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-green-600 font-semibold hover:scale-105 active:scale-95 transition"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-8"
        >
          {/* FORM */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScIgpBoccNziYRYF2jhODfyFxsB6caf8zRMEmiD2rM7opI2gg/viewform?embedded=true"
              className="w-full h-[600px]"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </section>

      {/* FULL WIDTH MAP */}
      <div className="w-full px-6 pb-20">
        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Swroop+Nagar+Delhi&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-float" />
    </main>
  );
}