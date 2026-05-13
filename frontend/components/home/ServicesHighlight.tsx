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

   return (
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="mb-16 lg:mb-20"
            >
               <div className="space-y-4 mb-8">
                  <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">
                     What We Do
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                     Bringing Your Brand To Life
                  </h2>

                  <p className="text-lg max-w-2xl leading-relaxed text-gray-600">
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
                           className="
                              h-full
                              rounded-2xl
                              p-8
                              cursor-pointer
                              transition-all
                              duration-300
                              flex
                              flex-col
                              border-2
                              border-gray-200
                              bg-white
                              hover:border-blue-400
                              hover:bg-blue-50
                              hover:shadow-xl
                           "
                        >
                           {/* Icon */}
                           <motion.div
                              className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-blue-100"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                           >
                              <Icon size={28} className="text-blue-700" />
                           </motion.div>

                           {/* Service Number */}
                           <span className="text-xs font-bold uppercase tracking-wider mb-3 text-blue-600">
                              Service {String(index + 1).padStart(2, "0")}
                           </span>

                           {/* Service Name */}
                           <h3 className="text-xl font-bold mb-4 leading-snug text-gray-900 transition-colors duration-300">
                              {service.name}
                           </h3>

                           {/* Description */}
                           <p className="text-sm leading-relaxed mb-6 flex-grow text-gray-600">
                              {service.shortDescription}
                           </p>

                           {/* CTA */}
                           <div className="inline-flex items-center gap-2 font-semibold text-sm text-blue-600 transition-all duration-300 group-hover:gap-3">
                              Learn More
                              <Icons.ArrowRight size={16} />
                           </div>
                        </div>
                     </motion.div>
                  );
               })}
            </div>

            {/* Button */}
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
                     items-center
                     gap-2
                     rounded-full
                     bg-[#001D39]
                     px-8
                     py-4
                     text-white
                     transition-all
                     duration-300
                     hover:bg-[#0A4174]
                     hover:shadow-[0_12px_30px_rgba(10,65,116,0.2)]
                  "
               >
                  View All Services
                  <Icons.ArrowRight size={18} />
               </Link>
            </motion.div>
         </div>

         {/* Modal */}
         <ServiceModal
            isOpen={activeModalId !== null}
            onClose={() => setActiveModalId(null)}
            serviceId={activeModalId}
         />
      </section>
   );
}
