"use client";

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

export default function AboutTeaser() {
  return (
    <section className="py-24 px-6 bg-deep-navy">
      <div className="max-w-[1000px] mx-auto text-center">
        <SectionReveal>
          <p className="font-heading italic text-3xl md:text-5xl text-ice-blue leading-tight mb-10">
            "For us, filmmaking isn’t just production — it’s the art of transforming vision into experience."
          </p>
          <Link 
            href="/about"
            className="group font-accent uppercase tracking-[0.1em] text-cinematic-blue text-sm flex items-center justify-center gap-3 w-fit mx-auto"
          >
            <span className="relative pb-1">
              Our Story
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cinematic-blue transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
