// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Process() {
//   const sectionRef = useRef(null);

//   const steps = [
//     {
//       title: "Discover & Analyze",
//       desc: "We analyze your business workflow and identify automation opportunities.",
//     },
//     {
//       title: "Design AI System",
//       desc: "We design smart automation flows, AI agents, and system architecture.",
//     },
//     {
//       title: "Build & Integrate",
//       desc: "We develop and connect tools, APIs, and AI systems into your workflow.",
//     },
//     {
//       title: "Optimize & Scale",
//       desc: "We continuously optimize performance and scale automation across your business.",
//     },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".process-card", {
//         opacity: 0,
//         y: 80,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(".process-line", {
//         scaleY: 0,
//         transformOrigin: "top",
//         duration: 1.5,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-white py-24 text-black"
//     >
//       {/* Background glow */}
//       <div className="absolute inset-0">
//         <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
//       </div>

//       <div className="relative mx-auto max-w-6xl px-6">
        
//         {/* Header */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold md:text-5xl">
//             Our AI Automation Process
//           </h2>
//           <p className="mt-4 text-gray-400">
//             From idea to full automation — we handle everything end-to-end
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative grid gap-10 md:grid-cols-4">

//           {/* Vertical Line */}
//           <div className="process-line absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-purple-500 to-blue-500 md:block" />

//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="process-card relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
//             >
//               {/* Step Number */}
//               <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-bold">
//                 {i + 1}
//               </div>

//               {/* Content */}
//               <h3 className="text-lg font-semibold">{step.title}</h3>
//               <p className="mt-2 text-sm text-gray-400">{step.desc}</p>

//               {/* Glow dot */}
//               <div className="absolute -right-2 -top-2 h-3 w-3 rounded-full bg-purple-500 blur-sm" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// // ----------------------
// // SAMPLE DATA
// // ----------------------
// const steps = [
//   {
//     title: "Discovery Phase",
//     description:
//       "We understand your business, goals, and user needs in detail.",
//     icon: "🔍",
//   },
//   {
//     title: "Wireframing",
//     description:
//       "We create low-fidelity layouts to define structure and flow.",
//     icon: "📐",
//   },
//   {
//     title: "UI Design",
//     description:
//       "High-fidelity designs with modern aesthetics and branding.",
//     icon: "🎨",
//   },
//   {
//     title: "Development",
//     description:
//       "We convert designs into scalable and performant applications.",
//     icon: "⚙️",
//   },
//   {
//     title: "Launch",
//     description:
//       "Final testing, optimization, and deployment to production.",
//     icon: "🚀",
//   },
// ];

// export default function Timeline() {
//   const sectionsRef = useRef<HTMLDivElement[]>([]);
//   const iconRefs = useRef<HTMLDivElement[]>([]);
//   const [active, setActive] = useState(0);

//   // ----------------------
//   // INIT LENIS + GSAP
//   // ----------------------
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//     });

//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     lenis.on("scroll", ScrollTrigger.update);

//     // ----------------------
//     // ACTIVE STEP DETECTION
//     // ----------------------
//     sectionsRef.current.forEach((section, i) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => setActive(i),
//         onEnterBack: () => setActive(i),
//       });
//     });

//     // ----------------------
//     // ICON ANIMATION (GSAP)
//     // ----------------------
//     iconRefs.current.forEach((icon, i) => {
//       ScrollTrigger.create({
//         trigger: sectionsRef.current[i],
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => {
//           gsap.to(icon, {
//             opacity: 1,
//             scale: 1.15,
//             duration: 0.3,
//             ease: "power2.out",
//           });
//         },
//         onEnterBack: () => {
//           gsap.to(icon, {
//             opacity: 1,
//             scale: 1.15,
//             duration: 0.3,
//           });
//         },
//         onLeave: () => {
//           gsap.to(icon, {
//             opacity: 0.25,
//             scale: 0.9,
//             duration: 0.3,
//           });
//         },
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       lenis.destroy();
//     };
//   }, []);

//   // ----------------------
//   // UI
//   // ----------------------
//   return (
//     <div className="grid grid-cols-12 gap-10 px-10 py-20">

//       {/* LEFT COLUMN - COUNT */}
//       <div className="col-span-1 sticky top-24 h-fit">
//         {steps.map((_, i) => (
//           <div
//             key={i}
//             className={`h-24 flex items-center justify-center text-sm font-semibold transition-all ${
//               active === i ? "text-black" : "text-gray-400"
//             }`}
//           >
//             {String(i + 1).padStart(2, "0")}
//           </div>
//         ))}
//       </div>

//       {/* MIDDLE COLUMN - ICONS */}
//       <div className="col-span-2 sticky top-24 h-fit">
//         {steps.map((step, i) => (
//           <div
//             key={i}
//             className="h-24 flex items-center justify-center"
//           >
//             <div
//               ref={(el) => {
//                 if (el) iconRefs.current[i] = el;
//               }}
//               className="text-3xl opacity-25 scale-90 transition-all"
//             >
//               {step.icon}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* RIGHT COLUMN - CONTENT */}
//       <div className="col-span-9">
//         {steps.map((step, i) => (
//           <section
//             key={i}
//             ref={(el) => {
//               if (el) sectionsRef.current[i] = el;
//             }}
//             className="min-h-screen flex flex-col justify-center py-24"
//           >
//             <h2 className="text-4xl font-bold mb-4">
//               {step.title}
//             </h2>

//             <p className="text-gray-600 max-w-xl text-lg">
//               {step.description}
//             </p>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Audit from "@/assets/images/audit.png";
import Build from "@/assets/images/build.png";
import Automate from "@/assets/images/automate.png";
import Final from "@/assets/images/final.png";

gsap.registerPlugin(ScrollTrigger);

// ----------------------
// DATA
// ----------------------
const steps = [
  {
    title: "Business Audit",
    description:
      "We dig into how your business actually runs day-to-day, not how the SOP doc says it runs...",
    icon: Audit,
  },
  {
    title: "Systems Buildout",
    description:
      "Now we build the thing. CRM setup, data structure, workflows...",
    icon: Build,
  },
  {
    title: "AI & Automation",
    description:
      "Now things start moving on their own. We connect your tools...",
    icon: Automate,
  },
  {
    title: "Training & Handover",
    description:
      "We don't build and ghost. Your team gets proper training...",
    icon: Final,
  },
];

export default function Timeline() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [active, setActive] = useState(0);

  // ----------------------
  // INIT LENIS + SCROLLTRIGGER
  // ----------------------
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    sectionsRef.current.forEach((section, i) => {
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  // ----------------------
  // CONTENT ANIMATION
  // ----------------------
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;

      if (i === active) {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.8,
            y: 30,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          }
        );
      } else {
        gsap.to(el, {
          opacity: 0,
          scale: 1.05,
          y: -10,
          filter: "blur(10px)",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  }, [active]);

  return (
    <div className="grid grid-cols-12 items-start gap-10 px-10 py-20">
      
      {/* LEFT - STEP NUMBER */}
      <div className="col-span-2 sticky top-0 h-screen flex items-center justify-center text-7xl font-bold">
        {String(active + 1).padStart(2, "0")}
      </div>

      {/* MIDDLE - ICON */}
      <div className="col-span-4 sticky top-0 h-screen flex items-center justify-center">
        <div key={active} className="relative h-[400px] w-[400px]">
          <Image
            src={steps[active].icon}
            alt="icon"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* RIGHT - CONTENT */}
      <div className="col-span-6">
        {steps.map((step, i) => (
          <section
            key={i}
            ref={(el) => {
              sectionsRef.current[i] = el;
            }}
            className="min-h-screen flex items-center"
          >
            <div
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
              className="max-w-2xl"
              style={{
                opacity: i === active ? 1 : 0,
              }}
            >
              <h2
                className="text-6xl font-bold text-[#182138] mb-4"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {step.title}
              </h2>

              <p className="text-gray-600 text-xl">
                {step.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}



// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// // ----------------------
// // DATA
// // ----------------------
// const steps = [
//   {
//     title: "Discovery Phase",
//     description:
//       "We understand your business, goals, and user needs in detail.",
//     icon: "🔍",
//   },
//   {
//     title: "Wireframing",
//     description:
//       "We create low-fidelity layouts to define structure and flow.",
//     icon: "📐",
//   },
//   {
//     title: "UI Design",
//     description:
//       "High-fidelity designs with modern aesthetics and branding.",
//     icon: "🎨",
//   },
//   {
//     title: "Development",
//     description:
//       "We convert designs into scalable and performant applications.",
//     icon: "⚙️",
//   },
//   {
//     title: "Launch",
//     description:
//       "Final testing, optimization, and deployment to production.",
//     icon: "🚀",
//   },
// ];

// export default function Timeline() {
//   const sectionsRef = useRef<HTMLDivElement[]>([]);
//   const contentRef = useRef<HTMLDivElement[]>([]);
//   const iconRef = useRef<HTMLDivElement[]>([]);
//   const [active, setActive] = useState(0);

//   // ----------------------
//   // INIT LENIS + SCROLL TRIGGER
//   // ----------------------
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//     });

//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//     lenis.on("scroll", ScrollTrigger.update);

//     // ----------------------
//     // ACTIVE SECTION DETECTION
//     // ----------------------
//     sectionsRef.current.forEach((section, i) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => setActive(i),
//         onEnterBack: () => setActive(i),
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       lenis.destroy();
//     };
//   }, []);

//   // ----------------------
//   // ICON + CONTENT ANIMATION ON ACTIVE CHANGE
//   // ----------------------
//   useEffect(() => {
//     const iconEl = iconRef.current[active];
//     const contentEl = contentRef.current[active];

//     if (iconEl) {
//       gsap.fromTo(
//         iconEl,
//         { opacity: 0, scale: 0.6, rotate: -10 },
//         {
//           opacity: 1,
//           scale: 1,
//           rotate: 0,
//           duration: 0.5,
//           ease: "power3.out",
//         }
//       );
//     }

//     if (contentEl) {
//       gsap.fromTo(
//         contentEl,
//         {
//           opacity: 0,
//           y: 40,
//           scale: 0.92,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.7,
//           ease: "power3.out",
//         }
//       );
//     }
//   }, [active]);

//   return (
//     <div className="grid grid-cols-12 gap-10 px-10 py-20">

//       {/* ---------------- LEFT COUNT (ONLY ACTIVE) ---------------- */}
//       <div className="col-span-1 sticky top-24 h-fit">
//         <div className="h-24 flex items-center justify-center text-lg font-bold transition-all">
//           {String(active + 1).padStart(2, "0")}
//         </div>
//       </div>

//       {/* ---------------- MIDDLE ICON (ONLY ACTIVE) ---------------- */}
//       <div className="col-span-2 sticky top-24 h-fit">
//         <div className="h-24 flex items-center justify-center">
//           {steps.map((step, i) => (
//             <div
//               key={i}
//               ref={(el) => {
//                 if (el) iconRef.current[i] = el;
//               }}
//               className={`absolute text-4xl transition-opacity ${
//                 active === i ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               {step.icon}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ---------------- RIGHT CONTENT ---------------- */}
//       <div className="col-span-9">
//         {steps.map((step, i) => (
//           <section
//             key={i}
//             ref={(el) => {
//               if (el) sectionsRef.current[i] = el;
//             }}
//             className="min-h-screen flex items-center"
//           >
//             {/* IMPORTANT: always mounted, no hidden/block */}
//             <div
//               ref={(el) => {
//                 if (el) contentRef.current[i] = el;
//               }}
//               className="max-w-2xl"
//             >
//               <h2 className="text-4xl font-bold mb-4">
//                 {step.title}
//               </h2>

//               <p className="text-gray-600 text-lg">
//                 {step.description}
//               </p>
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }