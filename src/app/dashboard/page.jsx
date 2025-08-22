"use client";
import { useEffect, useState } from "react";

export default function DashboardHome() {
  const [stats, setStats] = useState({ total: 0, avgPrice: 0 });

  useEffect(() => {
    fetch("/api/products/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-2 gap-6 max-w-lg">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl">Total Products</h2>
          <p className="text-4xl font-bold mt-2">{stats.total}</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl">Average Price</h2>
          <p className="text-4xl font-bold mt-2">${stats.avgPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
