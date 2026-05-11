"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const innerCursor = useRef<HTMLDivElement>(null);
  const outerCursor = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;
    setIsVisible(true);
    
    let outerX = 0, outerY = 0, innerX = 0, innerY = 0;
    const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;

    const onMouseMove = (e: MouseEvent) => {
      innerX = e.clientX;
      innerY = e.clientY;
      if (innerCursor.current) {
        gsap.set(innerCursor.current, { x: innerX, y: innerY });
      }
    };

    const render = () => {
      outerX = lerp(outerX, innerX, 0.15);
      outerY = lerp(outerY, innerY, 0.15);
      if (outerCursor.current) {
        gsap.set(outerCursor.current, { x: outerX, y: outerY });
      }
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    const raf = requestAnimationFrame(render);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorTarget = target?.closest?.("[data-cursor]");
      const buttonTarget = target?.closest?.("button, a");
      
      if (cursorTarget || buttonTarget) {
        const text = cursorTarget?.getAttribute("data-cursor");
        
        gsap.to(outerCursor.current, {
          width: text ? 65 : 45, // Slightly larger for better visibility
          height: text ? 65 : 45,
          backgroundColor: "white",
          borderWidth: "0px", // Remove border on hover for solid look
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });

        // Hide inner dot when outer expands to clean up visual noise
        gsap.to(innerCursor.current, { opacity: 0, duration: 0.2 });

        if (text && textRef.current) {
          textRef.current.innerText = text.toUpperCase();
          gsap.to(textRef.current, { opacity: 1, scale: 1, duration: 0.2 });
        }
      } else {
        resetCursor();
      }
    };

    const resetCursor = () => {
      if (!outerCursor.current) return;
      gsap.to(outerCursor.current, {
        width: 26,
        height: 26,
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight fill for consistency
        borderWidth: "1.5px",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(innerCursor.current, { opacity: 1, duration: 0.2 });
      if (textRef.current) gsap.to(textRef.current, { opacity: 0, scale: 0.5, duration: 0.2 });
    };

    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", resetCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", resetCursor);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={innerCursor}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {/* Outer Circle */}
      <div
        ref={outerCursor}
        className="fixed top-0 left-0 w-[26px] h-[26px] rounded-full border-[1.5px] border-white pointer-events-none z-[9998] flex items-center justify-center mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {/* Text inside */}
        <span 
          ref={textRef} 
          className="font-sans text-[10px] text-black opacity-0 uppercase font-bold tracking-tight text-center leading-none"
        />
      </div>
    </>
  );
}