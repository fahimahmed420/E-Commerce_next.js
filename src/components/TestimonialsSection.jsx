"use client";

import { motion } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    { name: "Alice Johnson", text: "ShopSmart makes shopping so easy and fast. I love it!", img: "https://i.pravatar.cc/150?img=32" },
    { name: "Michael Smith", text: "Excellent products and great customer service!", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Samantha Lee", text: "I always find what I need, highly recommend ShopSmart.", img: "https://i.pravatar.cc/150?img=45" },
  ];

  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12"
        >
          What Our Users Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 ring-2 ring-blue-500 dark:ring-blue-400"
              />
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">"{t.text}"</p>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
