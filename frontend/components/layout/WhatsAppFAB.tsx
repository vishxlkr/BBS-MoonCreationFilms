"use client";

import { contactData } from "@/lib/contact-data";

export default function WhatsAppFAB() {
  const whatsappNumber = contactData.socialMedia.whatsapp;
  const message = "Hi Moon Creation Films! I'd like to inquire about your services.";
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[56px] h-[56px] bg-[#25D366] rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-[0_4px_20px_rgba(37,211,102,0.4)] animate-[pulseGlow_2s_infinite]"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[28px] h-[28px] fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12.031 21c-1.565 0-3.088-.393-4.46-1.137l-.32-.172-3.32.871.887-3.237-.188-.302C3.896 15.658 3.5 14.15 3.5 12.569c0-4.66 3.791-8.45 8.451-8.45 2.259 0 4.381.879 5.976 2.474 1.596 1.595 2.474 3.717 2.474 5.977 0 4.661-3.79 8.451-8.451 8.451h.081zm0-18.451c-5.503 0-9.982 4.479-9.982 9.982 0 1.761.46 3.481 1.332 4.996l-1.42 5.18 5.297-1.389c1.458.796 3.099 1.215 4.773 1.215 5.503 0 9.982-4.479 9.982-9.982 0-2.67-1.04-5.18-2.928-7.068A9.917 9.917 0 0012.031 2.55zM17.5 15.01c-.302-.15-1.782-.879-2.059-.979-.276-.1-.477-.15-.678.15-.202.302-.781.979-.956 1.18-.176.202-.353.226-.655.076-.301-.151-1.272-.469-2.424-1.496-.897-.801-1.503-1.79-1.68-2.091-.176-.302-.019-.464.132-.614.136-.135.301-.353.453-.529.15-.176.201-.301.302-.503.1-.201.05-.377-.025-.528-.076-.151-.678-1.636-.93-2.241-.244-.59-.493-.51-.677-.52h-.579c-.201 0-.528.076-.804.377-.276.302-1.055 1.031-1.055 2.515s1.08 2.917 1.231 3.118c.151.201 2.126 3.245 5.148 4.549.719.31 1.28.495 1.718.634.721.23 1.378.197 1.895.12.576-.086 1.782-.728 2.033-1.433.251-.704.251-1.308.176-1.433-.075-.126-.276-.202-.578-.353z" />
      </svg>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4); }
          50% { box-shadow: 0 0 25px 5px rgba(37,211,102,0.6); }
        }
      `}} />
    </a>
  );
}
