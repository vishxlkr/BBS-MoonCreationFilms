"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { LenisContext } from "@/lib/lenis-context";

export default function SmoothScroll({
   children,
}: {
   children: React.ReactNode;
}) {
   const [lenis, setLenis] = useState<Lenis | null>(null);

   useEffect(() => {
      const prefersReduced = window.matchMedia(
         "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      const instance = new Lenis({
         duration: 1.5,
         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         smoothWheel: true,
         syncTouch: false,
         wheelMultiplier: 0.95,
         touchMultiplier: 1.2,
         lerp: 0.1,
      });

      setLenis(instance);

      let rafId: number;

      const raf = (time: number) => {
         instance.raf(time);
         rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);

      const handleResize = () => {
         instance.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
         cancelAnimationFrame(rafId);
         window.removeEventListener("resize", handleResize);
         instance.destroy();
         setLenis(null);
      };
   }, []);

   return (
      <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
   );
}
