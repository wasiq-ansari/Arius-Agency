// // app/providers.tsx
// 'use client';
// import { useEffect } from 'react';
// import { ReactLenis } from '@studio-freight/react-lenis';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// export function Providers({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Synchronize Lenis scrolling timeline updates directly into GSAP's engine tick
//     ScrollTrigger.refresh();
//   }, []);

//   return (
//     <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
//       {children}
//     </ReactLenis>
//   );
// }