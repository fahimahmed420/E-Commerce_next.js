"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 dark:bg-black min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            About ShopSmart
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
            ShopSmart is your one-stop platform for discovering amazing products. We focus on 
            quality, convenience, and a seamless shopping experience for all our users.
          </p>
        </motion.section>

        {/* Our Mission */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our mission is to make shopping smarter and easier. We aim to connect users with 
            high-quality products and provide a seamless experience from browsing to purchase.
          </p>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Quality: Only the best products for our users.</li>
            <li>Trust: Transparency and reliability in all our services.</li>
            <li>Innovation: Continuously improving the shopping experience.</li>
            <li>User-centric: Our users come first in everything we do.</li>
          </ul>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Join Us Today
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sign up to explore our products and enjoy a smarter shopping experience!
          </p>
          <a
            href="/products"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors hover:scale-105 active:scale-95 inline-block"
          >
            Browse Products
          </a>
        </motion.section>

      </div>
    </main>
  );
}
