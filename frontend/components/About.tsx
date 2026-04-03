"use client"
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function About() {
  return (
    <AnimatedSection>
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

        <div className="order-2 md:order-1 flex flex-col gap-6 sm:gap-8">
          <div className="overflow-hidden rounded-2xl shadow-soft transition-all duration-500 ease-out hover:shadow-hover hover:scale-105">
            <motion.img
              src="/children.jpg"
              className="w-full h-auto hover:scale-110 transition duration-700"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-hover transition-all duration-300 hover:bg-green-800"
          >
            Learn More About Our Work
          </motion.button>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6 transition-all duration-500 ease-out hover:text-green-700">
            Who We Are
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-3 sm:mb-4 transition-all duration-500 ease-out hover:text-gray-900">
            Green Children is a registered Malawian nonprofit environmental conservation organization dedicated to equipping young people aged 6–17 with environmental awareness and practical sustainability skills.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-6 sm:mb-8 transition-all duration-500 ease-out hover:text-gray-900">
            Our approach is deeply child-centered, ensuring that learning is interactive, inclusive, and impactful. Our programs are designed to nurture a generation of environmentally conscious young leaders, individuals who not only understand sustainability challenges but are also empowered to take action and drive change within their communities.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold text-slate-700">Nurture</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold text-slate-700">Motivate</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold text-slate-700">Inspire</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold text-slate-700">Empower</p>
            </div>
          </div>
        </div>

      </section>
    </AnimatedSection>
  );
}