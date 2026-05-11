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

export default function ServiceModal({ isOpen, onClose, serviceId }: ServiceModalProps) {
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

  const service = serviceId ? servicesData.find(s => s.id === serviceId) : null;
  const serviceName = service?.name || "Service Name";
  const longDescription = service?.longDescription || "Our detailed approach ensures every moment is captured with cinematic brilliance. This service is tailored specifically to your needs, providing a truly premium experience.";
  const features = service?.features || ["Cinematic storytelling", "High-end post-production", "Multiple camera angles", "Premium color grading"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-deep-navy/85 backdrop-blur-[4px]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[480px] h-full bg-charcoal-night border-l border-cinematic-blue/20 shadow-2xl overflow-y-auto flex flex-col"
            role="dialog"
            aria-modal="true"
            data-lenis-prevent
          >
            <div className="p-6 md:p-10 flex-grow">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-ice-blue hover:text-cinematic-blue transition-colors p-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <h2 className="font-heading text-3xl text-cinematic-blue mt-8 mb-6">{serviceName}</h2>
              
              <div className="aspect-video bg-deep-navy rounded-lg mb-8 overflow-hidden border border-cinematic-blue/10 flex items-center justify-center relative">
                {/* Placeholder for video/image */}
                <span className="font-body text-ice-blue/50 text-sm">Example Media</span>
              </div>

              <p className="font-body text-ice-blue leading-relaxed mb-8">
                {longDescription}
              </p>

              <h3 className="font-accent uppercase text-sm tracking-wider text-cinematic-blue mb-4">What's Included</h3>
              <ul className="space-y-3 mb-10">
                {features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-ice-blue font-body">
                    <span className="text-cinematic-blue mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-10 border-t border-cinematic-blue/10 bg-deep-navy">
              <Link
                href={`/blog?service=${encodeURIComponent(serviceName)}#contact`}
                onClick={onClose}
                className="block w-full py-4 text-center border border-cinematic-blue text-ice-blue hover:bg-cinematic-blue hover:text-charcoal-night transition-colors rounded-full font-accent uppercase tracking-wider text-sm font-medium"
              >
                Book This Service →
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
