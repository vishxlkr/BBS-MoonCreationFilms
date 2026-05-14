"use client";

import React from "react";
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
         className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl border border-cinematic-blue/20 bg-charcoal-night shadow-sm hover:shadow-md"
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
         <div className="absolute inset-0 z-20 flex items-center justify-center opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ice-blue bg-deep-navy/50 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 sm:h-16 sm:w-16">
               <Play className="ml-1 text-ice-blue" size={22} />
            </div>
         </div>

         {/* Content */}
         <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-0 transition-transform duration-500 sm:bottom-6 sm:left-6 sm:right-6 sm:translate-y-4 sm:group-hover:translate-y-0">
            <span className="mb-2 inline-block rounded-full bg-deep-navy/80 px-3 py-1 font-accent text-xs uppercase tracking-widest text-ice-blue backdrop-blur-md sm:mb-3">
               {project.category}
            </span>

            <h3 className="font-heading text-lg leading-tight text-white sm:text-2xl">
               {project.title}
            </h3>
         </div>
      </motion.div>
   );
}
