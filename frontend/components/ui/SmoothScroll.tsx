// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

// export default function SmoothScroll({
//    children,
// }: {
//    children: React.ReactNode;
// }) {
//    useEffect(() => {
//       // Reset scroll on refresh
//       window.scrollTo(0, 0);

//       if ("scrollRestoration" in history) {
//          history.scrollRestoration = "manual";
//       }

//       const lenis = new Lenis({
//          smoothWheel: true,
//          syncTouch: true,
//          lerp: 0.08, // lower = smoother, higher = snappier
//          wheelMultiplier: 1,
//          touchMultiplier: 1.5,
//       });

//       function raf(time: number) {
//          lenis.raf(time);
//          requestAnimationFrame(raf);
//       }

//       const rafId = requestAnimationFrame(raf);

//       return () => {
//          cancelAnimationFrame(rafId);
//          lenis.destroy();
//       };
//    }, []);

//    return <>{children}</>;
// }

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
   children,
}: {
   children: React.ReactNode;
}) {
   useEffect(() => {
      const lenis = new Lenis({
         lerp: 0.18, // faster response, less lag
         wheelMultiplier: 1,
         touchMultiplier: 1,
         smoothWheel: true,
         syncTouch: true,
      });

      let rafId: number;

      const raf = (time: number) => {
         lenis.raf(time);
         rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);

      return () => {
         cancelAnimationFrame(rafId);
         lenis.destroy();
      };
   }, []);

   return <>{children}</>;
}
