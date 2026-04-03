"use client"
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen md:h-screen flex items-center justify-center text-center overflow-hidden px-4 pt-20 sm:pt-24">

      {/* Background Image */}
      <img
        src="/hero.jpg"
        className="absolute w-full h-full object-cover opacity-75"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/40" />

      <div className="relative z-10 max-w-3xl px-4">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 transition-all duration-500 ease-out hover:text-green-100"
        >
          Empowering young people to be lifelong stewards of nature.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 transition-all duration-500 ease-out hover:text-white"
        >
          Inspiring children through hands-on sustainability education and real-world environmental action.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <MagneticButton>
            Join the Movement
          </MagneticButton>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-500 ease-out hover:bg-white/10 hover:scale-105"
          >
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}