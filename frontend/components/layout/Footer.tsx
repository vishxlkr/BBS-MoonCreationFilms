import Link from "next/link";
import { Camera, Phone } from "lucide-react";
import { contactData } from "@/lib/contact-data";

export default function Footer() {
   return (
      <footer
         className="bg-[#001D39] border-t"
         style={{
            borderImageSource:
               "linear-gradient(90deg, transparent, rgba(123,189,232,0.25), transparent)",
            borderImageSlice: 1,
         }}
      >
         <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-20 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">
               {/* Left */}
               <div>
                  <Link
                     href="/"
                     className="
                     font-heading
                     text-[1.5rem]
                     text-[#BDD8E9]
                     tracking-wide
                     mb-4
                     block
                     "
                  >
                     Moon Creation Films
                  </Link>

                  <p className="text-[#BDD8E9]/70 text-[0.95rem] max-w-sm leading-relaxed">
                     Premium cinematography and visual storytelling crafted for
                     the moments that deserve to be remembered forever.
                  </p>
               </div>

               {/* Center */}
               <div className="flex flex-col gap-4">
                  <h3
                     className="
                     text-[#7BBDE8]
                     uppercase
                     tracking-[0.18em]
                     text-sm
                     font-semibold
                     mb-2
                     "
                  >
                     Quick Links
                  </h3>

                  {[
                     { name: "About Us", href: "/about" },
                     { name: "Services", href: "/services" },
                     { name: "Our Work", href: "/work" },
                     { name: "Contact", href: "/blog#contact" },
                  ].map((item) => (
                     <Link
                        key={item.name}
                        href={item.href}
                        className="
                        text-[#BDD8E9]/75
                        hover:text-[#7BBDE8]
                        transition-all duration-300
                        w-fit
                        hover:translate-x-1
                        "
                     >
                        {item.name}
                     </Link>
                  ))}
               </div>

               {/* Right */}
               <div>
                  <h3
                     className="
                     text-[#7BBDE8]
                     uppercase
                     tracking-[0.18em]
                     text-sm
                     font-semibold
                     mb-5
                     "
                  >
                     Connect
                  </h3>

                  <div className="flex gap-4">
                     <a
                        href={contactData.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        w-[46px] h-[46px]
                        rounded-full
                        border border-[#7BBDE8]/20
                        bg-white/[0.03]
                        backdrop-blur-md
                        flex items-center justify-center
                        text-[#BDD8E9]
                        transition-all duration-300
                        hover:border-[#7BBDE8]/50
                        hover:bg-[#0A4174]
                        hover:text-white
                        hover:scale-105
                        "
                     >
                        <Camera size={19} />
                     </a>

                     <a
                        href={`https://wa.me/${contactData.socialMedia.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        w-[46px] h-[46px]
                        rounded-full
                        border border-[#7BBDE8]/20
                        bg-white/[0.03]
                        backdrop-blur-md
                        flex items-center justify-center
                        text-[#BDD8E9]
                        transition-all duration-300
                        hover:border-[#7BBDE8]/50
                        hover:bg-[#0A4174]
                        hover:text-white
                        hover:scale-105
                        "
                     >
                        <Phone size={19} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Bottom */}
            <div
               className="
               border-t border-[#7BBDE8]/10
               pt-6
               flex flex-col md:flex-row
               items-center justify-between
               gap-4
               "
            >
               <p className="text-[#BDD8E9]/45 text-[0.82rem]">
                  © {new Date().getFullYear()} Moon Creation Films. All rights
                  reserved.
               </p>

               <div className="flex gap-6">
                  <Link
                     href="/privacy"
                     className="
                     text-[#BDD8E9]/60
                     hover:text-[#7BBDE8]
                     transition-colors duration-300
                     text-[0.82rem]
                     "
                  >
                     Privacy Policy
                  </Link>

                  <Link
                     href="/terms"
                     className="
                     text-[#BDD8E9]/60
                     hover:text-[#7BBDE8]
                     transition-colors duration-300
                     text-[0.82rem]
                     "
                  >
                     Terms of Service
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
