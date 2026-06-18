"use client";

import { useEffect, useState } from "react";

export default function AIPipeline() {
  const [step, setStep] = useState(0);

  const logs = [
    "Analyzing business workflow...",
    "Generating AI automation system...",
    "Connecting APIs & tools...",
    "Deploying AI agents...",
    "System running ✔",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % logs.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md">

      <h3 className="text-sm text-gray-400">AI Automation Engine</h3>

      <div className="mt-6 space-y-3 text-sm">
        {logs.map((log, i) => (
          <div
            key={i}
            className={`transition-all duration-300 ${
              i === step ? "text-white" : "text-gray-500"
            }`}
          >
            {i === step ? "▶ " : "   "}
            {log}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 h-3 w-3 animate-pulse rounded-full bg-green-500" />
    </div>
  );
}