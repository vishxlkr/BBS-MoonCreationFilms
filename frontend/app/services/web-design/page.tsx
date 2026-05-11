import React from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import { Monitor, Layout, Smartphone, Search, Zap, Code } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Web Design Service | Moon Creation Films",
  description: "Modern, responsive, and performance-optimized websites tailored to your brand.",
};

export default function WebDesignPage() {
  const features = [
    {
      icon: <Layout size={32} />,
      title: "Custom UI/UX Design",
      description: "Tailored interfaces that capture your brand's unique identity and ensure an intuitive user experience."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Responsive Development",
      description: "Flawless performance across all devices, from desktop monitors to mobile phones."
    },
    {
      icon: <Search size={32} />,
      title: "SEO-Friendly Architecture",
      description: "Built with best practices to ensure high visibility and strong rankings on search engines."
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Lightning-fast load times through optimized code, modern frameworks, and asset delivery."
    },
    {
      icon: <Monitor size={32} />,
      title: "Modern Technologies",
      description: "Leveraging the latest web technologies to deliver secure, scalable, and future-proof solutions."
    },
    {
      icon: <Code size={32} />,
      title: "Clean Codebase",
      description: "Maintainable, robust, and well-structured code for seamless future updates and integrations."
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-deep-navy">
      <section className="relative w-full min-h-[60vh] py-20 sm:py-0 flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 to-deep-navy z-10" />
        <div className="absolute inset-0 bg-midnight-blue/30" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <SectionReveal>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cinematic-blue/10 rounded-full flex items-center justify-center border border-cinematic-blue/30">
                <Monitor className="text-cinematic-blue w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-cinematic-blue mb-6">Web Design Service</h1>
            <p className="font-body text-ice-blue/80 text-sm sm:text-lg md:text-xl leading-relaxed mb-8">
              Establish a strong digital foundation with our modern website development services. We create responsive, performance-optimized, and aesthetically pleasing websites tailored precisely to your brand's identity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center">
              <Link 
                href="/blog#contact" 
                className="bg-cinematic-blue text-charcoal-night px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-accent text-sm sm:text-base uppercase tracking-wider font-semibold hover:bg-ice-blue transition-colors w-full sm:w-auto text-center"
              >
                Start a Project
              </Link>
              <Link 
                href="/services" 
                className="border border-cinematic-blue text-ice-blue px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-accent text-sm sm:text-base uppercase tracking-wider font-semibold hover:bg-cinematic-blue/10 transition-colors w-full sm:w-auto text-center"
              >
                All Services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl text-ice-blue mb-4">Our Approach</h2>
            <p className="font-body text-ice-blue/70 max-w-2xl mx-auto">
              We combine stunning aesthetics with robust engineering to deliver websites that not only look incredible but perform exceptionally well in the real world.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <SectionReveal key={idx} delay={idx * 0.1}>
              <div className="bg-charcoal-night border border-cinematic-blue/10 p-6 sm:p-8 rounded-xl h-full hover:border-cinematic-blue/50 transition-colors group">
                <div className="text-cinematic-blue mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl text-ice-blue mb-3">{feature.title}</h3>
                <p className="font-body text-ice-blue/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
      
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <SectionReveal>
          <div className="bg-gradient-to-r from-cinematic-blue/5 via-cinematic-blue/10 to-cinematic-blue/5 border border-cinematic-blue/20 rounded-2xl p-6 sm:p-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-ice-blue mb-6">Ready to elevate your digital presence?</h2>
            <p className="font-body text-ice-blue/70 mb-8 max-w-2xl mx-auto">
              Whether you need a sleek portfolio, a dynamic corporate site, or an engaging landing page, our team is ready to bring your vision to life on the web.
            </p>
            <Link 
              href="/blog#contact" 
              className="inline-block bg-cinematic-blue text-charcoal-night px-6 py-3 sm:px-10 sm:py-4 rounded-full font-accent text-sm sm:text-base uppercase tracking-wider font-bold hover:bg-ice-blue hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(56,182,255,0.3)]"
            >
              Get in Touch
            </Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
