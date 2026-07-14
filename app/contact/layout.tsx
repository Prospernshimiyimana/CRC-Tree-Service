import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CRC Tree Service for a free estimate on tree removal, trimming, stump grinding, and emergency tree services in Lansing, East Lansing, Okemos, Holt, Haslett, Grand Ledge, Dewitt, and Mason, Michigan. Call +1 (517) 715-7367.",
  keywords: [
    "contact tree service",
    "free tree estimate",
    "tree service quote",
    "tree removal estimate",
    "tree trimming quote",
    "stump grinding estimate",
    "emergency tree service contact",
    "tree service Lansing contact",
    "tree trimming East Lansing contact",
    "stump grinding Okemos contact",
    "emergency tree service Holt contact",
    "tree service Haslett contact",
    "tree removal Grand Ledge contact",
    "tree care Dewitt contact",
    "tree service Mason contact",
  ],
  openGraph: {
    title: "Contact Us | CRC Tree Service",
    description:
      "Get a free estimate for tree removal, trimming, stump grinding, and emergency services in Michigan.",
    url: "https://crctreeservice.com/contact",
    images: [
      {
        url: "/images/tree emergency 4 copy.jpg",
        width: 1200,
        height: 630,
        alt: "CRC Tree Service Contact",
      },
    ],
  },
};

export default function ContactLayout({
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
