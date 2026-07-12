"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/tree%202%20copy.jpg", alt: "Tree care background" },
  { src: "/images/tree%205%20copy.jpg", alt: "Professional arborist in forest" },
  { src: "/images/tree%206.jpg", alt: "Tree service landscape at dusk" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#042109] text-white">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) =>
            index === activeIndex ? (
              <motion.div
                key={`${slide.src}-${index}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-emerald-950/70" />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="mx-auto w-full max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex rounded-full border border-emerald-200/20 bg-emerald-900/40 px-4 py-2 text-sm uppercase tracking-[0.32em] text-emerald-100/90"
          >
            CRC Tree Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
            className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Professional Tree Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-100 sm:text-lg md:text-xl"
          >
            Proudly serving Michigan and surrounding communities with safe, reliable, and affordable tree removal, trimming, and emergency services.
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
              aria-label="Get a free estimate"
            >
              Get Free Estimate
            </Link>

            <a
              href="tel:+15177157367"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-200/40 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-emerald-100/60 hover:bg-white/10"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}