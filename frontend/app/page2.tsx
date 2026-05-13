import Image from "next/image";
import Link from "next/link";
import {
   BarChart3,
   CheckCircle2,
   LineChart,
   Search,
   Target,
   TrendingUp,
} from "lucide-react";

export const metadata = {
   title: "Brand House | Digital Marketing That Drives Revenue",
};

const proof = [
   ["40 to 60%", "Increase in qualified leads"],
   ["20 to 50%", "Higher conversion rates"],
   ["2 to 4x", "Growth in average ROAS"],
];

const pillars = [
   [
      "Understand Demand",
      "We identify what your customers are searching for and why they are ready to act.",
   ],
   [
      "Align Messaging",
      "Ads and landing pages are built to match intent, pain points, and buying stage.",
   ],
   [
      "Capture and Qualify",
      "We design conversion paths that turn traffic quality into sales-ready leads.",
   ],
   [
      "Optimize for ROI",
      "Every campaign is measured against revenue, lead quality, and acquisition cost.",
   ],
];

export default function Home() {
   return (
      <>
         <section className="section-soft pt-[126px] pb-20">
            <div className="container-brand text-center">
               <span className="eyebrow">Performance Digital Marketing</span>
               <h1 className="headline-lg mx-auto mt-5 max-w-4xl">
                  Turn Traffic Into{" "}
                  <span className="text-gradient">Qualified Leads</span> and
                  Revenue.
               </h1>
               <p className="mx-auto mt-6 max-w-xl text-base font-semibold text-[#647086]">
                  We build and optimize marketing systems that turn demand into
                  measurable business growth.
               </p>
               <Link href="/contact" className="btn-primary mt-8">
                  Get Your Free Audit
               </Link>

               <div className="mt-14 grid gap-5 md:grid-cols-[1fr_1.5fr] md:items-end">
                  <div className="text-left">
                     <span className="eyebrow">Revenue Wins</span>
                     <h2 className="mt-4 text-4xl font-black leading-tight">
                        Performance{" "}
                        <span className="text-gradient">You Can Measure</span>
                     </h2>
                     <p className="mt-4 max-w-sm text-sm font-medium text-[#647086]">
                        The results come from clear positioning, stronger
                        conversion paths, and campaigns built around buying
                        intent.
                     </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                     {proof.map(([value, label]) => (
                        <div key={label} className="card p-6 text-left">
                           <BarChart3
                              className="mb-4 text-[#2f6bf2]"
                              size={22}
                           />
                           <p className="text-3xl font-black leading-none">
                              {value}
                           </p>
                           <p className="mt-2 text-xs font-bold text-[#647086]">
                              {label}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         <section className="py-24">
            <div className="container-brand card grid gap-10 p-8 md:grid-cols-[1fr_1fr] md:p-12">
               <div>
                  <h2 className="headline-md">
                     Why Most{" "}
                     <span className="text-gradient">Marketing Efforts</span>{" "}
                     Don't Convert
                  </h2>
                  <p className="mt-6 max-w-lg text-[#647086]">
                     Most businesses are not losing because of a lack of
                     traffic. They are struggling because their marketing
                     systems are misaligned.
                  </p>
                  <blockquote className="mt-8 border-l-2 border-[#101a2f] pl-5 text-lg font800 font-bold italic">
                     The problem is not traffic. It is how everything works
                     together.
                  </blockquote>
               </div>
               <div className="space-y-4">
                  {[
                     "You are getting traffic but not enough leads",
                     "Leads are low quality or do not convert",
                     "There is no clear tracking or attribution",
                     "Campaigns are optimized for clicks, not revenue",
                     "Your website is not built to convert",
                  ].map((item) => (
                     <div
                        key={item}
                        className="rounded-lg bg-red-50 px-5 py-4 text-sm font-bold text-[#101a2f]"
                     >
                        <span className="mr-3 text-red-400">+</span>
                        {item}
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="section-soft py-24">
            <div className="container-brand text-center">
               <h2 className="headline-md">
                  Marketing That{" "}
                  <span className="text-gradient">Drives Revenue.</span>
               </h2>
               <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-[#647086]">
                  We do not rely on isolated tactics. We build connected systems
                  designed to generate customers, qualified leads.
               </p>
               <div className="mt-12 grid gap-5 md:grid-cols-4">
                  {pillars.map(([title, text], index) => (
                     <div key={title} className="card p-6 text-left">
                        <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#2f6bf2]">
                           {index + 1}
                        </div>
                        <h3 className="font-extrabold">{title}</h3>
                        <p className="mt-3 text-xs font-medium text-[#647086]">
                           {text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="py-24">
            <div className="container-brand grid gap-12 md:grid-cols-2 md:items-center">
               <div className="browser-card bg-[#0b1426] p-8 pt-14">
                  <div className="rounded-lg bg-[#101d34] p-6 text-white">
                     <p className="text-3xl font-black">43,851</p>
                     <div className="mt-6 space-y-4">
                        <div className="h-3 rounded-full bg-[#3f8cff]" />
                        <div className="h-3 w-10/12 rounded-full bg-[#7d8cff]" />
                        <div className="h-3 w-8/12 rounded-full bg-[#ff5ac8]" />
                     </div>
                  </div>
               </div>
               <div>
                  <span className="eyebrow">Core Systems</span>
                  <h2 className="headline-md mt-4">
                     Turning Strategy Into{" "}
                     <span className="text-gradient">Performance.</span>
                  </h2>
                  <p className="mt-5 text-[#647086]">
                     Each part of your marketing is built to work together as
                     one growth engine.
                  </p>
                  <Link href="/services" className="btn-primary mt-8">
                     Explore All Services
                  </Link>
               </div>
            </div>
         </section>

         <section className="section-soft py-24">
            <div className="container-brand grid gap-10 md:grid-cols-2 md:items-center">
               <div>
                  <span className="eyebrow">The System</span>
                  <h2 className="headline-md mt-4">
                     Built to Support{" "}
                     <span className="text-gradient">Every Stage</span> of Your
                     Growth
                  </h2>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                     {[
                        "Paid search campaigns that capture high intent demand",
                        "SEO strategies that build long-term inbound traffic",
                        "Landing pages designed to convert, not just look good",
                        "Campaign optimization based on performance data",
                     ].map((item) => (
                        <div
                           key={item}
                           className="flex gap-3 text-sm font-bold text-[#101a2f]"
                        >
                           <CheckCircle2
                              className="shrink-0 text-emerald-500"
                              size={18}
                           />
                           {item}
                        </div>
                     ))}
                  </div>
               </div>
               <Image
                  src="/assets/work-2.jpg"
                  alt="Marketing dashboard"
                  width={720}
                  height={520}
                  className="rounded-lg object-cover shadow-2xl"
               />
            </div>
         </section>

         <section className="py-24">
            <div className="container-brand grid gap-12 md:grid-cols-3">
               {[
                  [Search, "Traffic Without Conversion Is Wasted Spend."],
                  [Target, "Better Leads Start With Better Systems."],
                  [LineChart, "Decisions Backed by Real Data."],
               ].map(([Icon, title]) => (
                  <div key={String(title)}>
                     <Icon className="mb-4 text-[#2f6bf2]" size={26} />
                     <h3 className="text-3xl font-black leading-tight">
                        {String(title)}
                     </h3>
                     <p className="mt-4 text-sm font-medium text-[#647086]">
                        We connect the campaign, website, and conversion
                        tracking so every dollar has a job.
                     </p>
                  </div>
               ))}
            </div>
         </section>

         <section className="px-4 pb-24">
            <div className="container-brand rounded-2xl bg-gradient-to-br from-[#17204a] to-[#07111f] px-6 py-16 text-center text-white shadow-2xl">
               <TrendingUp className="mx-auto mb-5 text-[#75a7ff]" size={32} />
               <h2 className="headline-md mx-auto max-w-3xl">
                  See Where Your Marketing Is{" "}
                  <span className="text-gradient">Falling Short.</span>
               </h2>
               <p className="mx-auto mt-5 max-w-xl text-sm font-semibold text-white/70">
                  We'll review your current campaigns, website, and conversion
                  flow to identify where leads are being lost.
               </p>
               <Link href="/contact" className="btn-primary mt-8">
                  Get Your Free Audit
               </Link>
            </div>
         </section>
      </>
   );
}
