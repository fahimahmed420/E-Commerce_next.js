import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
}
