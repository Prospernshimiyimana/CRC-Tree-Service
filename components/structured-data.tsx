export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TreeService",
    name: "CRC Tree Service",
    description: "Professional tree removal, trimming, stump grinding, and emergency tree services in Michigan.",
    url: "https://crctreeservice.com",
    telephone: "+1 (517) 715-7367",
    email: "chavezramos340@gmail.com",
    areaServed: [
      {
        "@type": "City",
        name: "Lansing",
      },
      {
        "@type": "City",
        name: "East Lansing",
      },
      {
        "@type": "City",
        name: "Okemos",
      },
      {
        "@type": "City",
        name: "Holt",
      },
      {
        "@type": "City",
        name: "Haslett",
      },
      {
        "@type": "City",
        name: "Grand Ledge",
      },
      {
        "@type": "City",
        name: "Dewitt",
      },
      {
        "@type": "City",
        name: "Mason",
      },
    ],
    serviceType: [
      "Tree Removal",
      "Tree Trimming & Pruning",
      "Stump Grinding",
      "Emergency Tree Service",
      "Storm Damage Cleanup",
      "Lot Clearing",
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "23:59",
        description: "Emergency Only",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
