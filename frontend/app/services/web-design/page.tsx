import Link from "next/link";
import {
   Layout,
   Smartphone,
   Search,
   Zap,
   Code2,
   MonitorSmartphone,
   ArrowRight,
   CheckCircle2,
} from "lucide-react";

export const metadata = {
   title: "Web Design Service | Moon Creation Films",
   description:
      "Premium web design and development services for brands that want modern, fast and conversion-focused websites.",
};

const features = [
   {
      icon: Layout,
      title: "Premium UI/UX Design",
      description:
         "Beautiful and intuitive interfaces crafted to reflect your brand and improve customer experience.",
   },
   {
      icon: Smartphone,
      title: "Responsive on Every Device",
      description:
         "Perfect experience across desktop, tablet, and mobile with fully responsive layouts.",
   },
   {
      icon: Search,
      title: "SEO Friendly Structure",
      description:
         "Built with performance and search visibility in mind to help customers find you faster.",
   },
   {
      icon: Zap,
      title: "Fast Performance",
      description:
         "Optimized loading speed and smooth interactions to improve retention and conversions.",
   },
   {
      icon: MonitorSmartphone,
      title: "Modern Technologies",
      description:
         "Built using modern frameworks and scalable architecture for long-term growth.",
   },
   {
      icon: Code2,
      title: "Clean Development",
      description:
         "Structured and maintainable codebase that allows easy future updates and expansion.",
   },
];

export default function WebDesignPage() {
   return (
      <>
         {/* Hero */}
         <section className="section-soft pt-[140px] pb-24 overflow-hidden">
            <div className="container-brand">
               <div className="grid gap-14 lg:grid-cols-[1.1fr_480px] lg:items-center">
                  {/* Left */}
                  <div>
                     <span className="eyebrow">Premium Digital Experience</span>

                     <h1 className="headline-lg mt-5 max-w-4xl">
                        Premium{" "}
                        <span className="text-gradient">Web Design</span> That
                        Builds Trust & Converts.
                     </h1>

                     <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#647086]">
                        Your website is your first impression. We create modern,
                        high-performing websites designed to build credibility,
                        improve engagement, and turn visitors into customers.
                     </p>

                     {/* Features quick points */}
                     <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {[
                           "Premium UI/UX",
                           "Responsive Design",
                           "SEO Optimized",
                           "Fast Performance",
                        ].map((item) => (
                           <div
                              key={item}
                              className="flex items-center gap-3 text-sm font-bold text-[#101a2f]"
                           >
                              <CheckCircle2
                                 size={18}
                                 className="text-emerald-500 shrink-0"
                              />
                              {item}
                           </div>
                        ))}
                     </div>

                     {/* CTA */}
                     <div className="mt-10 flex flex-wrap gap-4">
                        <a
                           href="/contact"
                           className="btn-primary inline-flex items-center gap-2"
                        >
                           Start Your Project
                           <ArrowRight size={18} />
                        </a>

                        <Link
                           href="/services"
                           className="inline-flex items-center gap-2 rounded-full border border-[#DCE5F3] bg-white px-7 py-4 font-semibold text-[#101a2f] transition hover:border-[#2f6bf2]/20 hover:shadow-md"
                        >
                           All Services
                        </Link>
                     </div>
                  </div>

                  {/* Right Mock Website */}
                  <div className="relative">
                     <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-blue-100 blur-[100px]" />

                     <div className="relative overflow-hidden rounded-[36px] border border-[#E6ECF5] bg-white shadow-[0_30px_80px_rgba(47,107,242,0.12)]">
                        {/* Browser Header */}
                        <div className="flex items-center gap-2 border-b border-[#EEF2F7] px-6 py-5">
                           <div className="h-3 w-3 rounded-full bg-red-400" />
                           <div className="h-3 w-3 rounded-full bg-yellow-400" />
                           <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        {/* Mock Website */}
                        <div className="p-6">
                           <div className="h-12 rounded-2xl bg-[#EEF4FF]" />

                           <div className="mt-5 h-[220px] rounded-[28px] bg-gradient-to-br from-[#2f6bf2] to-cyan-400" />

                           <div className="mt-5 grid grid-cols-2 gap-4">
                              <div className="h-28 rounded-3xl bg-[#F5F8FD]" />
                              <div className="h-28 rounded-3xl bg-[#F5F8FD]" />
                           </div>

                           <div className="mt-5 h-20 rounded-3xl bg-[#F5F8FD]" />
                        </div>
                     </div>

                     {/* Floating Card */}
                     <div className="absolute -bottom-6 -left-6 rounded-[28px] border border-[#E6ECF5] bg-white p-5 shadow-xl">
                        <p className="text-sm font-black text-[#101a2f]">
                           Modern • Fast • Premium
                        </p>
                        <p className="mt-1 text-xs font-medium text-[#647086]">
                           Built to convert visitors
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Features */}
         <section className="py-24">
            <div className="container-brand">
               <div className="text-center">
                  <span className="eyebrow">What We Deliver</span>

                  <h2 className="headline-md mt-4">
                     Everything Needed For a{" "}
                     <span className="text-gradient">Premium Website</span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold text-[#647086]">
                     We build websites designed for modern businesses —
                     beautiful, fast, responsive, and optimized for performance.
                  </p>
               </div>

               <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                  {features.map((feature) => {
                     const Icon = feature.icon;

                     return (
                        <div
                           key={feature.title}
                           className="
                              group
                              relative
                              overflow-hidden
                              rounded-[32px]
                              border
                              border-[#E8EDF5]
                              bg-white
                              p-8
                              transition-all
                              duration-500
                              hover:-translate-y-2
                              hover:border-[#2f6bf2]/15
                              hover:shadow-[0_25px_70px_rgba(47,107,242,0.12)]
                           "
                        >
                           <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-100 blur-[90px] opacity-0 transition duration-700 group-hover:opacity-100" />

                           <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4F8FF] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2f6bf2]">
                              <Icon className="h-7 w-7 text-[#2f6bf2] transition duration-500 group-hover:text-white" />
                           </div>

                           <h3 className="mt-7 text-2xl font-black text-[#101a2f]">
                              {feature.title}
                           </h3>

                           <p className="mt-4 text-sm leading-7 text-[#647086]">
                              {feature.description}
                           </p>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* CTA */}
         <section className="px-4 pb-24">
            <div className="container-brand rounded-[36px] bg-gradient-to-br from-[#17204A] to-[#07111F] px-8 py-20 text-center text-white shadow-2xl">
               <h2 className="headline-md mx-auto max-w-3xl">
                  Ready To Build a Website That{" "}
                  <span className="text-gradient">Actually Converts?</span>
               </h2>

               <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold text-white/70">
                  Whether you need a business website, landing page, portfolio,
                  or premium digital experience — we can build it for you.
               </p>

               <a
                  href="/contact"
                  className="btn-primary mt-8 inline-flex items-center gap-2"
               >
                  Get Started
                  <ArrowRight size={18} />
               </a>
            </div>
         </section>
      </>
   );
}
