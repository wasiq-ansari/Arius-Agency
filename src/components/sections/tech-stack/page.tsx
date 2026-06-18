// // "use client";

// // import { useEffect, useRef } from "react";
// // import { motion } from "framer-motion";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // export default function TechStack() {
// //   const sectionRef = useRef(null);

// //   const tech = [
// //     "OpenAI",
// //     "LangChain",
// //     "Next.js",
// //     "Node.js",
// //     "Supabase",
// //     "Stripe",
// //     "Zapier",
// //     "n8n",
// //   ];

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
      
// //       // Title animation
// //       gsap.from(".tech-title", {
// //         opacity: 0,
// //         y: -60,
// //         duration: 1,
// //         ease: "power4.out",
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: "top 80%",
// //         },
// //       });

// //       // Floating chips animation
// //       gsap.utils.toArray(".tech-chip").forEach((chip, i) => {
// //         gsap.from(chip, {
// //           opacity: 0,
// //           scale: 0,
// //           y: 40,
// //           duration: 0.8,
// //           delay: i * 0.05,
// //           ease: "back.out(1.7)",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 75%",
// //           },
// //         });

// //         // Floating loop animation
// //         gsap.to(chip, {
// //           y: i % 2 === 0 ? 12 : -12,
// //           duration: 3 + i * 0.2,
// //           repeat: -1,
// //           yoyo: true,
// //           ease: "sine.inOut",
// //         });
// //       });

// //     }, sectionRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative bg-white py-32 text-black overflow-hidden"
// //     >
// //       {/* Background glow */}
// //       {/* <div className="absolute inset-0">
// //         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[160px]" />
// //         <div className="absolute right-10 top-10 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[140px]" />
// //       </div> */}

// //       <div className="relative mx-auto max-w-5xl px-6 text-center">

// //         {/* TITLE */}
// //         <h2 className="tech-title text-4xl font-bold md:text-5xl">
// //           Powered by Modern AI Tech
// //         </h2>

// //         <p className="mt-4 text-gray-400">
// //           We use cutting-edge tools to build scalable automation systems
// //         </p>

// //         {/* CENTER CORE */}
// //         <div className="relative mt-20 flex items-center justify-center">
          
// //           {/* Core */}
// //           <div className="absolute h-40 w-40 animate-pulse rounded-full bg-gradient-to-r from-[#04A1F8] to-white opacity-30 blur-2xl" />

// //           <div className="z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-[#04A1F8] text-lg text-white font-semibold backdrop-blur-md">
// //             AI CORE
// //           </div>

// //           {/* Floating Tech Chips */}
// //           {tech.map((item, i) => (
// //             <motion.div
// //               key={i}
// //               whileHover={{ scale: 1.15 }}
// //               className={`tech-chip absolute rounded-full border border-black/4 bg-white/8 px-4 py-2 text-xs text-gray-700 backdrop-blur-md`}
// //               style={{
// //                 top: `${20 + (i % 4) * 18}%`,
// //                 left: `${10 + (i * 10) % 80}%`,
// //               }}
// //             >
// //               {item}
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


"use client";
import { motion } from "framer-motion";
import { useReveal } from "@/components/useReveal";
import TripleMarquee from "@/components/tripleMarquee/page";

/* Simple SVG glyphs representing each tool — purely geometric, no trademarked shapes */
const tools = [
  {
    name: "OpenAI",
    color: "#10A37F",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 6 L20 18 L8 18 Z" fill="currentColor" opacity="0.7" />
        <circle cx="14" cy="14" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    color: "#CC785C",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4 L24 22 H4 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 10 L20 22 H8 Z" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "LangChain",
    color: "#1C7A4C",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="10" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="10" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 14 H16" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="4" cy="6" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="24" cy="22" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#EA4B71",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="7" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="21" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 14 H18 M14 10 V18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Make",
    color: "#6D4AFF",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Zapier",
    color: "#FF4A00",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4 L24 10 V18 L14 24 L4 18 V10 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M9 14 L13 10 L19 16 L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    color: "#FF7A59",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="11" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 15 L21 18 M14 15 L7 18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    color: "#00A1E0",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 18 Q5 9 14 9 Q18 9 20 12 Q22 9 25 10 Q28 11 27 15 Q29 16 28 20 Q27 23 24 23 H7 Q4 23 5 18Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: "Airtable",
    color: "#FCB400",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="5" width="18" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="5" y="16" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="16" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4 C9 4 8 7 8 10 V13 H14 V14 H5 C3 14 2 16 2 19 C2 22 4 24 8 24 H10 V21 C10 19 11 18 14 18 H19 C21 18 22 17 22 14 V10 C22 7 20 4 14 4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="11" cy="10" r="1.2" fill="currentColor" />
        <path d="M14 14 C19 14 20 17 20 19 V24" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="17" cy="19" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "AWS",
    color: "#FF9900",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 16 Q14 22 22 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M4 12 L10 8 L14 11 L18 8 L24 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M6 16 L4 19 M22 16 L24 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Pinecone",
    color: "#00D4AA",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4 L14 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 9 L14 6 L20 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 14 L14 10 L22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 19 L14 15 L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TechStack() {
  const { ref, visible } = useReveal("-60px");

  return (
    <section className="w-full bg-black py-14 px-8 relative" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1440px] mx-auto flex gap-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mt-2 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span
              className="block mb-4"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "15px",
                letterSpacing: "0.2em",
                color: "#38b6ff",
                textTransform: "uppercase",
              }}
            >
              Our toolkit
            </span>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)",
                lineHeight: 1,
                fontWeight: 400,
                color: "var(--foreground)",
              }}
            >
              Tools we
              <br />
              <em>specialize in.</em>
            </h2>
            <p
              className="max-w-xl mt-8 text-white/60"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "18px",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              We go deep on a focused stack - not shallow on everything. Each tool chosen for production reliability at scale.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          className="mt-2 mb-6 w-full flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <TripleMarquee/>
        </motion.div>

        {/* Tool grid */}
        {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="flex flex-col items-center justify-center gap-3 py-8 px-4 cursor-default group transition-all duration-300"
              style={{ backgroundColor: "var(--background)" }}
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.05 + i * 0.04 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--card)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--background)";
              }}
            >
              <motion.div
                className="transition-all duration-300"
                style={{ color: "var(--muted-foreground)" }}
                whileHover={{ color: tool.color, scale: 1.1 }}
              >
                {tool.icon}
              </motion.div>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted-foreground)",
                  transition: "color 0.3s",
                }}
              >
                {tool.name}
              </span>
            </motion.div>
          ))} 
        </div> */}
      </div>
    </section>
  );
}
