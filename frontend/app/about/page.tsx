import React from "react";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import BtsVideoPlayer from "@/components/about/BtsVideoPlayer";

export const metadata = {
  title: "Our Story | Moon Creation Films",
  description: "The founding story, vision, and values of Moon Creation Films.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-deep-navy">
      {/* Section A — Page Hero */}
      <section className="relative w-full h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden mb-8 md:mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 to-deep-navy z-10" />
        <div className="absolute inset-0 bg-midnight-blue/50" />
        {/* You could add a background image or video here */}
        <div className="relative z-20 text-center px-4">
          <SectionReveal>
            <h1 className="font-heading text-5xl md:text-7xl text-cinematic-blue mb-4">Our Story</h1>
            <p className="font-accent text-ice-blue tracking-widest uppercase text-sm">Moon Creation Films</p>
          </SectionReveal>
        </div>
      </section>

      {/* Section B — Brand Story */}
      <section className="max-w-4xl mx-auto px-6 pb-12 pt-8 md:pb-20 md:pt-12">
        <SectionReveal>
          <div className="space-y-8 font-body text-ice-blue text-lg leading-relaxed">
            <p>
              At Moon Creation Films, we believe every brand carries a story worth telling — a story that deserves to be seen, felt, and remembered.
            </p>
            <p>
              We craft cinematic ad films, commercial videos, and digital content that help businesses build trust, create impact, and stand out in today’s fast-moving digital landscape. Every frame we produce is designed with purpose — blending storytelling, emotion, and visual excellence to bring ideas to life.
            </p>
            <p>
              Along with high-quality content production, we also offer social media management and digital growth solutions, empowering brands to build a strong, consistent, and engaging online presence.
            </p>
            <blockquote className="font-heading italic text-3xl md:text-4xl text-cinematic-blue border-l-4 border-cinematic-blue pl-6 my-12 py-2">
              "For us, filmmaking isn’t just production — it’s the art of transforming vision into experience."
            </blockquote>
          </div>
        </SectionReveal>
      </section>

      {/* Section C — BTS Video */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-cinematic-blue mb-4">A Glimpse Behind the Lens</h2>
            <p className="font-body text-ice-blue/80">See how the magic happens.</p>
          </div>
          
          <BtsVideoPlayer />
        </SectionReveal>
      </section>
    </div>
  );
}
