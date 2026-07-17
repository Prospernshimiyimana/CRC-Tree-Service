"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/90
        backdrop-blur-md
        border-b
        shadow-sm
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-3
          sm:px-6
          py-3
          sm:py-4
        "
      >


        {/* LOGO */}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-2
            sm:gap-3
            min-w-0
          "
        >

          <div
            className="
              h-9
              w-9
              sm:h-10
              sm:w-10
              rounded-xl
              overflow-hidden
              flex-shrink-0
            "
          >

            <Image
              src="/images/crc logo image copy.png"
              alt="CRC Tree Service logo"
              width={40}
              height={40}
              className="object-contain"
            />

          </div>


          <span
            className="
              font-bold
              text-base
              sm:text-xl
              text-green-800
              truncate
            "
          >
            CRC Tree Service
          </span>


        </Link>



        {/* DESKTOP MENU */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-6
            xl:gap-8
          "
        >

          {navLinks.map((link)=>{

            const isActive = pathname === link.href;

            return (

              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative
                  text-sm
                  font-medium
                  transition
                  duration-300

                  ${
                    isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-700 hover:text-green-700"
                  }
                `}
              >

                {link.name}


                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-0.5
                    bg-green-600
                    transition-all
                    duration-300

                    ${
                      isActive
                      ? "w-full"
                      : "w-0 hover:w-full"
                    }
                  `}
                />


              </Link>

            );

          })}


        </nav>



        {/* DESKTOP CTA */}

        <Link
          href="/contact#estimate-form"
          className="
            hidden
            lg:flex
            items-center
            justify-center
            bg-orange-500
            text-white
            px-6
            py-2.5
            rounded-full
            text-sm
            font-semibold
            hover:bg-orange-600
            transition
            shadow-lg
          "
        >
          Get Estimate
        </Link>



        {/* MOBILE BUTTON */}

        <button
          onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}
          className="
            lg:hidden
            p-2
            rounded-lg
            hover:bg-gray-100
            transition
          "
          aria-label="Toggle menu"
        >

          {
            mobileMenuOpen
            ?
            <X size={26}/>
            :
            <Menu size={26}/>
          }

        </button>


      </div>



      {/* MOBILE MENU */}

      <AnimatePresence>

      {
        mobileMenuOpen && (

          <motion.div

            initial={{
              opacity:0,
              height:0
            }}

            animate={{
              opacity:1,
              height:"auto"
            }}

            exit={{
              opacity:0,
              height:0
            }}

            transition={{
              duration:0.3
            }}

            className="
              lg:hidden
              bg-white
              border-t
              shadow-lg
            "

          >


            <nav
              className="
                flex
                flex-col
                px-4
                sm:px-6
                py-5
                gap-2
              "
            >


              {
                navLinks.map((link)=>{

                  const isActive = pathname === link.href;


                  return (

                    <Link

                      key={link.name}

                      href={link.href}

                      onClick={closeMobileMenu}

                      className={`
                        py-3
                        px-4
                        rounded-xl
                        text-sm
                        sm:text-base
                        font-medium
                        transition

                        ${
                          isActive
                          ?
                          "bg-green-50 text-green-700 font-semibold"
                          :
                          "text-gray-700 hover:bg-gray-50"
                        }

                      `}
                    >

                      {link.name}

                    </Link>

                  );

                })
              }



              <Link

                href="/contact#estimate-form"

                onClick={closeMobileMenu}

                className="
                  mt-3
                  bg-orange-500
                  text-white
                  py-3
                  rounded-full
                  text-center
                  text-sm
                  font-semibold
                  shadow-lg
                  hover:bg-orange-600
                  transition
                "
              >

                Get Estimate

              </Link>


            </nav>


          </motion.div>

        )
      }

      </AnimatePresence>


    </header>
  );
}