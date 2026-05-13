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
      <div className="pb-20 min-h-screen bg-white">
         {/* Hero Section */}
         <section className="section-dark pt-[142px] pb-24">
            <div className="container-brand">
               <SectionReveal>
                  <h1 className="headline-lg max-w-4xl">
                     Stories & <br />{" "}
                     <span className="text-gradient">Insights</span>
                  </h1>

                  <p className="mt-5 max-w-xl text-lg font-semibold text-white/70">
                     Behind the lens of Moon Creation Films. Explore our
                     thoughts on filmmaking, industry trends, and creative
                     insights.
                  </p>
               </SectionReveal>
            </div>
         </section>

         {/* Content Section */}
         <section className="max-w-7xl mx-auto px-6 pb-24 py-24">
            <div className="flex flex-wrap justify-center gap-3 mb-16">
               {["All", "Weddings", "Tips", "BTS", "Industry"].map((tag) => (
                  <button
                     key={tag}
                     onClick={() => setActiveCategory(tag)}
                     className={`px-5 py-2 rounded-full border text-xs uppercase tracking-wider transition-colors font-accent ${
                        activeCategory === tag
                           ? "border-blue-600 text-white bg-blue-600"
                           : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
                     }`}
                  >
                     {tag}
                  </button>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                           <div className="p-6 flex flex-col flex-grow">
                              <div className="flex items-center justify-between mb-4">
                                 <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-accent uppercase tracking-wider rounded-full">
                                    {post.category}
                                 </span>
                                 <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                                    <Clock size={12} /> {post.readTime}
                                 </span>
                              </div>
                              <h3 className="font-heading text-2xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                 {post.title}
                              </h3>
                              <p className="font-body text-gray-600 text-sm flex-grow mb-6">
                                 {post.excerpt}
                              </p>
                              <div className="flex items-center justify-between text-gray-500 text-xs font-body mt-auto pt-4 border-t border-gray-200">
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
