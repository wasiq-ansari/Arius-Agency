"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessScroll() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "Business Audit",
      desc: "We dig into how your business actually runs day-to-day, not how the SOP doc says it runs. We find the bottlenecks, the duplicate work, and the spreadsheet with 47 tabs that one person refuses to let go of. Then we tell you exactly what's worth automating and what isn't.",
    },
    {
      title: "Systems Buildout",
      desc: "Now we build the thing. CRM setup, data structure, workflows that actually fire when they should, using Airtable, ClickUp, custom databases, or whatever fits your stack. Less duct tape, fewer 'wait, did that actually send?' moments.",
    },
    {
      title: "AI & Automation",
      desc: "Now things start moving on their own. We connect your tools, automate the handoffs, and put AI agents on the work your team shouldn't be touching. Data entry, lead routing, follow-ups, customer replies. Less copy-pasting, fewer dropped balls, more time on work that actually needs a human.",
    },
    {
      title: "Training & Handover",
      desc: "We don't build and ghost. Your team gets proper training, docs they'll actually open, and a real human to message when something feels off. Because the fanciest automation is worthless if everyone's too nervous to use it.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      steps.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.step-${i}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-32 text-black">
      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2">

        {/* LEFT SIDE (Sticky Steps) */}
        <div className="sticky top-32 h-fit space-y-6">

          {steps.map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4"
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border text-md font-bold transition-all duration-300 ${
                  active === i
                    ? "bg-[#04A1F8] text-white border-transparent scale-110"
                    : "border-white/20 text-gray-400"
                }`}
              >
                {i + 1}
              </div>

              {/* Line */}
              {i !== steps.length - 1 && (
                <div className="absolute left-6 mt-12 h-3 w-[2px] bg-[#04A1F8]/10" />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (Content Scroll Sections) */}
        <div className="space-y-[60vh]">

          {steps.map((step, i) => (
            <div key={i} className={`step-${i} min-h-[60vh] flex items-center`}>
              
              <AnimatePresence mode="wait">
                {active === i && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-xl"
                  >
                    <h2 className="text-3xl font-bold md:text-4xl">
                      {step.title}
                    </h2>

                    <p className="mt-4 text-lg text-gray-500">
                      {step.desc}
                    </p>

                    {/* Glow card */}
                    {/* <div className="mt-6 h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500" /> */}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



