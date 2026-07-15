"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TreePine,
  Scissors,
  Axe,
  Zap,
  Check,
  ChevronDown,
  Phone,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/navbar";

const services = [
  {
    icon: TreePine,
    title: "Tree Removal",
    description: "Safe removal of hazardous, damaged, or unwanted trees while protecting your property.",
    id: "tree-removal",
  },
  {
    icon: Scissors,
    title: "Tree Trimming",
    description: "Improve tree health, appearance, and safety with professional trimming services.",
    id: "tree-trimming",
  },
  {
    icon: Axe,
    title: "Stump Grinding",
    description: "Remove unwanted stumps and restore your landscape with efficient grinding solutions.",
    id: "stump-grinding",
  },
  {
    icon: Zap,
    title: "Emergency Tree Service",
    description: "Fast response for storm damage, fallen trees, and urgent tree situations.",
    id: "emergency-service",
  },
];

const detailedServices = [
  {
    id: "tree-removal",
    title: "Professional Tree Removal",
    description:
      "Our expert team safely removes trees of any size while protecting your property and landscape. We use advanced equipment and techniques to ensure efficient, clean removal with minimal impact.",
    benefits: [
      "Licensed and insured professionals",
      "State-of-the-art equipment",
      "Complete debris removal",
      "Property protection guaranteed",
    ],
    image: "/images/tree removal 6 copy.avif",
  },
  {
    id: "tree-trimming",
    title: "Expert Tree Trimming & Pruning",
    description:
      "Enhance the health and beauty of your trees with our professional trimming services. Our certified arborists understand tree biology and use proper techniques to promote growth and prevent disease.",
    benefits: [
      "Improved tree health",
      "Enhanced curb appeal",
      "Storm damage prevention",
      "Expert arborist consultation",
    ],
    image: "/images/tree trimming 2 copy.jpg",
  },
  {
    id: "stump-grinding",
    title: "Stump Grinding & Removal",
    description:
      "Eliminate unsightly stumps and reclaim your outdoor space. Our powerful stump grinders can remove stumps of any size, leaving your yard smooth and ready for new landscaping or grass.",
    benefits: [
      "Complete stump removal",
      "Root system grinding",
      "Site restoration",
      "Same-day service available",
    ],
    image: "/images/tree grinding 2 copy.jpg",
  },
  {
    id: "emergency-service",
    title: "24/7 Emergency Tree Services",
    description:
      "When trees fall, we're here fast. Our emergency response team is available around the clock to handle dangerous situations and protect your property from further damage.",
    benefits: [
      "Rapid response time",
      "24/7 availability",
      "Storm damage cleanup",
      "Insurance claim assistance",
    ],
    image: "/images/tree emergency copy.jpg",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Free Estimate",
    description: "Contact us for a no-obligation assessment and quote.",
  },
  {
    number: "02",
    title: "Property Assessment",
    description: "Our experts evaluate your trees and property needs.",
  },
  {
    number: "03",
    title: "Professional Service",
    description: "Safe, efficient execution by our trained team.",
  },
  {
    number: "04",
    title: "Final Cleanup",
    description: "Complete debris removal and site restoration.",
  },
];

const trustFeatures = [
  "Licensed & Insured",
  "10+ Years Experience",
  "24/7 Emergency Response",
  "Customer Satisfaction Guaranteed",
];

const faqs = [
  {
    question: "How much does tree removal cost?",
    answer:
      "Tree removal costs vary based on tree size, location, accessibility, and complexity. We provide free, no-obligation estimates after assessing your specific situation. Our pricing is competitive and transparent with no hidden fees.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, CRC Tree Service  is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation coverage to protect both our team and your property throughout any tree service project.",
  },
  {
    question: "Do you offer emergency tree services?",
    answer:
      "Absolutely. We provide 24/7 emergency tree services for storm damage, fallen trees, and dangerous situations. Our rapid response team is available around the clock to handle urgent tree care needs.",
  },
  {
    question: "How quickly can you respond?",
    answer:
      "For emergency situations, we typically respond within 2-4 hours. For routine services, we can usually schedule your appointment within 1-3 business days depending on our current workload and your scheduling preferences.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer free, no-obligation estimates for all tree services. Our experts will assess your needs, provide recommendations, and give you a detailed quote with no pressure or commitment required.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* SEO Metadata */}
      <title>
        CRC Tree Service | Professional Tree Removal & Tree Care Services
      </title>
      <meta
        name="description"
        content="Professional tree removal, trimming, stump grinding, and emergency tree services in Lansing. Contact CRC Tree Service for a free estimate."
      />

      <Navbar />
{/* HERO SECTION */}
<section className="relative min-h-screen overflow-hidden bg-[#042109]">
  <div className="absolute inset-0">
    <Image
      src="/images/tree emergency 1 copy.jpg"
      alt="Professional tree service background"
      fill
      sizes="100vw"
      className="object-cover"
      priority
    />

    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/85 via-emerald-950/75 to-emerald-950/90" />
  </div>

  <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 py-20 sm:py-24">
    <div className="mx-auto max-w-5xl text-center">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="inline-flex rounded-full border border-emerald-200/20 bg-emerald-900/40 px-3 sm:px-4 py-2 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.32em] text-emerald-100/90"
      >
        Professional Tree Care Services
      </motion.div>


      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08 }}
        className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-semibold tracking-tight text-white"
      >
        Expert Tree Services You Can Trust
      </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.16 }}
        className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg md:text-xl leading-7 sm:leading-8 text-emerald-100"
      >
        Proudly serving Michigan and surrounding communities with safe,
        reliable, and affordable tree care solutions for homeowners and
        businesses.
      </motion.p>


      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.24 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
      >

        <Link
          href="/contact#estimate-form"
          className="w-full sm:w-auto inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-orange-500/20 transition hover:bg-orange-400"
        >
          Get Free Estimate
        </Link>


        <a
          href="tel:+15177157367"
          className="w-full sm:w-auto inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-200/40 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
        >
          Call Now
        </a>

      </motion.div>

    </div>
  </div>
</section>



{/* SERVICES GRID */}
<section className="py-16 sm:py-24 bg-gradient-to-b from-green-50 to-white">

<div className="max-w-6xl mx-auto px-4 sm:px-6">


<motion.div
 initial={{opacity:0,y:24}}
 whileInView={{opacity:1,y:0}}
 transition={{duration:0.6}}
 viewport={{once:true}}
 className="text-center mb-10 sm:mb-14"
>

<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900">
 Our Tree Care Services
</h2>


<p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
 From routine maintenance to emergency tree removal, our experienced team provides reliable solutions.
</p>


</motion.div>



<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

{services.map((service,index)=>(

<motion.div
key={service.title}
initial={{opacity:0,y:24}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.55,delay:index*0.1}}
viewport={{once:true}}
whileHover={{y:-8,scale:1.02}}

className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition group"
>


<motion.div
whileHover={{scale:1.1,rotate:5}}
className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4"
>

<service.icon className="w-6 h-6 text-green-700"/>

</motion.div>



<h3 className="text-lg sm:text-xl font-semibold">
{service.title}
</h3>


<p className="text-gray-600 text-sm mt-2 leading-6">
{service.description}
</p>



{service.id==="emergency-service" ? (

<div className="mt-4 flex flex-col gap-2">

<a
href="tel:+15177157367"
className="text-orange-500 font-medium flex items-center gap-1 hover:text-orange-600"
>
Call Now <ArrowRight size={16}/>
</a>


<Link
href={`/services#${service.id}`}
className="text-orange-500 font-medium flex items-center gap-1"
>
Read More <ArrowRight size={16}/>
</Link>


</div>

):(


<Link
href={`/services#${service.id}`}
className="mt-4 text-orange-500 font-medium flex items-center gap-1"
>
Read More <ArrowRight size={16}/>
</Link>


)}


</motion.div>


))}


</div>


</div>

</section>
{/* DETAILED SERVICE SECTIONS */}

{detailedServices.map((service, index) => (
<section
key={service.title}
id={service.id}
className={`scroll-mt-24 py-16 sm:py-24 ${
index % 2 === 0
? "bg-white"
: "bg-gradient-to-b from-green-50 to-white"
}`}
>

<div className="max-w-6xl mx-auto px-4 sm:px-6">

<div
className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center`}
>


<motion.div
initial={{opacity:0,x:index%2===0?-24:24}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className={`${index%2!==0 ? "md:order-2" : ""}`}
>


<div className="relative overflow-hidden rounded-2xl shadow-2xl">

<Image
src={service.image}
alt={service.title}
width={600}
height={400}
className="w-full h-64 sm:h-80 md:h-auto object-cover transition-transform duration-500 hover:scale-105"
/>

</div>


</motion.div>




<motion.div
initial={{opacity:0,x:index%2===0?24:-24}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6,delay:0.1}}
viewport={{once:true}}
className={`${index%2!==0 ? "md:order-1" : ""}`}
>


<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4">
{service.title}
</h2>


<p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
{service.description}
</p>



<ul className="space-y-3 mb-8">

{service.benefits.map((benefit)=>(

<li
key={benefit}
className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
>

<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"/>

<span>{benefit}</span>

</li>

))}

</ul>



<Link
href="/contact#estimate-form"
className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
>

Schedule Service

<ArrowRight size={18}/>

</Link>


</motion.div>


</div>

</div>


</section>
))}





{/* OUR PROCESS */}

<section className="py-16 sm:py-24 bg-gradient-to-b from-green-900 to-green-950 text-white">


<div className="max-w-6xl mx-auto px-4 sm:px-6">


<div className="text-center mb-10 sm:mb-16">

<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
How Our Process Works
</h2>


<p className="text-emerald-200 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
Simple, transparent, and efficient from start to finish.
</p>


</div>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


{processSteps.map((step,index)=>(


<motion.div
key={step.number}
initial={{opacity:0,y:24}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.55,delay:index*0.1}}
viewport={{once:true}}
className="text-center"
>


<div className="mb-6">

<div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">

<span className="text-xl sm:text-2xl font-bold">
{step.number}
</span>

</div>

</div>



<h3 className="text-lg sm:text-xl font-semibold mb-2">
{step.title}
</h3>


<p className="text-emerald-200 text-sm">
{step.description}
</p>


</motion.div>


))}


</div>


</div>


</section>







{/* WHY CHOOSE US */}


<section className="py-16 sm:py-24 bg-gradient-to-b from-green-50 to-white">


<div className="max-w-6xl mx-auto px-4 sm:px-6">


<div className="text-center mb-10 sm:mb-14">

<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900">
Why Choose Our Services
</h2>


<p className="text-gray-600 mt-4 text-sm sm:text-base">
Trusted by homeowners and businesses for over 10+ years.
</p>


</div>



<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


{trustFeatures.map((feature)=>(


<div
key={feature}
className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center border border-green-100"
>


<div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">

<Check className="w-7 h-7 sm:w-8 sm:h-8 text-white"/>

</div>



<h3 className="text-base sm:text-lg font-semibold text-green-900">
{feature}
</h3>


</div>


))}


</div>


</div>


</section>







{/* FAQ SECTION */}

<section className="py-16 sm:py-24 bg-white">


<div className="max-w-3xl mx-auto px-4 sm:px-6">


<div className="text-center mb-10 sm:mb-14">

<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900">
Frequently Asked Questions
</h2>


<p className="text-gray-600 mt-4 text-sm sm:text-base">
Find answers to common questions about our tree services.
</p>


</div>




<div className="space-y-4">


{faqs.map((faq,index)=>(


<div
key={index}
className="border border-green-200 rounded-xl overflow-hidden"
>


<button
onClick={()=>toggleFaq(index)}
className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between gap-4 bg-white hover:bg-green-50"
>


<span className="font-semibold text-sm sm:text-base text-green-900">
{faq.question}
</span>


<ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0"/>


</button>


{openFaq===index && (

<div className="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-600 bg-green-50">

{faq.answer}

</div>

)}


</div>


))}


</div>


</div>


</section>








{/* FINAL CTA */}


<section className="py-16 sm:py-24 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white">


<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">


<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
Ready to Take Care of Your Trees?
</h2>



<p className="text-emerald-200 text-sm sm:text-lg mb-8">
Contact CRC Tree Service today for a free estimate and let our experts handle all your tree care needs.
</p>



<div className="flex flex-col sm:flex-row items-center justify-center gap-4">


<Link
href="/contact#estimate-form"
className="w-full sm:w-auto inline-flex min-w-[220px] justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-slate-950"
>

Get Free Estimate

</Link>




<a
href="tel:+15177157367"
className="w-full sm:w-auto inline-flex min-w-[220px] justify-center items-center rounded-full border border-emerald-200/40 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wide"
>

<Phone className="w-4 h-4 mr-2"/>

Call Now

</a>


</div>


</div>


</section>
    </>
  );
}
