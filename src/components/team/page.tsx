"use client";

import { useRef } from "react";
import Image from "next/image";
import Bilal from "@/assets/images/bilaal.png";
import Ashhad from "@/assets/images/ashhad.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Bilaal Malik",
    role: "CEO & CO-FOUNDER",
    image: Bilal,
    linkedin: "https://www.linkedin.com/in/bilaalmalik/",
    bio: "Driving growth, partnerships, and long-term vision for AI-powered businesses.",
    skills: [
      "Strategy",
      "Growth",
      "Product",
      "Leadership",
    ],
  },
  {
    name: "Ashhad Rasool",
    role: "CTO & CO-FOUNDER",
    image: Ashhad,
    linkedin: "https://www.linkedin.com/in/ashhadrasool/",
    bio: "Building scalable AI systems, automation workflows, and technical infrastructure.",
    skills: [
      "AI Systems",
      "Automation",
      "Architecture",
      "DevOps",
    ],
  },
];

export default function Team() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top",
          end: "+=200%",
          pin: true,
          pinSpacing: true,
          scrub: 1.8,
        },
      });

      tl.to(".hero-title", {
        scale: 0.85,
        opacity: 0.5,
        duration: 1,
      })
        .to(
          ".hero-card-left",
          {
            x: "-26vw",
            opacity: 1,
            duration: 2,
          },
          "<"
        )
        .to(
          ".hero-card-right",
          {
            x: "26vw",
            opacity: 1,
            duration: 2,
          },
          "<"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[160px]" />
      </div>

      {/* Center Title */}
      <div className="hero-title absolute z-20 text-center">
        <span className="mb-4 block font-mono text-[15px] uppercase tracking-[0.4em] text-[#38b6ff]">
          Leadership
        </span>

        <motion.h2
            initial={{
              y: 120,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(3rem, 7vw, 8rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
              Who Builds
              <br />
              The Future
          </motion.h2>
        {/* <h2 className="text-5xl font-light text-white md:text-8xl">
          
        </h2> */}
      </div>

      {/* CEO */}
      <div className="hero-card-left absolute z-10 opacity-0">
        <div className="w-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          <div className="relative mb-3 h-[320px] overflow-hidden rounded-2xl">
            <Image
              src={team[0].image}
              alt={team[0].name}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="mb-3 inline-flex rounded-full py-1 text-[10px] uppercase tracking-[0.25em] text-white">
            {team[0].role}
          </div>

          <h3 className="text-2xl text-[#38b6ff]">
            {team[0].name}
          </h3>

          <p className="mt-4 leading-relaxed text-zinc-400">
            {team[0].bio}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {team[0].skills?.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
          <a
              href={team[0].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#38b6ff] transition-opacity hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#38b6ff"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.2 4.4-2.2 4.7 0 5.5 3.1 5.5 7.1V24h-5v-7.7c0-1.8 0-4.2-2.6-4.2s-3 2-3 4V24h-5V8z" />
              </svg>

              {/* View LinkedIn */}
            </a>
        </div>
      </div>

      {/* CTO */}
      <div className="hero-card-right absolute z-10 opacity-0">
        <div className="w-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          <div className="relative mb-3 h-[320px] overflow-hidden rounded-2xl">
            <Image
              src={team[1].image}
              alt={team[1].name}
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-3 inline-flex rounded-full py-1 text-[10px] uppercase tracking-[0.25em] text-white">
            {team[1].role}
          </div>

          <h3 className="text-2xl text-[#38b6ff]">
            {team[1].name}
          </h3>

          <p className="mt-4 leading-relaxed text-zinc-400">
            {team[1].bio}
          </p>
          
          <div className="mt-5 flex flex-wrap gap-2">
            {team[1].skills?.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
            <a
              href={team[1].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-lime-400 transition-opacity hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#38b6ff"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.2 4.4-2.2 4.7 0 5.5 3.1 5.5 7.1V24h-5v-7.7c0-1.8 0-4.2-2.6-4.2s-3 2-3 4V24h-5V8z" />
              </svg>

              {/* View LinkedIn */}
            </a>
        </div>
      </div>
    </section>
  );
}