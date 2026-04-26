"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <Image
                  src="/images/l2.png"
                  alt="Kanha Tandoor Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,107,53,0.5)]"
                  priority
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold gradient-text">
                  Kanha Tandoor
                </h3>
                <p className="text-xs text-gray-400 tracking-widest uppercase">
                  Manufacture
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
              Premium Clay & Stainless Steel Tandoor Manufacturers in Delhi NCR.
              GST Registered. Pan India Delivery.
            </p>

            <p className="text-gray-500 text-xs">
              GST: 07KOEPS5938R1ZO
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">
              Contact Us
            </h4>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Gali No.8, Swroop Nagar, Delhi-110042</span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a
                  href="tel:+918375894010"
                  className="hover:text-orange-500 transition"
                >
                  +91 8375894010
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a
                  href="tel:+919911858173"
                  className="hover:text-orange-500 transition"
                >
                  +91 9911858173
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a
                  href="mailto:Omshankartandoor@gmail.com"
                  className="hover:text-orange-500 transition break-all"
                >
                  Omshankartandoor@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Kanha Tandoor Manufacture. All rights reserved.
          </p>
          <p className="mt-2">
            Proudly serving Delhi, Delhi NCR & Pan India
          </p>
        </div>

      </div>
    </footer>
  );
}