// components/HeroSplit.tsx
'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSplit() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'center center',
        end: '+=120%',
        pin: true,
        scrub: 1,
      },
    });

    // Orchestrate the timeline
    tl.to('.hero-center-img', { scale: 0.8, rotate: -5, duration: 1 })
      .to('.hero-card-left', { xPercent: -90, opacity: 1, duration: 1 }, '<')
      .to('.hero-card-right', { xPercent: 90, opacity: 1, duration: 1 }, '<');
  }, { scope: container });

  return (
    <div ref={container} className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      <h1 className="absolute text-8xl font-bold text-white uppercase tracking-tighter">
        {/* Who Actually Builds */}
        Leadership
      </h1>
      <div className="hero-card-left opacity-0 absolute w-64 h-96 bg-zinc-800 rounded-xl" />
      
      {/* <div className="hero-center-img w-80 h-[500px] bg-neutral-200 rounded-xl z-10" /> */}
      <div className="hero-card-right opacity-0 absolute w-64 h-96 bg-zinc-800 rounded-xl" />
    </div>
  );
}