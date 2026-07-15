import { TreePine, Scissors, Axe, Zap } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900">
            Our Professional Tree Services
          </h2>

          <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Safe, reliable, and affordable tree care solutions for your home or business.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {/* CARD 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <TreePine className="w-10 h-10 text-green-700" />
            <h3 className="text-lg sm:text-xl font-semibold mt-4">Tree Removal</h3>
            <p className="text-gray-600 text-sm mt-2">
              Safe removal of hazardous or unwanted trees using professional equipment.
            </p>
            <Link href="/services#tree-removal" className="mt-4 text-orange-500 font-medium">
              Read More →
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <Scissors className="w-10 h-10 text-green-700" />
            <h3 className="text-lg sm:text-xl font-semibold mt-4">Tree Trimming & Pruning</h3>
            <p className="text-gray-600 text-sm mt-2">
              Improve tree health, shape, and safety with expert trimming services.
            </p>
            <Link href="/services#tree-trimming" className="mt-4 text-orange-500 font-medium">
              Read More →
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <Axe className="w-10 h-10 text-green-700" />
            <h3 className="text-lg sm:text-xl font-semibold mt-4">Stump Grinding</h3>
            <p className="text-gray-600 text-sm mt-2">
              Complete stump removal to keep your landscape clean and usable.
            </p>
            <Link href="/services#stump-grinding" className="mt-4 text-orange-500 font-medium">
              Read More →
            </Link>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <Zap className="w-10 h-10 text-green-700" />
            <h3 className="text-lg sm:text-xl font-semibold mt-4">Storm Damage Cleanup & Emergency Service</h3>
            <p className="text-gray-600 text-sm mt-2">
              24/7 rapid response for storm damage and urgent tree situations.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a 
                href="tel:+15177157367" 
                className="text-orange-500 font-medium hover:text-orange-600 transition"
                aria-label="Call CRC Tree Service for emergency service"
              >
                Call Now →
              </a>
              <Link 
                href="/services#emergency-service" 
                className="text-orange-500 font-medium hover:text-orange-600 transition"
              >
                Read More →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}