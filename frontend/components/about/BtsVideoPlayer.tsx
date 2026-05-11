"use client";

import React, { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function BtsVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative aspect-video bg-charcoal-night rounded-xl overflow-hidden border border-cinematic-blue/20 group shadow-2xl">
      <video
        ref={videoRef}
        src="/assets/hero-video.mp4"
        poster="/assets/hero-poster.jpg"
        className="w-full h-full object-cover"
        controls={isPlaying}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-80 pointer-events-none" />
          
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={handlePlay}
          >
            <div className="w-20 h-20 rounded-full border-2 border-cinematic-blue flex items-center justify-center bg-deep-navy/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
              <Play className="text-ice-blue ml-1" size={32} />
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
            <div>
              <h3 className="font-heading text-2xl text-cinematic-blue">The Art of Production</h3>
              <p className="font-accent text-xs text-ice-blue uppercase tracking-wider mt-2">BTS Reel • 2026</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
