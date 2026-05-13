"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function HeroSection() {
   const headlineRef = useRef<HTMLHeadingElement>(null);
   const sublineRef = useRef<HTMLDivElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);
   const scrollRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         const tl = gsap.timeline();

         tl.fromTo(
            headlineRef.current,
            {
               y: 80,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 1,
               duration: 1.2,
               ease: "power4.out",
            },
         )
            .fromTo(
               sublineRef.current,
               {
                  y: 40,
                  opacity: 0,
               },
               {
                  y: 0,
                  opacity: 1,
                  duration: 0.9,
                  ease: "power3.out",
               },
               "-=0.8",
            )
            .fromTo(
               ctaRef.current,
               {
                  y: 20,
                  opacity: 0,
               },
               {
                  y: 0,
                  opacity: 1,
                  duration: 0.7,
                  ease: "power3.out",
               },
               "-=0.5",
            )
            .fromTo(
               scrollRef.current,
               {
                  opacity: 0,
               },
               {
                  opacity: 1,
                  duration: 0.6,
               },
               "-=0.2",
            );
      });

      return () => ctx.revert();
   }, []);

   return (
      <>
         {/* Navbar Spacer */}
         <div className="h-[90px]" />

         <section className="relative h-screen w-full overflow-hidden bg-deep-navy">
            {/* Background Video */}
            <video
               autoPlay
               muted
               loop
               playsInline
               poster="/assets/hero-poster.jpg"
               className="absolute inset-0 h-full w-full object-cover scale-[1.03]"
            >
               <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Premium Overlay */}
            {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-deep-navy/85 via-deep-navy/45 to-deep-navy" /> */}

            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cinematic-blue/10 blur-[120px]" />

            {/* Main Content */}
            <div className="relative z-20 flex h-full items-center">
               <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12">
                  <div className="max-w-5xl">
                     {/* Premium Tag */}
                     <p className="mb-5 text-sm uppercase tracking-[0.3em] text-light-blue font-medium">
                        Premium Cinematic Storytelling
                     </p>

                     {/* Headline */}
                     <h1
                        ref={headlineRef}
                        className="font-heading text-[3rem] sm:text-[5rem] md:text-[7rem] leading-[0.92] tracking-[-0.04em] text-ice-blue"
                     >
                        Stories That
                        <span className="block text-light-blue">
                           Feel Like Cinema
                        </span>
                     </h1>

                     {/* Subheadline */}
                     <div ref={sublineRef}>
                        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ice-blue/75">
                           Premium wedding films, brand visuals, and cinematic
                           storytelling crafted with emotion, elegance, and
                           visual mastery.
                        </p>
                     </div>

                     {/* CTA */}
                     <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
                        <Link
                           href="/work"
                           className="
   rounded-full
   bg-[#001D39]
   border border-[#7BBDE8]/20
   px-8 py-4
   text-white
   transition-all duration-300
   hover:bg-[#0A4174]
   hover:border-[#7BBDE8]/40
   hover:scale-[1.02]
   hover:shadow-[0_0_40px_rgba(123,189,232,0.15)]
   font-medium tracking-wide
   "
                        >
                           View Our Work
                        </Link>

                        <Link
                           href="/blog#contact"
                           className="
                           rounded-full
                           border border-light-blue/20
                           bg-white/5
                           backdrop-blur-md
                           px-8 py-4
                           text-ice-blue
                           transition-all duration-300
                           hover:bg-white/10
                           hover:border-light-blue/40
                           "
                        >
                           Contact Us
                        </Link>
                     </div>

                     {/* Premium Stats */}
                     <div className="mt-16 flex flex-wrap gap-10 text-ice-blue/60">
                        <div>
                           <h3 className="text-3xl font-semibold text-light-blue">
                              100+
                           </h3>
                           <p className="text-xs uppercase tracking-[0.25em]">
                              Projects Delivered
                           </p>
                        </div>

                        <div>
                           <h3 className="text-3xl font-semibold text-light-blue">
                              5★
                           </h3>
                           <p className="text-xs uppercase tracking-[0.25em]">
                              Client Satisfaction
                           </p>
                        </div>

                        <div>
                           <h3 className="text-3xl font-semibold text-light-blue">
                              4K
                           </h3>
                           <p className="text-xs uppercase tracking-[0.25em]">
                              Cinematic Quality
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div
               ref={scrollRef}
               className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
            >
               <div className="flex h-[52px] w-[30px] justify-center rounded-full border border-light-blue/25 p-2">
                  <div className="h-[10px] w-[4px] rounded-full bg-light-blue animate-bounce" />
               </div>
            </div> */}
         </section>
      </>
   );
}
