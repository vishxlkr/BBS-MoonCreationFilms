import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import CustomCursor from "@/components/ui/CustomCursor";
import GoldProgressBar from "@/components/ui/GoldProgressBar";
import SmoothScroll from "@/components/ui/SmoothScroll";

const poppinsHeading = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700", "600"],
});

const poppinsBody = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

const poppinsAccent = Poppins({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["600"],
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
    <html lang="en" className={`${poppinsHeading.variable} ${poppinsBody.variable} ${poppinsAccent.variable}`}>
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
