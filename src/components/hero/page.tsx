"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type CountUpProps = {
  target: number;
  duration?: number;
};

function CountUp({
  target,
  duration = 2000,
}: CountUpProps) {
  const [value, setValue] = useState(0);

  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !started.current
        ) {
          started.current = true;

          const start = Date.now();

          const tick = () => {
            const elapsed = Date.now() - start;

            const progress = Math.min(
              elapsed / duration,
              1
            );

            const eased =
              1 - Math.pow(1 - progress, 3);

            setValue(
              Math.round(eased * target)
            );

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    const current = ref.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }

      observer.disconnect();
    };
  }, [target, duration]);

  return <span ref={ref}>{value}</span>;
}

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 60,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Loyalty",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-black">
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-8 pb-20 pt-32 md:px-16">
        {/* Grid Lines */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(237, 236, 232, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(237, 236, 232, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "130px 836px",
          }}
        />

        {/* Label */}
        <motion.div
          className="mb-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "18px",
              letterSpacing: "0.18em",
              color: "#38b6ff",
              fontWeight: "600",
              textTransform: "uppercase",
              display: "flex",
              gap: "10px",
            }}
          >
            <span>
            AI</span>  Automation Agency
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
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
              fontSize: "clamp(3.5rem, 9vw, 10rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
            We automate
            <br />
            <span
              style={{
                fontStyle: "italic",
                color: "#FFFFFF",
              }}
            >
              the impossible.
            </span>
          </motion.h1>
        </div>

        {/* Bottom Row */}
        <motion.div
          className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-0"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <p
            className="max-w-sm md:max-w-xl flex gap-4"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "18px",
              lineHeight: 1.65,
              color: "#fefefe",
              fontWeight: 300,
            }}
          >
            <span className="">
              <svg width="76" height="87" viewBox="0 0 76 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.6162 6.32755C44.4786 6.32742 47.0526 8.07002 48.1158 10.7277L74.9034 77.6919C75.4289 79.0056 74.4614 80.4347 73.0465 80.4347L60.7692 80.4347C58.2603 80.4347 56.0164 78.8737 55.1438 76.5215L30.1051 9.02359C29.6205 7.71722 30.5868 6.32807 31.9802 6.328L41.6162 6.32755Z" fill="#04A1F8"/>
                <path d="M27.1568 23.8261C26.4906 22.1607 24.1384 22.1465 23.4521 23.8036L1.14563 77.6655C0.60027 78.9823 1.56813 80.4307 2.99344 80.4307L15.916 80.4308C18.0124 80.4308 19.8862 79.123 20.6092 77.1552L32.8992 43.7074C33.5807 41.8528 33.5517 39.8115 32.8177 37.9769L27.1568 23.8261Z" fill="#04A1F8"/>
              </svg>
            </span>
            We build bespoke AI systems that eliminate repetitive work,
            accelerate decisions, and create compounding operational leverage
            for ambitious companies.
          </p>

          <div className="flex gap-12 md:gap-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1"
              >
                <span
                  style={{
                    fontFamily:
                      "'Instrument Serif', serif",
                    fontSize:
                      "clamp(2rem, 4vw, 3rem)",
                    lineHeight: 1,
                    color: "var(--foreground)",
                  }}
                >
                  <CountUp target={stat.value} />
                  <span className="pl-1">{stat.suffix}</span>
                </span>

                <span
                  style={{
                    fontFamily:
                      "'DM Mono', monospace",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    color: "#FFFFFF80",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-8 right-8 flex items-center gap-3 md:right-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "var(--muted-foreground)",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>

          <motion.div
            className="h-12 w-px"
            style={{
              backgroundColor:
                "var(--muted-foreground)",
            }}
            animate={{
              scaleY: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div> */}
      </div>
    </section>
  );
}