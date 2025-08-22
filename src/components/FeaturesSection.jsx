"use client";

import { motion } from "framer-motion";
import { FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

export function FeaturesSection() {
  const features = [
    { icon: <FaShippingFast />, title: "Fast Delivery", desc: "Get your products delivered quickly and safely." },
    { icon: <FaShieldAlt />, title: "Secure Payments", desc: "Your transactions are safe and protected." },
    { icon: <FaHeadset />, title: "24/7 Support", desc: "We’re here to help whenever you need us." },
  ];

  return (
    <section className="bg-gray-50 dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12"
        >
          Why Choose ShopSmart
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
