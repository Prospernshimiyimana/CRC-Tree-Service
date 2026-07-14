import "./globals.css";
import StructuredData from "@/components/structured-data";

export const metadata = {
  title: {
    default: "CRC Tree Service | Professional Tree Care in Michigan",
    template: "%s | CRC Tree Service",
  },
  description:
    "Professional tree removal, trimming, stump grinding, and emergency tree services in Lansing, East Lansing, Okemos, Holt, Haslett, Grand Ledge, Dewitt, and Mason, Michigan. Licensed, insured, and experienced.",
  keywords: [
    "tree removal",
    "tree trimming",
    "stump grinding",
    "emergency tree service",
    "tree care",
    "arborist",
    "tree service Michigan",
    "tree removal Lansing",
    "tree trimming East Lansing",
    "stump grinding Okemos",
    "emergency tree service Holt",
    "tree service Haslett",
    "tree removal Grand Ledge",
    "tree care Dewitt",
    "tree service Mason",
  ],
  authors: [{ name: "CRC Tree Service" }],
  creator: "CRC Tree Service",
  publisher: "CRC Tree Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://crctreeservice.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crctreeservice.com",
    siteName: "CRC Tree Service",
    title: "CRC Tree Service | Professional Tree Care in Michigan",
    description:
      "Professional tree removal, trimming, stump grinding, and emergency tree services in Michigan. Licensed, insured, and experienced.",
    images: [
      {
        url: "/images/tree removal 2 copy.avif",
        width: 1200,
        height: 630,
        alt: "CRC Tree Service Professional Tree Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRC Tree Service | Professional Tree Care in Michigan",
    description:
      "Professional tree removal, trimming, stump grinding, and emergency tree services in Michigan.",
    images: ["/images/tree removal 2 copy.avif"],
    creator: "@crctreeservice",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}