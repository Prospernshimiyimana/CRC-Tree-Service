"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const contactInfo = [
  {
    icon: Phone,
    title: "Call CRC Tree Service",
    content: "+1 (517) 715-7367",
    link: "tel:+15177157367",
    linkText: "Call Now",
    external: false,
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "chavezramos340@gmail.com",
    link: "mailto:chavezramos340@gmail.com",
    linkText: "Send Email",
    external: false,
  },
  {
    icon: MapPin,
    title: "Service Area",
    content:
      "Proudly serving customers throughout Michigan with safe, professional tree care services.",
    link: "/contact#estimate-form",
    linkText: "Get a Free Estimate",
    external: false,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Sat: 7:00 AM - 7:00 PM\nSun: Emergency Only",
    link: "",
    linkText: "",
    external: false,
  },
];

const whyContactUs = [
  "Licensed & Insured",
  "Experienced Professionals",
  "Free Estimates",
  "Fast Response",
  "Professional Equipment",
  "Customer Satisfaction",
];

const faqs = [
  {
    question: "Why Choose CRC Tree Service?",
    answer:
      "At CRC Tree Service, we specialize in providing professional, reliable tree care to residential and commercial clients in Michigan and the surrounding areas. Our experienced team is dedicated to delivering exceptional service through safe, efficient, and precise workmanship. Whether you need tree trimming, full removals, stump grinding, or emergency storm response, our experts have the knowledge and equipment necessary to handle any job with confidence.\n\nAs a locally owned business, we understand the unique challenges Michigan's seasons can present, and we tailor our services to meet those demands. Our mission is simple: provide outstanding customer service and dependable results at a fair price. When you choose CRC Tree Service you're choosing a team that prioritizes your satisfaction, property safety, and the long-term health of your trees.",
  },
  {
    question: "Tree Trimming & Pruning",
    answer:
      "At CRC Tree Service, we provide expert tree trimming and pruning to help your trees stay healthy, safe, and well-shaped throughout the year. Regular trimming not only enhances the appearance of your landscape but also removes weak, overgrown, or damaged branches that could pose a risk during storms or high winds. We understand the right techniques and timing to promote strong, balanced growth and maintain the natural beauty of your trees.Whether you're looking to improve sunlight access, reduce hazards, or encourage healthier growth, our trimming and pruning services are tailored to meet your property’s needs. We work with both residential and commercial clients in Michigan and surrounding areas, always focusing on quality workmanship and customer satisfaction. With CRC Tree Service, your trees are in the hands of professionals who care about doing the job right",
  },
  {
    question: "Stump Grinding",
    answer:
      "At CRC Tree Service, we offer fast and reliable stump removal services to help you reclaim valuable space on your property. Whether you're dealing with an old, unsightly stump or one left after recent tree removal, our skilled team uses specialized equipment to safely grind stumps below the surface. We handle stumps of all sizes, leaving your yard clear, clean, and ready for new landscaping or construction projects.\n\nLeftover stumps can attract pests, create tripping hazards, and make lawn care difficult. Our experienced crew thoroughly grinds and removes these stumps, providing you with smooth, usable space. With CRC Tree Service, you can count on prompt, dependable stump removal completed quickly and with minimal disruption to your property.",
  },
  {
    question: "Tree Removals",
    answer:
      "We provide professional tree removal in  Michigan with over 10+ years experience. Removing trees safely is our specialty -  especially those that are 60 ft and at 36 inch diameter at the base or under, by using our bucket truck these trees will be handled quickly & safely.\n\nAs the leading company we have the capital to invest in the necessary equipment, which makes every job more efficient and affordable for you!\n\nAll crew members are properly trained with safety being the number one priority.\n\nThe owner, with over 10+ years experience, oversees all projects.\n\nWe have many satisfied customers & great reviews. If any concerns arise our crew members will address your needs and adjust to meet your requirements.\n\nWe strictly follow the state & national guidelines of safe tree removal.\n\nWe can also include stump removal as well,As the leading company we have the capital to invest in the necessary equipment, which makes every job more efficient and affordable for you!All crew members are properly trained with safety being the number one priority.The owner, with over 10+ years experience, oversees all projects.We have many satisfied customers & great reviews. If any concerns arise our crew members will address your needs and adjust to meet your requirements.We strictly follow the state & national guidelines of safe tree removal.We can also include stump removal as well."
  },
  {
    question: "24 - Hour Emergency Services",
    answer:
      "When unexpected storms or sudden tree damage threaten your property, CRC Tree Service provides reliable, responsive emergency tree services around the clock. Our experienced team understands how stressful and dangerous emergency tree situations can be—that's why we respond quickly, bringing the equipment and expertise needed to safely handle fallen trees, hazardous limbs, and other urgent tree-related problems. Day or night, our goal is to quickly restore safety to your property, minimizing further damage and stress.\n\nAt CRC Tree Service, we take pride in our rapid response times and our ability to manage even the most challenging emergency scenarios. From immediate hazard removal to thorough cleanup afterward, we ensure your property is left safe and secure. If you're faced with a tree emergency in Michigan or the surrounding areas, trust our team to deliver efficient, professional, and compassionate service when you need it most.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
    contactMethod: "phone",
    agreeToContact: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Map form data to API payload
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        service: formData.service,
        message: formData.message || undefined,
        preferredContact: formData.contactMethod,
      };

      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit estimate request');
      }

      // Success - reset form and show success message
      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        service: "",
        message: "",
        contactMethod: "phone",
        agreeToContact: false,
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* SEO Metadata */}
      <title>Contact CRC Tree Service | Free Tree Service Estimate</title>
      <meta
        name="description"
        content="Contact CRC Tree Service for professional tree removal, trimming, stump grinding, and emergency tree services. Request your free estimate today."
      />

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-[#042109]">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.04, opacity: 0.9 }}
            animate={{ scale: 1.08, opacity: 1 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/gallery%20tree%20copy.jpg"
              alt="Professional tree service"
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
              Contact CRC Tree Service
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
              className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Get Your Free Tree Service Estimate Today
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-100 sm:text-lg md:text-xl"
            >
              Need tree removal, trimming, stump grinding, or emergency tree
              service? Our experienced team is ready to help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="#estimate-form"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Request Free Estimate
              </Link>

              <a
                href="tel:+15177157367"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-200/40 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-emerald-100/60 hover:bg-white/10"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
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
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contact CRC Tree Service for all your tree care needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line mb-4">
                    {info.content}
                  </p>
                 {info.link && (
  <a
    href={info.link}
    target={info.external ? "_blank" : undefined}
    rel={info.external ? "noopener noreferrer" : undefined}
    className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700 transition"
  >
    {info.linkText}
    {info.external && <ExternalLink size={14} />}
  </a>
)}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FREE ESTIMATE FORM */}
      <section id="estimate-form" className="scroll-mt-24 py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Request Your Free Estimate
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-12 rounded-3xl shadow-xl border border-green-200"
          >
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Request Submitted!
                </h3>
                <p className="text-gray-600">
                  We'll contact you within 24 hours to discuss your tree service
                  needs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-green-900 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                      placeholder="John doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-green-900 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                      placeholder="(517) 715-7367"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-green-900 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold text-green-900 mb-2"
                    >
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                      placeholder="123 Main St, Lansing, MI"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-green-900 mb-2"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="tree-removal">Tree Removal</option>
                    <option value="tree-trimming">Tree Trimming & Pruning</option>
                    <option value="stump-grinding">Stump Grinding</option>
                    <option value="emergency">Emergency Tree Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-green-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition resize-none"
                    placeholder="Describe your tree service needs..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-green-900 mb-3">
                    Preferred Contact Method *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === "phone"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="text-gray-700">Phone</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === "email"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="text-gray-700">Email</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToContact"
                    name="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 mt-0.5 text-green-600 rounded"
                  />
                  <label
                    htmlFor="agreeToContact"
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    I agree to be contacted about my estimate request. *
                  </label>
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* WHY CONTACT US */}
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
              Why Choose CRC Tree Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional tree care you can trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyContactUs.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-center gap-4 border border-green-100"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-green-900">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our tree services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-green-50 transition"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-green-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-green-600" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
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
              Need Emergency Tree Service?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Call CRC Tree Service for fast help with storm damage and
              dangerous trees. Available 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15177157367"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-green-600 shadow-xl transition hover:-translate-y-0.5 hover:bg-gray-100"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>

              <Link
                href="#estimate-form"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/60 hover:bg-white/20"
              >
                Request Estimate
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
