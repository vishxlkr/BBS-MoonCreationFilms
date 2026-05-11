import Link from "next/link";
import { Camera, Video, Phone } from "lucide-react";
import { contactData } from "@/lib/contact-data";

export default function Footer() {
  return (
    <footer className="bg-deep-navy border-t-2" style={{ borderImageSource: "linear-gradient(90deg, transparent, #2756A0, transparent)", borderImageSlice: 1 }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column */}
          <div>
            <Link href="/" className="font-heading text-[1.4rem] text-cinematic-blue tracking-wide mb-4 block">
              Moon Creation Films
            </Link>
            <p className="font-heading italic text-ice-blue text-[0.9rem] max-w-sm">
              Premium cinematography and visual storytelling for moments that matter.
            </p>
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-3">
            <h3 className="font-accent text-cinematic-blue uppercase tracking-wider text-sm font-semibold mb-2">Quick Links</h3>
            <Link href="/about" className="font-body text-[0.9rem] text-ice-blue hover:text-cinematic-blue transition-colors w-fit">About Us</Link>
            <Link href="/services" className="font-body text-[0.9rem] text-ice-blue hover:text-cinematic-blue transition-colors w-fit">Services</Link>
            <Link href="/work" className="font-body text-[0.9rem] text-ice-blue hover:text-cinematic-blue transition-colors w-fit">Our Work</Link>
            <Link href="/blog#contact" className="font-body text-[0.9rem] text-ice-blue hover:text-cinematic-blue transition-colors w-fit">Contact</Link>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-accent text-cinematic-blue uppercase tracking-wider text-sm font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href={contactData.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] rounded-full border border-cinematic-blue/30 flex items-center justify-center text-ice-blue hover:border-cinematic-blue hover:text-cinematic-blue hover:scale-110 transition-all">
                <Camera size={20} />
              </a>
              <a href={`https://wa.me/${contactData.socialMedia.whatsapp.replace(/\\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] rounded-full border border-cinematic-blue/30 flex items-center justify-center text-ice-blue hover:border-cinematic-blue hover:text-cinematic-blue hover:scale-110 transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cinematic-blue/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.8rem] text-ice-blue/50">
            &copy; {new Date().getFullYear()} Moon Creation Films. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-body text-[0.8rem] text-cinematic-blue hover:text-ice-blue transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-body text-[0.8rem] text-cinematic-blue hover:text-ice-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
