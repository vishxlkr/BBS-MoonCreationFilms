"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function HeroSection() {
   const headlineRef = useRef<HTMLHeadingElement>(null);
   const sublineRef = useRef<HTMLDivElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);
   const scrollDotRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         const tl = gsap.timeline();

         if (headlineRef.current) {
            tl.fromTo(
               headlineRef.current,
               { y: 80, opacity: 0 },
               { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
            );
         }
         if (sublineRef.current) {
            tl.fromTo(
               sublineRef.current,
               { y: 40, opacity: 0 },
               { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
               "-=0.6",
            );
         }
         if (ctaRef.current) {
            tl.fromTo(
               ctaRef.current,
               { y: 30, opacity: 0 },
               { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
               "-=0.5",
            );
         }
         if (scrollDotRef.current) {
            tl.fromTo(
               scrollDotRef.current,
               { opacity: 0 },
               { opacity: 1, duration: 0.5, ease: "power3.out" },
               "-=0.3",
            );
         }
      });

      return () => ctx.revert();
   }, []);

   return (
      <section className="relative w-full h-[100vh] overflow-hidden">
         {/* Background Video */}
         <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/assets/hero-poster.jpg"
         >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
         </video>

         {/* Cinematic Overlay */}
         {/* <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(107, 196, 255, 0.85) 0%, rgba(28, 52, 190, 0.3) 60%, rgba(255, 255, 255, 1) 100%)"
        }}
      /> */}

         {/* Content */}
         <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 mt-12">
            <h1
               ref={headlineRef}
               className="font-heading text-4xl sm:text-6xl md:text-8xl text-cinematic-blue tracking-[0.1em] mb-6"
               style={{ textShadow: "0 0 60px rgba(39,86,160,0.3)" }}
            >
               CINEMATIC MASTERY
            </h1>
            <div ref={sublineRef}>
               <p className="font-body text-base sm:text-lg md:text-2xl text-ice-blue max-w-2xl mb-10 tracking-wide font-light">
                  Visual storytelling crafted for the moments that matter. We
                  don&apos;t just capture video; we create films.
               </p>
            </div>
            <div ref={ctaRef}>
               <Link
                  href="/work"
                  className="relative overflow-hidden border border-cinematic-blue px-8 py-3 rounded-full font-accent uppercase tracking-[0.1em] text-ice-blue transition-all group hover:border-transparent inline-block"
                  data-cursor="view"
               >
                  <span className="relative z-10 group-hover:text-charcoal-night">
                     View Our Work
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cinematic-blue to-rose-blush opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
               </Link>
            </div>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
            <div
               ref={scrollDotRef}
               className="w-[6px] h-[6px] bg-ice-blue rounded-full animate-bounce"
            />
         </div>
      </section>
   );
}
