"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    location: "Lansing, MI",
    rating: 5,
    review:
      "CRC Tree Service did an excellent job removing a large tree from our property. The team was professional, safe, and cleaned everything perfectly.",
  },
  {
    name: "Sarah Williams",
    location: "East Lansing, MI",
    rating: 5,
    review:
      "Great service from start to finish. They provided a fair estimate and completed the tree trimming quickly and professionally.",
  },
  {
    name: "David Anderson",
    location: "Okemos, MI",
    rating: 5,
    review:
      "Reliable and experienced tree professionals. Highly recommend CRC Tree Service for any tree care needs.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Trusted by homeowners across Lansing and surrounding Michigan communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-green-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {testimonial.review}
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-semibold text-base sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
