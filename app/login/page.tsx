"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [idNumber, setIdNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!idNumber) {
      setError("Please enter your ID number.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idNumber }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
      } else {
        // Redirect based on ID prefix
        if (idNumber.startsWith("brgyadmin-")) {
          window.location.href = "/admin";
        } else if (idNumber.startsWith("brgyres-")) {
          window.location.href = "/resident/dashboard";
        } else {
          setError("Invalid ID format");
        }
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-3 text-blue-700">
          Barangay MIS Login
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Login using your Barangay-issued ID Number
        </p>

        {/* ID Login */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ID Number
            </label>
            <input
              type="text"
              placeholder="ex: brgyadmin-000001 or brgyres-000123"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Employee Option */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-500 mb-3">Are you a Barangay Employee?</p>
          <Link
            href="/login/employee"
            className="inline-block bg-gray-100 border border-gray-300 hover:bg-gray-200 px-5 py-2 rounded-lg text-gray-700 font-medium"
          >
            Employee Login
          </Link>
        </div>
      </div>
    </div>
  );
}
