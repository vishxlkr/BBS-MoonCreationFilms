"use client";

import { useState } from "react";
import Image from "next/image";

import { Play } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import Lightbox from "@/components/ui/Lightbox";

import { workData as workItems } from "@/lib/work";

export default function WorkTeaser() {
   const [lightboxOpen, setLightboxOpen] = useState(false);
   const [activeVideo, setActiveVideo] = useState<{
      title: string;
      category: string;
      videoUrl: string;
   } | null>(null);

   const openLightbox = (item: any) => {
      setActiveVideo(item);
      setLightboxOpen(true);
   };

   return (
      <section className="py-24 bg-white">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
               <div>
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
                     Our Work
                  </h2>
                  <p className="font-body text-gray-600 max-w-xl">
                     Explore our curated selection of cinematic visual stories.
                  </p>
               </div>
            </SectionReveal>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
               {workItems.map((item, index) => (
                  <SectionReveal key={item.id} delay={index * 0.1}>
                     <div
                        className="relative group rounded-lg overflow-hidden cursor-pointer aspect-[4/3] bg-gray-200 break-inside-avoid mb-6"
                        onClick={() => openLightbox(item)}
                        data-cursor="play"
                     >
                        <Image
                           src={item.thumbnail}
                           alt={item.title}
                           fill
                           className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/70 transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center justify-center">
                           <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] mb-4">
                              <Play size={24} className="text-white ml-1" />
                           </div>

                           <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] text-center">
                              <span className="font-accent text-blue-400 text-xs uppercase tracking-widest block mb-2">
                                 {item.category}
                              </span>
                              <h3 className="font-heading text-xl text-white">
                                 {item.title}
                              </h3>
                           </div>
                        </div>
                     </div>
                  </SectionReveal>
               ))}
            </div>
         </div>

         <Lightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            title={activeVideo?.title}
            videoUrl={activeVideo?.videoUrl}
            description={`Category: ${activeVideo?.category}`}
         />
      </section>
   );
}
