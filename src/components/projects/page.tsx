"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { motion } from "framer-motion";
import { useReveal } from "@/components/useReveal";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Digital Experience Studio",
    desc: "Cinematic storytelling with immersive scroll-based interactions and motion design.",
    tech: ["Next.js", "GSAP", "Lenis"],
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
  },
  {
    title: "SaaS Analytics Platform",
    desc: "Real-time dashboard system with scalable architecture and data visualization.",
    tech: ["React", "Charts", "Tailwind"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "E-commerce Experience",
    desc: "High-conversion shopping flow with refined micro-interactions.",
    tech: ["Next.js", "Stripe", "UI/UX"],
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    title: "Mobile UI System",
    desc: "Minimal design system built for modern scalable applications.",
    tech: ["Design", "Motion"],
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

export default function BigCardScroll() {
  const sectionRef = useRef(null);
  const { ref, visible } = useReveal("-80px");

  // Lenis smooth scroll
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
    return () => lenis.destroy();
  }, []);

  // GSAP scroll stagger + focus shift
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          {
            y: 120,
            opacity: 0,
            scale: 0.92,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // subtle line progression feel
      gsap.to(".progress", {
        height: "90%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full mx-auto px-6 py-18 pb-22 bg-[#f1f1f1] overflow-hidden">
      {/* TITLE */}
        <motion.div
          ref={ref}
          className="flex flex-col items-center gap-6 text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "15px",
              letterSpacing: "0.18em",
              color: "#38b6ff",
              textTransform: "uppercase",
            }}
          >            
            The Journey
          </span>

          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)",
              lineHeight: 0.9,
              fontWeight: 400,
              color: "#1c1f26",
              maxWidth: "900px",
            }}
          >
            Where Design Meets Code {" "}<br/>
            <em style={{ color: "#38b6ff" , display: "block", marginTop: "20px"}}>
            Case Studies
            </em>
          </h2>

          {/* <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
              fontWeight: 300,
              maxWidth: "620px",
            }}
          >
            Book a free 45-minute discovery call.
            We&apos;ll identify your highest-leverage
            automation opportunity - no commitment
            required.
          </p> */}  
        </motion.div>
        
      <div className="max-w-[1440px] m-auto" ref={sectionRef}>

        {/* TITLE */}
        {/* <div className="mb-20">
          <h2 className="text-6xl md:text-7xl leading-tight">
            Selected Work
          </h2>
          <p className="text-white/40 mt-5 max-w-md">
            A cinematic scroll experience of featured projects.
          </p>
        </div> */}



        {/* PROGRESS LINE */}
        <div className="absolute left-4 md:left-1/2 rounded-xl top-70 w-[2px] h-full bg-[#38b6ff]">
          <div className="progress w-full h-0 bg-[#DDDDDD]" />
        </div>

        {/* BIG CARDS */}
        <div className="space-y-16">

          {projects.map((p, i) => (
            <div
              key={i}
              className="card bg-[#1c1f26] p-6 rounded-3xl relative flex flex-col md:flex-row items-center gap-16"
            >

              {/* DOT */}
              {/* <div className="absolute left-1/2 top-22  -translate-x-1/2 w-3 h-3 rounded-full bg-[#38b6ff] before:content-['']
      before:absolute
      before:left-[5px]
      before:bottom-0
      before:h-[100px]
      before:w-[2px]
      before:bg-[#38b6ff]
      " /> */}

              {/* IMAGE BIG CARD */}
              <div className="md:w-1/2 overflow-hidden rounded-2xl border border-white/10 group">
                <img
                  src={p.img}
                  className="h-[480px] w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-light">
                  {p.title}
                </h3>

                <p className="text-white/70 mt-5 text-lg leading-relaxed max-w-lg">
                  {p.desc}
                </p>

                {/* TECH CHIPS */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[15px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* underline reveal */}
                <div className="mt-8 h-[1px] w-0 bg-white/60 group-hover:w-full transition-all duration-700" />
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}