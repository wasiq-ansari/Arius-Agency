import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-0 rounded-full"
      animate={{ x: pos.x - 300, y: pos.y - 300 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, mass: 0.5 }}
      style={{
        width: 600,
        height: 600,
        background: "radial-gradient(circle, rgba(197,255,71,0.055) 0%, transparent 70%)",
      }}
    />
  );
}
