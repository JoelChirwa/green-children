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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 ease-out cursor-pointer group"
            >
              {/* Image Container */}
              <div className="overflow-hidden bg-gray-200 h-48 sm:h-56 md:h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-5 sm:p-6 md:p-7 bg-white">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 group-hover:text-green-700 transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
