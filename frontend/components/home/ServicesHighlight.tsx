"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import ServiceModal from "@/components/ui/ServiceModal";
import { servicesData } from "@/lib/services-data";

export default function ServicesHighlight() {
   const [activeModalId, setActiveModalId] = useState<string | null>(null);
   const featuredServices = servicesData.slice(0, 4);

   // Theme colors from your palette
   const colors = {
      darkest: "#001D39",
      dark: "#0A4174",
      medium: "#49769F",
      light: "#7BBDE8",
      lighter: "#BDD8EF",
      lightest: "#E6F1FB",
      bg: "#F6FAFD",
   };

   return (
      <section
         className="py-20 px-6 md:px-12 lg:px-16"
         style={{ backgroundColor: colors.bg }}
      >
         <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="mb-16 lg:mb-20"
            >
               <div className="space-y-4 mb-8">
                  <p
                     className="text-sm font-semibold tracking-widest uppercase"
                     style={{ color: colors.dark }}
                  >
                     What We Do
                  </p>
                  <h2
                     className="text-4xl md:text-5xl font-bold leading-tight"
                     style={{ color: colors.darkest }}
                  >
                     Bringing Your Brand To Life
                  </h2>
                  <p
                     className="text-lg max-w-2xl leading-relaxed"
                     style={{ color: colors.medium }}
                  >
                     Comprehensive storytelling solutions designed to elevate
                     your business, engage your audience, and create lasting
                     impressions.
                  </p>
               </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
               {featuredServices.map((service, index) => {
                  const Icon = (Icons as any)[service.icon] || Icons.Video;

                  return (
                     <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                           duration: 0.5,
                           delay: index * 0.1,
                           ease: "easeOut",
                        }}
                        onClick={() => setActiveModalId(service.id)}
                        className="group h-full"
                     >
                        <div
                           className="h-full rounded-2xl p-8 cursor-pointer transition-all duration-300 flex flex-col hover:shadow-xl"
                           style={{
                              backgroundColor: "white",
                              borderWidth: "2px",
                              borderColor: colors.lighter,
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = colors.light;
                              e.currentTarget.style.backgroundColor =
                                 colors.lightest;
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor =
                                 colors.lighter;
                              e.currentTarget.style.backgroundColor = "white";
                           }}
                        >
                           {/* Icon Container */}
                           <motion.div
                              className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                              style={{ backgroundColor: colors.lightest }}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                           >
                              <Icon size={28} style={{ color: colors.dark }} />
                           </motion.div>

                           {/* Service Number */}
                           <span
                              className="text-xs font-bold uppercase tracking-wider mb-3"
                              style={{ color: colors.light }}
                           >
                              Service {String(index + 1).padStart(2, "0")}
                           </span>

                           {/* Service Name */}
                           <h3
                              className="text-xl font-bold mb-4 leading-snug transition-colors duration-300"
                              style={{ color: colors.darkest }}
                           >
                              {service.name}
                           </h3>

                           {/* Description */}
                           <p
                              className="text-sm leading-relaxed mb-6 flex-grow"
                              style={{ color: colors.medium }}
                           >
                              {service.shortDescription}
                           </p>

                           {/* CTA Link */}
                           <div
                              className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group-hover:gap-3"
                              style={{ color: colors.dark }}
                           >
                              Learn More
                              <Icons.ArrowRight
                                 size={16}
                                 className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                           </div>
                        </div>
                     </motion.div>
                  );
               })}
            </div>

            {/* Bottom CTA Section */}
            {/* CTA */}
            <motion.div
               initial={{
                  opacity: 0,
                  y: 20,
               }}
               whileInView={{
                  opacity: 1,
                  y: 0,
               }}
               viewport={{ once: true }}
               transition={{
                  delay: 0.2,
               }}
               className="text-center mt-20"
            >
               <Link
                  href="/services"
                  className="
                  inline-flex
                  items-center gap-2
                  rounded-full
                  bg-[#001D39]
                  px-8 py-4
                  text-white
                  transition-all duration-300
                  hover:bg-[#0A4174]
                  hover:shadow-[0_12px_30px_rgba(10,65,116,0.2)]
                  "
               >
                  View All Services
                  <Icons.ArrowRight size={18} />
               </Link>
            </motion.div>
         </div>

         {/* Service Modal */}
         <ServiceModal
            isOpen={activeModalId !== null}
            onClose={() => setActiveModalId(null)}
            serviceId={activeModalId}
         />
      </section>
   );
}
