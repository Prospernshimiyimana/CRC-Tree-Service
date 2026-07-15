"use client";

import { TreePine, Scissors, Axe, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Tree Removal",
    description:
      "Safe removal of hazardous or unwanted trees using professional equipment.",
    icon: TreePine,
    id: "tree-removal",
  },
  {
    title: "Tree Trimming & Pruning",
    description:
      "Improve tree health, shape, and safety with expert trimming services.",
    icon: Scissors,
    id: "tree-trimming",
  },
  {
    title: "Stump Grinding",
    description:
      "Complete stump removal to keep your landscape clean and usable.",
    icon: Axe,
    id: "stump-grinding",
  },
  {
    title: "Storm Damage Cleanup & Emergency Service",
    description:
      "24/7 rapid response for storm damage and urgent tree situations.",
    icon: Zap,
    id: "emergency-service",
  },
];

export default function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900">
            Our Tree Care Services
          </h2>

          <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            From routine maintenance to emergency tree removal, our experienced
            team provides reliable solutions.
          </p>
        </motion.div>


        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
            >

              {/* ICON */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4"
              >
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
              </motion.div>


              {/* TITLE */}
              <h3 className="text-lg sm:text-xl font-semibold">
                {service.title}
              </h3>


              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {service.description}
              </p>


              {/* LINKS */}
              {service.id === "emergency-service" ? (
                <div className="mt-4 flex flex-col gap-2">

                  <a
                    href="tel:+15177157367"
                    className="text-orange-500 font-medium flex items-center gap-1 hover:text-orange-600 transition"
                  >
                    Call Now
                    <ArrowRight size={16} />
                  </a>

                  <Link
                    href={`/services#${service.id}`}
                    className="text-orange-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>

                </div>
              ) : (
                <Link
                  href={`/services#${service.id}`}
                  className="mt-4 text-orange-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              )}

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}