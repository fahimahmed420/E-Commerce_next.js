"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Skeleton component
  const SkeletonCard = () => (
    <div className="bg-white border rounded-2xl shadow p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
      <div className="h-4 bg-gray-300 rounded mt-4 w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded mt-2 w-full"></div>
      <div className="h-3 bg-gray-300 rounded mt-2 w-2/3"></div>
      <div className="h-5 bg-gray-300 rounded mt-4 w-1/3"></div>
      <div className="h-9 bg-gray-300 rounded-xl mt-4 w-full"></div>
    </div>
  );

  return (
    <main className="p-4 min-h-screen max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>

      {loading ? (
        // Show skeletons while loading
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border rounded-2xl shadow hover:shadow-lg transition hover:scale-105 p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-lg text-black font-semibold mt-4">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm flex-1">
                {product.description}
              </p>
              <p className="text-blue-600 font-bold mt-3">${product.price}</p>
              <button
                onClick={() => router.push(`/products/${product._id}`)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
