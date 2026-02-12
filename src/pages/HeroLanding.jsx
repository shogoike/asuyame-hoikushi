import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';

const HeroLanding = ({ heroImage, variant = 1 }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Full Screen Image */}
      <section className="relative w-full">
        <img
          src={heroImage}
          alt="保育士専門退職代行アスヤメ"
          className="w-full h-auto"
        />
      </section>

      {/* CTA Button - Fixed at bottom on mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent md:relative md:bg-none md:py-8">
        <div className="max-w-md mx-auto">
          <a
            href="https://lin.ee/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full px-8 py-4 bg-[#06C755] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={22} fill="white" />
            <span>LINEで無料相談する</span>
            <ChevronRight size={22} />
          </a>
          <p className="text-center text-sm text-gray-500 mt-3">
            正社員 19,800円 / パート 9,800円（税込）
          </p>
        </div>
      </div>

      {/* Spacer for fixed button on mobile */}
      <div className="h-32 md:hidden" />
    </div>
  );
};

export default HeroLanding;
