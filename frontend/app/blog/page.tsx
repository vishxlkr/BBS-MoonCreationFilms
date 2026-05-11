"use client";

import React, { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

import { blogsData as posts } from "@/lib/blog";
import ContactSection from "@/components/blog/ContactSection";

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-deep-navy">
      <section className="relative w-full h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden mb-8 md:mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 to-deep-navy z-10" />
        <div className="absolute inset-0 bg-midnight-blue/40" />
        <div className="relative z-20 text-center px-4">
          <SectionReveal>
            <h1 className="font-heading text-5xl md:text-7xl text-cinematic-blue mb-4">Stories & Insights</h1>
            <p className="font-accent text-ice-blue tracking-widest uppercase text-sm">Behind the lens of Moon Creation Films</p>
          </SectionReveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["All", "Weddings", "Tips", "BTS", "Industry"].map((tag) => (
            <button 
              key={tag} 
              onClick={() => setActiveCategory(tag)}
              className={`px-5 py-2 rounded-full border text-xs uppercase tracking-wider transition-colors font-accent ${
                activeCategory === tag 
                  ? "border-cinematic-blue text-cinematic-blue bg-cinematic-blue/10" 
                  : "border-cinematic-blue/20 text-ice-blue hover:border-cinematic-blue hover:text-cinematic-blue"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <SectionReveal key={post.id}>
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <div className="bg-charcoal-night border border-cinematic-blue/10 rounded-xl overflow-hidden h-full flex flex-col hover:border-cinematic-blue/50 transition-colors duration-300">
                  <div className="aspect-video bg-midnight-blue/50 relative overflow-hidden">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" priority={index < 3} />
                    <div className="absolute inset-0 bg-deep-navy/20 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-midnight-blue text-cinematic-blue text-xs font-accent uppercase tracking-wider rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-ice-blue/50 text-xs font-body">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl text-ice-blue mb-3 group-hover:text-cinematic-blue transition-colors">{post.title}</h3>
                    <p className="font-body text-ice-blue/70 text-sm flex-grow mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-ice-blue/50 text-xs font-body mt-auto pt-4 border-t border-cinematic-blue/10">
                      <span>Moon Creation Films</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
