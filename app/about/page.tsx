"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, TrendingUp, Shield, Sparkles } from "lucide-react";
import GalleryCarousel from "@/components/GalleryCarousel";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const achievements = [
    { icon: Award, title: "GST Registered", desc: "07KOEPS5938R1ZO", color: "from-orange-500 to-red-500" },
    { icon: Users, title: "1000+ Customers", desc: "Across India", color: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, title: "Premium Quality", desc: "Certified Products", color: "from-green-500 to-emerald-500" },
    { icon: Shield, title: "1 Year Warranty", desc: "Full Coverage", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-black via-orange-950/10 to-black">
      
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 gradient-text">
              About Kanha Tandoor
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Crafting Excellence in Traditional & Modern Tandoor Manufacturing Since 2022
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Story with Owner Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center">
                <Sparkles className="w-8 h-8 text-orange-500 mr-3" />
                Our Story
              </h2>

              {/* Owner Image Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl border border-orange-500/30 hover:border-orange-500/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur-md opacity-50"></div>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-orange-500/50">
                      <Image
                        src="/images/om-shankar.jpg"
                        alt="Om Shankar - Founder of Kanha Tandoor"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 128px, 160px"
                        priority
                      />
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                      Om Shankar
                    </h3>
                    <p className="text-orange-400 font-semibold mb-1">Founder & Master Craftsman</p>
                    <p className="text-gray-400 text-sm">Established 2022</p>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p className="glass-effect p-6 rounded-2xl border border-orange-500/20">
                  Founded by <span className="text-orange-500 font-bold">Om Shankar</span>, 
                  Kanha Tandoor Manufacture has been serving Delhi NCR with premium quality tandoors 
                  that blend traditional craftsmanship with modern engineering excellence.
                </p>

                <p className="glass-effect p-6 rounded-2xl border border-orange-500/20">
                  Located in Swroop Nagar, Delhi, our workshop is where passion meets precision. 
                  Every tandoor we create is a testament to our commitment to authentic Indian cooking traditions 
                  and culinary heritage.
                </p>

                <p className="glass-effect p-6 rounded-2xl border border-orange-500/20">
                  We specialize in both traditional clay tandoors and contemporary stainless steel models, 
                  catering to restaurants, hotels, catering services, and home kitchens across India. 
                  Our products are trusted by professional chefs and home cooks alike for their exceptional 
                  heat retention, durability, and authentic taste.
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
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-effect p-6 sm:p-8 rounded-3xl border-2 border-orange-500/40 shadow-2xl shadow-orange-500/20"
              >
                <div className="mb-4 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-500 mr-2" />
                    GST Certificate
                  </h3>
                  <p className="text-gray-400 text-sm">Government of India Registered</p>
                </div>

                <div className="relative w-full h-[500px] sm:h-[600px] mb-6 rounded-2xl overflow-hidden border-2 border-orange-500/30">
                  <Image
                    src="/images/certificates/gst-certificate.jpg"
                    alt="GST Certificate - Kanha Tandoor Manufacture"
                    fill
                    className="object-contain bg-white p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="text-center glass-effect p-4 rounded-xl">
                  <p className="text-sm text-gray-400 mb-1">GST Registration Number</p>
                  <p className="text-xl sm:text-2xl font-bold gradient-text">07KOEPS5938R1ZO</p>
                  <p className="text-xs text-gray-500 mt-2">Issued: 26th October 2023</p>
                  <p className="text-xs text-gray-500">Jurisdiction: Ward 67, Delhi</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 sm:p-8 rounded-2xl border border-orange-500/30 text-center hover:border-orange-500/60 transition-all group hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} p-4`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Gallery */}
      <GalleryCarousel productType="steel" />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
