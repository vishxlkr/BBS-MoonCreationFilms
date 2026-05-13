"use client";

import React, { useState } from "react";
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
      <>
         <section className="section-dark pt-[142px] pb-24">
            <div className="container-brand">
               <p className="mb-5 text-xs font-bold text-white/80">
                  Home &gt; Blog
               </p>
               <h1 className="headline-lg max-w-4xl">
                  Stories & <span className="text-gradient">Insights</span>
               </h1>
               <p className="mt-5 max-w-xl text-lg font-semibold text-white/70">
                  Behind the lens of Moon Creation Films. Explore our thoughts
                  on filmmaking, industry trends, and creative insights.
               </p>
            </div>
         </section>

         <section className="py-24">
            <div className="container-brand">
               <div className="flex flex-wrap justify-center gap-3 mb-16">
                  {["All", "Weddings", "Tips", "BTS", "Industry"].map((tag) => (
                     <button
                        key={tag}
                        onClick={() => setActiveCategory(tag)}
                        className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 font-bold ${
                           activeCategory === tag
                              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white border border-cyan-400"
                              : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                        }`}
                     >
                        {tag}
                     </button>
                  ))}
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                     <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="group h-full"
                     >
                        <div className="h-full flex flex-col rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                           <div className="relative overflow-hidden bg-gray-900/50 aspect-video">
                              <Image
                                 src={post.image}
                                 alt={post.title}
                                 fill
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                 className="object-cover group-hover:scale-110 transition-transform duration-700"
                                 priority={false}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-colors duration-300" />
                           </div>
                           <div className="p-6 flex flex-col flex-grow">
                              <div className="flex items-center justify-between gap-3 mb-4">
                                 <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider rounded-full border border-cyan-500/30">
                                    {post.category}
                                 </span>
                                 <span className="flex items-center gap-1 text-white/60 text-xs font-semibold">
                                    <Clock size={12} /> {post.readTime}
                                 </span>
                              </div>
                              <h3 className="text-lg font-black text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                                 {post.title}
                              </h3>
                              <p className="text-sm font-medium text-white/60 flex-grow mb-6 line-clamp-3">
                                 {post.excerpt}
                              </p>
                              <div className="flex items-center justify-between text-white/50 text-xs font-bold mt-auto pt-4 border-t border-white/10">
                                 <span>Moon Creation Films</span>
                                 <span>{post.date}</span>
                              </div>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </section>

         <section className="px-4 py-24">
            <div className="container-brand rounded-2xl bg-gradient-to-br from-[#17204a] to-[#07111f] px-6 py-16 text-center text-white shadow-2xl">
               <h2 className="headline-md mx-auto max-w-4xl">
                  Have a Project in <span className="text-gradient">Mind?</span>
               </h2>
               <p className="mx-auto mt-5 max-w-xl text-sm font-semibold text-white/70">
                  Let's bring your vision to life. Contact us today to discuss
                  your next project.
               </p>
               <Link href="/contact" className="btn-primary mt-8">
                  Get In Touch
               </Link>
            </div>
         </section>
      </>
   );
}
