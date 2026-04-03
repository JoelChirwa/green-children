"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ fullName: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <AnimatedSection>
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-2xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6 text-center transition-all duration-500 ease-out hover:text-green-700"
        >
          Get In Touch
        </motion.h2>

        <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 transition-all duration-500 ease-out hover:text-gray-900">
          Have questions or want to partner with us? We'd love to hear from you!
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 transition-all duration-500 ease-out hover:shadow-hover"
        >
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-all duration-300 hover:border-green-400 text-sm sm:text-base"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-all duration-300 hover:border-green-400 text-sm sm:text-base"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-all duration-300 hover:border-green-400 resize-none text-sm sm:text-base"
              placeholder="Tell us about your inquiry..."
            />
          </div>

          <div className="flex justify-center">
            <MagneticButton>
              {submitted ? "Message Sent! ✅" : "Send Message"}
            </MagneticButton>
          </div>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600 mt-4 font-semibold text-sm sm:text-base"
            >
              Thank you! We'll get back to you soon.
            </motion.p>
          )}
        </motion.form>

      </section>
    </AnimatedSection>
  );
}
