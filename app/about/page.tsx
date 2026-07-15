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


  <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 py-20 sm:py-24">

    <div className="mx-auto max-w-5xl text-center">


      <motion.div
        initial={{opacity:0,y:24}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.7}}
        className="inline-flex rounded-full border border-emerald-200/20 bg-emerald-900/40 px-3 sm:px-4 py-2 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.32em] text-emerald-100/90"
      >
        About CRC Tree Service
      </motion.div>



      <motion.h1
        initial={{opacity:0,y:24}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.08}}
        className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-semibold tracking-tight text-white"
      >
        Trusted Tree Care Professionals Serving Michigan
      </motion.h1>




      <motion.p
        initial={{opacity:0,y:24}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.16}}
        className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg md:text-xl leading-7 sm:leading-8 text-emerald-100"
      >
        We provide safe, reliable, and professional tree services that help
        homeowners and businesses protect and improve their properties.
      </motion.p>




      <motion.div
        initial={{opacity:0,y:24}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.24}}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
      >


        <Link
          href="/contact#estimate-form"
          className="w-full sm:w-auto inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-orange-500/20 transition hover:bg-orange-400"
        >
          Get Free Estimate
        </Link>



        <Link
          href="/contact#estimate-form"
          className="w-full sm:w-auto inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-200/40 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
        >
          Contact Us
        </Link>


      </motion.div>


    </div>

  </div>

</section>

{/* OUR STORY */}

<section className="py-16 sm:py-24 bg-gradient-to-b from-green-50 to-white">

<div className="max-w-6xl mx-auto px-4 sm:px-6">


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">


<motion.div
initial={{opacity:0,x:-24}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<div className="relative overflow-hidden rounded-2xl shadow-2xl">

<video
src="/videos/tree%20video.mp4"
className="h-64 sm:h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
autoPlay
loop
muted
playsInline
/>

</div>

</motion.div>




<motion.div
initial={{opacity:0,x:24}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6,delay:0.1}}
viewport={{once:true}}
>


<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-5 sm:mb-6">
Our Story
</h2>


<p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
At CRC Tree Service, we are dedicated to providing professional tree care solutions with a focus on safety, quality, and customer satisfaction.
</p>


<p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
Our experienced team specializes in tree removal, trimming, stump grinding, and emergency tree services.
</p>


<p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
For over 10+ years, we've been proudly serving customers throughout Michigan with professional tree care services.
</p>



<Link
href="/services"
className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
>
Read More <ArrowRight size={18}/>
</Link>


</motion.div>


</div>


</div>

</section>

{/* COMPANY STATS */}
<section className="py-16 sm:py-24 bg-white">

  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-10 sm:mb-14"
    >

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 leading-tight">
        Our Numbers Speak for Themselves
      </h2>

    </motion.div>



    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">

      {stats.map((stat, index) => (

        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.55,
            delay: index * 0.1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -8, scale: 1.05 }}
          className="
            bg-gradient-to-br from-green-50 to-emerald-100
            p-6 sm:p-8
            rounded-2xl
            shadow-lg
            hover:shadow-xl
            transition
            duration-300
            text-center
            border
            border-green-200
          "
        >

          <div className="text-4xl sm:text-5xl font-bold text-green-900 mb-2">
            {stat.number}
          </div>


          <div className="text-sm sm:text-base text-gray-600 font-medium">
            {stat.label}
          </div>


        </motion.div>

      ))}

    </div>


  </div>

</section>

{/* SERVICE AREAS */}
<section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">

<div className="absolute inset-0">
  <div className="absolute top-20 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/5 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/5 rounded-full blur-3xl" />
</div>


<div className="relative max-w-6xl mx-auto px-4 sm:px-6">


<motion.div
initial={{opacity:0,y:24}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="text-center mb-10 sm:mb-14"
>


<div className="inline-flex items-center gap-2 rounded-full border border-green-200/40 bg-green-50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-green-700 mb-4">

<MapPin size={15}/>

Service Areas

</div>



<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">

Proudly Serving Michigan & Surrounding Communities

</h2>



<p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">

CRC Tree Service proudly provides professional tree removal, tree trimming,
stump grinding, and emergency tree services throughout Lansing and surrounding Michigan communities.

</p>


</motion.div>





<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">


{serviceAreas.map((area,index)=>(

<motion.div
key={area}
initial={{opacity:0,y:12}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.4,delay:index*0.05}}
viewport={{once:true}}
whileHover={{y:-4}}

className="
bg-white
px-4 sm:px-6
py-4
rounded-xl
shadow-md
hover:shadow-lg
border-2 border-transparent
hover:border-green-500
transition
flex
items-center
gap-3
"
>


<div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">

<MapPin size={16} className="text-white"/>

</div>



<span className="text-sm sm:text-base font-semibold text-green-900">
{area}
</span>


</motion.div>

))}


</div>


</div>

</section>

{/* MISSION & VALUES */}

<section className="py-16 sm:py-24 bg-gradient-to-b from-green-900 to-green-950 text-white">

<div className="max-w-6xl mx-auto px-4 sm:px-6">


<motion.div
initial={{opacity:0,y:24}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="text-center mb-10 sm:mb-16"
>


<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">

Our Mission & Values

</h2>


<p className="text-sm sm:text-base text-emerald-200 max-w-2xl mx-auto">

Our mission is to provide safe, dependable, and professional tree care while protecting our customers' properties.

</p>


</motion.div>





<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


{values.map((value,index)=>(


<motion.div
key={value.title}
initial={{opacity:0,y:24}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.55,delay:index*0.1}}
viewport={{once:true}}

className="
bg-white/10
backdrop-blur-sm
p-5 sm:p-6
rounded-2xl
border
border-white/20
"
>


<div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">

<value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white"/>

</div>



<h3 className="text-lg sm:text-xl font-semibold mb-2">

{value.title}

</h3>



<p className="text-sm text-emerald-200 leading-relaxed">

{value.description}

</p>



</motion.div>


))}


</div>


</div>

</section>

{/* WHY CHOOSE US */}
<section className="py-16 sm:py-24 bg-gradient-to-b from-green-50 to-white">

  <div className="max-w-6xl mx-auto px-4 sm:px-6">


    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-10 sm:mb-14"
    >

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 leading-tight">
        Why Home Owners Choose CRC Tree Service
      </h2>

    </motion.div>




    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">


      {whyChooseUs.map((feature, index) => (

        <motion.div
          key={feature}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.55,
            delay: index * 0.05,
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            y: -4,
            scale: 1.02,
          }}

          className="
            bg-white
            p-5 sm:p-6
            rounded-2xl
            shadow-md
            hover:shadow-lg
            transition
            duration-300
            flex
            items-start
            gap-4
            border
            border-green-100
          "
        >


          <div className="
            flex-shrink-0
            w-10
            h-10
            bg-gradient-to-br
            from-green-500
            to-green-600
            rounded-full
            flex
            items-center
            justify-center
            shadow-lg
            shadow-green-500/30
          ">

            <Check className="w-5 h-5 text-white" />

          </div>



          <span className="text-sm sm:text-base font-semibold text-green-900 leading-relaxed">
            {feature}
          </span>



        </motion.div>

      ))}


    </div>


  </div>


</section>

{/* OUR PROCESS */}
<section className="py-16 sm:py-24 bg-white">

  <div className="max-w-6xl mx-auto px-4 sm:px-6">


    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-10 sm:mb-16"
    >

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 leading-tight">
        How We Work
      </h2>


      <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
        Our straightforward process ensures quality results every time.
      </p>


    </motion.div>





    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


      {processSteps.map((step, index) => (


        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: index * 0.1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -8 }}
          className="text-center group"
        >



          <div className="relative inline-block mb-5 sm:mb-6">


            <div className="
              w-16
              h-16
              sm:w-20
              sm:h-20
              mx-auto
              bg-gradient-to-br
              from-orange-500
              to-orange-600
              rounded-2xl
              flex
              items-center
              justify-center
              shadow-xl
              shadow-orange-500/30
              group-hover:scale-110
              transition
              duration-300
            ">

              <span className="text-xl sm:text-2xl font-bold text-white">
                {step.number}
              </span>

            </div>




            {index < processSteps.length - 1 && (

              <div
                className="
                  hidden
                  lg:block
                  absolute
                  top-8
                  left-full
                  w-full
                  h-0.5
                  bg-gradient-to-r
                  from-orange-500
                  to-transparent
                  -translate-x-1/2
                "
              />

            )}



          </div>





          <h3 className="
            text-lg
            sm:text-xl
            font-semibold
            mb-2
            text-green-900
          ">

            {step.title}

          </h3>




          <p className="
            text-sm
            sm:text-base
            text-gray-600
            leading-relaxed
            max-w-xs
            mx-auto
          ">

            {step.description}

          </p>




        </motion.div>


      ))}



    </div>


  </div>


</section>

{/* SAFETY COMMITMENT */}
<section className="py-16 sm:py-24 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100">

  <div className="max-w-6xl mx-auto px-4 sm:px-6">


    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">


      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >


        <div className="relative inline-block mb-5 sm:mb-6">

          <div className="
            w-20
            h-20
            sm:w-24
            sm:h-24
            bg-gradient-to-br
            from-green-500
            to-green-600
            rounded-full
            flex
            items-center
            justify-center
            shadow-2xl
            shadow-green-500/40
          ">

            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-white"/>

          </div>

        </div>




        <h2 className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          text-green-900
          mb-5
          sm:mb-6
          leading-tight
        ">

          Safety Is Our Priority

        </h2>




        <p className="
          text-sm
          sm:text-base
          text-gray-600
          leading-relaxed
          mb-8
        ">

          Our team follows professional safety practices to ensure every
          project is completed responsibly and efficiently. We maintain
          the highest standards of safety for our customers, our team,
          and your property.

        </p>





        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
        ">


          {[
            "Licensed",
            "Insured",
            "Professional Equipment",
            "Trained Team",
          ].map((item)=>(


            <div
              key={item}
              className="flex items-center gap-3"
            >

              <div className="
                w-10
                h-10
                bg-green-500
                rounded-full
                flex
                items-center
                justify-center
                flex-shrink-0
              ">

                <Check className="w-5 h-5 text-white"/>

              </div>


              <span className="
                text-sm
                sm:text-base
                font-semibold
                text-green-900
              ">

                {item}

              </span>


            </div>


          ))}


        </div>


      </motion.div>





      {/* RIGHT CARD */}


      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay:0.1 }}
        viewport={{ once:true, amount:0.2 }}
        className="relative"
      >


        <div className="
          absolute
          inset-0
          bg-gradient-to-br
          from-green-500/20
          to-orange-500/20
          rounded-3xl
          blur-3xl
        "/>



        <div className="
          relative
          bg-white
          p-5
          sm:p-8
          rounded-3xl
          shadow-2xl
          border
          border-green-200
        ">


          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            sm:gap-6
          ">


            {[
              {
                icon:Leaf,
                title:"Eco-Friendly",
              },
              {
                icon:Zap,
                title:"Efficient",
              },
              {
                icon:Target,
                title:"Precise",
              },
              {
                icon:Clock,
                title:"Timely",
              },

            ].map((item,index)=>(


              <div
                key={item.title}
                className="
                  text-center
                  p-5
                  sm:p-6
                  bg-green-50
                  rounded-2xl
                "
              >

                <item.icon
                  className="
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    text-green-600
                    mx-auto
                    mb-3
                  "
                />


                <h4 className="
                  text-sm
                  sm:text-base
                  font-semibold
                  text-green-900
                ">

                  {item.title}

                </h4>


              </div>


            ))}


          </div>


        </div>


      </motion.div>


    </div>


  </div>

</section>

{/* TESTIMONIALS */}

<section className="py-16 sm:py-24 bg-white">

  <div className="max-w-6xl mx-auto px-4 sm:px-6">


    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-10 sm:mb-14"
    >

      <div className="
        inline-flex
        items-center
        rounded-full
        bg-green-50
        border
        border-green-200
        px-4
        py-2
        text-sm
        font-medium
        text-green-700
        mb-4
      ">

        Customer Reviews

      </div>



      <h2 className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        text-green-900
        leading-tight
      ">

        What Our Customers Say

      </h2>



      <p className="
        mt-4
        text-sm
        sm:text-base
        text-gray-600
        max-w-2xl
        mx-auto
      ">

        See why homeowners and businesses trust CRC Tree Service
        for professional tree care.

      </p>


    </motion.div>





    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-5
      sm:gap-6
    ">



      {[
        {
          name:"John Anderson",
          review:
          "CRC Tree Service did an amazing job removing a dangerous tree from my backyard. The team was professional and cleaned everything perfectly.",
        },

        {
          name:"Sarah Miller",
          review:
          "Great experience from start to finish. They arrived on time, explained everything clearly, and provided excellent service.",
        },

        {
          name:"Mike Johnson",
          review:
          "Very reliable tree company. Their emergency response was fast and they handled the storm damage professionally.",
        },

      ].map((testimonial,index)=>(


        <motion.div

          key={testimonial.name}

          initial={{
            opacity:0,
            y:24
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.5,
            delay:index*0.1
          }}

          viewport={{
            once:true,
            amount:0.2
          }}

          whileHover={{
            y:-6
          }}

          className="
            bg-green-50
            p-5
            sm:p-6
            rounded-2xl
            shadow-md
            hover:shadow-xl
            transition
            duration-300
            border
            border-green-100
          "

        >



          <div className="
            flex
            gap-1
            mb-4
          ">

            {[1,2,3,4,5].map((star)=>(

              <span
                key={star}
                className="text-orange-500 text-lg"
              >
                ★
              </span>

            ))}

          </div>




          <p className="
            text-sm
            sm:text-base
            text-gray-600
            leading-relaxed
            mb-6
          ">

            "{testimonial.review}"

          </p>




          <div>

            <h3 className="
              font-semibold
              text-green-900
            ">

              {testimonial.name}

            </h3>


            <p className="
              text-sm
              text-gray-500
            ">

              Homeowner

            </p>


          </div>



        </motion.div>


      ))}



    </div>


  </div>


</section>

{/* FINAL CTA */}

<section className="
py-16
sm:py-24
bg-gradient-to-br
from-green-900
via-green-800
to-emerald-900
text-white
relative
overflow-hidden
">


<div className="
relative
max-w-4xl
mx-auto
px-4
sm:px-6
text-center
">


<motion.div

initial={{opacity:0,y:24}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}

viewport={{once:true}}

>


<h2 className="
text-3xl
sm:text-4xl
md:text-5xl
font-bold
leading-tight
mb-4
">

Ready to Take Care of Your Trees?

</h2>



<p className="
text-sm
sm:text-lg
text-emerald-200
mb-8
max-w-2xl
mx-auto
">

Contact CRC Tree Service today for a free estimate and let our experts handle all your tree care needs.

</p>



<div className="
flex
flex-col
sm:flex-row
items-center
justify-center
gap-4
">


<Link

href="/contact#estimate-form"

className="
w-full
sm:w-auto
inline-flex
items-center
justify-center
rounded-full
bg-orange-500
px-8
py-4
text-sm
font-semibold
text-slate-950
hover:bg-orange-400
transition
"

>

Get Free Estimate

</Link>




<a

href="tel:+15177157367"

className="
w-full
sm:w-auto
inline-flex
items-center
justify-center
rounded-full
border
border-emerald-200/40
bg-white/5
px-8
py-4
text-sm
font-semibold
text-white
hover:bg-white/10
transition
"

>

<Phone className="w-4 h-4 mr-2"/>

Call Now

</a>



</div>


</motion.div>


</div>


</section>
</>
  );
}