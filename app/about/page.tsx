"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, TrendingUp, Shield } from "lucide-react";
import GalleryCarousel from "@/components/GalleryCarousel";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const achievements = [
    { icon: Award, title: "GST Registered", desc: "07KOEPS5938R1ZO" },
    { icon: Users, title: "1000+ Customers", desc: "Across India" },
    { icon: TrendingUp, title: "Premium Quality", desc: "Certified Products" },
    { icon: Shield, title: "Warranty", desc: "1 Year Coverage" },
  ];

  const galleryImages = [
    "/images/gallery/Kanha Tandoor (11).jpeg",
    "/images/gallery/Kanha Tandoor (12).jpeg",
    "/images/gallery/Kanha Tandoor (13).jpeg",
    "/images/gallery/Kanha Tandoor (14).jpeg",
    "/images/gallery/Kanha Tandoor (15).jpeg",
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-tandoor-dark to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
              About Kanha Tandoor
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Crafting Excellence in Traditional & Modern Tandoor Manufacturing Since 2022
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded by <span className="text-tandoor-orange font-semibold">Om Shankar</span>, 
                  Kanha Tandoor Manufacture has been serving Delhi NCR with premium quality tandoors 
                  that blend traditional craftsmanship with modern engineering.
                </p>
                <p>
                  Located in Swroop Nagar, Delhi, our workshop is where passion meets precision. 
                  Every tandoor we create is a testament to our commitment to authentic Indian cooking traditions.
                </p>
                <p>
                  We specialize in both traditional clay tandoors and contemporary stainless steel models, 
                  catering to restaurants, hotels, and home kitchens across India. Our products are trusted 
                  by professional chefs and home cooks alike for their exceptional heat retention, durability, 
                  and authentic taste.
                </p>
              </div>
            </motion.div>

            {/* GST Certificate */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="glass-effect p-4 sm:p-6 rounded-2xl border-2 border-tandoor-orange/30 shadow-2xl shadow-tandoor-orange/20"
              >
                <div className="relative w-full h-64 sm:h-96 mb-4">
                  <Image
                    src="/images/certificates/gst-certificate.jpg"
                    alt="GST Certificate - Kanha Tandoor Manufacture"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">GST Registered Business</p>
                  <p className="text-lg sm:text-xl font-bold text-tandoor-orange">07KOEPS5938R1ZO</p>
                  <p className="text-xs text-gray-500 mt-2">Issued: 26/10/2023</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-4 sm:p-6 rounded-xl text-center hover:border-tandoor-orange/50 transition-all hover:scale-105"
              >
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-tandoor-orange mx-auto mb-3" />
                <h3 className="font-bold text-white mb-1 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 sm:py-20 bg-tandoor-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 gradient-text">
              Meet Our Founder
            </h2>
            <div className="glass-effect p-6 sm:p-8 rounded-2xl">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-tandoor-orange shadow-xl">
                <Image
                  src="/images/om-shankar.jpg"
                  alt="Om Shankar - Founder"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Om Shankar</h3>
              <p className="text-tandoor-orange mb-4 text-sm sm:text-base">Founder & Proprietor</p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                With years of experience in traditional Indian cooking equipment manufacturing, 
                Om Shankar founded Kanha Tandoor to bring authentic tandoors to every kitchen. 
                His dedication to quality and customer satisfaction has made Kanha Tandoor a 
                trusted name in Delhi NCR. Every product reflects his commitment to preserving 
                traditional cooking methods while embracing modern innovations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <GalleryCarousel productType="steel" images={galleryImages} />

      {/* CTA */}
      <CTASection />
    </main>
  );
}