"use client"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-screen md:h-screen flex items-center justify-center text-center overflow-hidden px-4 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20">

      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40" />

      <div className="relative z-10 max-w-3xl w-full px-4">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-3 sm:mb-4 md:mb-6 transition-all duration-500 ease-out hover:text-green-100 leading-tight"
        >
          Empowering young people to be lifelong stewards of nature.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 transition-all duration-500 ease-out hover:text-white"
        >
          Inspiring children through hands-on sustainability education and real-world environmental action.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-white text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-500 ease-out hover:bg-white/10 hover:scale-105 text-xs sm:text-base"
          >
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}