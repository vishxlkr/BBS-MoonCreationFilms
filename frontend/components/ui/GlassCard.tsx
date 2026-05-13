import { ReactNode } from "react";

interface GlassCardProps {
   children: ReactNode;
   className?: string;
   onClick?: () => void;
}

export default function GlassCard({
   children,
   className = "",
   onClick,
}: GlassCardProps) {
   return (
      <div
         onClick={onClick}
         className={`relative bg-charcoal-night border border-[rgba(39,86,160,0.15)] rounded-lg overflow-hidden group transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[0_8px_32px_rgba(39,86,160,0.1)] cursor-pointer ${className}`}
      >
         <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-cinematic-blue transform -translate-x-full transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 z-10" />
         {children}
      </div>
   );
}
