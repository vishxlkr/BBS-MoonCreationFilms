"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface ProjectCardProps {
   project: {
      id: string;
      title: string;
      category: string;
      thumbnail: string;
      videoUrl: string;
   };
   isHovered: boolean;
   onHover: () => void;
   onHoverEnd: () => void;
   onClick: () => void;
   videoRef: React.Ref<HTMLVideoElement>;
}

export default function ProjectCard({
   project,
   isHovered,
   onHover,
   onHoverEnd,
   onClick,
   videoRef,
}: ProjectCardProps) {
   return (
      <motion.div
         layout
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.9 }}
         transition={{ duration: 0.4 }}
         data-cursor="play"
         className="relative aspect-[4/5] bg-charcoal-night rounded-xl overflow-hidden border border-cinematic-blue/20 group cursor-pointer shadow-sm hover:shadow-md"
         onClick={onClick}
         onMouseEnter={onHover}
         onMouseLeave={onHoverEnd}
      >
         {/* Thumbnail */}
         <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-300 ease-out group-hover:scale-105 ${
               isHovered ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
         />

         {/* Video on Hover */}
         <video
            ref={videoRef}
            src={project.videoUrl}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out ${
               isHovered ? "opacity-100" : "opacity-0"
            }`}
            muted
            loop
            playsInline
         />

         {/* Overlay */}
         <div className="absolute inset-0 bg-deep-navy/20 group-hover:bg-deep-navy/40 transition-colors duration-500 z-10" />

         {/* Play Button */}
         <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-16 h-16 rounded-full border border-ice-blue flex items-center justify-center bg-deep-navy/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
               <Play className="text-ice-blue ml-1" size={24} />
            </div>
         </div>

         {/* Content */}
         <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="inline-block px-3 py-1 bg-deep-navy/80 backdrop-blur-md text-ice-blue text-xs font-accent uppercase tracking-widest rounded-full mb-3">
               {project.category}
            </span>

            <h3 className="font-heading text-2xl text-white">
               {project.title}
            </h3>
         </div>
      </motion.div>
   );
}
