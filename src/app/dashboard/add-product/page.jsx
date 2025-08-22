"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description: desc, price }),
      });
      if (!res.ok) throw new Error("Failed to add product");

      toast.success("Product added successfully!");
      setName("");
      setDesc("");
      setPrice("");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="p-6 max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Add New Product</h2>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95">
          Add Product
        </button>
      </form>
    </div>
  );
}
