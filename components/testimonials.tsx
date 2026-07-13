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
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by homeowners across Lansing and surrounding Michigan communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-green-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {testimonial.review}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
