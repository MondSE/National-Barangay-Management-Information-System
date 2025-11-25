"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-700 via-blue-800 to-red-700 text-white overflow-hidden">
      {/* 🇵🇭 Animated Flag Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Blue section */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-700 opacity-70"></div>
        {/* Red section */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-red-700 opacity-70 clip-triangle"></div>

        {/* Animated Sun */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute top-1/4 left-1/3 w-40 h-40 opacity-20"
        >
          <svg
            viewBox="0 0 512 512"
            fill="yellow"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 120a136 136 0 1 0 0 272 136 136 0 0 0 0-272zm0-120l20 100h-40l20-100zm0 512l-20-100h40l-20 100zm256-256l-100-20v40l100-20zM0 256l100 20v-40L0 256zm437.02 181.02l-71.02-71.02-14.14 28.28 85.16 42.74zm-362.04 0l71.02-71.02 14.14 28.28-85.16 42.74zM437.02 74.98l-85.16 42.74 14.14 28.28 71.02-71.02zm-362.04 0l85.16 42.74-14.14 28.28-71.02-71.02z" />
          </svg>
        </motion.div>

        {/* Animated Stars */}
        {[
          { top: "10%", left: "10%" },
          { top: "50%", left: "10%" },
          { top: "80%", left: "10%" },
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 30 + i * 10,
              ease: "linear",
            }}
            className="absolute w-8 h-8 opacity-30"
            style={{ top: pos.top, left: pos.left }}
          >
            <svg
              viewBox="0 0 512 512"
              fill="yellow"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 0l70 180h186l-150 110 56 182-162-110-162 110 56-182L0 180h186z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* NAVBAR */}
      <header className="z-50 fixed top-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-black">
            National Barangay<span className="text-yellow-300">MIS</span>
          </h1>
          <nav className="hidden sm:flex space-x-8 text-sm">
            <a
              href="#about"
              className="text-black hover:text-yellow-300 transition"
            >
              About
            </a>
            <a
              href="#features"
              className="text-black hover:text-yellow-300 transition"
            >
              Features
            </a>
            <Link
              href="/login"
              className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center flex-1 px-6 mt-24 sm:mt-32">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
        >
          Empowering Barangay Governance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-100 text-lg max-w-2xl mb-8"
        >
          National Barangay Management Information System (NBMIS) — a digital
          solution for managing residents, violations, and taxes with
          transparency and efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/login"
            className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 bg-white text-gray-800 py-24"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-700">
            About the System
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The Barangay Management Information System (BMIS) streamlines daily
            barangay operations by digitizing resident records, monitoring
            violations, and managing local taxes. It promotes transparency,
            accessibility, and efficient public service for every Filipino
            barangay.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 py-24"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12 text-blue-800">
            Key Features
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Resident Management",
                desc: "Add, edit, and view complete resident profiles including address, family, and personal info.",
              },
              {
                title: "Violation Tracking",
                desc: "Record complaints and monitor violation history for every individual.",
              },
              {
                title: "Tax & Dues Monitoring",
                desc: "Track taxes, contributions, and other barangay fees efficiently.",
              },
              {
                title: "Secure Login",
                desc: "Each resident or admin uses secure authentication credentials.",
              },
              {
                title: "Real-time Updates",
                desc: "Instantly reflect new data, payments, or violations across the system.",
              },
              {
                title: "Accessible Anywhere",
                desc: "Optimized for mobile, tablet, and desktop access 24/7.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 border border-gray-100"
              >
                <h4 className="text-xl font-semibold text-blue-700 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white text-center py-6 text-sm">
        <p>© {new Date().getFullYear()} Almondtuazon.</p>
      </footer>
    </main>
  );
}
