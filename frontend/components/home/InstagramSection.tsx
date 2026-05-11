"use client";

import Script from "next/script";
import SectionReveal from "@/components/ui/SectionReveal";
import { contactData } from "@/lib/contact-data";

export default function InstagramSection() {
  const widgetId = process.env.NEXT_PUBLIC_BEHOLD_WIDGET_ID;

  return (
    <section className="py-24 bg-deep-navy border-t border-cinematic-blue/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <SectionReveal className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-cinematic-blue mb-4">Capture Moments with us</h2>
          <p className="font-accent text-ice-blue tracking-[0.15em] text-sm mb-12">
            @MOONCREATIONFILMS
          </p>
        </SectionReveal>

        {/* Behold.so Widget Integration */}
        <SectionReveal delay={0.2} className="mb-12">
          {widgetId ? (
            <>
              <figure data-behold-id={widgetId}></figure>
              <Script src="https://w.behold.so/widget.js" strategy="lazyOnload" />
            </>
          ) : (
            <div className="bg-charcoal-night rounded-xl border border-cinematic-blue/20 p-12 text-ice-blue/60 font-body">
              Instagram feed widget goes here. Set NEXT_PUBLIC_BEHOLD_WIDGET_ID in .env
            </div>
          )}
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <a 
            href={contactData.socialMedia.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-cinematic-blue px-8 py-3 rounded-full font-accent uppercase tracking-wider text-sm text-ice-blue hover:bg-cinematic-blue hover:text-charcoal-night transition-colors"
          >
            Follow Us on Instagram
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
