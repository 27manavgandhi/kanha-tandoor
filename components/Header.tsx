"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Flame className="w-10 h-10 text-tandoor-orange" />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-tandoor-red to-tandoor-orange bg-clip-text text-transparent">
                Khanha Tandoor
              </span>
              <span className="text-xs text-gray-400 tracking-wider uppercase">
                Manufacture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <a
              href="tel:+918375894010"
              className="bg-gradient-to-r from-tandoor-red to-tandoor-orange px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-tandoor-orange/50 transition-all"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavLink>

            <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </MobileNavLink>

            <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

/* ================= NAV LINK ================= */
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-tandoor-red to-tandoor-orange group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}

/* ================= MOBILE NAV LINK ================= */
function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-gray-300 hover:text-white transition-colors py-2"
    >
      {children}
    </Link>
  );
}