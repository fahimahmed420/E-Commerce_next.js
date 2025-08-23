"use client";
import { useEffect, useState } from "react";

export default function MyProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "", image: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleUpdate(e) {
    e.preventDefault();
    await fetch(`/api/products/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setEditId(null);
    setForm({ name: "", description: "", price: "", image: "" });
    fetchProducts();
  }

  async function handleDelete(id) {
    if (!confirm("Delete this product?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Products</h1>

      {editId && (
        <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-4 mb-6 max-w-xl">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 rounded" />
          <input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="border p-2 rounded" />
          <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="border p-2 rounded col-span-2" />
          <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded col-span-2" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded col-span-2">
            Update Product
          </button>
        </form>
      )}

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td className="border p-2"><img src={p.image} alt={p.name} className="w-12 h-12 object-cover" /></td>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">${p.price}</td>
              <td className="border p-2 space-x-2">
                <button onClick={() => { setEditId(p._id); setForm(p); }} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(p._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
