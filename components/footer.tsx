"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Tree Removal", href:"/services#tree-removal" },
  { name: "Tree Trimming", href: "/services#tree-trimming" },
  { name: "Stump Grinding", href: "/services#stump-grinding" },
  { name: "Emergency Tree Service", href:"/services#emergency-service" },
];

export default function Footer() {
  return (
    <footer className="relative bg-green-950 text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 to-green-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <h2 className="text-xl sm:text-2xl font-bold">
                CRC Tree Service
              </h2>
            </Link>

            <p className="text-gray-300 mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
              Professional tree removal, trimming, stump grinding, and emergency services.
              Serving Michigan and surrounding areas with safety, care, and reliability.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3">

              <Link
                href="/contact#estimate-form"
                className="bg-orange-500 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-center hover:bg-orange-600 transition"
              >
                Get Free Estimate
              </Link>

              <a
                href="tel:+15177157367"
                className="border border-orange-500 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-center hover:bg-orange-500 transition"
              >
                Call Now
              </a>

            </div>
          </div>


          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h3>

            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">

              {quickLinks.map((link)=>(
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>



          {/* SERVICES */}
          <div>

            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Services
            </h3>

            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">

              {services.map((service)=>(
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>



          {/* CONTACT */}
          <div>

            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Contact
            </h3>

            <div className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">

              <a 
                href="tel:+15177157367"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
                (517) 715-7367
              </a>


              <a
                href="mailto:chavezramos340@gmail.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
                chavezramos340@gmail.com
              </a>


              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MapPin size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
                Michigan
              </a>

            </div>

          </div>


        </div>



        {/* TRUST STRIP */}
        <div className="mt-12 sm:mt-16 border-t border-green-800 pt-6 sm:pt-8 text-center text-gray-300 text-xs sm:text-sm">

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-3 sm:mb-4">

            <span className="text-xs sm:text-sm">✔ Licensed & Insured</span>
            <span className="text-xs sm:text-sm">✔ 24/7 Emergency Service</span>
            <span className="text-xs sm:text-sm">✔ 10+ Years Experience</span>
            <span className="text-xs sm:text-sm">✔ Free Estimates</span>

          </div>


          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} CRC Tree Service. All rights reserved.
          </p>

        </div>


      </div>



      {/* BACK TO TOP */}
      <button
        onClick={() =>
          window.scrollTo({
            top:0,
            behavior:"smooth"
          })
        }
        className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-orange-500 p-2.5 sm:p-3 rounded-full hover:bg-orange-600 transition"
      >
        <ArrowUp size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]"/>
      </button>


    </footer>
  );
}