import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about CRC Tree Service, your trusted tree care professionals serving Lansing, East Lansing, Okemos, Holt, Haslett, Grand Ledge, Dewitt, and Mason, Michigan. Licensed, insured, and experienced with 10+ years of expertise.",
  keywords: [
    "about CRC Tree Service",
    "tree service company Michigan",
    "licensed tree service",
    "insured tree service",
    "experienced tree service",
    "professional arborist",
    "tree care experts",
    "tree service Lansing",
    "tree trimming East Lansing",
    "stump grinding Okemos",
    "emergency tree service Holt",
    "tree service Haslett",
    "tree removal Grand Ledge",
    "tree care Dewitt",
    "tree service Mason",
  ],
  openGraph: {
    title: "About Us | CRC Tree Service",
    description:
      "Learn about CRC Tree Service, your trusted tree care professionals in Michigan with 10+ years of experience.",
    url: "https://crctreeservice.com/about",
    images: [
      {
        url: "/images/tree removal 5 copy.avif",
        width: 1200,
        height: 630,
        alt: "CRC Tree Service About Us",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
