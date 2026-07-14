"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Star,
  MapPin,
  TreePine,
  Scissors,
  Axe,
  Zap,
  Check,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const projectStats = [
  { number: "50+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Emergency Response" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "removal", name: "Tree Removal" },
  { id: "trimming", name: "Tree Trimming & Pruning" },
  { id: "stump", name: "Stump Grinding" },
  { id: "emergency", name: "Emergency Service" },
];

const projects = [
  {
    id: 1,
    title: "Tree Removal",
    location: " Michigan",
    service: "Tree Removal",
    category: "removal",
    image: "/images/tree removal 3 copy.avif",
    description: "Safe removal of large tree with minimal property impact.",
  },
  {
    id: 2,
    title: "Tree Trimming",
    location: "East Lansing, MI",
    service: "Tree Trimming & Pruning",
    category: "trimming",
    image: "/images/tree trimming 1 copy.jpg",
    description: "Professional trimming to improve tree health and aesthetics.",
  },
  {
    id: 3,
    title: "Stump Grinding Project",
    location: "Okemos, MI",
    service: "Stump Grinding",
    category: "stump",
    image: "/images/tree grinding 1 copy.webp",
    description: "Complete stump removal and site restoration.",
  },
  {
    id: 4,
    title: "Storm Damage Cleanup",
    location: "Holt, MI",
    service: "Emergency Service",
    category: "emergency",
    image: "/images/tree emergency 1 copy.jpg",
    description: "Rapid response to storm damage with full cleanup.",
  },
  {
    id: 5,
    title: "Tree Removal",
    location: "Haslett, MI",
    service: "Tree Removal",
    category: "removal",
    image: "/images/tree removal 4 copy.avif",
    description: "Careful removal of hazardous pine tree near power lines.",
  },
  {
    id: 6,
    title: " Tree Prunning",
    location: "Dewitt, MI",
    service: "Tree Trimming",
    category: "trimming",
    image: "/images/tree prunning copy.avif",
    description: "Expert pruning for fruit production and tree health.",
  },
  {
    id: 7,
    title: "Multiple Stump Removal",
    location: "Grand Ledge, MI",
    service: "Stump Grinding",
    category: "stump",
    image: "/images/tree grinding 2 copy.jpg",
    description: "Efficient removal of multiple stumps for landscaping.",
  },
  {
    id: 8,
    title: "Fallen Tree Emergency",
    location: "Mason, MI",
    service: "Emergency Service",
    category: "emergency",
    image: "/images/tree emergency 3 copy.jpg",
    description: "24/7 emergency response for fallen tree blocking driveway.",
  },
  {
    id: 9,
    title: "Birch Tree Removal",
    location: "Lansing, MI",
    service: "Tree Removal",
    category: "removal",
    image: "/images/tree removal 5 copy.avif",
    description: "Precision removal of birch tree in residential yard.",
  },
  {
    id: 10,
    title: "Shrub Trimming Service",
    location: "East Lansing, MI",
    service: "Tree Trimming",
    category: "trimming",
    image: "/images/tree trimming 3 copy.jpg",
    description: "Complete shrub and hedge trimming for property enhancement.",
  },
  {
    id: 11,
    title: "Large Stump Grinding",
    location: "Okemos, MI",
    service: "Stump Grinding",
    category: "stump",
    image: "/images/tree grinding 3 copy.jpg",
    description: "Heavy-duty stump grinding for commercial property.",
  },
  {
    id: 12,
    title: "Wind Damage Repair",
    location: "Holt, MI",
    service: "Emergency Service",
    category: "emergency",
    image: "/images/tree emergency 4 copy.jpg",
    description: "Emergency tree removal after severe wind storm.",
  },
];

const spotlightProject = {
  title: "Complete Property Tree Care",
  location: "Michigan",
  services: ["Tree Removal", "Tree Trimming", "Stump Grinding"],
  timeCompleted: "March 2025",
  image: "/images/tree grinding 3 copy.jpg",
  outcome:
    "Transformed a residential property by removing hazardous trees, trimming remaining trees for health, and grinding all stumps. Customer was extremely satisfied with the complete transformation.",
};

const videos = [
  {
    id: 1,
    title: "Professional Tree Removal",
    description: "Watch our expert team safely remove large trees with precision and care.",
    src: "/videos/tree video.mp4",
  },
  {
    id: 2,
    title: "Tree Trimming & Prunning",
    description: "See how we trim and prune trees to promote healthy growth and beautiful aesthetics.",
    src: "/videos/tree video 1.mp4",
  },
  {
    id: 3,
    title: "Tree Trimming",
    description: "Our 24/7 emergency response team in action, handling urgent tree situations.",
    src: "/videos/tree video 2.mp4",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Jessica Kin",
    location: "Michigan",
    rating: 5,
    review:
      "CRC Tree Service did a great job cleaning up the backyard. They cut down all of the trees, grinder the stumps out, and laid down grass seed.",
    verified: true,
  },
  {
    id: 2,
    name: "Bob Jay",
    location: "Michigan",
    rating: 5,
    review:
      "CRC Tree Service was right on time. Worked with them before a couple years ago, was very pleased. Was very happy to use them again.",
    verified: true,
  },
  {
    id: 3,
    name: "David Alan",
    location: "Michigan",
    rating: 5,
    review:
      "Great people to work with at a tough point in my life came with compassion and speed. Did a wonderful job clean up was all I could've asked for.",
    verified: true,
  },
];

const serviceAreas = [
  "Lansing",
  "East Lansing",
  "Okemos",
  "Holt",
  "Haslett",
  "Grand Ledge",
  "Dewitt",
  "Mason",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "removal":
        return TreePine;
      case "trimming":
        return Scissors;
      case "stump":
        return Axe;
      case "emergency":
        return Zap;
      default:
        return TreePine;
    }
  };

  return (
    <>
      {/* SEO Metadata */}
      <title>Gallery | CRC Tree Service</title>
      <meta
        name="description"
        content="Browse completed tree removal, tree trimming, stump grinding, and emergency tree service projects completed by CRC Tree Service."
      />

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-[#042109]">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.04, opacity: 0.9 }}
            animate={{ scale: 1.08, opacity: 1 }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/tree emergency 3 copy.jpg"
              alt="Professional tree service projects"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
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
              Our Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
              className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              See Our Tree Care Projects
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-100 sm:text-lg md:text-xl"
            >
              Take a look at some of our recent tree removal, trimming, stump
              grinding, and emergency tree service projects completed throughout
              Michigan and surrounding communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/services"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                View Services
              </Link>

              <Link
                href="/contact#estimate-form"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-200/40 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-emerald-100/60 hover:bg-white/10"
              >
                Get Free Estimate
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT STATISTICS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
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

      {/* CATEGORY FILTERS */}
      <section className="py-12 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => {
              const Icon = getCategoryIcon(category.id);
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                      : "border border-green-200 bg-white text-gray-700 hover:bg-green-100"
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Our Completed Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our portfolio of successfully completed tree care
              projects.
            </p>
          </motion.div>

          <div className="columns-1 gap-6 sm:columns-2 xl:columns-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.01, boxShadow: "0 24px 70px -24px rgba(4,47,33,0.25)" }}
                className="group mb-6 break-inside-avoid overflow-hidden rounded-[24px] border border-emerald-100/80 bg-white shadow-[0_16px_40px_-20px_rgba(3,46,27,0.25)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-2 flex items-center gap-2 text-sm text-emerald-200">
                      <MapPin size={14} />
                      {project.location}
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-200">{project.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-400">
                      View Project <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                    {project.service}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-emerald-950">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-emerald-800/80">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Our Work in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our professional tree care team in action with these project videos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-emerald-100"
              >
                <div className="relative aspect-video bg-gray-900">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SPOTLIGHT */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Featured Project
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={spotlightProject.image}
                  alt={spotlightProject.title}
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-green-900 mb-4">
                {spotlightProject.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin size={18} />
                {spotlightProject.location}
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-green-900 mb-2">
                  Services Performed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {spotlightProject.services.map((service) => (
                    <span
                      key={service}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-green-900 mb-2">
                  Completed
                </h4>
                <p className="text-gray-600">{spotlightProject.timeCompleted}</p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-green-900 mb-2">Outcome</h4>
                <p className="text-gray-600 leading-relaxed">
                  {spotlightProject.outcome}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  Get Similar Service
                </Link>
                <Link
                  href="/contact#estimate-form"
                  className="inline-flex items-center justify-center rounded-full border border-green-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-green-600 transition hover:bg-green-50"
                >
                  Request Estimate
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS PREVIEW */}
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
              Read verified reviews from our satisfied customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {testimonial.review}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-green-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                      <Check size={14} />
                      Verified
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>

      

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Property?
            </h2>
            <p className="text-emerald-200 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need tree removal, trimming, stump grinding, or
              emergency service, our experienced team is ready to help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#estimate-form"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Get Free Estimate
              </Link>

              <a
                href="tel:+15177157367"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-200/40 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-emerald-100/60 hover:bg-white/10"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
