"use client";

import React, { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

import { blogsData as posts } from "@/lib/blog";

export default function BlogListingPage() {
   const [activeCategory, setActiveCategory] = useState("All");

   const filteredPosts =
      activeCategory === "All"
         ? posts
         : posts.filter((post) => post.category === activeCategory);

   return (
      <div className="min-h-screen bg-white pb-16 sm:pb-20">
         {/* Hero Section */}
         <section className="section-dark pt-24 pb-16 sm:pt-[142px] sm:pb-24">
            <div className="container-brand">
               <SectionReveal>
                  <h1 className="headline-lg max-w-4xl">
                     Stories & <br />{" "}
                     <span className="text-gradient">Insights</span>
                  </h1>

                  <p className="mt-5 max-w-xl text-base font-semibold text-white/70 sm:text-lg">
                     Behind the lens of Moon Creation Films. Explore our
                     thoughts on filmmaking, industry trends, and creative
                     insights.
                  </p>
               </SectionReveal>
            </div>
         </section>

         {/* Content Section */}
         <section className="mx-auto max-w-7xl px-3 py-16 sm:px-6 sm:py-24">
            <div className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-16 sm:gap-3">
               {["All", "Weddings", "Tips", "BTS", "Industry"].map((tag) => (
                  <button
                     key={tag}
                     onClick={() => setActiveCategory(tag)}
                     className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-colors font-accent sm:px-5 ${
                        activeCategory === tag
                           ? "border-blue-600 text-white bg-blue-600"
                           : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
                     }`}
                  >
                     {tag}
                  </button>
               ))}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
               {filteredPosts.map((post, index) => (
                  <SectionReveal key={post.id}>
                     <Link
                        href={`/blog/${post.slug}`}
                        className="block group h-full"
                     >
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden h-full flex flex-col hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                           <div className="aspect-video bg-gray-200 relative overflow-hidden">
                              <Image
                                 src={post.image}
                                 alt={post.title}
                                 fill
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                 className="object-cover group-hover:scale-105 transition-transform duration-700"
                                 priority={index < 3}
                              />
                              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-700" />
                           </div>
                           <div className="flex flex-grow flex-col p-5 sm:p-6">
                              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                                 <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-accent uppercase tracking-wider rounded-full">
                                    {post.category}
                                 </span>
                                 <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                                    <Clock size={12} /> {post.readTime}
                                 </span>
                              </div>
                              <h3 className="font-heading mb-3 text-xl text-gray-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
                                 {post.title}
                              </h3>
                              <p className="font-body text-gray-600 text-sm flex-grow mb-6">
                                 {post.excerpt}
                              </p>
                              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-gray-200 pt-4 font-body text-xs text-gray-500">
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
      </div>
   );
}
