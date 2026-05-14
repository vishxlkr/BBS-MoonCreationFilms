import React from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { blogsData } from "@/lib/blog";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const resolvedParams = await params;
   const post = blogsData.find((b) => b.slug === resolvedParams.slug);

   if (!post) {
      notFound();
   }

   return (
      // Light background with a very subtle indigo radial glow at the top
      <div className="pt-24 pb-20 min-h-screen bg-slate-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]">
         <div className="max-w-4xl mx-auto px-6">
            <Link
               href="/blog"
               className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-12 transition-all duration-300 font-medium text-sm tracking-wide mt-1 group"
            >
               <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
               />
               Back to Blog
            </Link>

            <SectionReveal>
               <div className="mb-8 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
                  <span className="px-3 py-1.5 bg-indigo-100/50 border border-indigo-200 text-indigo-700 uppercase tracking-widest rounded-full text-xs font-semibold">
                     {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span className="text-slate-300">•</span>
                  <span>{post.readTime}</span>
               </div>

               <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 mb-12 leading-tight tracking-tight">
                  {post.title}
               </h1>
            </SectionReveal>
         </div>

         <div className="w-full max-w-6xl mx-auto px-4 mb-16">
            <SectionReveal>
               {/* Softened shadow and light ring for the image container */}
               <div className="aspect-[21/9] bg-slate-200 rounded-2xl overflow-hidden ring-1 ring-slate-900/5 shadow-2xl shadow-slate-200/50 relative group">
                  <Image
                     src={post.image}
                     alt={post.title}
                     fill
                     sizes="(max-width: 1200px) 100vw, 1152px"
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                     priority
                  />
                  {/* Subtle dark gradient at the bottom so overlaid elements (if any) stay readable, or just for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
               </div>
            </SectionReveal>
         </div>

         <div className="max-w-3xl mx-auto px-6">
            <SectionReveal>
               {/* Removed prose-invert. Added deep slate text and vibrant indigo accents for light mode */}
               <div
                  className="prose prose-lg max-w-none text-slate-600  marker:text-indigo-600 
                  prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                  prose-a:text-indigo-600 prose-a:decoration-indigo-600/30 hover:prose-a:decoration-indigo-600
                  prose-blockquote:border-l-indigo-600 prose-blockquote:bg-indigo-50 prose-blockquote:py-2 prose-blockquote:pr-6 prose-blockquote:rounded-r-lg prose-blockquote:text-slate-800 prose-blockquote:not-italic"
               >
                  {post.content.map((block, idx) => {
                     if (block.type === "lead")
                        return (
                           <p
                              key={idx}
                              className="lead text-xl text-slate-800 font-medium leading-relaxed"
                           >
                              {block.text}
                           </p>
                        );
                     if (block.type === "paragraph")
                        return (
                           <p key={idx} className="leading-relaxed">
                              {block.text}
                           </p>
                        );
                     if (block.type === "heading")
                        return <h2 key={idx}>{block.text}</h2>;
                     if (block.type === "quote")
                        return <blockquote key={idx}>{block.text}</blockquote>;
                     return null;
                  })}
               </div>
            </SectionReveal>
         </div>
      </div>
   );
}
