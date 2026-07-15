"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  Clock,
  Check,
  Phone,
  ArrowRight,
  Heart,
  Zap,
  Target,
  Leaf,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "100%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Emergency Service" },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We prioritize safety for our customers, team, and properties on every project.",
  },
  {
    icon: Award,
    title: "Quality Work",
    description:
      "We deliver professional results using proven techniques and modern equipment.",
  },
  {
    icon: Users,
    title: "Customer Trust",
    description:
      "We build lasting relationships through honesty, reliability, and transparency.",
  },
  {
    icon: Heart,
    title: "Community Care",
    description:
      "We proudly serve Lansing and surrounding communities with dedication.",
  },
];

const whyChooseUs = [
  "Licensed & Insured",
  "Experienced Professionals",
  "Modern Equipment",
  "Fast Emergency Response",
  "Transparent Pricing",
  "Customer Satisfaction",
];

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Contact us for a no-obligation consultation and quote.",
  },
  {
    number: "02",
    title: "Property Assessment",
    description: "Our experts evaluate your trees and property needs.",
  },
  {
    number: "03",
    title: "Professional Tree Service",
    description: "Safe, efficient execution by our trained team.",
  },
  {
    number: "04",
    title: "Complete Cleanup",
    description: "Thorough debris removal and site restoration.",
  },
];

const serviceAreas = [
  "Lansing",
  "East Lansing",
  "Okemos",
  "Holt",
  "Haslett",
  "Mason",
  "DeWitt",
  "Grand Ledge",
  "Williamston",
  "Delta Township",
  "Waverly",
  "Meridian Township",
];

export default function AboutPage() {
  return (
    <>
      {/* SEO Metadata */}
      <title>About CRC Tree Service | Professional Tree Care Experts in Michigan</title>
      <meta
        name="description"
        content="Learn about CRC Tree Service, a trusted local tree care company providing professional tree removal, trimming, stump grinding, and emergency services."
      />

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-[#042109]">
        <div className="absolute inset-0">
          <Image
            src="/images/tree removal 4 copy.avif"
            alt="Professional tree service team at work"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/85 via-emerald-950/75 to-emerald-950/90" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex rounded-full border border-emerald-200/20 bg-emerald-900/40 px-4 py-2 text-sm uppercase tracking-[0.32em] text-emerald-100/90"
            >
              About CRC Tree Service
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
              className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Trusted Tree Care Professionals Serving Michigan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-100 sm:text-lg md:text-xl"
            >
              We provide safe, reliable, and professional tree services that help
              home owners and businesses protect and improve their properties.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/contact#estimate-form"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Get Free Estimate
              </Link>

              <Link
                href="/contact#estimate-form"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-200/40 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-emerald-100/60 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <video
                  src="/videos/tree%20video.mp4"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At CRC Tree Service, we are dedicated to providing
                professional tree care solutions with a focus on safety,
                quality, and customer satisfaction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our experienced team specializes in tree removal, trimming, stump
                grinding, and emergency tree services. Every project is completed
                with attention to detail and respect for our customers' properties.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                For over 10+ years, we've been proudly serving customers throughout Michigan with professional tree care services, building a reputation for reliability, professionalism, and exceptional results.
              </p>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-500/20"
              >
                Read More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900">
              Our Numbers Speak for Themselves
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center border border-green-200"
              >
                <div className="text-5xl font-bold text-green-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200/40 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-4">
              <MapPin size={16} />
              Service Areas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Proudly Serving Michigan & Surrounding Communities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CRC Tree Service proudly provides professional tree removal, tree
              trimming, stump grinding, and emergency tree services throughout
              Lansing and surrounding Michigan communities.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg hover:border-green-500 border-2 border-transparent transition-all duration-300 flex items-center gap-3 cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md"
                >
                  <MapPin size={18} className="text-white" />
                </motion.div>
                <span className="font-semibold text-green-900">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-24 bg-gradient-to-b from-green-900 to-green-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Mission & Values
            </h2>
            <p className="text-emerald-200 max-w-2xl mx-auto">
              Our mission is to provide safe, dependable, and professional tree
              care while protecting our customers' properties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30"
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-emerald-200 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900">
              Why Home Owners Choose CRC Tree Service
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-start gap-4 border border-green-100"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-green-900">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900">
              How We Work
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our straightforward process ensures quality results every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/30 group-hover:scale-110 transition duration-300">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent -translate-x-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY COMMITMENT */}
      <section className="py-24 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Safety Is Our Priority
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team follows professional safety practices to ensure every
                project is completed responsibly and efficiently. We maintain
                the highest standards of safety for our customers, our team,
                and your property.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-green-900">Licensed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-green-900">Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-green-900">
                    Professional Equipment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-green-900">
                    Trained Team
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-green-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-2xl">
                    <Leaf className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-green-900">Eco-Friendly</h4>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-2xl">
                    <Zap className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-green-900">Efficient</h4>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-2xl">
                    <Target className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-green-900">Precise</h4>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-2xl">
                    <Clock className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-green-900">Timely</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />

      
    </>
  );
}
