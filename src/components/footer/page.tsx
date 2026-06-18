"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.from(".footer-title", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".footer-item", {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="w-full relative overflow-hidden bg-[#f5f5f5] text-black"
    >
      {/* Glow Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[160px]" />
      </div> */}

      <div className="relative mx-auto max-w-[1440px] px-6 py-14">

        {/* TOP CTA SECTION */}
        {/* <div className="footer-title text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Let’s Build Your AI Automation System
          </h2>

          <p className="mt-4 text-gray-400">
            Stop manual work — start scaling with intelligent automation.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 font-medium text-black"
          >
            Book Free Strategy Call
          </motion.button>
        </div> */}


        <div className="footer-about mt-6 grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <div className="footer-about-column-1 max-w-sm">
            {/* <h4 className="mb-4 text-lg font-semibold">AI Agency</h4> */}
            <p className="text-2xl text-gray-900 relative font-['Instrument Serif', serif]" >
            <svg width="80" height="92" viewBox="0 0 71 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5">
                <path d="M38.2587 5.86937C41.1211 5.86923 43.6952 7.61184 44.7583 10.2695L69.3992 71.8673C69.9247 73.181 68.9572 74.6101 67.5423 74.6101L56.6702 74.6101C54.1614 74.6101 51.9174 73.0491 51.0448 70.6969L27.9968 8.56535C27.5122 7.25898 28.4785 5.86982 29.8718 5.86976L38.2587 5.86937Z" fill="#04A1F8"/>
                <path d="M25.3225 22.4316C24.6563 20.7663 22.304 20.7521 21.6178 22.4092L1.14567 71.8418C0.600304 73.1586 1.56816 74.607 2.99347 74.607L14.5108 74.607C16.6072 74.607 18.481 73.2992 19.204 71.3315L30.4402 40.7516C31.1217 38.8969 31.0927 36.8556 30.3588 35.0211L25.3225 22.4316Z" fill="#04A1F8"/>
            </svg>

              We build AI systems that automate your business workflows and scale operations 10x faster.
            </p>

            {/* Column 4 */}
            <div>
              <div className="mt-6 max-w-sm">
                  {/* <h4 className="mb-4 text-lg font-semibold">Contact</h4> */}
                  <ul className="space-y-2 max-w-xs text-md text-gray-600">
                  <li>Phone: +92 313 247 7173</li>
                  <li>Email: info@ariusautomation.com</li>
                  <li>Address: 108 W 39th Street, Ste 1006 New York, NY 10018 United States</li>
                  </ul>
              </div>
            </div>
          </div>

            {/* GRID LINKS */}
            <div className="footer-item grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Column 2 */}
            <div>
                <h4 className="mb-4 text-lg font-semibold">CRM & Sales Systems</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-black cursor-pointer">HubSpot Implementation</li>
                <li className="hover:text-black cursor-pointer">Salesforce Implementation</li>
                <li className="hover:text-black cursor-pointer">Pipedrive & Monday.com CRM</li>
                <li className="hover:text-black cursor-pointer">CRM Migration & Cleanup</li>
                <li className="hover:text-black cursor-pointer">GTM & RevOps Consulting</li>
                </ul>
            </div>

            {/* Column 3 */}
            <div>
                <h4 className="mb-4 text-lg font-semibold">AI & Conversational Systems</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-black cursor-pointer">AI Agents & Agentic Workflows</li>
                <li className="hover:text-black cursor-pointer">Conversational AI Bots</li>
                <li className="hover:text-black cursor-pointer">RAG & Knowledge Base Systems</li>
                <li className="hover:text-black cursor-pointer">AI Document Processing</li>
                <li className="hover:text-black cursor-pointer">Custom AI Integrations</li>
                </ul>
            </div>

            {/* Column 4 */}
            <div>
                <h4 className="mb-4 text-lg font-semibold">Workflow Automation</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-black cursor-pointer">Zapier Development</li>
                <li className="hover:text-black cursor-pointer">Make.com Development</li>
                <li className="hover:text-black cursor-pointer">n8n Development</li>
                <li className="hover:text-black cursor-pointer">Process Automation Audit</li>
                <li className="hover:text-black cursor-pointer">API & System Integrations</li>
                </ul>
            </div>

            {/* Column 4 */}
            <div>
                <h4 className="mb-4 text-lg font-semibold">Custom Builds</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-black cursor-pointer">Custom CRM Development</li>
                <li className="hover:text-black cursor-pointer">Custom ERP Development</li>
                <li className="hover:text-black cursor-pointer">Custom Automation Engineering</li>
                <li className="hover:text-black cursor-pointer">Internal Tools & Dashboards</li>
                <li className="hover:text-black cursor-pointer">Web Applications & APIs</li>
                </ul>
            </div>

            {/* Column 5 */}
            <div>
                <h4 className="mb-4 text-lg font-semibold">Company</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-black cursor-pointer">About Us</li>
                <li className="hover:text-black cursor-pointer">Industries</li>
                <li className="hover:text-black cursor-pointer">Careers</li>
                <li className="hover:text-black cursor-pointer">Case Studies</li>
                <li className="hover:text-black cursor-pointer">Contact Us</li>
                </ul>
            </div>
            {/* Column 5 */}
            <div>
                <h4 className="mb-4 text-lg font-semibold">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                {/* <li className="hover:text-black cursor-pointer">About Us</li> */}
                <li className="hover:text-black cursor-pointer">Blog</li>
                <li className="hover:text-black cursor-pointer">Podcast</li>
                <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
                {/* <li className="hover:text-black cursor-pointer">Case Studies</li> */}
                {/* <li className="hover:text-black cursor-pointer">Contact</li> */}
                </ul>
            </div>

            
            </div>
        </div>


        {/* BOTTOM BAR */}
        <div className="footer-item mt-10 flex flex-col items-center text-center justify-center border-t border-white/10 pt-6 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} AI Automation Agency. All rights reserved.</p>
{/* 
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-black cursor-pointer">Privacy</span>
            <span className="hover:text-black cursor-pointer">Terms</span>
            <span className="hover:text-black cursor-pointer">Cookies</span>
          </div> */}
        </div>

      </div>
    </footer>
  );
}