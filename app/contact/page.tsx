"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tandoor-red to-tandoor-orange bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our tandoors? We're here to help!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-tandoor-orange/20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-tandoor-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-400">Gali No.8, Swroop Nagar</p>
                      <p className="text-gray-400">Delhi-110042</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-tandoor-orange/20 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-tandoor-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <a href="tel:+918375894010" className="text-gray-400 hover:text-tandoor-orange transition block">
                        +91 8375894010
                      </a>
                      <a href="tel:+919911858173" className="text-gray-400 hover:text-tandoor-orange transition block">
                        +91 9911858173
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-tandoor-orange/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-tandoor-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:Omshankartandoor@gmail.com" className="text-gray-400 hover:text-tandoor-orange transition">
                        Omshankartandoor@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-tandoor-orange/20 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-tandoor-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-gray-400">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                
                  href="tel:+918375894010"
                  className="flex-1 bg-gradient-to-r from-tandoor-red to-tandoor-orange px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-tandoor-orange/50 transition-all"
                >
                  Call Now
                </a>
                
                  href="https://wa.me/918375894010?text=Hello!%20I'm%20interested%20in%20Khanha%20Tandoor%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border-2 border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.999999999999!2d77.0899999!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzE0LjgiTiA3N8KwMDUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Send Us a Message</h2>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              {/* Google Form Embed - Replace with your actual form URL */}
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="YOUR_GOOGLE_FORM_URL_HERE"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                >
                  Loading form...
                </iframe>
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">
                Fill out the form above and we'll get back to you within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}