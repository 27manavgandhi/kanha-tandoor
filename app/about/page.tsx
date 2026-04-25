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
    "/images/gallery/workshop-1.jpg",
    "/images/gallery/workshop-2.jpg",
    "/images/gallery/team-1.jpg",
    "/images/gallery/products-1.jpg",
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tandoor-red to-tandoor-orange bg-clip-text text-transparent">
              About Khanha Tandoor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Crafting Excellence in Traditional & Modern Tandoor Manufacturing Since 2022
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded by <span className="text-tandoor-orange font-semibold">Om Shankar</span>, 
                  Khanha Tandoor Manufacture has been serving Delhi NCR with premium quality tandoors 
                  that blend traditional craftsmanship with modern engineering.
                </p>
                <p>
                  Located in Swroop Nagar, Delhi, our workshop is where passion meets precision. 
                  Every tandoor we create is a testament to our commitment to authentic Indian cooking traditions.
                </p>
                <p>
                  We specialize in both traditional clay tandoors and contemporary stainless steel models, 
                  catering to restaurants, hotels, and home kitchens across India.
                </p>
              </div>
            </motion.div>

            {/* GST Certificate */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border-2 border-tandoor-orange/30 shadow-2xl shadow-tandoor-orange/20">
                <div className="relative w-full h-96">
                  <Image
                    src="/images/certificates/gst-certificate.jpg"
                    alt="GST Certificate - Khanha Tandoor Manufacture"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-400">GST Registered Business</p>
                  <p className="text-lg font-bold text-tandoor-orange">07KOEPS5938R1ZO</p>
                  <p className="text-xs text-gray-500 mt-2">Issued: 26/10/2023</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:border-tandoor-orange/50 transition-all"
              >
                <item.icon className="w-10 h-10 text-tandoor-orange mx-auto mb-3" />
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-tandoor-red to-tandoor-orange bg-clip-text text-transparent">
              Meet Our Founder
            </h2>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-tandoor-orange">
                <Image
                  src="/images/om-shankar.jpg"
                  alt="Om Shankar - Founder"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Om Shankar</h3>
              <p className="text-tandoor-orange mb-4">Founder & Proprietor</p>
              <p className="text-gray-300">
                With years of experience in traditional Indian cooking equipment manufacturing, 
                Om Shankar founded Khanha Tandoor to bring authentic tandoors to every kitchen. 
                His dedication to quality and customer satisfaction has made Khanha Tandoor a 
                trusted name in Delhi NCR.
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