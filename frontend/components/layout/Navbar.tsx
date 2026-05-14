"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
   { name: "Home", href: "/", hasChevron: false },
   { name: "Services", href: "/services", hasChevron: false },
   { name: "Work", href: "/work", hasChevron: false },
   { name: "Blog", href: "/blog", hasChevron: false },
];

export default function Navbar() {
   const [open, setOpen] = useState(false);
   const pathname = usePathname();

   return (
      <header className="fixed inset-x-0 top-0 z-50 bg-[#e9eaed]/95 backdrop-blur border-b border-black/5">
         <div className="container-brand flex h-16 items-center justify-between gap-3 md:h-[74px] md:gap-6">
            <Link
               href="/"
               className="flex min-w-0 items-center text-[20px] font-black tracking-[-0.04em] text-black sm:text-[24px] md:text-[28px] md:tracking-[-0.08em]"
            >
               moon<span className="text-gradient">Creation</span>
               <span className="ml-0.5 text-[11px] text-[#4ea3ff] sm:text-[13px] md:text-[15px]">
                  films
               </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
               {navLinks.map((link) => {
                  const active =
                     pathname === link.href ||
                     (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                     <Link
                        key={link.name}
                        href={link.href}
                        className={`relative flex items-center gap-1 py-2 text-sm font-semibold transition-all duration-300 ${
                           active
                              ? "text-[#4A7EF4]"
                              : "text-[#4f596b] hover:text-[#101a2f]"
                        }`}
                     >
                        {link.name}

                        {link.hasChevron && (
                           <ChevronDown size={15} strokeWidth={2.4} />
                        )}

                        {/* Premium Animated Underline */}
                        <span
                           className={`absolute -bottom-[6px] left-1/2 h-[2.5px] -translate-x-1/2 rounded-full bg-[#4A7EF4] transition-all duration-300 ease-out ${
                              active ? "w-full" : "w-0"
                           }`}
                        />
                     </Link>
                  );
               })}

               <Link href="/contact" className="btn-primary px-8">
                  Contact Us
               </Link>
            </nav>

            <button
               type="button"
               className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#101a2f] md:hidden"
               onClick={() => setOpen((value) => !value)}
               aria-label="Toggle navigation"
               aria-expanded={open}
            >
               {open ? <X size={22} /> : <Menu size={22} />}
            </button>
         </div>

         {open && (
            <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-black/5 bg-white px-3 py-4 md:hidden">
               <div className="mx-auto flex max-w-sm flex-col gap-2">
                  {navLinks.map((link) => {
                     const active =
                        pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href));
                     return (
                        <Link
                           key={link.name}
                           href={link.href}
                           onClick={() => setOpen(false)}
                           className={`rounded-lg px-4 py-3 text-sm font-bold transition-colors ${
                              active
                                 ? "bg-[#2f6bf2] text-white"
                                 : "text-[#101a2f] hover:bg-[#f5f8fc]"
                           }`}
                        >
                           {link.name}
                        </Link>
                     );
                  })}
                  <Link
                     href="/contact"
                     onClick={() => setOpen(false)}
                     className="btn-primary mt-2 w-full"
                  >
                     Contact Us
                  </Link>
               </div>
            </div>
         )}
      </header>
   );
}
