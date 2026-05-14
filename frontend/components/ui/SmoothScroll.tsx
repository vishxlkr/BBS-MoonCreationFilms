"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { LenisContext } from "@/lib/lenis-context";

export default function SmoothScroll({
   children,
}: {
   children: React.ReactNode;
}) {
   const [lenis, setLenis] = useState<Lenis | null>(null);
   const pathname = usePathname();

   useEffect(() => {
      // Reset scroll position on refresh
      window.scrollTo(0, 0);

      // Prevent browser scroll restoration
      if ("scrollRestoration" in history) {
         history.scrollRestoration = "manual";
      }

      // Respect accessibility preferences
      const prefersReducedMotion = window.matchMedia(
         "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      // Create Lenis instance
      const instance = new Lenis({
         duration: 1.2,
         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         orientation: "vertical",
         gestureOrientation: "vertical",
         wheelMultiplier: 1.1,
         touchMultiplier: 2,
         smoothWheel: true,
      });

      setLenis(instance);

      let rafId: number;

      const raf = (time: number) => {
         instance.raf(time);
         rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);

      return () => {
         cancelAnimationFrame(rafId);
         instance.destroy();
         setLenis(null);
      };
   }, []);

   // Smooth scroll to top on route change
   useEffect(() => {
      if (!lenis) return;

      const timer = setTimeout(() => {
         lenis.scrollTo(0, {
            duration: 0.8,
         });
      }, 10);

      return () => clearTimeout(timer);
   }, [pathname, lenis]);

   return (
      <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
   );
}
