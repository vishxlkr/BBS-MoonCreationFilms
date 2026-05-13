import Link from "next/link";

const cities = [
   "Agoura Hills",
   "Anaheim",
   "Beverly Hills",
   "Burbank",
   "Calabasas",
   "Encino",
   "Glendale",
   "Lancaster",
   "Long Beach",
   "Los Angeles",
   "Orange County",
   "Pasadena",
   "Santa Clarita",
   "Santa Monica",
   "Sherman Oaks",
   "Torrance",
   "Woodland Hills",
];

const columns = [
   {
      title: "Quick Links",
      links: [
         ["Home", "/"],
         ["Services", "/services"],
         ["Contact", "/contact"],
      ],
   },
   {
      title: "Services",
      links: [
         ["Paid Advertising", "/services"],
         ["SEO", "/services"],
         ["Web Development", "/services"],
         ["Consulting", "/services"],
      ],
   },
   {
      title: "Industries",
      links: [
         ["Home Services", "/work"],
         ["Legal", "/work"],
         ["Ecommerce", "/work"],
         ["Dental", "/work"],
         ["Addiction Treatment", "/work"],
      ],
   },
   {
      title: "Policies",
      links: [
         ["Privacy Policy", "/privacy"],
         ["Terms of Service", "/terms"],
         ["Cookie Policy", "/privacy"],
         ["Acceptable Use Policy", "/terms"],
      ],
   },
];

export default function Footer() {
   return (
      <footer className="bg-black text-white">
         <div className="container-brand py-16">
            <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(4,1fr)]">
               <div>
                  <Link
                     href="/"
                     className="mb-5 block text-[28px] font-black tracking-[-0.08em]"
                  >
                     moon<span className="text-[#4ea3ff]">Creation</span>
                  </Link>
                  <p className="max-w-[220px] text-base font-medium leading-relaxed text-white/85">
                     Expert digital marketing solutions for your business
                     growth.
                  </p>
               </div>

               {columns.map((column) => (
                  <div key={column.title}>
                     <h3 className="mb-4 text-base font-extrabold">
                        {column.title}
                     </h3>
                     <ul className="space-y-3">
                        {column.links.map(([label, href]) => (
                           <li key={label}>
                              <Link
                                 href={href}
                                 className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                              >
                                 {label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* <div className="mt-14 border-t border-white/15 pt-10 text-center">
               <h3 className="mb-6 text-base font-extrabold">
                  Cities We Serve
               </h3>
               <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-7 gap-y-4">
                  {cities.map((city) => (
                     <span
                        key={city}
                        className="text-sm font-medium text-slate-400"
                     >
                        {city}
                     </span>
                  ))}
               </div>
               <p className="mt-10 text-sm font-medium text-slate-400">
                  &copy; 2026 Brand House. All rights reserved.
               </p>
            </div> */}
         </div>
      </footer>
   );
}
