"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";

interface LightboxProps {
   isOpen: boolean;
   onClose: () => void;
   videoUrl?: string;
   title?: string;
   description?: string;
   onNext?: () => void;
   onPrev?: () => void;
}

export default function Lightbox({
   isOpen,
   onClose,
   videoUrl,
   title,
   description,
   onNext,
   onPrev,
}: LightboxProps) {
   useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose();
         if (e.key === "ArrowRight" && onNext) onNext();
         if (e.key === "ArrowLeft" && onPrev) onPrev();
      };

      if (isOpen) {
         document.body.style.overflow = "hidden";
         window.addEventListener("keydown", handleKeyDown);
      }

      return () => {
         document.body.style.overflow = "auto";
         window.removeEventListener("keydown", handleKeyDown);
      };
   }, [isOpen, onClose, onNext, onPrev]);

   if (!isOpen) return null;

   const content = (
      <AnimatePresence>
         <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="absolute inset-0 bg-deep-navy/95 backdrop-blur-md"
               onClick={onClose}
            />

            <button
               onClick={onClose}
               className="absolute top-6 right-6 z-[210] text-ice-blue hover:text-cinematic-blue transition-colors p-2 bg-deep-navy/20 rounded-full"
            >
               <X size={28} />
            </button>

            {onPrev && (
               <button
                  onClick={(e) => {
                     e.stopPropagation();
                     onPrev();
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[210] p-3 border border-cinematic-blue/50 text-cinematic-blue rounded-full hover:bg-cinematic-blue/10 transition-colors"
               >
                  <ChevronLeft size={24} />
               </button>
            )}

            {onNext && (
               <button
                  onClick={(e) => {
                     e.stopPropagation();
                     onNext();
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[210] p-3 border border-cinematic-blue/50 text-cinematic-blue rounded-full hover:bg-cinematic-blue/10 transition-colors"
               >
                  <ChevronRight size={24} />
               </button>
            )}

            <motion.div
               initial={{ scale: 0.92, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.92, opacity: 0 }}
               transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
               className="relative z-[205] w-full max-w-5xl flex flex-col gap-6"
               onClick={(e) => e.stopPropagation()}
            >
               <div className="aspect-video bg-black rounded-lg overflow-hidden border border-cinematic-blue/20 relative shadow-2xl">
                  {videoUrl ? (
                     videoUrl.includes("youtube") ||
                     videoUrl.includes("vimeo") ? (
                        <iframe
                           src={videoUrl}
                           className="w-full h-full absolute inset-0"
                           allow="autoplay; fullscreen; picture-in-picture"
                           allowFullScreen
                        />
                     ) : (
                        <video
                           src={videoUrl}
                           controls
                           autoPlay
                           className="w-full h-full object-contain"
                        />
                     )
                  ) : (
                     <div className="w-full h-full flex items-center justify-center text-ice-blue/50 font-body">
                        No video source provided
                     </div>
                  )}
               </div>

               {(title || description) && (
                  <div className="text-center">
                     {title && (
                        <h2 className="font-heading text-2xl md:text-3xl text-ice-blue mb-2">
                           {title}
                        </h2>
                     )}
                     {description && (
                        <p className="font-body text-sm text-ice-blue/70 max-w-2xl mx-auto">
                           {description}
                        </p>
                     )}
                  </div>
               )}
            </motion.div>
         </div>
      </AnimatePresence>
   );

   return createPortal(content, document.body);
}
