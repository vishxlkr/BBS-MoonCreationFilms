"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/lib/lenis-context";

export default function ScrollToTop() {
   const pathname = usePathname();
   const lenis = useLenis();

   useEffect(() => {
      // Scroll to top on route change
      if (lenis) {
         lenis.scrollTo(0, { immediate: true });
      } else {
         // Fallback if Lenis is not available
         window.scrollTo({ top: 0, behavior: "instant" });
      }
   }, [pathname, lenis]);

   useEffect(() => {
      // Scroll to top on page refresh/mount
      if (lenis) {
         lenis.scrollTo(0, { immediate: true });
      } else {
         window.scrollTo({ top: 0, behavior: "instant" });
      }
   }, [lenis]);

   return null;
}
