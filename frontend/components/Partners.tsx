"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Partner {
  id: number;
  image: string;
}

const partners: Partner[] = [
  { id: 1, image: "/partner1.png" },
  { id: 2, image: "/partner2.jfif" },
  { id: 3, image: "/partner3.png" },
  { id: 4, image: "/partner4.png" },
  { id: 5, image: "/partner5.png" },
  { id: 6, image: "/partner6.png" },
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6">
      {/* Background wave shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 -z-10">
        <svg
          className="absolute bottom-0 w-full h-32 sm:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,133.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            OUR PARTNERS
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We are immensely grateful for the trust and collaboration of our partners. Their contributions not only enhance our programs but also inspire us to strive for a brighter and healthier future for all.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center py-8 sm:py-12">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="absolute left-0 z-20 p-2 sm:p-3 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors hidden sm:flex"
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Partner Logos */}
          <div className="w-full px-12 sm:px-20">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex justify-center gap-4 sm:gap-6"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                {/* Duplicate partners for seamless loop */}
                {[...partners, ...partners].map((partner, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-36 sm:w-40 md:w-48 h-32 sm:h-40 bg-white rounded-lg shadow-md flex items-center justify-center p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={partner.image}
                      alt={`Partner ${partner.id}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="absolute right-0 z-20 p-2 sm:p-3 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors hidden sm:flex"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Pagination Dots - Hidden for auto scroll */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 hidden">
          {partners.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-green-600" : "bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
