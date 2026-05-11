import { Skeleton } from "@/components/ui/Skeleton";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Loading() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-deep-navy">
      <section className="relative w-full h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden mb-8 md:mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 to-deep-navy z-10" />
        <div className="absolute inset-0 bg-midnight-blue/40" />
        <div className="relative z-20 text-center px-4 w-full flex flex-col items-center">
          <Skeleton className="h-16 w-3/4 md:w-1/2 mb-4 bg-white/20" />
          <Skeleton className="h-4 w-1/3 bg-white/20" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-9 w-20 rounded-full" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-full">
              <div className="bg-charcoal-night border border-cinematic-blue/10 rounded-xl overflow-hidden h-full flex flex-col">
                <Skeleton className="aspect-video w-full rounded-none" />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-8 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-6" />
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-cinematic-blue/10">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
