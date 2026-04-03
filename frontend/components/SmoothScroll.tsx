"use client"
import { useEffect } from "react";

let lenis: any = null;

export default function SmoothScroll({ children }: any) {

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;

      lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 1,
      } as any);

      const animate = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    };
  }, []);

  return children;
}
