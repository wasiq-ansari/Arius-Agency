"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/components/useReveal";

export default function CTA() {
  const { ref, visible } = useReveal("-80px");

  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section
      id="contact"
      className="w-full relative overflow-hidden px-8 py-40 md:px-16"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(197,255,71,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <motion.div
          ref={ref}
          className="flex flex-col items-center gap-10 text-center"
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
              fontWeight: 600,
            }}
          >
            Ready to automate?
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
            Let&apos;s build something that{" "}
            <em style={{ color: "#38b6ff" }}>
              compounds.
            </em>
          </h2>

          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "18px",
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
          </p>

          {!submitted ? (
            <form
              className="flex w-full max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={(
                e: React.FormEvent<HTMLFormElement>
              ) => {
                e.preventDefault();

                if (email.trim()) {
                  setSubmitted(true);
                }
              }}
            >
              <input
                type="email"
                placeholder="your@company.com"
                value={email}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement>
                ) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 outline-none transition-all duration-200"
                style={{
                  backgroundColor:
                    "var(--secondary)",
                  border:
                    "1px solid var(--border)",
                  fontFamily:
                    "'Geist', sans-serif",
                  fontSize: "14px",
                  color: "var(--foreground)",
                  fontWeight: 300,
                  borderRadius: "10px",
                }}
                onFocus={(
                  e: React.FocusEvent<HTMLInputElement>
                ) => {
                  e.currentTarget.style.borderColor =
                    "#38b6ff";
                }}
                onBlur={(
                  e: React.FocusEvent<HTMLInputElement>
                ) => {
                  e.currentTarget.style.borderColor =
                    "var(--border)";
                }}
              />

              <button
                type="submit"
                className="shrink-0 px-8 py-3.5 transition-opacity duration-200"
                style={{
                  backgroundColor: "#38b6ff",
                  color: "#FFFFFF",
                  fontFamily:
                    "'Geist', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  borderRadius: "10px",
                  letterSpacing: "0.12em",
                  // textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(
                  e: React.MouseEvent<HTMLButtonElement>
                ) => {
                  e.currentTarget.style.opacity =
                    "0.85";
                }}
                onMouseLeave={(
                  e: React.MouseEvent<HTMLButtonElement>
                ) => {
                  e.currentTarget.style.opacity =
                    "1";
                }}
              >
                Book a Call
              </button>
            </form>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="flex items-center gap-3 px-8 py-4"
              style={{
                border:
                  "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <span
                style={{
                  color: "var(--primary)",
                  fontSize: "18px",
                }}
              >
                •
              </span>

              <span
                style={{
                  fontFamily:
                    "'DM Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  color: "var(--foreground)",
                }}
              >
                We&apos;ll be in touch within 24
                hours.
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}