"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeCheck, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
            Why Home Owners Trust CRC Tree Service
          </h2>

          <p className="text-gray-600 mt-4">
            Safe, reliable, and professional tree care serving Michigan and surrounding communities, backed by years of experience and customer satisfaction.
          </p>

          {/* TRUST ITEMS */}
          <div className="mt-8 space-y-4">
            {[
              { icon: ShieldCheck, text: "Licensed & Insured" },
              { icon: Clock, text: "24/7 Emergency Response" },
              { icon: BadgeCheck, text: "10+ Years Experience" },
              { icon: ThumbsUp, text: "Free Estimates" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition"
              >
                <item.icon className="text-green-600" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              ["10+", "Years Experience"],
              ["50+", "Projects Completed"],
              ["100%", "Satisfaction"],
              ["24/7", "Emergency Service"],
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-4 rounded-xl hover:shadow-md transition"
              >
                <h3 className="text-2xl font-bold text-green-800">
                  {s[0]}
                </h3>
                <p className="text-gray-500 text-sm">{s[1]}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact#estimate-form"
              className="mt-10 bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition inline-block"
              aria-label="Get a free estimate"
            >
              Get Free Estimate
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <img
            src="/images/tree 8 copy.jpg"
            alt="Tree service crew"
            className="
              rounded-2xl shadow-xl
              transition duration-500
              group-hover:scale-105
            "
          />

          {/* floating badge */}
          <div className="absolute bottom-4 left-4 bg-green-900 text-white px-4 py-2 rounded-full text-sm shadow-lg">
            Trusted Local Experts
          </div>
        </motion.div>

      </div>
    </section>
  );
}