"use client";
import { useState } from "react";

export default function AddProductPage() {
  const [form, setForm] = useState({ name: "", description: "", price: "", image: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Product added successfully!");
      setForm({ name: "", description: "", price: "", image: "" });
    } else {
      alert("Failed to add product");
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 max-w-xl">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 rounded" />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="border p-2 rounded" />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="border p-2 rounded col-span-2" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded col-span-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded col-span-2">
          Add Product
        </button>
      </form>
    </div>
  );
}
