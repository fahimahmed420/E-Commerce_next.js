export default function Hero() {
  return (
    <section className="bg-blue-100 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ShopSmart</h1>
      <p className="text-lg mb-6">Discover amazing products and manage your shop easily.</p>
      <a
        href="/products"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Explore Products
      </a>
    </section>
  );
}
