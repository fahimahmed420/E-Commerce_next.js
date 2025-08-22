async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, { cache: "no-store" });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p._id} className="border rounded-lg p-4 shadow hover:shadow-lg">
          <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">{p.name}</h2>
          <p className="text-gray-600">${p.price}</p>
          <p className="text-gray-500 text-sm mt-2">{p.description}</p>
        </div>
      ))}
    </div>
  );
}
