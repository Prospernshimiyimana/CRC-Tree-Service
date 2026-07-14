import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our tree service work gallery showcasing tree removal, trimming, stump grinding, and emergency services completed in Lansing, East Lansing, Okemos, Holt, Haslett, Grand Ledge, Dewitt, and Mason, Michigan.",
  keywords: [
    "tree service gallery",
    "tree removal before after",
    "tree trimming gallery",
    "stump grinding gallery",
    "tree service photos",
    "tree work examples",
    "tree service portfolio",
    "tree removal Lansing gallery",
    "tree trimming East Lansing gallery",
    "stump grinding Okemos gallery",
    "emergency tree service Holt gallery",
    "tree service Haslett gallery",
    "tree removal Grand Ledge gallery",
    "tree care Dewitt gallery",
    "tree service Mason gallery",
  ],
  openGraph: {
    title: "Tree Service Gallery | CRC Tree Service",
    description:
      "View our tree service work gallery showcasing completed projects in Michigan.",
    url: "https://crctreeservice.com/gallery",
    images: [
      {
        url: "/images/tree removal 4 copy.avif",
        width: 1200,
        height: 630,
        alt: "CRC Tree Service Gallery",
      },
    ],
  },
};

export default function GalleryLayout({
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
