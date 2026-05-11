import React from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Share2 } from "lucide-react";
import { blogsData } from "@/lib/blog";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogsData.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-deep-navy">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-ice-blue/60 hover:text-cinematic-blue mb-12 transition-colors font-accent text-sm uppercase tracking-wider mt-8">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <SectionReveal>
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm font-body text-ice-blue/60">
            <span className="px-3 py-1 bg-midnight-blue text-cinematic-blue font-accent uppercase tracking-wider rounded-full text-xs">{post.category}</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-cinematic-blue mb-12 leading-tight">{post.title}</h1>
        </SectionReveal>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 mb-16">
        <SectionReveal>
          <div className="aspect-[21/9] bg-charcoal-night rounded-xl overflow-hidden border border-cinematic-blue/20 relative">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-midnight-blue/30 mix-blend-overlay" />
          </div>
        </SectionReveal>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <SectionReveal>
          <div className="prose prose-invert prose-lg max-w-none font-body text-ice-blue/80 marker:text-cinematic-blue prose-headings:font-heading prose-headings:text-cinematic-blue prose-a:text-cinematic-blue prose-blockquote:border-cinematic-blue prose-blockquote:text-ice-blue prose-blockquote:font-heading prose-blockquote:italic">
            {post.content.map((block, idx) => {
              if (block.type === 'lead') return <p key={idx} className="lead text-xl text-ice-blue">{block.text}</p>;
              if (block.type === 'paragraph') return <p key={idx}>{block.text}</p>;
              if (block.type === 'heading') return <h2 key={idx}>{block.text}</h2>;
              if (block.type === 'quote') return <blockquote key={idx}>{block.text}</blockquote>;
              return null;
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-cinematic-blue/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-midnight-blue flex items-center justify-center text-cinematic-blue font-heading text-xl">M</div>
              <div>
                <h4 className="font-accent text-sm text-cinematic-blue uppercase tracking-wider">Moon Creation Films</h4>
                <p className="font-body text-xs text-ice-blue/60">Editorial Team</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-ice-blue/60 hover:text-cinematic-blue transition-colors font-accent text-xs uppercase tracking-wider">
              <Share2 size={16} /> Share
            </button>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
