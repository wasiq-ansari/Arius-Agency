"use client";

import { motion, AnimatePresence } from "framer-motion";

type CursorProps = {
  visible: boolean;
  x: number;
  y: number;
};

export default function Cursor({ visible, x, y }: CursorProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[9999]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            x,
            y,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 25,
          }}
        >
          <div className="flex h-10 w-[180px] items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-[13px] font-medium tracking-[0.2em] text-white">
            View Project 
            <span className="ml-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"></path></svg>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}