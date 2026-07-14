import Navbar from "@/components/navbar";
import Hero from "../components/hero";
import Services  from  "@/components/services";
import WhyChooseUs from "@/components/whychooseus";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "CRC Tree Service provides professional tree removal, trimming, stump grinding, and emergency tree services in Lansing, East Lansing, Okemos, Holt, Haslett, Grand Ledge, Dewitt, and Mason, Michigan. Get your free estimate today.",
  keywords: [
    "tree removal Michigan",
    "tree trimming Lansing",
    "stump grinding East Lansing",
    "emergency tree service Okemos",
    "tree care Holt",
    "arborist Haslett",
    "tree service Grand Ledge",
    "tree removal Dewitt",
    "tree trimming Mason",
    "professional tree service",
    "licensed tree service",
    "insured tree service",
  ],
  openGraph: {
    title: "CRC Tree Service | Professional Tree Care in Michigan",
    description:
      "Professional tree removal, trimming, stump grinding, and emergency tree services in Michigan. Get your free estimate today.",
    url: "https://crctreeservice.com",
    images: [
      {
        url: "/images/tree removal 2 copy.avif",
        width: 1200,
        height: 630,
        alt: "CRC Tree Service Professional Tree Care",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Gallery />
      <Testimonials />
      <Footer />

    </main>
  );
}