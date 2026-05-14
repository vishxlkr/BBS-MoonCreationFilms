import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-deep-navy">
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 to-deep-navy z-10" />
        <div className="absolute inset-0 bg-midnight-blue/30" />
        <div className="relative z-20 text-center px-4 w-full flex flex-col items-center">
          <Skeleton className="h-16 w-3/4 md:w-1/2 mb-4 bg-white/20" />
          <Skeleton className="h-4 w-1/3 bg-white/20" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[1, 2, 3, 4, 5].map((i) => (
             <Skeleton key={i} className="h-10 w-24 rounded-full" />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative aspect-[4/5] bg-charcoal-night rounded-xl overflow-hidden border border-cinematic-blue/10"
            >
              <Skeleton className="w-full h-full rounded-none" />
              
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <Skeleton className="h-6 w-24 rounded-full mb-3" />
                <Skeleton className="h-8 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
