export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Welcome to your Dashboard
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Manage your products, view orders, and check analytics.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 hover:scale-105 transition transform">
          <h3 className="font-semibold mb-2">Total Products</h3>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 hover:scale-105 transition transform">
          <h3 className="font-semibold mb-2">Orders</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 hover:scale-105 transition transform">
          <h3 className="font-semibold mb-2">Revenue</h3>
          <p className="text-2xl font-bold">$4,500</p>
        </div>
      </div>
    </div>
  );
}
