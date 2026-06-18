// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     year: "2024",
//     title: "Digital Studio Experience",
//     desc: "Cinematic storytelling website with immersive scroll behavior.",
//     img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
//   },
//   {
//     year: "2024",
//     title: "SaaS Dashboard UI",
//     desc: "Scalable analytics system with clean UI structure.",
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
//   },
//   {
//     year: "2025",
//     title: "E-commerce Flow",
//     desc: "High conversion UX with smooth micro interactions.",
//     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//   },
//   {
//     year: "2025",
//     title: "Mobile UI System",
//     desc: "Minimal design system built for modern applications.",
//     img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
//   },
// ];

// export default function TimelineSection() {
//   const sectionRef = useRef(null);

//   // LENIS smooth scroll
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

//     return () => lenis.destroy();
//   }, []);

//   // GSAP animations
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // TITLE animation (scroll reveal)
//       gsap.from(".title-line", {
//         y: 80,
//         opacity: 0,
//         stagger: 0.15,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".title-wrapper",
//           start: "top 80%",
//         },
//       });

//       // PROJECTS animation
//       gsap.utils.toArray(".project-item").forEach((item: any) => {
//         gsap.from(item, {
//           y: 120,
//           opacity: 0,
//           scale: 0.95,
//           duration: 1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: item,
//             start: "top 85%",
//           },
//         });
//       });

//       // IMAGE parallax
//       gsap.utils.toArray(".project-img").forEach((img: any) => {
//         gsap.to(img, {
//           y: -40,
//           ease: "none",
//           scrollTrigger: {
//             trigger: img,
//             start: "top bottom",
//             scrub: true,
//           },
//         });
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full max-w-5xl mx-auto px-6 py-32"
//     >
//       {/* TITLE */}
//       <div className="title-wrapper mb-24 overflow-hidden">
//         <h2 className="text-6xl md:text-8xl font-light leading-none">
//           <div className="title-line">Project</div>
//           <div className="title-line">Timeline</div>
//         </h2>

//         <p className="text-white/40 mt-6 max-w-md">
//           A smooth scroll journey of selected work and interactive experiences.
//         </p>
//       </div>

//       {/* PROJECTS */}
//       <div className="space-y-28">
//         {projects.map((p, i) => (
//           <div
//             key={i}
//             className={`project-item flex flex-col md:flex-row gap-10 items-center ${
//               i % 2 === 0 ? "" : "md:flex-row-reverse"
//             }`}
//           >
//             {/* IMAGE */}
//             <div className="md:w-1/2 overflow-hidden rounded-3xl border border-white/10">
//               <img
//                 src={p.img}
//                 className="project-img w-full h-[300px] object-cover scale-105"
//               />
//             </div>

//             {/* TEXT */}
//             <div className="md:w-1/2">
//               <span className="text-xs tracking-[0.3em] text-white/40">
//                 {p.year}
//               </span>

//               <h3 className="text-3xl md:text-4xl font-light mt-4">
//                 {p.title}
//               </h3>

//               <p className="text-white/40 mt-4 text-sm leading-relaxed">
//                 {p.desc}
//               </p>

//               {/* hover line */}
//               <div className="mt-6 h-[1px] w-0 bg-white/60 group-hover:w-full transition-all duration-700" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";
// import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     year: "2024",
//     title: "Digital Experience Studio",
//     desc: "A cinematic storytelling website with smooth scroll transitions and immersive interaction design.",
//     tech: ["Next.js", "GSAP", "Lenis"],
//     img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
//   },
//   {
//     year: "2024",
//     title: "SaaS Analytics Platform",
//     desc: "Scalable dashboard system with real-time data visualization and clean UI architecture.",
//     tech: ["React", "Charts", "Tailwind"],
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
//   },
//   {
//     year: "2025",
//     title: "E-commerce Experience",
//     desc: "High conversion shopping flow with micro-interactions and modern UX patterns.",
//     tech: ["Next.js", "Stripe", "Framer Motion"],
//     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//   },
// ];

// export default function EliteTimeline() {
//   const ref = useRef(null);

//   // Lenis
//   useEffect(() => {
//     const lenis = new Lenis({ duration: 1.2 });

//     const raf = (time: number) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

//   // GSAP
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".item", {
//         opacity: 0,
//         y: 120,
//         stagger: 0.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ref.current,
//           start: "top 80%",
//         },
//       });

//       gsap.to(".line", {
//         height: "100%",
//         scrollTrigger: {
//           trigger: ref.current,
//           scrub: true,
//           start: "top center",
//           end: "bottom bottom",
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={ref} className="relative max-w-5xl mx-auto px-6 py-32">

//       {/* LINE */}
//       <div className="absolute left-4 md:left-1/2 top-0 w-[1px] h-full bg-white/10">
//         <div className="line w-full h-0 bg-white/60" />
//       </div>

//       {/* ITEMS */}
//       <div className="space-y-28">

//         {projects.map((p, i) => (
//           <div
//             key={i}
//             className={`item flex flex-col md:flex-row gap-10 items-center ${
//               i % 2 === 0 ? "" : "md:flex-row-reverse"
//             }`}
//           >

//             {/* IMAGE CARD */}
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 120 }}
//               className="md:w-1/2 overflow-hidden rounded-3xl border border-white/10 group"
//             >
//               <img
//                 src={p.img}
//                 className="h-[320px] w-full object-cover group-hover:scale-110 transition duration-700"
//               />
//             </motion.div>

//             {/* CONTENT */}
//             <div className="md:w-1/2">

//               <span className="text-xs tracking-[0.3em] text-white/40">
//                 {p.year}
//               </span>

//               <h3 className="text-3xl md:text-4xl font-light mt-4">
//                 {p.title}
//               </h3>

//               <p className="text-white/40 mt-4 text-sm leading-relaxed">
//                 {p.desc}
//               </p>

//               {/* TECH CHIPS */}
//               <div className="flex flex-wrap gap-2 mt-5">
//                 {p.tech.map((t, i) => (
//                   <span
//                     key={i}
//                     className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* hover underline */}
//               <div className="mt-6 h-[1px] w-0 bg-white/60 group-hover:w-full transition-all duration-700" />
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    year: "2024",
    title: "Digital Experience Studio",
    desc: "Cinematic storytelling with scroll-driven transitions and immersive interaction design.",
    tech: ["Next.js", "GSAP", "Lenis"],
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
  },
  {
    year: "2024",
    title: "SaaS Analytics Platform",
    desc: "Real-time dashboard system with scalable architecture and data visualization.",
    tech: ["React", "D3", "Tailwind"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    year: "2025",
    title: "E-commerce Experience",
    desc: "Conversion-focused shopping journey with refined micro-interactions.",
    tech: ["Next.js", "Stripe", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

export default function AwwwardsTimeline() {
  const ref = useRef(null);

  // LENIS (smooth base)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // GSAP MASTER SCROLL STORY
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".item");

      items.forEach((item: any, i) => {
        const image = item.querySelector(".img");
        const text = item.querySelector(".text");
        const chips = item.querySelectorAll(".chip");

        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          image,
          { scale: 1.1, opacity: 0.5 },
          { scale: 1, opacity: 1, duration: 1, ease: "power4.out" }
        )
        .fromTo(
          text,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          chips,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1 },
          "-=0.4"
        );
      });

      // PROGRESS LINE
      gsap.to(".line", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative w-full mx-auto px-6 py-20 bg-[#1c1f26]">

      <div className="max-w-[1440px] m-auto">

        {/* TITLE (minimal, Awwwards style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "15px",
              letterSpacing: "0.18em",
              color: "#38b6ff",
              textTransform: "uppercase",
              marginBottom: "14px",
              display: "block"
            }}
          >            
            The Journey
          </span>

          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.2rem, 4vw, 4rem)",
              lineHeight: 0.9,
              fontWeight: 400,
              color: "#FFFFFF",
              maxWidth: "900px",
            }}
          >
            Where Design Meets Code {" "}<br/>
            <em style={{ color: "#38b6ff" , display: "block", marginTop: "20px"}}>
            Case Studies
            </em>
          </h2>
        </motion.div>

        {/* LINE */}
        <div className="absolute left-4 md:left-1/2 top-0 w-[1px] h-full bg-[#38b6ff]">
          <div className="line w-full h-0 bg-[#1c1f26]" />
        </div>

        {/* ITEMS */}
        <div className="space-y-10">

          {projects.map((p, i) => (
            <div
              key={i}
              className={`item relative flex flex-col md:flex-row gap-12 items-center rounded-3xl ${
                i % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >

              {/* DOT */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#38b6ff]" />

              {/* IMAGE */}
              <div className="md:w-1/2 overflow-hidden rounded-3xl">
                <img
                  src={p.img}
                  className="img w-full h-[360px] object-cover scale-110"
                />
              </div>

              {/* TEXT */}
              <div className="p-6 text md:w-1/2">

                <span className="text-xs tracking-[0.3em] text-[#38b6ff]">
                  {p.year}
                </span>

                <h3 className="text-3xl md:text-4xl font-light mt-5 leading-tight">
                  {p.title}
                </h3>

                <p className="text-white/60 mt-5 text-md leading-relaxed max-w-xl">
                  {p.desc}
                </p>

                {/* TECH CHIPS */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="chip text-[14px] px-4 py-1 rounded-full border border-white/10 bg-white/5 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* subtle line */}
                <div className="mt-8 h-[1px] w-0 bg-white/60 group-hover:w-full transition-all duration-700" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

