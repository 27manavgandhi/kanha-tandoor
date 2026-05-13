"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, CheckCircle, Loader2 } from "lucide-react";

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productType: string;
}

export default function CartPopup({ isOpen, onClose, productName, productType }: CartPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specifications: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  // Reset form when popup closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", specifications: "" });
        setShowSuccess(false);
        setError("");
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          product: productName,
          productType: productType,
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowSuccess(true);
        // Close popup after 5 seconds
        setTimeout(() => {
          onClose();
        }, 5000);
      } else {
        setError(data.error || "Failed to submit order. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      setError("An error occurred. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-3xl shadow-2xl shadow-orange-500/20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-4 left-full ml-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Success State */}
            {showSuccess ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Order Submitted!</h3>
                <p className="text-gray-300 mb-4">
                  Thank you for your interest in <span className="text-orange-500 font-semibold">{productName}</span>
                </p>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
                  <p className="text-white">
                    You will receive an email or call within <span className="font-bold">1-2 working days</span>
                  </p>
                </div>
                <p className="text-sm text-gray-400 mt-4">Closing in 5 seconds...</p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="p-6 border-b border-orange-500/30">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500">
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Add to Cart</h3>
                      <p className="text-sm text-gray-400">{productName}</p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="specifications" className="block text-sm font-medium text-gray-300 mb-2">
                      Specifications / Requirements
                    </label>
                    <textarea
                      id="specifications"
                      name="specifications"
                      value={formData.specifications}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold hover:scale-[1.02] active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Order"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}