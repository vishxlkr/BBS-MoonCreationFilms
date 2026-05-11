import React from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const serviceName = resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="pt-24 pb-20 min-h-screen bg-deep-navy">
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 to-deep-navy z-10" />
        <div className="absolute inset-0 bg-midnight-blue/40" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <SectionReveal>
            <h1 className="font-heading text-5xl md:text-7xl text-cinematic-blue mb-6">{serviceName}</h1>
            <p className="font-body text-xl text-ice-blue/80">A tailored cinematic approach for your unique vision.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <SectionReveal>
          <Link href="/services" className="inline-flex items-center gap-2 text-ice-blue/60 hover:text-cinematic-blue mb-12 transition-colors font-accent text-sm uppercase tracking-wider">
            <ArrowLeft size={16} /> Back to All Services
          </Link>
          
          <div className="space-y-8 font-body text-ice-blue text-lg leading-relaxed">
            <p>
              Our {serviceName} service is designed with the utmost attention to detail. We combine industry-leading equipment with a profound understanding of narrative structure to produce films that are not merely watched, but felt.
            </p>
            
            <h2 className="font-heading text-3xl text-cinematic-blue mt-12 mb-6">The Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Pre-Production", desc: "Concept development, storyboarding, and logistical planning to ensure a seamless shoot." },
                { step: "02", title: "Production", desc: "Executing the vision with cinematic lighting, dynamic camera movement, and professional audio." },
                { step: "03", title: "Post-Production", desc: "Expert editing, premium color grading, and sound design to bring the story to life." }
              ].map((s, i) => (
                <div key={i} className="bg-charcoal-night p-6 rounded-lg border border-cinematic-blue/10">
                  <span className="font-heading text-4xl text-midnight-blue mb-4 block">{s.step}</span>
                  <h3 className="font-accent text-cinematic-blue mb-2">{s.title}</h3>
                  <p className="text-sm text-ice-blue/70">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href={`/blog?service=${encodeURIComponent(serviceName)}#contact`} className="inline-block px-8 py-4 bg-transparent border border-cinematic-blue text-cinematic-blue hover:bg-cinematic-blue hover:text-deep-navy rounded-full font-accent uppercase tracking-wider text-sm transition-all duration-300">
                Book {serviceName}
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
