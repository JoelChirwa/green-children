"use client"
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const themes = [
    {
      title: "Climate Action",
      description: "We educate children about climate change causes and solutions, empowering them to understand and reduce their carbon footprint while advocating for climate-resilient communities."
    },
    {
      title: "Biodiversity Conservation",
      description: "Through hands-on projects, children learn about local ecosystems and species protection, participating in conservation efforts that preserve Malawi's rich natural heritage."
    },
    {
      title: "Environmental Advocacy",
      description: "Children develop leadership skills to advocate for environmental change in their schools and communities, becoming young voices for environmental justice and policy awareness."
    },
    {
      title: "Leadership Development",
      description: "We nurture environmental leaders by fostering critical thinking, problem-solving, and community engagement skills that empower children to drive sustainable change."
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-8 sm:mb-10 md:mb-12 text-center tracking-wider">
          OUR THEMATIC FOCUS AREAS
        </h2>

        {/* Thematic Areas - 4 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-black p-3 sm:p-4 md:p-6 lg:p-8 rounded-sm shadow-soft hover:shadow-hover transition-all duration-300 ease-out flex flex-col h-full"
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-green-400 mb-2 sm:mb-3 md:mb-4 text-center leading-tight">
                {theme.title}
              </h3>
              <p className="text-xs sm:text-xs md:text-sm lg:text-base text-white leading-relaxed mb-3 sm:mb-4 flex-grow text-center">
                {theme.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-auto mx-auto bg-yellow-400 text-black font-bold py-1 px-3 sm:py-1.5 sm:px-3 md:py-2 md:px-4 lg:py-2.5 lg:px-6 text-xs sm:text-xs md:text-sm lg:text-base hover:bg-yellow-300 transition-all duration-300"
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Why & Video Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Side - Why & Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 sm:gap-8"
          >
            <div className="bg-soft p-6 sm:p-8 rounded-lg shadow-soft">
              <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">Why Environmental Conservation?</h3>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-4">
                Malawi faces critical environmental challenges including deforestation, climate change impacts, and biodiversity loss. These threats directly affect the future of our children and communities.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                By building environmental awareness and action today, we create a generation of stewards equipped to protect and restore our natural heritage for tomorrow.
              </p>
            </div>

          </motion.div>

          {/* Right Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-all duration-300"
          >
            <video
              src="/Green Children' Tree Planting.mp4"
              controls
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              poster="/children.jpg"
            />
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
