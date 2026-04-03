"use client"
import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              Get the latest updates on our environmental initiatives, tree planting campaigns, and climate action stories. Join our community of green advocates.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 sm:px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 text-sm sm:text-base"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Quote & Donation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-80 sm:h-96 md:h-full min-h-80"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 opacity-85"></div>
            <div className="absolute inset-0 bg-[url('/children.jpg')] bg-cover bg-center mix-blend-multiply opacity-40"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 text-center text-white">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl font-serif italic mb-8 leading-relaxed"
              >
                "The greatest threat to our planet is the belief that someone else will save it. Every seed planted, every child educated, every action taken brings us closer to a sustainable future."
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 px-6 sm:px-10 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-sm sm:text-base"
              >
                Donate Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}