"use client";

import Link from "next/link";
import { useState } from "react";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";

export default function DashboardNavbar({ user, onSidebarToggle }) {
  const [dark, setDark] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDark(!dark);
    if (!dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <nav className="flex justify-between items-center bg-white dark:bg-gray-800 shadow px-4 py-3 md:px-6">
      {/* Left: Hamburger on mobile */}
      <div className="flex items-center gap-3">
        <Link className="px-4 py-2 bg-blue-700 hover:bg-blue-900 rounded-2xl" href={"/"}>Go Home</Link>
      </div>

      {/* Right: User info + dark mode */}
      <div className="flex items-center gap-4">
        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        {/* User info */}
        <div className="flex items-center gap-2">
          <span className="hidden md:block text-gray-700 dark:text-gray-300">
            {user.name}
          </span>
          <img
            src={user.image || "/default-avatar.png"}
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
