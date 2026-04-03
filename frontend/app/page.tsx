import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <Blog />
      <Partners />
      <CTA />
      <Footer />
    </>
  );
}