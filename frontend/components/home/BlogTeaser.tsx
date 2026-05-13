"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import StaggerGrid from "@/components/ui/StaggerGrid";
import { motion } from "framer-motion";

import { blogsData as posts } from "@/lib/blog";
export default function BlogTeaser() {
   return (
      <section className="py-24 px-6 md:px-12 bg-white">
         <div className="max-w-[1440px] mx-auto">
            <SectionReveal className="mb-16 text-center">
               <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
                  Blogs & Stories
               </h2>
               <p className="font-body text-gray-600 max-w-2xl mx-auto">
                  Thoughts on cinematography, industry insights, and
                  behind-the-scenes stories.
               </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               {posts.map((post, index) => (
                  <motion.div
                     key={post.id}
                     variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 },
                     }}
                  >
                     <Link
                        href={`/blog/${post.slug}`}
                        className="group block h-full flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
                     >
                        <div className="relative aspect-video overflow-hidden bg-gray-200">
                           <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                              priority={index < 3}
                           />
                           <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full font-accent text-xs font-semibold uppercase tracking-wider">
                              {post.category}
                           </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                           <h3 className="font-heading text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {post.title}
                           </h3>
                           <p className="font-body text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                              {post.excerpt}
                           </p>

                           <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200 font-accent text-[0.8rem] text-gray-500 uppercase tracking-wider">
                              <span>{post.date}</span>
                              <span>{post.readTime}</span>
                           </div>
                        </div>
                     </Link>
                  </motion.div>
               ))}
            </StaggerGrid>

            <SectionReveal delay={0.2} className="text-center">
               <Link
                  href="/blog"
                  className="inline-block border-b-2 border-blue-600 pb-1 font-accent uppercase text-blue-600 text-sm tracking-[0.1em] hover:text-blue-700 hover:border-blue-700 transition-colors"
               >
                  Read All Articles
               </Link>
            </SectionReveal>
         </div>
      </section>
   );
}
