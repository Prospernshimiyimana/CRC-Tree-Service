import "./globals.css";

export const metadata = {
  title: "CRC Tree Service | Professional Tree Care",
  description:
    "Professional tree removal, trimming, stump grinding & emergency services in Michigan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}