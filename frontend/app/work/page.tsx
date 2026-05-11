"use client";

import React, { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import Lightbox from "@/components/ui/Lightbox";
import { Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { workData as projects, workCategories as categories } from "@/lib/work";

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxData, setLightboxData] = useState<{ isOpen: boolean; videoUrl?: string; title?: string }>({ isOpen: false });

  const filteredProjects = activeTab === "All" ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-deep-navy">
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 to-deep-navy z-10" />
        <div className="absolute inset-0 bg-midnight-blue/30" />
        <div className="relative z-20 text-center px-4">
          <SectionReveal>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-cinematic-blue mb-4">Our Work</h1>
            <p className="font-accent text-ice-blue tracking-widest uppercase text-sm">Visual Masterpieces</p>
          </SectionReveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-accent text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat 
                  ? "bg-cinematic-blue text-deep-navy" 
                  : "border border-cinematic-blue/30 text-ice-blue hover:border-cinematic-blue hover:text-cinematic-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/5] bg-charcoal-night rounded-xl overflow-hidden border border-cinematic-blue/10 group cursor-pointer"
                onClick={() => setLightboxData({ isOpen: true, videoUrl: project.videoUrl, title: project.title })}
              >
                {/* Thumbnail Image */}
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-deep-navy/40 group-hover:bg-deep-navy/60 transition-colors duration-500 z-10" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full border border-cinematic-blue flex items-center justify-center bg-deep-navy/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                    <Play className="text-ice-blue ml-1" size={24} />
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-midnight-blue/80 backdrop-blur-md text-cinematic-blue text-xs font-accent uppercase tracking-widest rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-2xl text-ice-blue group-hover:text-cinematic-blue transition-colors">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Lightbox 
        isOpen={lightboxData.isOpen} 
        onClose={() => setLightboxData({ isOpen: false })} 
        videoUrl={lightboxData.videoUrl}
        title={lightboxData.title}
      />
    </div>
  );
}
