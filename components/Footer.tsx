import { Flame, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Flame className="w-8 h-8 text-tandoor-orange" />
              <div>
                <h3 className="text-xl font-bold gradient-text">
                  Kanha Tandoor
                </h3>
                <p className="text-xs text-gray-400">Manufacture</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Premium Clay & Stainless Steel Tandoor Manufacturers in Delhi NCR.
              GST Registered. Pan India Delivery.
            </p>
            <p className="text-gray-500 text-xs">
              GST: 07KOEPS5938R1ZO
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-tandoor-orange transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-tandoor-orange transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-tandoor-orange transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-tandoor-orange flex-shrink-0 mt-0.5" />
                <span>Gali No.8, Swroop Nagar, Delhi-110042</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-tandoor-orange" />
                <a href="tel:+918375894010" className="hover:text-tandoor-orange transition">
                  +91 8375894010
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-tandoor-orange" />
                <a href="tel:+919911858173" className="hover:text-tandoor-orange transition">
                  +91 9911858173
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-tandoor-orange" />
                <a href="mailto:Omshankartandoor@gmail.com" className="hover:text-tandoor-orange transition break-all">
                  Omshankartandoor@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kanha Tandoor Manufacture. All rights reserved.</p>
          <p className="mt-2">Proudly serving Delhi, Delhi NCR & Pan India</p>
        </div>
      </div>
    </footer>
  );
}