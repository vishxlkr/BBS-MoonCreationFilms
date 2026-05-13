"use client";

import { createContext, useContext } from "react";
import type Lenis from "lenis";

/** Negative offset so fixed header does not cover in-page anchors */
export const NAV_SCROLL_OFFSET = -96;

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
   return useContext(LenisContext);
}

export { LenisContext };
