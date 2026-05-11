"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function GoldProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[100]"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--crescent-gold), var(--rose-blush))",
        transition: "width 80ms linear",
      }}
    />
  );
}
