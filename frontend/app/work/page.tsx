"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectCard from "@/components/work/ProjectCard";
import Lightbox from "@/components/ui/Lightbox";
import { workData, workCategories } from "@/lib/work";

export default function WorkPage() {
   const [selectedCategory, setSelectedCategory] = useState("All");

   const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(
      null,
   );

   const [lightboxOpen, setLightboxOpen] = useState(false);
   const [activeVideo, setActiveVideo] = useState<{
      title: string;
      category: string;
      videoUrl: string;
   } | null>(null);

   const videoRefs = useRef<{
      [key: string]: HTMLVideoElement | null;
   }>({});

   const filteredProjects =
      selectedCategory === "All"
         ? workData
         : workData.filter((project) => project.category === selectedCategory);

   const handleHover = (projectId: string) => {
      setHoveredProjectId(projectId);

      const video = videoRefs.current[projectId];

      if (video) {
         video.play().catch(() => {});
      }
   };

   const handleHoverEnd = (projectId: string) => {
      const video = videoRefs.current[projectId];

      if (video) {
         video.pause();
         video.currentTime = 0;
      }
   };

   const openLightbox = (project: any) => {
      setActiveVideo({
         title: project.title,
         category: project.category,
         videoUrl: project.videoUrl,
      });
      setLightboxOpen(true);
   };

   return (
      <div className="min-h-screen bg-deep-navy">
         {/* Hero Section */}
         <section className="section-dark pt-[142px] pb-24">
            <div className="container-brand">
               <SectionReveal>
                  <h1 className="headline-lg max-w-4xl">
                     Our <br />
                     <span className="text-gradient">Work</span>
                  </h1>

                  <p className="mt-5 max-w-xl text-lg font-semibold text-white/70">
                     Explore our portfolio of cinematic productions,
                     commercials, weddings, music videos, and brand
                     storytelling.
                  </p>
               </SectionReveal>
            </div>
         </section>

         {/* Content Section */}
         <section className="max-w-7xl mx-auto px-6 py-24">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
               {workCategories.map((category) => (
                  <button
                     key={category}
                     onClick={() => setSelectedCategory(category)}
                     className={`px-5 py-2 rounded-full border text-xs uppercase tracking-wider transition-all duration-300 font-accent ${
                        selectedCategory === category
                           ? "border-blue-600 text-white bg-blue-600"
                           : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
                     }`}
                  >
                     {category}
                  </button>
               ))}
            </div>

            {/* Projects Grid */}
            <motion.div
               layout
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
               {filteredProjects.map((project) => (
                  <SectionReveal key={project.id}>
                     <ProjectCard
                        project={project}
                        isHovered={hoveredProjectId === project.id}
                        onHover={() => handleHover(project.id)}
                        onHoverEnd={() => handleHoverEnd(project.id)}
                        onClick={() => openLightbox(project)}
                        videoRef={(ref) => {
                           if (ref) {
                              videoRefs.current[project.id] = ref;
                           }
                        }}
                     />
                  </SectionReveal>
               ))}
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
               <div className="text-center py-20">
                  <p className="text-white/50 text-sm font-medium">
                     No projects found in this category.
                  </p>
               </div>
            )}
         </section>

         <Lightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            title={activeVideo?.title}
            videoUrl={activeVideo?.videoUrl}
            description={`Category: ${activeVideo?.category}`}
         />
      </div>
   );
}
