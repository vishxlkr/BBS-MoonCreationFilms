import HeroSection from "@/components/home/HeroSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import WorkTeaser from "@/components/home/WorkTeaser";
import InstagramSection from "@/components/home/InstagramSection";
import BlogTeaser from "@/components/home/BlogTeaser";

export const metadata = {
  title: "Moon Creation Films",
  icons: {
    icon: "/assets/logo0.png", // or /favicon.ico
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <ServicesHighlight />
      <WorkTeaser />
      <InstagramSection />
      <BlogTeaser />
    </>
  );
}
