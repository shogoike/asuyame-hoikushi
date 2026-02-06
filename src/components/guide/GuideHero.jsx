import React from 'react';
import { BookOpen } from 'lucide-react';
import { heroContent } from '../../constants/guideContent';

const GuideHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full translate-y-1/3 -translate-x-1/4 opacity-60" />

      <div className="relative max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
        <span className="inline-block px-5 py-2 bg-white text-orange-600 text-sm md:text-base font-bold rounded-full shadow-md mb-4">
          保育士専門の退職代行サービス
        </span>

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-orange-100/80 backdrop-blur rounded-full mb-6 block">
          <BookOpen size={16} className="text-orange-500" />
          <span className="text-sm font-bold text-orange-600">退職ガイド</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
          {heroContent.catchCopy}
        </h1>

        <p className="text-gray-600 md:text-lg leading-relaxed max-w-2xl mx-auto">
          {heroContent.subCopy}
        </p>
      </div>
    </section>
  );
};

export default GuideHero;
