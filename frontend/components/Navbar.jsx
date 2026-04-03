"use client"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 shadow-soft px-4 sm:px-8 md:px-16 lg:px-24 py-3 transition-all duration-500 ease-out hover:shadow-hover hover:bg-white/80"
    >
      <div className="flex items-center justify-between h-14 sm:h-16">
        {/* Logo on the left */}
        <img
          src="/logo.png"
          alt="Green Children Logo"
          className="h-10 sm:h-12 w-auto cursor-pointer transition-all duration-500 ease-out hover:scale-105"
        />

        {/* Nav links and buttons in the right */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center h-14 sm:h-16 gap-6 text-sm">
            <a href="#" className="h-full flex items-center transition-all duration-500 ease-out hover:text-green-600 hover:scale-105">
              About
            </a>
            <a href="#" className="h-full flex items-center transition-all duration-500 ease-out hover:text-green-600 hover:scale-105">
              Impact
            </a>
            <a href="#" className="h-full flex items-center transition-all duration-500 ease-out hover:text-green-600 hover:scale-105">
              Contact
            </a>
          </nav>

          {/* Donate Button - Desktop Only */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center h-14 sm:h-16 bg-green-700 text-white px-4 py-2 rounded-full text-sm transition-all duration-500 ease-out hover:shadow-hover hover:scale-105"
          >
            Donate
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <nav className="flex flex-col gap-4 pt-4 pb-4 border-t border-green-200">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-sm transition-all duration-500 ease-out hover:text-green-600"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-sm transition-all duration-500 ease-out hover:text-green-600"
          >
            Impact
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-sm transition-all duration-500 ease-out hover:text-green-600"
          >
            Contact
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(false)}
            className="bg-green-700 text-white px-4 py-2 rounded-full text-sm transition-all duration-500 ease-out hover:shadow-hover hover:scale-105 mt-2 w-full"
          >
            Donate
          </motion.button>
        </nav>
      </motion.div>
    </motion.div>
  );
}