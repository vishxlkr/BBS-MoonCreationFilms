"use client";

import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";

const container = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.12,
         delayChildren: 0.15,
      },
   },
};

const fadeUp = {
   hidden: { opacity: 0, y: 36 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: cubicBezier(0.22, 1, 0.36, 1) },
   },
};

export default function HeroSection() {
   return (
      <>
         <div className="h-[72px] sm:h-[90px]" aria-hidden />

         <section className="relative min-h-[100dvh] min-h-[100svh] w-full overflow-hidden bg-gray-900">
            <video
               autoPlay
               muted
               loop
               playsInline
               poster="/assets/hero-poster.jpg"
               className="absolute inset-0 h-full w-full object-cover scale-[1.02] sm:scale-[1.03]"
            >
               <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 z-10 bg-black/30 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute top-0 left-1/2 z-10 h-[min(50vh,420px)] w-[min(90vw,700px)] -translate-x-1/2 rounded-full bg-cinematic-blue/15 blur-[100px] pointer-events-none" />

            <div className="relative z-20 flex min-h-[100dvh] min-h-[100svh] items-center py-12 sm:py-16">
               <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-12">
                  <motion.div
                     className="max-w-5xl"
                     variants={container}
                     initial="hidden"
                     animate="visible"
                  >
                     <motion.p
                        variants={fadeUp}
                        className="mb-4 sm:mb-5 text-xs sm:text-sm uppercase tracking-[0.22em] sm:tracking-[0.3em] text-blue-400 font-medium"
                     >
                        Premium Cinematic Storytelling
                     </motion.p>

                     <motion.h1
                        variants={fadeUp}
                        className="font-heading text-[clamp(2.25rem,9vw,7rem)] leading-[0.95] tracking-[-0.04em] text-white"
                     >
                        Stories That
                        <span className="block text-blue-400 mt-1">
                           Feel Like Cinema
                        </span>
                     </motion.h1>

                     <motion.div variants={fadeUp}>
                        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
                           Premium wedding films, brand visuals, and cinematic
                           storytelling crafted with emotion, elegance, and
                           visual mastery.
                        </p>
                     </motion.div>

                     <motion.div
                        variants={fadeUp}
                        className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                     >
                        <Link
                           href="/work"
                           className="inline-flex justify-center rounded-full bg-blue-600 border border-blue-600 px-7 sm:px-8 py-3.5 sm:py-4 text-white transition-all duration-300 hover:bg-blue-700 hover:border-blue-700 hover:scale-[1.02] hover:shadow-lg font-medium tracking-wide text-center min-h-[48px] items-center"
                        >
                           View Our Work
                        </Link>

                        <Link
                           href="/contact"
                           className="inline-flex justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 sm:px-8 py-3.5 sm:py-4 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 text-center min-h-[48px] items-center"
                        >
                           Contact Us
                        </Link>
                     </motion.div>

                     <motion.div
                        variants={fadeUp}
                        className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-ice-blue/70"
                     >
                        <div>
                           <p className="text-2xl sm:text-3xl font-semibold text-light-blue">
                              100+
                           </p>
                           <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] mt-1">
                              Projects Delivered
                           </p>
                        </div>
                        <div>
                           <p className="text-2xl sm:text-3xl font-semibold text-light-blue">
                              5★
                           </p>
                           <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] mt-1">
                              Client Satisfaction
                           </p>
                        </div>
                        <div>
                           <p className="text-2xl sm:text-3xl font-semibold text-light-blue">
                              4K
                           </p>
                           <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] mt-1">
                              Cinematic Quality
                           </p>
                        </div>
                     </motion.div>
                  </motion.div>
               </div>
            </div>
         </section>
      </>
   );
}
