// components/HeroMask.tsx
'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroMask() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Turn scroll progression into a massive scaling multiplier
  const scale = useTransform(scrollYProgress, [0, 1], [1, 25]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textX = useTransform(scrollYProgress, [1, 0], [-700, 0]);
  const textrX = useTransform(scrollYProgress, [1, 0], [700, 0]);

  return (
    <div ref={container} className="relative w-full h-[200vh] bg-zinc-950">
      <div className="sticky top-0 h-screen overflow-hidden flex gap-10 items-center justify-center">
        
        {/* Parallax Header */}
        <motion.h1 style={{ x: textX }} className="text-[10vw] font-black text-white z-10 mix-blend-difference">
            AI Automation Agency
        </motion.h1>

        <motion.div style={{ x: textrX }} >
            {/* Parallax Header */}
            <motion.h2 className="text-[3vw] font-black text-white z-10 mix-blend-difference">
                Custom Workflow & CRM Solutions for Growing Businesses
            </motion.h2>
            <motion.p className="text-[1vw] font-black text-white z-10 mix-blend-difference">
            Boost your operations with custom workflow automation, AI tools, and CRMs built to fit your team’s needs. Off-the-shelf or fully custom we’ve got you covered. Book Your Discovery Call
            </motion.p>
        </motion.div>

        {/* Scaling Mask Layer */}
        <motion.div style={{ scale }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[20vw] h-[20vw] bg-white rounded-full flex items-center justify-center">
            {/* Content visible inside mask opening */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}