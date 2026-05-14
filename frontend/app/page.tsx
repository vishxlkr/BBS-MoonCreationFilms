"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import {
   Film,
   Heart,
   Sparkles,
   Camera,
} from "lucide-react";
import ServiceModal from "@/components/ui/ServiceModal";
import { servicesData } from "@/lib/services-data";
import { workData } from "@/lib/work";
import ProjectCard from "@/components/work/ProjectCard";
import Lightbox from "@/components/ui/Lightbox";
import SectionReveal from "@/components/ui/SectionReveal";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type WorkItem = (typeof workData)[number];

const proof = [
   ["100+", "Projects Delivered"],
   ["5★", "Client Satisfaction"],
   ["4K", "Cinematic Quality"],
];

export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
      null,
   );
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

   const handleServiceClick = (serviceId: string) => {
      setSelectedServiceId(serviceId);
      setIsModalOpen(true);
   };

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

   const openLightbox = (project: WorkItem) => {
      setActiveVideo({
         title: project.title,
         category: project.category,
         videoUrl: project.videoUrl,
      });
      setLightboxOpen(true);
   };

   return (
      <>
         <section className="section-soft pt-20 pb-12 sm:pt-[126px] sm:pb-20">
            <div className="container-brand text-center">
               <SectionReveal>
                  <span className="eyebrow">
                     Premium Cinematic Storytelling
                  </span>
                  <h1 className="headline-lg mx-auto mt-5 max-w-4xl">
                     Stories That{" "}
                     <span className="text-gradient">Feel Like Cinema.</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-xl text-base font-semibold text-[#647086]">
                     Premium wedding films, brand visuals, and cinematic content
                     crafted with emotion, elegance, and visual mastery.
                  </p>
                  <a href="/work" className="btn-primary mt-8 inline-flex">
                     View Our Work
                  </a>
               </SectionReveal>

               <SectionReveal>
                  <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-[1fr_1.5fr] md:items-end">
                     <div className="text-center md:text-left">
                        <span className="eyebrow">Our Impact</span>
                        <h2 className="mt-4 text-2xl font-black leading-tight sm:text-4xl">
                           Moments Transformed Into{" "}
                           <span className="text-gradient">Timeless Films</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-sm text-sm font-medium text-[#647086] md:mx-0">
                           Every frame tells a story. We capture what matters
                           most with cinematic precision, emotion, and artistry.
                        </p>
                     </div>
                     <div className="grid gap-4 sm:grid-cols-3">
                        {proof.map(([value, label]) => (
                           <div key={label} className="card p-6 text-left">
                              <Film className="mb-4 text-[#2f6bf2]" size={22} />
                              <p className="text-2xl font-black leading-none">
                                 {value}
                              </p>
                              <p className="mt-2 text-xs font-bold text-[#647086]">
                                 {label}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
               </SectionReveal>
            </div>
         </section>

         {/* web design service */}
         <section className="py-16 sm:py-24">
            <div className="container-brand grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
               <SectionReveal>
                  <div>
                     <span className="eyebrow">Featured Service</span>
                     <h2 className="headline-md mt-4">
                        Premium <br />
                        <span className="text-gradient">
                           Website Design Service
                        </span>
                     </h2>
                     <p className="mt-5 text-sm leading-7 text-[#647086] sm:text-base">
                        Build trust and increase conversions with modern,
                        premium websites designed for speed, aesthetics, and
                        business growth.
                     </p>
                     <Link
                        href="/services/web-design"
                        className="btn-primary mt-8"
                     >
                        Explore Service
                        <span className="transition-transform duration-500 group-hover:translate-x-2">
                           →
                        </span>
                     </Link>
                  </div>
               </SectionReveal>

               {/* visual card */}
               <div className="browser-card bg-[#0b1426] p-4 pt-10 sm:p-8 sm:pt-14">
                  <div className="rounded-lg bg-[#101d34] p-4 text-white sm:p-6">
                     {/* Browser top */}
                     <div className="mb-4 flex gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                     </div>

                     {/* Mini Web Design Preview */}
                     <div className="rounded-xl bg-white p-3">
                        {/* Navbar */}
                        <div className="flex items-center justify-between">
                           <div className="h-3 w-14 rounded-full bg-[#2f6bf2]" />

                           <div className="flex gap-1.5">
                              <div className="h-2 w-6 rounded-full bg-[#EEF4FF]" />
                              <div className="h-2 w-6 rounded-full bg-[#EEF4FF]" />
                              <div className="h-2 w-6 rounded-full bg-[#EEF4FF]" />
                           </div>
                        </div>

                        {/* Hero Section */}
                        <div className="mt-3 rounded-xl bg-gradient-to-br from-[#DDE9FF] to-[#EEF4FF] p-3">
                           <div className="h-3 w-20 rounded-md bg-[#BCD2FF]" />
                           <div className="mt-2 h-2 w-full rounded bg-white/80" />
                           <div className="mt-1 h-2 w-8/12 rounded bg-white/80" />

                           <div className="mt-3 flex gap-2">
                              <div className="h-6 w-16 rounded-lg bg-[#2f6bf2]" />
                              <div className="h-6 w-12 rounded-lg bg-white" />
                           </div>
                        </div>

                        {/* Small cards */}
                        <div className="mt-3 grid grid-cols-3 gap-2">
                           <div className="h-8 rounded-lg bg-[#EEF4FF]" />
                           <div className="h-8 rounded-lg bg-[#EEF4FF]" />
                           <div className="h-8 rounded-lg bg-[#EEF4FF]" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* our services */}
         {/* our services */}
         <section className="section-soft py-16 sm:py-24">
            <div className="container-brand">
               {/* Header */}
               <SectionReveal>
                  <div className="mb-10 text-center sm:mb-20">
                     <h2 className="headline-md mx-auto max-w-4xl">
                        Our <span className="text-gradient">Services</span>
                     </h2>

                     <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold text-[#647086]">
                        Comprehensive storytelling solutions designed to elevate
                        your business, engage your audience, and create lasting
                        impressions.
                     </p>
                  </div>
               </SectionReveal>

               {/* Cards */}
               <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3 items-stretch">
                  {servicesData.slice(0, 6).map((service, index) => {
                     const IconComponent = LucideIcons[
                        service.icon as keyof typeof LucideIcons
                     ] as LucideIcon | undefined;

                     return (
                        <SectionReveal key={service.id} delay={index * 0.1}>
                           <button
                              key={service.id}
                              onClick={() => handleServiceClick(service.id)}
                              className="group relative flex h-full overflow-hidden rounded-2xl border border-[#E8EDF5] bg-white/80 p-5 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#2f6bf2]/15 hover:bg-white hover:shadow-[0_30px_80px_rgba(47,107,242,0.14)] sm:rounded-[32px] sm:p-8"
                           >
                              {/* Background glow */}
                              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-100 blur-[90px] opacity-0 transition duration-700 group-hover:opacity-100" />

                              {/* Top gradient line */}
                              <div className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-[#2f6bf2] via-cyan-400 to-[#2f6bf2] transition-all duration-700 group-hover:w-full" />

                              <div className="relative z-10 flex h-full flex-col">
                                 {/* Top section */}
                                 <div className="flex items-start justify-between">
                                    {/* Icon */}
                                    {IconComponent && (
                                       <div
                                          className="
                              flex
                              h-16
                              w-16
                              items-center
                              justify-center
                              rounded-2xl
                              bg-[#F4F8FF]
                              transition-all
                              duration-500
                              group-hover:scale-110
                              group-hover:rotate-3
                              group-hover:bg-[#2f6bf2]
                           "
                                       >
                                          <IconComponent className="h-7 w-7 text-[#2f6bf2] transition-colors duration-500 group-hover:text-white" />
                                       </div>
                                    )}

                                    {/* Number */}
                                    <span className="text-sm font-black tracking-[0.18em] text-[#2f6bf2]/40">
                                       0{index + 1}
                                    </span>
                                 </div>

                                 {/* Content */}
                                 <div className="mt-8 flex-grow">
                                    <h3 className="text-lg font-black leading-tight tracking-tight text-[#101a2f] transition-colors duration-300 group-hover:text-[#2f6bf2] sm:text-2xl">
                                       {service.name}
                                    </h3>

                                    <p className="mt-4 line-clamp-3 text-sm font-medium leading-7 text-[#647086]">
                                       {service.shortDescription}
                                    </p>
                                 </div>

                                 {/* CTA */}
                                 <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#101a2f] transition-all duration-500 group-hover:gap-4 group-hover:text-[#2f6bf2]">
                                    Explore Service
                                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                                       →
                                    </span>
                                 </div>
                              </div>
                           </button>
                        </SectionReveal>
                     );
                  })}
               </div>

               {/* View All Button */}
               <div className="mt-15 flex justify-center">
                  <Link href="/services" className="btn-primary mt-8">
                     View All Services
                     <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                     </span>
                  </Link>
               </div>
            </div>
         </section>

         <section className="py-16 sm:py-24">
            <SectionReveal>
               <div className="container-brand card grid gap-8 p-5 sm:p-8 md:grid-cols-[1fr_1fr] md:p-12">
                  <div>
                     <h2 className="headline-md">
                        Why Your Story{" "}
                        <span className="text-gradient">
                           Deserves Cinematic
                        </span>{" "}
                        Excellence
                     </h2>
                     <p className="mt-6 max-w-lg text-[#647086]">
                        Most video production falls short because it focuses on
                        technical specs rather than emotional impact. We believe
                        great films move hearts before they impress eyes.
                     </p>
                     <blockquote className="mt-8 border-l-2 border-[#101a2f] pl-5 text-base font800 font-bold italic sm:text-lg">
                        The best films don&apos;t just look beautiful. They
                        make you feel something.
                     </blockquote>
                  </div>
                  <div className="space-y-4">
                     {[
                        "Generic footage that doesn't capture your unique story",
                        "Poor color grading that loses emotional depth",
                        "Rushed timelines compromising quality",
                        "Lack of creative vision and direction",
                        "Sound design that doesn't enhance the experience",
                     ].map((item) => (
                        <div
                           key={item}
                           className="rounded-lg bg-red-50 px-5 py-4 text-sm font-bold text-[#101a2f]"
                        >
                           <span className="mr-3 text-red-400">+</span>
                           {item}
                        </div>
                     ))}
                  </div>
               </div>
            </SectionReveal>
         </section>

         {/* our work */}
         <section className="section-soft py-16 sm:py-24">
            <div className="container-brand">
               {/* Header */}
               <SectionReveal>
                  <div className="mb-10 text-center sm:mb-20">
                     <span className="eyebrow">What We Create</span>
                     <h2 className="headline-md mx-auto mt-4 max-w-4xl">
                        Films That{" "}
                        <span className="text-gradient">Capture Your</span>{" "}
                        Essence
                     </h2>
                     <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold text-[#647086]">
                        Wedding films that celebrate your love story, brand
                        visuals that elevate your message, corporate videos with
                        cinematic production, and event coverage with artistic
                        direction.
                     </p>
                  </div>
               </SectionReveal>

               {/* Work Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {workData.slice(0, 3).map((work, index) => (
                     <SectionReveal key={work.id} delay={index * 0.1}>
                        <ProjectCard
                           key={work.id}
                           project={work}
                           isHovered={hoveredProjectId === work.id}
                           onHover={() => handleHover(work.id)}
                           onHoverEnd={() => handleHoverEnd(work.id)}
                           onClick={() => openLightbox(work)}
                           videoRef={(ref) => {
                              if (ref) {
                                 videoRefs.current[work.id] = ref;
                              }
                           }}
                        />
                     </SectionReveal>
                  ))}
               </div>

               {/* View All Button */}
               <div className="mt-20 flex justify-center">
                  <Link href="/work" className="btn-primary">
                     View All Work
                     <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                     </span>
                  </Link>
               </div>
            </div>
         </section>

         {/* sentences */}
         <section className="py-16 sm:py-24">
            <div className="container-brand grid gap-10 md:grid-cols-3 md:gap-12">
               {[
                  [Camera, "Stunning Visuals That Captivate"],
                  [Heart, "Stories That Connect Emotionally"],
                  [Sparkles, "Polish That Leaves an Impression"],
               ].map(([Icon, title], index) => (
                  <SectionReveal key={String(title)} delay={index * 0.1}>
                     <div>
                        <Icon className="mb-4 text-[#2f6bf2]" size={26} />
                        <h3 className="text-2xl font-black leading-tight sm:text-3xl">
                           {String(title)}
                        </h3>
                        <p className="mt-4 text-sm font-medium text-[#647086]">
                           We bring technical expertise, creative vision, and
                           attention to detail to every frame of your film.
                        </p>
                     </div>
                  </SectionReveal>
               ))}
            </div>
         </section>

         {/* blue card */}
         <section className="px-3 pb-16 sm:px-4 sm:pb-24">
            <SectionReveal>
               <div className="container-brand rounded-2xl bg-gradient-to-br from-[#17204a] to-[#07111f] px-4 py-12 text-center text-white shadow-2xl sm:px-6 sm:py-16">
                  <Heart className="mx-auto mb-5 text-[#75a7ff]" size={32} />
                  <h2 className="headline-md mx-auto max-w-3xl">
                     Ready to Tell Your{" "}
                     <span className="text-gradient">Story Cinematically?</span>
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-sm font-semibold text-white/70">
                     Let&apos;s create something beautiful together. Get in
                     touch to discuss your vision and how we can bring it to
                     life.
                  </p>
                  <Link href="/contact" className="btn-primary mt-8">
                     Start Your Project
                  </Link>
               </div>
            </SectionReveal>
         </section>

         {/* Service Modal */}
         {/* Service Modal */}
         <ServiceModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceId={selectedServiceId}
         />

         {/* Lightbox */}
         <Lightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            title={activeVideo?.title}
            videoUrl={activeVideo?.videoUrl}
            description={`Category: ${activeVideo?.category}`}
         />
      </>
   );
}
