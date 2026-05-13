"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
   const outerCursor = useRef<HTMLDivElement>(null);
   const textRef = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      if (window.innerWidth <= 1024) return;

      setIsVisible(true);

      const onMouseMove = (e: MouseEvent) => {
         if (outerCursor.current) {
            gsap.set(outerCursor.current, {
               x: e.clientX,
               y: e.clientY,
            });
         }
      };

      const resetCursor = () => {
         if (!outerCursor.current) return;

         gsap.to(outerCursor.current, {
            width: 26,
            height: 26,
            backgroundColor: "rgba(0, 82, 204, 0.1)",
            borderWidth: "1.5px",
            duration: 0.2,
            ease: "power2.out",
         });

         if (textRef.current) {
            gsap.to(textRef.current, {
               opacity: 0,
               scale: 0.5,
               duration: 0.2,
            });
         }
      };

      const onMouseOver = (e: MouseEvent) => {
         const target = e.target as HTMLElement;
         const cursorTarget = target?.closest?.("[data-cursor]");
         const buttonTarget = target?.closest?.("button, a");

         if (cursorTarget || buttonTarget) {
            const text = cursorTarget?.getAttribute("data-cursor");

            gsap.to(outerCursor.current, {
               width: text ? 65 : 45,
               height: text ? 65 : 45,
               backgroundColor: "rgb(0, 82, 204)",
               borderWidth: "0px",
               duration: 0.2,
               ease: "power2.out",
               overwrite: "auto",
            });

            if (text && textRef.current) {
               textRef.current.innerText = text.toUpperCase();

               gsap.to(textRef.current, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.2,
               });
            }
         } else {
            resetCursor();
         }
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseover", onMouseOver);
      document.addEventListener("mouseleave", resetCursor);

      return () => {
         window.removeEventListener("mousemove", onMouseMove);
         window.removeEventListener("mouseover", onMouseOver);
         document.removeEventListener("mouseleave", resetCursor);
      };
   }, []);

   if (!isVisible) return null;

   return (
      <div
         ref={outerCursor}
         className="fixed top-0 left-0 w-[26px] h-[26px] rounded-full border-[1.5px] border-white pointer-events-none z-[9998] flex items-center justify-center mix-blend-difference"
         style={{ transform: "translate(-50%, -50%)" }}
      >
         <span
            ref={textRef}
            className="font-sans text-[10px] text-black opacity-0 uppercase font-bold tracking-tight text-center leading-none"
         />
      </div>
   );
}
