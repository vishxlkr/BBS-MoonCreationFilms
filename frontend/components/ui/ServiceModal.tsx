"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { servicesData } from "@/lib/services-data";
import { useLenis } from "@/lib/lenis-context";

interface ServiceModalProps {
   isOpen: boolean;
   onClose: () => void;
   serviceId: string | null;
}

export default function ServiceModal({
   isOpen,
   onClose,
   serviceId,
}: ServiceModalProps) {
   const lenis = useLenis();
   const [isMobile, setIsMobile] = useState(
      () => typeof window !== "undefined" && window.innerWidth < 640,
   );

   useEffect(() => {
      const media = window.matchMedia("(max-width: 639px)");
      const handleChange = () => setIsMobile(media.matches);

      handleChange();
      media.addEventListener("change", handleChange);

      return () => media.removeEventListener("change", handleChange);
   }, []);

   useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose();
      };

      if (isOpen) {
         lenis?.stop();
         document.body.style.overflow = "hidden";
         window.addEventListener("keydown", handleEsc);
      } else {
         lenis?.start();
         document.body.style.overflow = "auto";
      }

      return () => {
         lenis?.start();
         document.body.style.overflow = "auto";
         window.removeEventListener("keydown", handleEsc);
      };
   }, [isOpen, onClose, lenis]);

   const service = serviceId
      ? servicesData.find((item) => item.id === serviceId)
      : null;
   const serviceName = service?.name || "Service Name";
   const longDescription =
      service?.longDescription ||
      "Our detailed approach ensures every moment is captured with cinematic brilliance. This service is tailored specifically to your needs, providing a truly premium experience.";
   const features = service?.features || [
      "Cinematic storytelling",
      "High-end post-production",
      "Multiple camera angles",
      "Premium color grading",
   ];

   return (
      <AnimatePresence>
         {isOpen && (
            <div className="fixed inset-0 z-50 flex items-end justify-end sm:items-stretch">
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={onClose}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[4px]"
               />

               <motion.div
                  initial={isMobile ? { y: "100%" } : { x: "100%" }}
                  animate={isMobile ? { y: 0 } : { x: 0 }}
                  exit={isMobile ? { y: "100%" } : { x: "100%" }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-50 flex h-[88dvh] w-full flex-col overflow-hidden rounded-t-[24px] border border-blue-100 bg-white shadow-2xl sm:h-full sm:max-h-none sm:max-w-[480px] sm:rounded-none sm:border-y-0 sm:border-l sm:border-r-0 sm:border-blue-200"
                  role="dialog"
                  aria-modal="true"
                  data-lenis-prevent
               >
                  <div className="flex justify-center pt-3 sm:hidden">
                     <span className="h-1.5 w-12 rounded-full bg-gray-300" />
                  </div>

                  <div className="sticky top-0 z-10 border-b border-gray-100 bg-white/95 px-4 pb-3 pt-3 backdrop-blur sm:border-b-0 sm:bg-transparent sm:p-0">
                     <button
                        onClick={onClose}
                        className="absolute right-3 top-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:text-blue-600 sm:right-6 sm:top-6 sm:bg-transparent"
                        aria-label="Close modal"
                     >
                        <X size={24} />
                     </button>

                     <h2 className="break-words pr-12 font-heading text-xl leading-tight text-blue-600 sm:mb-6 sm:mt-8 sm:px-6 sm:pr-16 sm:text-3xl md:px-10">
                        {serviceName}
                     </h2>
                  </div>

                  <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-0 md:px-10">
                     <div className="relative mb-5 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-100 sm:mb-8 sm:aspect-video">
                        <span className="font-body text-sm text-gray-400">
                           Example Media
                        </span>
                     </div>

                     <p className="mb-6 font-body text-sm leading-7 text-gray-700 sm:mb-8 sm:text-base sm:leading-relaxed">
                        {longDescription}
                     </p>

                     <h3 className="mb-4 font-accent text-xs uppercase tracking-wider text-blue-600 sm:text-sm">
                        What&apos;s Included
                     </h3>
                     <ul className="mb-6 space-y-3 sm:mb-10">
                        {features.map((item, index) => (
                           <li
                              key={index}
                              className="flex items-start gap-3 font-body text-sm leading-6 text-gray-700 sm:text-base"
                           >
                              <span className="mt-1 text-blue-600">&bull;</span>
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="border-t border-neutral-200 bg-white/95 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:p-5 md:p-6">
                     <Link
                        href="/contact"
                        onClick={onClose}
                        className="group relative flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full bg-blue-500 px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600 active:scale-[0.98] sm:px-8 sm:text-sm sm:tracking-[0.15em]"
                     >
                        <span className="relative z-10 flex items-center gap-2">
                           Book This Service
                           <span className="transition-transform duration-300 group-hover:translate-x-1">
                              &rarr;
                           </span>
                        </span>
                     </Link>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
   );
}
