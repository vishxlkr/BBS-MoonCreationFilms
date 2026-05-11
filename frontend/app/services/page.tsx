"use client";

import React, { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import ServiceModal from "@/components/ui/ServiceModal";
import Link from "next/link";
import * as Icons from "lucide-react";
import { servicesData } from "@/lib/services-data";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-deep-navy">
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 to-deep-navy z-10" />
        <div className="absolute inset-0 bg-midnight-blue/30" />
        <div className="relative z-20 text-center px-4">
          <SectionReveal>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-cinematic-blue mb-4">Our Services</h1>
            <p className="font-accent text-ice-blue tracking-widest uppercase text-sm">Crafted with cinematic precision</p>
          </SectionReveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionReveal className="mb-12">
          <Link 
            href="/services/web-design" 
            className="group block w-full bg-charcoal-night border border-cinematic-blue/20 rounded-xl p-8 hover:border-cinematic-blue hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cinematic-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <Icons.Monitor className="text-cinematic-blue group-hover:scale-110 transition-transform duration-300" size={40} />
                  <h2 className="font-heading text-2xl sm:text-3xl text-ice-blue group-hover:text-cinematic-blue transition-colors">Web Design Service</h2>
                </div>
                <p className="font-body text-ice-blue/70 max-w-3xl">
                  Establish a strong digital foundation with our modern website development services. We create responsive, performance-optimized, and aesthetically pleasing websites tailored precisely to your brand's identity.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="font-accent uppercase text-xs sm:text-sm font-bold tracking-wider bg-cinematic-blue text-charcoal-night px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 group-hover:bg-ice-blue transition-colors">
                  Explore Service <Icons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc, idx) => {
            const Icon = (Icons as any)[svc.icon] || Icons.Video;
            return (
              <SectionReveal key={svc.id}>
                <div 
                  onClick={() => setSelectedService(svc.id)}
                  className="bg-charcoal-night border border-cinematic-blue/10 p-8 rounded-xl cursor-pointer group hover:border-l-4 hover:border-l-cinematic-blue hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                >
                  <Icon className="text-cinematic-blue mb-6 group-hover:scale-110 transition-transform duration-300" size={40} />
                  <h3 className="font-heading text-xl sm:text-2xl text-ice-blue mb-3 group-hover:text-cinematic-blue transition-colors">{svc.name}</h3>
                  <p className="font-body text-ice-blue/70 flex-grow mb-6">{svc.shortDescription}</p>
                  <span className="font-accent uppercase text-xs tracking-wider text-cinematic-blue flex items-center gap-2">
                    Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        serviceId={selectedService} 
      />
    </div>
  );
}
