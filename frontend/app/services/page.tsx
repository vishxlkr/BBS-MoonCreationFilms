"use client";

import Link from "next/link";
import { useState } from "react";
import ServiceModal from "@/components/ui/ServiceModal";
import { servicesData } from "@/lib/services-data";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

export default function ServicesPage() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
      null,
   );

   const handleServiceClick = (serviceId: string) => {
      setSelectedServiceId(serviceId);
      setIsModalOpen(true);
   };

   return (
      <>
         <section className="section-dark pt-20 pb-12 sm:pt-[142px] sm:pb-24">
            <div className="container-brand">
               <SectionReveal>
                  <h1 className="headline-lg max-w-4xl">
                     Our <br />
                     <span className="text-gradient">Services</span>
                  </h1>
                  <p className="mt-5 max-w-xl text-base font-semibold text-white/70 sm:text-lg">
                     Expert marketing solutions in SEO, PPC advertising, and
                     website development to grow your business.
                  </p>
               </SectionReveal>
            </div>
         </section>

         {/* web design */}
         {/* Featured Web Design Service */}
         {/* Featured Web Design Service */}
         <section className="py-12 sm:py-14">
            <div className="container-brand">
               <Link
                  href="/services/web-design"
                  className="
            group
            relative
            block
            overflow-hidden
            rounded-[34px]
            border
            border-[#E8EDF5]
            bg-white
            p-5
            sm:p-6
            lg:p-8
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#2f6bf2]/15
            hover:shadow-[0_30px_70px_rgba(47,107,242,0.12)]
         "
               >
                  {/* Background glow */}
                  <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-blue-100 blur-[90px] opacity-0 transition duration-700 group-hover:opacity-100" />

                  {/* Animated top line */}
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-[#2f6bf2] via-cyan-400 to-[#2f6bf2] transition-all duration-700 group-hover:w-full" />

                  <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_260px] lg:items-center">
                     {/* Left Content */}
                     <div>
                        <div className="mb-4 inline-flex rounded-full border border-[#DFE8F5] bg-[#F4F8FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#2f6bf2]">
                           Featured Service
                        </div>

                        <h2 className="text-xl font-black leading-tight text-[#101a2f] sm:text-3xl md:text-4xl">
                           Premium{" "}
                           <span className="text-gradient">
                              Web Design Service
                           </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm md:text-base leading-7 text-[#647086]">
                           Build trust and increase conversions with modern,
                           premium websites designed for speed, aesthetics, and
                           business growth.
                        </p>

                        {/* Small features */}
                        <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                           {[
                              "Premium UI/UX",
                              "SEO Optimized",
                              "Fast Performance",
                              "Responsive",
                           ].map((item) => (
                              <div
                                 key={item}
                                 className="
                           rounded-full
                           border
                           border-[#E6EDF7]
                           bg-[#FAFCFF]
                           px-4
                           py-2
                           text-sm
                           font-semibold
                           text-[#101a2f]
                           transition
                           duration-300
                           group-hover:border-[#2f6bf2]/15
                        "
                              >
                                 {item}
                              </div>
                           ))}
                        </div>

                        {/* CTA */}
                        <div className="btn-primary mt-8 inline-flex">
                           Explore Service
                           <span className="transition-transform duration-500 group-hover:translate-x-2">
                              →
                           </span>
                        </div>
                     </div>

                     {/* Right Compact Visual */}

                     <div className="relative mx-auto w-full max-w-[480px]">
                        <div className="rounded-2xl bg-gradient-to-br from-[#17204A] to-[#07111F] p-3 shadow-xl sm:rounded-[28px] sm:p-4">
                           <div className="rounded-[22px] bg-[#0B1426] p-4">
                              {/* Browser top */}
                              <div className="mb-4 flex gap-2">
                                 <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                 <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                 <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                              </div>

                              {/* Mock UI */}
                              <div className="rounded-2xl bg-white p-3">
                                 <div className="h-5 rounded-lg bg-[#EEF4FF]" />

                                 <div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-[#DDE9FF] to-[#EEF4FF]" />

                                 <div className="mt-3 flex gap-2">
                                    <div className="h-8 flex-1 rounded-lg bg-[#2f6bf2]" />
                                    <div className="h-8 w-12 rounded-lg bg-[#EAF2FF]" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-3 left-3 rounded-2xl border border-[#E6ECF5] bg-white px-4 py-3 shadow-lg sm:-left-3">
                           <p className="text-xs font-bold text-[#101a2f]">
                              Modern • Fast
                           </p>
                        </div>
                     </div>
                  </div>
               </Link>
            </div>
         </section>

         {/* service cards */}
         <section className="section-soft py-8">
            <div className="container-brand">
               {/* Header */}
               <div className="mb-10 text-center sm:mb-20">
                  <h2 className="headline-md mx-auto mt-4 max-w-4xl">
                     Our <span className="text-gradient">Services</span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold text-[#647086]">
                     Click on any service to discover how we help brands grow
                     through premium digital experiences, marketing, and
                     strategy.
                  </p>
               </div>

               {/* Cards */}
               <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                  {servicesData.map((service) => {
                     const IconComponent = LucideIcons[
                        service.icon as keyof typeof LucideIcons
                     ] as LucideIcon | undefined;

                     return (
                        <button
                           key={service.id}
                           onClick={() => handleServiceClick(service.id)}
                           className="
                     group
                     relative
                     overflow-hidden
                     rounded-[32px]
                     border
                     border-[#E8EDF5]
                     bg-white/80
                     p-5
                     sm:p-8
                     text-left
                     backdrop-blur-xl
                     transition-all
                     duration-500
                     hover:-translate-y-3
                     hover:border-[#2f6bf2]/15
                     hover:bg-white
                     hover:shadow-[0_30px_80px_rgba(47,107,242,0.14)]
                  "
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
                                    0{servicesData.indexOf(service) + 1}
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
                     );
                  })}
               </div>
            </div>
         </section>

         <section className="px-3 py-16 sm:px-4 sm:py-24">
            <div className="container-brand rounded-2xl bg-gradient-to-br from-[#17204a] to-[#07111f] px-4 py-12 text-center text-white shadow-2xl sm:px-6 sm:py-16">
               <h2 className="headline-md mx-auto max-w-4xl">
                  See Where Your Marketing Is{" "}
                  <span className="text-gradient">Falling Short.</span>
               </h2>
               <p className="mx-auto mt-5 max-w-xl text-sm font-semibold text-white/70">
                  We&apos;ll review your campaigns, website, and conversion flow
                  to identify the strongest opportunities.
               </p>
               <Link href="/contact" className="btn-primary mt-8">
                  Get Your Free Marketing Audit
               </Link>
            </div>
         </section>

         {/* Service Modal */}
         <ServiceModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceId={selectedServiceId}
         />
      </>
   );
}
