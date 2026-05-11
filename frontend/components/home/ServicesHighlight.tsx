"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import StaggerGrid from "@/components/ui/StaggerGrid";
import GlassCard from "@/components/ui/GlassCard";
import ServiceModal from "@/components/ui/ServiceModal";
import { servicesData } from "@/lib/services-data";

export default function ServicesHighlight() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  
  // Highlight 4 specific services on home
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="py-24 px-6 md:px-12 bg-deep-navy overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <SectionReveal className="mb-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-cinematic-blue mb-6">Our Services</h2>
          <p className="font-body text-ice-blue max-w-2xl mx-auto">
            Comprehensive cinematography solutions tailored to capture your unique story.
          </p>
        </SectionReveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredServices.map((service) => {
            const Icon = (Icons as any)[service.icon] || Icons.Video;
            
            return (
              <motion.div key={service.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                <GlassCard 
                  onClick={() => setActiveModalId(service.id)}
                  className="p-8 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-deep-navy border border-cinematic-blue/30 flex items-center justify-center mb-6 text-cinematic-blue group-hover:bg-cinematic-blue group-hover:text-charcoal-night transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading text-xl text-cinematic-blue mb-3">{service.name}</h3>
                    <p className="font-body text-ice-blue text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>
                  <span className="font-accent text-cinematic-blue text-sm font-semibold uppercase tracking-wider group-hover:text-cinematic-blue transition-colors flex items-center gap-2">
                    Learn More <Icons.ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </GlassCard>
              </motion.div>
            );
          })}
        </StaggerGrid>

        <SectionReveal delay={0.2} className="text-center">
          <Link 
            href="/services"
            className="inline-block border-b-2 border-cinematic-blue pb-1 font-accent uppercase text-cinematic-blue text-sm tracking-[0.1em] hover:text-ice-blue hover:border-ice-blue transition-colors"
          >
            View All Services
          </Link>
        </SectionReveal>
      </div>

      <ServiceModal 
        isOpen={activeModalId !== null} 
        onClose={() => setActiveModalId(null)} 
        serviceId={activeModalId} 
      />
    </section>
  );
}
