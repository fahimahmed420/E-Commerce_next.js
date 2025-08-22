"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";

export function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-black min-h-screen flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8">
            ShopSmart brings you high-quality products at the best prices. Explore our catalog
            and enjoy a smarter shopping experience.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              href="/products"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Browse Products
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Lottie */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Lottie
            path="/Online-shopping.json"
            loop={true}
            autoplay={true}
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
