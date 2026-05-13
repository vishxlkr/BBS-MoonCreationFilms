"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { servicesData } from "@/lib/services-data";

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
   useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose();
      };
      if (isOpen) {
         document.body.style.overflow = "hidden";
         window.addEventListener("keydown", handleEsc);
      } else {
         document.body.style.overflow = "auto";
      }
      return () => {
         document.body.style.overflow = "auto";
         window.removeEventListener("keydown", handleEsc);
      };
   }, [isOpen, onClose]);

   const service = serviceId
      ? servicesData.find((s) => s.id === serviceId)
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
            <div className="fixed inset-0 z-50 flex justify-end">
               {/* Backdrop */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={onClose}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[4px]"
               />

               {/* Drawer */}
               <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-50 w-full max-w-[480px] h-full bg-white border-l border-blue-200 shadow-2xl overflow-y-auto flex flex-col"
                  role="dialog"
                  aria-modal="true"
                  data-lenis-prevent
               >
                  <div className="p-6 md:p-10 flex-grow">
                     <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-600 hover:text-blue-600 transition-colors p-2"
                        aria-label="Close modal"
                     >
                        <X size={24} />
                     </button>

                     <h2 className="font-heading text-3xl text-blue-600 mt-8 mb-6">
                        {serviceName}
                     </h2>

                     <div className="aspect-video bg-gray-100 rounded-lg mb-8 overflow-hidden border border-gray-200 flex items-center justify-center relative">
                        {/* Placeholder for video/image */}
                        <span className="font-body text-gray-400 text-sm">
                           Example Media
                        </span>
                     </div>

                     <p className="font-body text-gray-700 leading-relaxed mb-8">
                        {longDescription}
                     </p>

                     <h3 className="font-accent uppercase text-sm tracking-wider text-blue-600 mb-4">
                        What's Included
                     </h3>
                     <ul className="space-y-3 mb-10">
                        {features.map((item, i) => (
                           <li
                              key={i}
                              className="flex items-start gap-3 text-gray-700 font-body"
                           >
                              <span className="text-blue-600 mt-1">•</span>
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="sticky bottom-0 left-0 right-0 border-t border-neutral-200 bg-white/90 backdrop-blur-xl p-5 md:p-6 shadow-[0_-8px_30px_rgba(0,0,0,0.05)]">
                     <Link
                        href="/contact"
                        onClick={onClose}
                        className="group relative flex items-center justify-center w-full overflow-hidden rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600 active:scale-[0.98]"
                     >
                        <span className="relative z-10 flex items-center gap-2">
                           Book This Service
                           <span className="transition-transform duration-300 group-hover:translate-x-1">
                              →
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
