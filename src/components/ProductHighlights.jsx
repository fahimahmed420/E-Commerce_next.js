"use client";
import { useEffect, useState } from "react";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHighlights() {
      try {
        const res = await fetch("/api/products/highlights");
        if (!res.ok) throw new Error("Failed to fetch highlights");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchHighlights();
  }, []);

  // Skeleton component
  const SkeletonCard = () => (
    <div className="bg-white border rounded-2xl shadow p-4 animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
      <div className="h-4 bg-gray-300 rounded mt-4 w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded mt-2 w-full"></div>
      <div className="h-3 bg-gray-300 rounded mt-2 w-2/3"></div>
      <div className="h-5 bg-gray-300 rounded mt-4 w-1/3"></div>
      <div className="h-9 bg-gray-300 rounded-xl mt-4 w-full"></div>
    </div>
  );

  return (
    <section className="bg-black">
      <div className="p-4 max-w-7xl mx-auto pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center">
          Product Highlights
        </h2>

        {loading ? (
          // Show skeletons while loading
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500">
            No featured products available
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white border rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-600 text-sm flex-1">
                  {product.description}
                </p>
                <p className="text-blue-600 font-bold mt-3">${product.price}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
