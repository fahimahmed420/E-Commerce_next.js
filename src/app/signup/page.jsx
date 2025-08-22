"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(userCredential.user, { displayName: form.name });
      toast.success("Account created successfully!");
      router.push("/login");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-600 dark:text-blue-400">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-white dark:bg-gray-800 px-1 text-gray-500 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent transition"
              placeholder="Your Name"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-3 left-3 bg-white dark:bg-gray-800 px-1 text-gray-500 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent transition"
              placeholder="Your Email"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-3 left-3 bg-white dark:bg-gray-800 px-1 text-gray-500 text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent transition"
              placeholder="Your Password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 active:scale-95 transition transform shadow-lg"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
