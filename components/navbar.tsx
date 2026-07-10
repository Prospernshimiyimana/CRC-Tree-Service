"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo and Company Name - Clickable */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group"
          aria-label="CRC Tree Service homepage"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white/90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-90">
            <Image
              src="/images/crc logo image copy.png"
              alt="CRC Tree Service logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="font-bold text-xl text-green-800 transition-opacity duration-300 group-hover:opacity-90">
            CRC Tree Service
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative font-medium transition-all duration-300
                  ${isActive 
                    ? "text-green-700 font-semibold" 
                    : "text-gray-700 hover:text-green-700"
                  }
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
                {/* Animated Underline */}
                <span className={`
                  absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `} />
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact#estimate-form"
          className="hidden md:inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          aria-label="Get a free estimate"
        >
          Get Estimate
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t">
          <nav className="flex flex-col px-6 py-4 gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`
                    text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300
                    ${isActive 
                      ? "text-green-700 bg-green-50 font-semibold" 
                      : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
                    }
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact#estimate-form"
              onClick={closeMobileMenu}
              className="bg-orange-500 text-white px-4 py-3 rounded-full text-sm font-semibold text-center hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Get a free estimate"
            >
              Get Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}