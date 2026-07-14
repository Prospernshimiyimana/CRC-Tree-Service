import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CRC Tree Service offers professional tree removal, tree trimming & pruning, stump grinding, emergency tree service, storm damage cleanup, and lot clearing in Lansing, East Lansing, Okemos, Holt, Haslett, Grand Ledge, Dewitt, and Mason, Michigan.",
  keywords: [
    "tree removal services",
    "tree trimming services",
    "stump grinding services",
    "emergency tree service",
    "storm damage cleanup",
    "lot clearing",
    "tree removal Lansing",
    "tree trimming East Lansing",
    "stump grinding Okemos",
    "emergency tree service Holt",
    "tree service Haslett",
    "tree removal Grand Ledge",
    "tree care Dewitt",
    "tree service Mason",
    "professional tree services Michigan",
  ],
  openGraph: {
    title: "Tree Services | CRC Tree Service",
    description:
      "Professional tree removal, trimming, stump grinding, and emergency services in Michigan.",
    url: "https://crctreeservice.com/services",
    images: [
      {
        url: "/images/tree removal 3 copy.avif",
        width: 1200,
        height: 630,
        alt: "CRC Tree Services",
      },
    ],
  },
};

export default function ServicesLayout({
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
