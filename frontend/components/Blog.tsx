"use client"
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Teaching Environmental Stewardship from a Young Age",
      image: "/blog 1.jpg",
      slug: "teaching-young"
    },
    {
      id: 2,
      title: "Green Children Drives Afrocentric Climate Justice at ACA Workshop",
      image: "/blog 2.jpg",
      slug: "aca-climate-justice"
    },
    {
      id: 3,
      title: "Green Children Champions Climate Action Through Sports",
      image: "/blog 3.jpg",
      slug: "sports-climate-action"
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="flex flex-row items-center justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-4">
            <div className="w-8 sm:w-12 h-1 sm:h-1.5 bg-gray-400"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              From the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm sm:text-base text-gray-400 hover:text-gray-600 transition-colors duration-300 font-medium"
          >
            View All
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group bg-white"
            >
              {/* Image Container */}
              <div className="overflow-hidden bg-gray-200 h-40 sm:h-48 md:h-56 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 leading-snug mb-3">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
