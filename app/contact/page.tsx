"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 bg-black text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Contact Us</h1>

            <div className="space-y-4">
              <p><MapPin /> Delhi</p>
              <p><Phone /> +91 8375894010</p>
              <p><Mail /> Omshankartandoor@gmail.com</p>
              <p><Clock /> 9AM - 7PM</p>
            </div>

            {/* ✅ FIXED */}
            <div className="flex gap-4">
              <a href="tel:+918375894010" className="bg-orange-500 px-4 py-2 rounded">
                Call
              </a>

              <a
                href="https://wa.me/918375894010"
                target="_blank"
                className="bg-green-600 px-4 py-2 rounded"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] bg-white/10 rounded-xl"></div>
        </div>
      </section>
    </main>
  );
}