"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-14 items-center">

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
              w-full
              h-[280px]
              sm:h-[350px]
              md:h-auto
              object-cover
              rounded-2xl
              shadow-xl
              transition
              duration-500
              group-hover:scale-105
            "
          />


          {/* BADGE */}
          <div
            className="
              absolute
              bottom-3
              left-3
              sm:bottom-4
              sm:left-4
              bg-green-900
              text-white
              px-3
              sm:px-4
              py-1.5
              sm:py-2
              rounded-full
              text-xs
              sm:text-sm
              shadow-lg
            "
          >
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 leading-tight">
            About CRC Tree Service
          </h2>


          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            A trusted local tree care company dedicated to keeping properties
            safe, clean, and beautiful.
          </p>


          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            With over 10+ years of experience, we specialize in safe tree
            removal, trimming, stump grinding, and emergency storm response.
          </p>


          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            Our mission is simple: provide reliable, affordable, and safe tree
            services that protect your property and improve your landscape.
          </p>


          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 sm:mt-8"
          >

            <Link
              href="/about"
              className="
                inline-flex
                w-full
                sm:w-auto
                justify-center
                bg-orange-500
                text-white
                px-6
                py-3
                rounded-full
                hover:bg-orange-400
                transition
                shadow-md
                text-sm
                sm:text-base
              "
            >
              Read More →
            </Link>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}