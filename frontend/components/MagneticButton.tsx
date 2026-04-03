"use client"
import { motion, useMotionValue } from "framer-motion";

export default function MagneticButton({ children }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouse(e:any) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;

    x.set(dx * 0.3);
    y.set(dy * 0.3);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-hover transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105"
    >
      {children}
    </motion.button>
  );
}
