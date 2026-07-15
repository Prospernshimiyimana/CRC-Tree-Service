"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Category =
  | "All"
  | "Tree Removal"
  | "Tree Trimming"
  | "Stump Grinding"
  | "Emergency";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  description: string;
};

const categories: Category[] = [
  "All",
  "Tree Removal",
  "Tree Trimming",
  "Stump Grinding",
  "Emergency",
];

const projects: Project[] = [
  {
    title: "Large Tree Removal",
    category: "Tree Removal",
    image: "/images/tree removal 3 copy.avif",
    description:
      "Safe and efficient removal of a hazardous tree near the driveway and roofline.",
  },
  {
    title: "Trees that had their top halves cut down",
    category: "Tree Trimming",
    image: "/images/tree removal 2 copy.avif",
    description:
      "Precision pruning to improve structure, airflow, and curb appeal.",
  },
  {
    title: "Stump Reclamation",
    category: "Stump Grinding",
    image: "/images/tree grinding 1 copy.webp",
    description:
      "Complete stump removal for a clean, usable backyard space.",
  },
  {
    title: "Storm Response Cleanup",
    category: "Emergency",
    image: "/images/tree emergency 1 copy.jpg",
    description:
      "Rapid removal and debris clearing after a severe wind event.",
  },
  {
    title: "Front Yard Hazard Tree",
    category: "Tree Removal",
    image: "/images/tree removal 6 copy.avif",
    description:
      "Careful removal of a leaning tree protecting the home and street view.",
  },
  {
    title: "Crown Reduction",
    category: "Tree Trimming",
    image: "/images/tree trimming 1 copy.jpg",
    description:
      "Selective crown reduction for balanced growth and improved light access.",
  },
  {
    title: "Root-Level Stump Removal",
    category: "Stump Grinding",
    image: "/images/tree grinding 2 copy.jpg",
    description:
      "Deep grinding that leaves the space ready for landscaping or lawn.",
  },
  {
    title: "Emergency Tree Removal",
    category: "Emergency",
    image: "/images/tree emergency copy.jpg",
    description:
      "Immediate support for dangerous hanging damage.",
  },
];


export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);


  const selectedProject =
    selectedIndex !== null
      ? visibleProjects[selectedIndex] ?? null
      : null;


  useEffect(() => {
    if (
      selectedIndex === null ||
      selectedIndex >= visibleProjects.length
    ) {
      setSelectedIndex(null);
      return;
    }


    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null
            ? 0
            : (current + 1) % visibleProjects.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? visibleProjects.length - 1
            : (current - 1 + visibleProjects.length) %
              visibleProjects.length
        );
      }
    };


    window.addEventListener("keydown", onKeyDown);

    return () =>
      window.removeEventListener("keydown", onKeyDown);

  }, [selectedIndex, visibleProjects.length]);


  return (
    <section
      className="
      bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.08),_transparent_45%),linear-gradient(135deg,_#f8fcf8_0%,_#f3f7f2_100%)]
      py-12 sm:py-16 lg:py-28
      "
    >

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div
            className="
            inline-flex items-center gap-2
            rounded-full
            border border-emerald-200
            bg-white/80
            px-3 sm:px-4
            py-1.5 sm:py-2
            text-xs sm:text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-emerald-700
            shadow-sm
            "
          >
            <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Our Portfolio
          </div>


          <h2
            className="
            mt-4 sm:mt-6
            text-2xl sm:text-3xl md:text-4xl xl:text-5xl
            font-semibold
            tracking-tight
            text-emerald-950
            "
          >
            See the Quality of Our Tree Care Work
          </h2>


          <p
            className="
            mx-auto
            mt-3 sm:mt-5
            max-w-2xl
            text-sm sm:text-base
            leading-6 sm:leading-8
            text-emerald-800/80
            "
          >
            Explore some of our recent tree removal, trimming, stump grinding,
            and emergency service projects completed across Michigan.
          </p>

        </motion.div>


        {/* FILTER BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="
          mt-8 sm:mt-10
          flex flex-wrap
          justify-center
          gap-2 sm:gap-3
          "
        >

          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <motion.button
                key={category}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={`
                rounded-full
                px-3 py-1.5
                sm:px-4 sm:py-2
                text-xs sm:text-sm
                font-semibold
                transition-all
                ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-lg"
                    : "bg-white text-emerald-800 shadow-sm hover:bg-emerald-50"
                }
                `}
              >
                {category}
              </motion.button>
            );
          })}

        </motion.div>


        {/* GALLERY GRID */}
        <div
          className="
          mt-8 sm:mt-10
          columns-1
          sm:columns-2
          lg:columns-3
          xl:columns-4
          gap-4 sm:gap-5
          "
        >

          {visibleProjects.map((project, index) => (            <motion.article
              key={project.title + index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="
              group
              mb-4 sm:mb-6
              break-inside-avoid
              overflow-hidden
              rounded-[20px] sm:rounded-[24px]
              border border-emerald-100
              bg-white
              shadow-[0_16px_40px_-20px_rgba(3,46,27,0.25)]
              "
            >

              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="block w-full text-left"
              >

                <div className="relative overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={700}
                    className="
                    h-48
                    sm:h-64
                    lg:h-72
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                    "
                    loading="lazy"
                  />


                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                    opacity-0
                    transition
                    duration-300
                    group-hover:opacity-100
                    "
                  />


                  <div
                    className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-4 sm:p-5
                    text-white
                    opacity-0
                    translate-y-3
                    transition
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    "
                  >

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                      {project.category}
                    </p>


                    <h3 className="mt-2 text-base sm:text-xl font-semibold">
                      {project.title}
                    </h3>


                    <div className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold">
                      View Project
                      <ArrowRight size={15}/>
                    </div>

                  </div>

                </div>

              </button>



              <div className="p-3 sm:p-5">

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  {project.category}
                </p>


                <h3 className="mt-2 text-base sm:text-lg font-semibold text-emerald-950">
                  {project.title}
                </h3>


                <p className="
                mt-2
                text-xs sm:text-sm
                leading-6 sm:leading-7
                text-emerald-800/80
                ">
                  {project.description}
                </p>

              </div>

            </motion.article>

          ))}

        </div>




        {/* FINAL CTA */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-10 sm:mt-14
          rounded-[20px] sm:rounded-[32px]
          border border-emerald-100
          bg-white/80
          px-5 sm:px-8
          py-8 sm:py-10
          text-center
          shadow-[0_18px_60px_-24px_rgba(3,46,27,0.25)]
          "
        >

          <h3 className="
          text-xl
          sm:text-2xl
          lg:text-3xl
          font-semibold
          text-emerald-950
          ">
            Ready to Transform Your Property?
          </h3>


          <p className="
          mx-auto
          mt-3 sm:mt-4
          max-w-2xl
          text-sm sm:text-base
          text-emerald-800/80
          ">
            Get a free estimate from CRC Tree Service today.
          </p>


          <Link
            href="/contact#estimate-form"
            className="
            mt-6 sm:mt-8
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-orange-500
            px-5 sm:px-7
            py-2.5 sm:py-3
            text-xs sm:text-sm
            font-semibold
            uppercase
            tracking-[0.15em]
            text-white
            shadow-lg
            transition
            hover:-translate-y-0.5
            hover:bg-orange-400
            "
          >
            Get Free Estimate
          </Link>

        </motion.div>



      </div>




      {/* IMAGE MODAL */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="
            fixed
            inset-0
            z-[60]
            flex
            items-center
            justify-center
            bg-black/80
            px-2 sm:px-4
            py-3 sm:py-6
            backdrop-blur-sm
            "
          >


            <motion.div
              initial={{
                opacity:0,
                scale:0.96
              }}
              animate={{
                opacity:1,
                scale:1
              }}
              exit={{
                opacity:0,
                scale:0.96
              }}
              className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-[20px] sm:rounded-[28px]
              bg-white
              shadow-2xl
              "
            >


              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="
                absolute
                right-3
                top-3
                z-10
                rounded-full
                bg-white
                p-2
                text-emerald-900
                shadow-lg
                "
              >
                <X size={18}/>
              </button>



              <div className="
              relative
              aspect-[4/3]
              sm:aspect-video
              w-full
              bg-emerald-950
              ">

                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  priority
                />


                <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                to-transparent
                "/>


                <div className="
                absolute
                bottom-0
                p-4
                sm:p-6
                text-white
                ">

                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                    {selectedProject.category}
                  </p>


                  <h3 className="
                  mt-2
                  text-xl
                  sm:text-3xl
                  font-semibold
                  ">
                    {selectedProject.title}
                  </h3>


                  <p className="
                  mt-3
                  text-xs
                  sm:text-sm
                  text-emerald-50
                  ">
                    {selectedProject.description}
                  </p>

                </div>

              </div>




              <div className="
              flex
              justify-between
              px-3 sm:px-6
              py-3 sm:py-4
              border-t
              border-emerald-100
              ">


                <button
                  onClick={() =>
                    setSelectedIndex((current)=>
                      current === null || current === 0
                      ? visibleProjects.length - 1
                      : current - 1
                    )
                  }
                  className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-3 sm:px-4
                  py-2
                  text-xs sm:text-sm
                  "
                >
                  <ChevronLeft size={15}/>
                  Previous
                </button>



                <button
                  onClick={() =>
                    setSelectedIndex((current)=>
                      current === null
                      ? 0
                      : (current + 1) % visibleProjects.length
                    )
                  }
                  className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-3 sm:px-4
                  py-2
                  text-xs sm:text-sm
                  "
                >
                  Next
                  <ChevronRight size={15}/>
                </button>


              </div>


            </motion.div>


          </motion.div>

        )}

      </AnimatePresence>


    </section>
  );
}