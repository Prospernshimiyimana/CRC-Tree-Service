"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <img
            src="/images/tree removal 5 copy.avif"
            alt="Tree service work"
            className="
              rounded-2xl shadow-xl
              transition duration-500
              group-hover:scale-105
            "
          />

          <div className="absolute bottom-4 left-4 bg-green-900 text-white px-4 py-2 rounded-full text-sm shadow-lg">
            Serving All of Michigan
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-900">
            About CRC Tree Service
          </h2>

          <p className="text-gray-600 mt-4">
            A trusted local tree care company dedicated to keeping properties safe, clean, and beautiful.
          </p>

          <p className="text-gray-600 mt-4">
            With over 10+ years of experience, we specialize in safe tree removal, trimming, stump grinding, and emergency storm response.
          </p>

          <p className="text-gray-600 mt-4">
            Our mission is simple: provide reliable, affordable, and safe tree services that protect your property and improve your landscape.
          </p>

          
          <Link
            href="/about"
            className="inline-block mt-4 bg-orange-500 text-white px-6 py-3 rounded-full hover:scale-105 transition shadow-md"
          >
            Read More →
          </Link>

        </motion.div>

      </div>
    </section>
  );
}