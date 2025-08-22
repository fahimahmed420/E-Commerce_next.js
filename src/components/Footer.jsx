"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 "
    >
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Copy */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            ShopSmart
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ShopSmart. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <motion.a
            whileHover={{ scale: 1.2, color: "#3b82f6" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="/products"
            className="hover:text-blue-500 dark:hover:text-blue-400"
          >
            Products
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#3b82f6" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="/about"
            className="hover:text-blue-500 dark:hover:text-blue-400"
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#3b82f6" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="/contact"
            className="hover:text-blue-500 dark:hover:text-blue-400"
          >
            Contact
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {socialIcons.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 15, color: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-600 dark:text-gray-400"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
