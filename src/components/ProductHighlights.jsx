export default function ProductHighlights() {
  const highlights = [
    { title: "Fast Delivery", description: "Get your products delivered quickly." },
    { title: "Best Prices", description: "We offer the most competitive prices." },
    { title: "Secure Payment", description: "Your payments are safe with us." },
    { title: "24/7 Support", description: "We are here to help anytime." },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Shop With Us</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, idx) => (
          <div key={idx} className="p-6 bg-white shadow rounded hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
