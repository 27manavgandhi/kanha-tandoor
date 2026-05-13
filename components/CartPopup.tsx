"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, CheckCircle, Loader2, Plus, Minus, Package, MapPin } from "lucide-react";

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
    address: "",
    city: "",
    state: "",
    pincode: "",
    specifications: "",
  });
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  // Reset form when popup closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ 
          name: "", 
          phone: "", 
          email: "", 
          address: "", 
          city: "", 
          state: "", 
          pincode: "", 
          specifications: "" 
        });
        setQuantity(1);
        setShowSuccess(false);
        setError("");
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 99));
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 99) {
      setQuantity(value);
    }
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
          quantity,
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
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-3xl shadow-2xl shadow-orange-500/20 scrollbar-thin scrollbar-thumb-orange-500/50 scrollbar-track-transparent"
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
                <h3 className="text-3xl font-bold text-white mb-2">Order Submitted Successfully!</h3>
                <p className="text-gray-300 mb-2">
                  Thank you for your order of <span className="text-orange-500 font-semibold">{quantity}x {productName}</span>
                </p>
                <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/30 mt-6">
                  <Package className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                  <p className="text-white text-lg">
                    Our team will contact you within <span className="font-bold">1-2 working days</span>
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    via email or phone call to confirm your order
                  </p>
                </div>
                <p className="text-sm text-gray-400 mt-6">Closing in 5 seconds...</p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="p-6 border-b border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-transparent">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg shadow-orange-500/30">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Add to Cart</h3>
                        <p className="text-sm text-orange-400 font-medium">{productName}</p>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur border border-orange-500/30 rounded-xl p-2">
                      <button
                        type="button"
                        onClick={decrementQuantity}
                        className="w-8 h-8 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 transition flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        max="99"
                        className="w-12 text-center bg-transparent text-white font-bold text-lg focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={incrementQuantity}
                        className="w-8 h-8 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 transition flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      {error}
                    </motion.div>
                  )}

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                      Contact Information
                    </h4>

                    <div className="grid md:grid-cols-2 gap-4">
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
                          placeholder="10-digit mobile"
                        />
                      </div>
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
                  </div>

                  {/* Delivery Address */}
                  <div className="space-y-4 pt-4 border-t border-orange-500/20">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">2</div>
                      <MapPin className="w-5 h-5 text-orange-500" />
                      Delivery Address
                    </h4>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                        Street Address <span className="text-orange-500">*</span>
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none"
                        placeholder="House/Flat No., Building Name, Street"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                          City <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                          placeholder="City"
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-2">
                          State <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                          placeholder="State"
                        />
                      </div>

                      <div>
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-300 mb-2">
                          Pincode <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{6}"
                          title="Please enter a valid 6-digit pincode"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                          placeholder="Pincode"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4 pt-4 border-t border-orange-500/20">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">3</div>
                      Additional Details
                    </h4>

                    <div>
                      <label htmlFor="specifications" className="block text-sm font-medium text-gray-300 mb-2">
                        Special Requirements / Notes
                      </label>
                      <textarea
                        id="specifications"
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none"
                        placeholder="Any specific requirements, questions, or delivery instructions?"
                      />
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <p className="text-sm text-gray-400">Order Summary</p>
                        <p className="text-lg font-bold">{quantity}x {productName}</p>
                      </div>
                      <Package className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-lg hover:scale-[1.02] active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing Order...
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        Place Order
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By placing this order, you agree to our terms and conditions
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}