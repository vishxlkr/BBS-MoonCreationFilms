"use client";

import { useState, useEffect } from "react";
import { useLenis } from "@/lib/lenis-context";

export function useScrollProgress() {
   const [progress, setProgress] = useState(0);
   const lenis = useLenis();

   useEffect(() => {
      if (lenis) {
         const onScroll = () => {
            setProgress(lenis.progress * 100);
         };
         onScroll();
         const unsubscribe = lenis.on("scroll", onScroll);
         return unsubscribe;
      }

      const updateScroll = () => {
         const currentScrollY = window.scrollY;
         const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
         if (scrollHeight > 0) {
            setProgress((currentScrollY / scrollHeight) * 100);
         } else {
            setProgress(0);
         }
      };

      updateScroll();
      window.addEventListener("scroll", updateScroll, { passive: true });
      return () => window.removeEventListener("scroll", updateScroll);
   }, [lenis]);

   return progress;
}
