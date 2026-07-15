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
        src="/images/tree emergency 4 copy.jpg"
        alt="Professional tree service"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

    </motion.div>


    <div className="
      absolute inset-0 
      bg-gradient-to-b 
      from-emerald-950/90 
      via-emerald-950/75 
      to-emerald-950/95
    " />

  </div>



  <div className="
    relative z-10 
    flex 
    min-h-screen 
    items-center 
    justify-center 
    px-4 
    sm:px-6 
    py-20 
    sm:py-24
  ">


    <div className="mx-auto max-w-5xl text-center w-full">


      {/* Badge */}

      <motion.div
        initial={{ opacity:0, y:24 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
        className="
          inline-flex 
          rounded-full 
          border 
          border-emerald-200/20 
          bg-emerald-900/40 
          px-3 
          sm:px-4 
          py-2 
          text-[10px]
          sm:text-sm 
          uppercase 
          tracking-[0.2em]
          sm:tracking-[0.32em]
          text-emerald-100/90
        "
      >

        Contact CRC Tree Service

      </motion.div>



      {/* Heading */}

      <motion.h1
        initial={{ opacity:0, y:24 }}
        animate={{ opacity:1, y:0 }}
        transition={{
          duration:0.8,
          delay:0.08
        }}

        className="
          mt-6 
          sm:mt-8 
          text-3xl 
          sm:text-4xl 
          md:text-6xl 
          lg:text-7xl 
          font-semibold 
          tracking-tight 
          leading-tight
          text-white
        "
      >

        Get Your Free Tree Service Estimate Today

      </motion.h1>




      {/* Description */}

      <motion.p
        initial={{ opacity:0, y:24 }}
        animate={{ opacity:1, y:0 }}
        transition={{
          duration:0.8,
          delay:0.16
        }}

        className="
          mx-auto 
          mt-5 
          sm:mt-6 
          max-w-2xl 
          text-sm 
          sm:text-base 
          md:text-xl 
          leading-7 
          sm:leading-8 
          text-emerald-100
        "
      >

        Need tree removal, trimming, stump grinding, or emergency tree
        service? Our experienced team is ready to help.

      </motion.p>




      {/* Buttons */}

      <motion.div
        initial={{opacity:0,y:24}}
        animate={{opacity:1,y:0}}
        transition={{
          duration:0.8,
          delay:0.24
        }}

        className="
          mt-8 
          sm:mt-10 
          flex 
          flex-col 
          sm:flex-row 
          items-center 
          justify-center 
          gap-3 
          sm:gap-4
          w-full
        "
      >


        <Link
          href="#estimate-form"

          className="
            w-full
            sm:w-auto
            min-w-[220px]
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-orange-500
            px-6
            sm:px-8
            py-3
            sm:py-4
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-[0.12em]
            sm:tracking-[0.14em]
            text-slate-950
            shadow-xl
            shadow-orange-500/20
            transition
            hover:-translate-y-0.5
            hover:bg-orange-400
          "
        >

          Request Free Estimate

        </Link>




        <a
          href="tel:+15177157367"

          className="
            w-full
            sm:w-auto
            min-w-[220px]
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-emerald-200/40
            bg-white/5
            px-6
            sm:px-8
            py-3
            sm:py-4
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-[0.12em]
            sm:tracking-[0.14em]
            text-white
            transition
            hover:border-emerald-100/60
            hover:bg-white/10
          "
        >

          <Phone className="w-4 h-4 mr-2" />

          Call Now

        </a>



      </motion.div>


    </div>


  </div>

</section>

{/* CONTACT INFORMATION */}
<section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-green-50 to-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">


    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-10 sm:mb-14"
    >

      <h2
        className="
        text-3xl 
        sm:text-4xl 
        md:text-5xl 
        font-bold 
        text-green-900 
        mb-3 
        sm:mb-4
        "
      >
        Get in Touch
      </h2>


      <p
        className="
        text-gray-600 
        max-w-2xl 
        mx-auto 
        text-sm 
        sm:text-base
        "
      >
        Contact CRC Tree Service for all your tree care needs.
      </p>


    </motion.div>




    <div
      className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-4 
      sm:gap-6
      "
    >


      {contactInfo.map((info,index)=>{


        const Icon = info.icon;


        return (

          <motion.div

            key={info.title}

            initial={{
              opacity:0,
              y:24
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.55,
              delay:index * 0.1
            }}

            viewport={{
              once:true,
              amount:0.2
            }}

            whileHover={{
              y:-8
            }}


            className="
            bg-white
            p-5
            sm:p-6
            rounded-2xl
            shadow-lg
            hover:shadow-xl
            transition-all
            duration-300
            "
          >



            <div
              className="
              w-12
              h-12
              sm:w-14
              sm:h-14
              bg-gradient-to-br
              from-green-500
              to-green-600
              rounded-xl
              flex
              items-center
              justify-center
              mb-3
              sm:mb-4
              shadow-lg
              shadow-green-500/30
              "
            >

              <Icon
                className="
                text-white
                w-6
                h-6
                sm:w-7
                sm:h-7
                "
              />

            </div>




            <h3
              className="
              text-base
              sm:text-lg
              font-semibold
              text-green-900
              mb-2
              "
            >

              {info.title}

            </h3>




            <p
              className="
              text-gray-600
              text-xs
              sm:text-sm
              leading-relaxed
              whitespace-pre-line
              mb-3
              sm:mb-4
              "
            >

              {info.content}

            </p>





            {info.link && (

              <a

                href={info.link}

                target={
                  info.external
                  ? "_blank"
                  : undefined
                }

                rel={
                  info.external
                  ? "noopener noreferrer"
                  : undefined
                }


                className="
                inline-flex
                items-center
                gap-2
                text-green-600
                font-semibold
                text-xs
                sm:text-sm
                hover:text-green-700
                transition
                "

              >

                {info.linkText}


                {info.external && (

                  <ExternalLink
                    className="
                    w-3
                    h-3
                    sm:w-3.5
                    sm:h-3.5
                    "
                  />

                )}


              </a>


            )}



          </motion.div>


        );


      })}


    </div>



  </div>


</section>

{/* FREE ESTIMATE FORM */}
<section 
  id="estimate-form" 
  className="
    scroll-mt-20 
    sm:scroll-mt-24 
    py-16 
    sm:py-20 
    md:py-24 
    bg-white
  "
>

  <div className="max-w-4xl mx-auto px-4 sm:px-6">


    <motion.div
      initial={{opacity:0,y:24}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6}}
      viewport={{once:true,amount:0.2}}

      className="
      text-center 
      mb-10 
      sm:mb-14
      "
    >

      <h2
        className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        text-green-900
        mb-3
        sm:mb-4
        "
      >
        Request Your Free Estimate
      </h2>


      <p
        className="
        text-gray-600
        text-sm
        sm:text-base
        max-w-2xl
        mx-auto
        "
      >
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>


    </motion.div>





    <motion.div

      initial={{
        opacity:0,
        y:24,
        scale:0.98
      }}

      whileInView={{
        opacity:1,
        y:0,
        scale:1
      }}

      transition={{
        duration:0.6
      }}

      viewport={{
        once:true,
        amount:0.2
      }}


      className="
      bg-gradient-to-br
      from-green-50
      to-emerald-50
      p-5
      sm:p-8
      md:p-12
      rounded-2xl
      sm:rounded-3xl
      shadow-xl
      border
      border-green-200
      "
    >



{submitSuccess ? (

<div className="text-center py-8 sm:py-12">


<div
className="
w-16
h-16
sm:w-20
sm:h-20
bg-green-500
rounded-full
flex
items-center
justify-center
mx-auto
mb-4
sm:mb-6
"
>

<Check 
className="
text-white
w-8
h-8
sm:w-10
sm:h-10
"
/>

</div>


<h3
className="
text-xl
sm:text-2xl
font-bold
text-green-900
mb-2
"
>
Request Submitted!
</h3>


<p
className="
text-gray-600
text-sm
sm:text-base
"
>
We&apos;ll contact you within 24 hours to discuss your tree service needs.
</p>


</div>


) : (



<form 
onSubmit={handleSubmit}
className="
space-y-4
sm:space-y-6
"
>


{/* NAME + PHONE */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
sm:gap-6
"
>


<div>

<label
className="
block
text-sm
font-semibold
text-green-900
mb-2
"
>
Full Name *
</label>


<input

type="text"

name="fullName"

value={formData.fullName}

onChange={handleInputChange}

required

className="
w-full
px-3
sm:px-4
py-2.5
sm:py-3
rounded-xl
border
border-green-300
focus:border-green-500
focus:ring-2
focus:ring-green-500/20
outline-none
text-sm
sm:text-base
"

/>

</div>




<div>

<label
className="
block
text-sm
font-semibold
text-green-900
mb-2
"
>
Phone Number *
</label>


<input

type="tel"

name="phone"

value={formData.phone}

onChange={handleInputChange}

required

className="
w-full
px-3
sm:px-4
py-2.5
sm:py-3
rounded-xl
border
border-green-300
focus:border-green-500
focus:ring-2
focus:ring-green-500/20
outline-none
text-sm
sm:text-base
"

/>

</div>


</div>






{/* EMAIL + ADDRESS */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
sm:gap-6
"
>


<div>

<label
className="
block
text-sm
font-semibold
text-green-900
mb-2
"
>
Email Address *
</label>


<input

type="email"

name="email"

value={formData.email}

onChange={handleInputChange}

required


className="
w-full
px-3
sm:px-4
py-2.5
sm:py-3
rounded-xl
border
border-green-300
focus:border-green-500
focus:ring-2
focus:ring-green-500/20
outline-none
text-sm
sm:text-base
"

/>

</div>





<div>

<label
className="
block
text-sm
font-semibold
text-green-900
mb-2
"
>
Property Address *
</label>


<input

type="text"

name="address"

value={formData.address}

onChange={handleInputChange}

required


className="
w-full
px-3
sm:px-4
py-2.5
sm:py-3
rounded-xl
border
border-green-300
focus:border-green-500
focus:ring-2
focus:ring-green-500/20
outline-none
text-sm
sm:text-base
"

/>


</div>



</div>






{/* SERVICE */}

<div>

<label
className="
block
text-sm
font-semibold
text-green-900
mb-2
"
>
Service Needed *
</label>


<select

name="service"

value={formData.service}

onChange={handleInputChange}

required


className="
w-full
px-3
sm:px-4
py-2.5
sm:py-3
rounded-xl
border
border-green-300
bg-white
text-sm
sm:text-base
"

>


<option value="">
Select a service
</option>


<option value="tree-removal">
Tree Removal
</option>


<option value="tree-trimming">
Tree Trimming & Pruning
</option>


<option value="stump-grinding">
Stump Grinding
</option>


<option value="emergency">
Emergency Tree Service
</option>


<option value="other">
Other
</option>


</select>


</div>





{/* MESSAGE */}

<div>

<label
className="
block
text-sm
font-semibold
text-green-900
mb-2
"
>
Message
</label>


<textarea

name="message"

value={formData.message}

onChange={handleInputChange}

rows={4}

className="
w-full
px-3
sm:px-4
py-2.5
sm:py-3
rounded-xl
border
border-green-300
resize-none
text-sm
sm:text-base
"

/>


</div>





{/* CONTACT METHOD */}

<div>


<label
className="
block
text-sm
font-semibold
text-green-900
mb-3
"
>
Preferred Contact Method *
</label>


<div
className="
flex
flex-col
sm:flex-row
gap-3
sm:gap-6
"
>


<label className="flex items-center gap-2">

<input
type="radio"
name="contactMethod"
value="phone"
/>

<span>
Phone
</span>

</label>



<label className="flex items-center gap-2">

<input
type="radio"
name="contactMethod"
value="email"
/>

<span>
Email
</span>

</label>



</div>


</div>






<button

type="submit"

disabled={isSubmitting}


className="
w-full
rounded-full
bg-orange-500
px-6
sm:px-8
py-3
sm:py-4
text-xs
sm:text-sm
font-semibold
uppercase
tracking-[0.12em]
text-slate-950
shadow-xl
transition
hover:bg-orange-400
disabled:opacity-50
"

>


{isSubmitting 
? "Submitting..." 
: "Submit Request"
}


</button>




</form>


)}



</motion.div>



</div>

</section>

{/* WHY CHOOSE CRC TREE SERVICE */}
<section className="
py-16 
sm:py-20 
md:py-24 
bg-gradient-to-b 
from-green-50 
to-white
">

  <div className="
  max-w-7xl 
  mx-auto 
  px-4 
  sm:px-6
  ">


    <motion.div

      initial={{opacity:0,y:24}}

      whileInView={{opacity:1,y:0}}

      transition={{duration:0.6}}

      viewport={{
        once:true,
        amount:0.2
      }}

      className="
      text-center 
      mb-10 
      sm:mb-14
      "

    >

      <h2

        className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        text-green-900
        mb-3
        sm:mb-4
        "

      >

        Why Choose CRC Tree Service

      </h2>



      <p

        className="
        text-gray-600
        text-sm
        sm:text-base
        max-w-2xl
        mx-auto
        "

      >

        Professional tree care you can trust.

      </p>


    </motion.div>






    <div

      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4
      sm:gap-6
      "

    >



      {whyContactUs.map((item,index)=>(


        <motion.div


          key={item}


          initial={{
            opacity:0,
            scale:0.9
          }}


          whileInView={{
            opacity:1,
            scale:1
          }}


          transition={{
            duration:0.55,
            delay:index * 0.05
          }}


          viewport={{
            once:true,
            amount:0.2
          }}


          whileHover={{
            y:-4
          }}


          className="
          bg-white
          p-4
          sm:p-6
          rounded-2xl
          shadow-md
          hover:shadow-lg
          transition
          duration-300
          flex
          items-center
          gap-3
          sm:gap-4
          border
          border-green-100
          "

        >



          <div

            className="
            flex-shrink-0
            w-9
            h-9
            sm:w-10
            sm:h-10
            bg-gradient-to-br
            from-green-500
            to-green-600
            rounded-full
            flex
            items-center
            justify-center
            shadow-lg
            shadow-green-500/30
            "

          >

            <Check

              className="
              w-4
              h-4
              sm:w-5
              sm:h-5
              text-white
              "

            />


          </div>





          <span

            className="
            font-semibold
            text-green-900
            text-sm
            sm:text-base
            leading-tight
            "

          >

            {item}

          </span>




        </motion.div>


      ))}



    </div>



  </div>



</section>

{/* FAQ SECTION */}
<section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-green-50 to-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6">

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-10 sm:mb-14"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-3 sm:mb-4">
        Frequently Asked Questions
      </h2>

      <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
        Find answers to common questions about our tree removal and tree care services.
      </p>
    </motion.div>


    <div className="space-y-3 sm:space-y-4">

      {faqs.map((faq, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border border-green-100"
        >

          <button
            onClick={() => toggleFaq(index)}
            className="
              w-full 
              px-4 sm:px-6 
              py-4 sm:py-5 
              flex 
              items-center 
              justify-between 
              gap-3
              text-left
              hover:bg-green-50
              transition
            "
            aria-expanded={openFaq === index}
          >

            <span className="
              font-semibold 
              text-green-900
              text-sm
              sm:text-base
              md:text-lg
            ">
              {faq.question}
            </span>


            <motion.div
              animate={{
                rotate: openFaq === index ? 180 : 0
              }}
              transition={{
                duration:0.3
              }}
              className="flex-shrink-0"
            >

              <ChevronDown 
                className="text-green-600 w-5 h-5 sm:w-6 sm:h-6"
              />

            </motion.div>


          </button>


          <motion.div
            initial={false}
            animate={{
              height: openFaq === index ? "auto" : 0,
              opacity: openFaq === index ? 1 : 0,
            }}
            transition={{
              duration:0.3
            }}
            className="overflow-hidden"
          >

            <div className="
              px-4 sm:px-6
              pb-4 sm:pb-5
              text-gray-600
              text-sm
              sm:text-base
              leading-relaxed
            ">
              {faq.answer}
            </div>

          </motion.div>


        </motion.div>

      ))}

    </div>


  </div>
</section>
{/* EMERGENCY CTA SECTION */}
<section className="
  py-16 
  sm:py-20 
  md:py-24
  bg-gradient-to-br 
  from-green-900 
  via-green-800 
  to-emerald-900
  text-white
  relative
  overflow-hidden
">

  {/* Background Effects */}
  <div className="absolute inset-0 pointer-events-none">

    <div className="
      absolute 
      top-0 
      left-1/4 
      w-56 
      h-56 
      sm:w-72 
      sm:h-72 
      md:w-96 
      md:h-96
      bg-orange-500/10 
      rounded-full 
      blur-3xl
    "/>


    <div className="
      absolute 
      bottom-0 
      right-1/4
      w-56 
      h-56 
      sm:w-72 
      sm:h-72 
      md:w-96 
      md:h-96
      bg-green-500/10 
      rounded-full 
      blur-3xl
    "/>

  </div>


  <div className="
    relative
    max-w-4xl
    mx-auto
    px-4
    sm:px-6
    text-center
  ">


    <motion.div
      initial={{
        opacity:0,
        y:24
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:0.6
      }}
      viewport={{
        once:true,
        amount:0.2
      }}
    >


      <h2 className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        mb-4
        leading-tight
      ">
        Need Emergency Tree Service?
      </h2>


      <p className="
        text-emerald-200
        text-sm
        sm:text-base
        md:text-lg
        mb-8
        max-w-2xl
        mx-auto
        leading-relaxed
      ">
        Call CRC Tree Service for fast help with storm damage and dangerous
        trees. Available 24/7.
      </p>



      <div className="
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        gap-3
        sm:gap-4
      ">


        {/* CALL NOW */}

        <a
          href="tel:+15177157367"
          className="
            w-full
            sm:w-auto
            min-w-[220px]
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-orange-500
            px-6
            sm:px-8
            py-3
            sm:py-4
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-[0.12em]
            sm:tracking-[0.14em]
            text-slate-950
            shadow-xl
            shadow-orange-500/20
            transition
            hover:-translate-y-0.5
            hover:bg-orange-400
          "
        >

          <Phone className="
            w-4 
            h-4 
            mr-2
          "/>

          Call Now

        </a>




        {/* REQUEST ESTIMATE */}

        <Link
          href="/contact#estimate-form"
          className="
            w-full
            sm:w-auto
            min-w-[220px]
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-emerald-200/40
            bg-white/5
            px-6
            sm:px-8
            py-3
            sm:py-4
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-[0.12em]
            sm:tracking-[0.14em]
            text-white
            transition
            hover:border-emerald-100/60
            hover:bg-white/10
          "
        >

          Request Estimate

        </Link>


      </div>


    </motion.div>


  </div>


</section>

   </>
  );
}