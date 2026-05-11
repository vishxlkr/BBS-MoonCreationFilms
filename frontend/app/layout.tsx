import type { Metadata } from "next";
import { Jost, Outfit, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import CustomCursor from "@/components/ui/CustomCursor";
import GoldProgressBar from "@/components/ui/GoldProgressBar";
import SmoothScroll from "@/components/ui/SmoothScroll";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-heading",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "Moon Creation Films",
  description: "Premium cinematography and visual storytelling agency.",
  openGraph: {
    title: "Moon Creation Films",
    description: "Premium cinematography and visual storytelling agency.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased overflow-x-hidden min-h-screen flex flex-col">
        <SmoothScroll>
          <GoldProgressBar />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFAB />
          {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
        </SmoothScroll>
      </body>
    </html>
  );
}
