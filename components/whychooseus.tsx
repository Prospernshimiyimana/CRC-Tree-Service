"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeCheck, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 leading-tight">
            Why Home Owners Trust CRC Tree Service
          </h2>

          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Safe, reliable, and professional tree care serving Michigan and surrounding communities, backed by years of experience and customer satisfaction.
          </p>

          {/* TRUST ITEMS */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
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
                <item.icon className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">{item.text}</span>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10">
            {[
              ["10+", "Years Experience"],
              ["50+", "Projects Completed"],
              ["100%", "Satisfaction"],
              ["24/7", "Emergency Service"],
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-3 sm:p-4 rounded-xl hover:shadow-md transition"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-green-800">
                  {s[0]}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">{s[1]}</p>
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
              className="mt-8 sm:mt-10 bg-orange-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-xl transition inline-block text-sm sm:text-base"
              aria-label="Get a free estimate"
            >
              Get Free Estimate
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group order-first md:order-last"
        >
          <video
            src="/videos/why choose us video copy.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="
              rounded-2xl shadow-xl
              transition duration-500
              group-hover:scale-105
              w-full h-auto
            "
          />

          {/* floating badge */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-green-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg">
            Trusted Local Experts
          </div>
        </motion.div>

      </div>
    </section>
  );
}