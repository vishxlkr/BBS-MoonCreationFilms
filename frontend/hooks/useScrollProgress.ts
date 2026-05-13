"use client";

import { useState, useEffect } from "react";

export function useScrollProgress() {
   const [progress, setProgress] = useState(0);

   useEffect(() => {
      const updateScroll = () => {
         const currentScrollY = window.scrollY;
         const scrollHeight = document.body.scrollHeight - window.innerHeight;
         if (scrollHeight > 0) {
            setProgress((currentScrollY / scrollHeight) * 100);
         }
      };

      window.addEventListener("scroll", updateScroll, { passive: true });
      return () => window.removeEventListener("scroll", updateScroll);
   }, []);

   return progress;
}

// "use client";

// import { useState, useEffect } from "react";

// export function useScrollProgress() {
//    const [progress, setProgress] = useState(0);

//    useEffect(() => {
//       let ticking = false;

//       const updateScroll = () => {
//          if (!ticking) {
//             requestAnimationFrame(() => {
//                const currentScrollY = window.scrollY;
//                const scrollHeight =
//                   document.documentElement.scrollHeight - window.innerHeight;

//                const scrollProgress =
//                   scrollHeight > 0 ? (currentScrollY / scrollHeight) * 100 : 0;

//                setProgress(scrollProgress);
//                ticking = false;
//             });

//             ticking = true;
//          }
//       };

//       window.addEventListener("scroll", updateScroll, {
//          passive: true,
//       });

//       updateScroll();

//       return () => {
//          window.removeEventListener("scroll", updateScroll);
//       };
//    }, []);

//    return progress;
// }
