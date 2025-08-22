"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCredentialLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);

    if (res.error) toast.error(res.error);
    else {
      toast.success("Logged in successfully!");
      router.push("/products");
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
        Welcome Back
      </h2>

      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg mb-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <FcGoogle className="mr-2" size={24} /> Continue with Google
      </button>

      <div className="flex items-center my-4">
        <hr className="flex-1 border-gray-300 dark:border-gray-600" />
        <span className="mx-2 text-gray-500 dark:text-gray-400">or</span>
        <hr className="flex-1 border-gray-300 dark:border-gray-600" />
      </div>

      <form onSubmit={handleCredentialLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500 dark:text-blue-400 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
