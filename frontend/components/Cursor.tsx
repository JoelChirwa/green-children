"use client"
import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e:any) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 bg-green-600 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}
