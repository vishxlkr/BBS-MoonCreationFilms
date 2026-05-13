"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [imgError, setImgError] = useState(false);
   const pathname = usePathname();

   useEffect(() => {
      let ticking = false;

      const handleScroll = () => {
         if (!ticking) {
            requestAnimationFrame(() => {
               setScrolled(window.scrollY > 60);
               ticking = false;
            });

            ticking = true;
         }
      };

      // Run once immediately on load
      handleScroll();

      window.addEventListener("scroll", handleScroll, {
         passive: true,
      });

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Work", href: "/work" },
      { name: "Blog", href: "/blog" },
   ];

   return (
      <>
         <header
            className={`fixed top-0 left-0 right-0 w-full z-[50] isolate transition-all duration-300 ${
               scrolled
                  ? "bg-deep-navy/85 backdrop-blur-[12px] border-b border-cinematic-blue/10 py-4"
                  : "bg-white/95 backdrop-blur-md py-6"
            }`}
         >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
               <Link href="/" className="flex items-center gap-3">
                  {!imgError && (
                     <Image
                        src="/assets/logo0.png"
                        alt="Moon Creation Logo"
                        height={40}
                        width={40}
                        className="object-contain h-8 w-8 md:h-10 md:w-10 rounded-full"
                        onError={() => setImgError(true)}
                        priority
                        unoptimized
                     />
                  )}
                  <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-cinematic-blue tracking-wider uppercase whitespace-nowrap">
                     Moon Creation
                  </span>
               </Link>

               {/* Desktop Nav */}
               <nav className="hidden md:flex items-center gap-8">
                  <ul className="flex items-center gap-6">
                     {navLinks.map((link) => {
                        const isActive =
                           pathname === link.href ||
                           (link.href !== "/" &&
                              pathname.startsWith(link.href));
                        return (
                           <li key={link.name}>
                              <Link
                                 href={link.href}
                                 onClick={(e) => {
                                    if (pathname === link.href) {
                                       window.scrollTo({
                                          top: 0,
                                          behavior: "smooth",
                                       });
                                    }
                                 }}
                                 className={`font-body font-medium text-[0.9rem] tracking-[0.06em] uppercase transition-colors relative group hover:text-cinematic-blue ${
                                    isActive ? "text-ice-blue" : "text-ice-blue"
                                 }`}
                              >
                                 {link.name}
                                 <span
                                    className={`absolute -bottom-1 left-0 h-[2px] bg-cinematic-blue transition-all duration-300 ${
                                       isActive
                                          ? "w-full"
                                          : "w-0 group-hover:w-full"
                                    }`}
                                 ></span>
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
                  <Link
                     href="/blog#contact"
                     onClick={(e) => {
                        if (pathname === "/blog") {
                           const el = document.getElementById("contact");
                           if (el) {
                              e.preventDefault();
                              el.scrollIntoView({ behavior: "smooth" });
                              window.history.pushState(
                                 null,
                                 "",
                                 "/blog#contact",
                              );
                           }
                        }
                     }}
                     className="bg-[#001D39]/85 backdrop-blur-xl text-white border border-cinematic-blue px-5 py-2 rounded-full font-body font-medium text-[0.9rem] uppercase tracking-[0.06em] transition-all duration-300 hover:bg-transparent hover:text-cinematic-blue"
                  >
                     Contact Us
                  </Link>
               </nav>

               {/* Mobile Menu Toggle */}
               <button
                  className="md:hidden text-ice-blue z-50 relative"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Menu"
               >
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
               </button>
            </div>
         </header>

         {/* Mobile Nav Overlay */}
         <AnimatePresence>
            {mobileMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 z-40 bg-deep-navy flex flex-col items-center justify-center"
               >
                  <ul className="flex flex-col items-center gap-8">
                     {navLinks.map((link, i) => (
                        <motion.li
                           key={link.name}
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.08 + 0.2 }}
                        >
                           <Link
                              href={link.href}
                              onClick={(e) => {
                                 setMobileMenuOpen(false);
                                 if (pathname === link.href) {
                                    // Add slight delay for menu animation
                                    setTimeout(() => {
                                       window.scrollTo({
                                          top: 0,
                                          behavior: "smooth",
                                       });
                                    }, 300);
                                 }
                              }}
                              className="font-heading text-3xl text-ice-blue hover:text-cinematic-blue transition-colors"
                           >
                              {link.name}
                           </Link>
                        </motion.li>
                     ))}
                     <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navLinks.length * 0.08 + 0.2 }}
                        className="mt-4"
                     >
                        <Link
                           href="/blog#contact"
                           onClick={(e) => {
                              setMobileMenuOpen(false);
                              if (pathname === "/blog") {
                                 const el = document.getElementById("contact");
                                 if (el) {
                                    e.preventDefault();
                                    // Add a slight delay to allow menu animation to finish
                                    setTimeout(() => {
                                       el.scrollIntoView({
                                          behavior: "smooth",
                                       });
                                       window.history.pushState(
                                          null,
                                          "",
                                          "/blog#contact",
                                       );
                                    }, 300);
                                 }
                              }
                           }}
                           className="border border-cinematic-blue text-ice-blue px-8 py-3 rounded-full font-body font-medium uppercase tracking-wider hover:bg-cinematic-blue hover:text-charcoal-night transition-colors"
                        >
                           Contact Us
                        </Link>
                     </motion.li>
                  </ul>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
