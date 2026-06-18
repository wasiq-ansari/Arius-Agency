"use client";

import { motion } from "framer-motion";

const items: string[] = [
  "Workflow Automation",
  "AI Agents",
  "Data Pipelines",
  "LLM Integration",
  "Process Mining",
  "Predictive Analytics",
  "Autonomous Systems",
  "Intelligent Routing",
  "Workflow Automation",
  "AI Agents",
  "Data Pipelines",
  "LLM Integration",
  "Process Mining",
  "Predictive Analytics",
  "Autonomous Systems",
  "Intelligent Routing",
  "Workflow Automation",
  "AI Agents",
  "Data Pipelines",
  "LLM Integration",
  "Process Mining",
  "Predictive Analytics",
  "Autonomous Systems",
  "Intelligent Routing",
];

export default function Marquee() {
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden w-full bg-white border-y py-10"
      style={{ borderColor: "var(--border)" }}
    >
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-6"
          >
            <span
              className="text-md uppercase tracking-widest"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "var(--primary-foreground)",
                fontWeight: 800,
              }}
            >
              {item}
            </span>

            <span
              style={{
                color: "var(--primary)",
                fontSize: "20px",
              }}
            >
              •
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}