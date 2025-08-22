"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiHome, FiPlus, FiShoppingCart, FiLogOut, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { signOut } from "next-auth/react";

export default function DashboardSidebar({ user }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { label: "Dashboard Home", href: "/dashboard", icon: <FiHome /> },
    { label: "Add Product", href: "/dashboard/add-product", icon: <FiPlus /> },
    { label: "My Orders", href: "/dashboard/my-orders", icon: <FiShoppingCart /> },
  ];

  return (
    <aside
      className={`flex flex-col bg-white dark:bg-gray-800 shadow h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Collapse/Expand buttons */}
      <div className="flex justify-end p-3 ">
        {collapsed ? (
          <button
            onClick={() => setCollapsed(false)}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FiChevronRight size={20} />
          </button>
        ) : (
          <button
            onClick={() => setCollapsed(true)}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FiChevronLeft size={20} />
          </button>
        )}
      </div>

      {/* Links */}
      <nav className="flex-1 flex flex-col mt-4 gap-5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition ${
              pathname === link.href ? "bg-blue-200 dark:bg-blue-800 font-semibold" : ""
            }`}
          >
            <span className="text-lg">{link.icon}</span>
            {!collapsed && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout button at bottom */}
      <div className="mt-auto p-4">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 w-full rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition text-red-600 dark:text-red-400 px-4 py-2"
        >
          <FiLogOut className="text-lg" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
