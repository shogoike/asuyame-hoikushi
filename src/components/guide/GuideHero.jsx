import React from 'react';
import { BookOpen } from 'lucide-react';
import { heroContent } from '../../constants/guideContent';

const GuideHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60 blur-xl" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-amber-100 to-rose-100 rounded-full translate-y-1/3 -translate-x-1/4 opacity-60 blur-xl" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-100 rounded-full opacity-30 blur-2xl" />

      <div className="relative max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
        <span className="inline-block px-5 py-2 bg-white text-orange-600 text-sm md:text-base font-bold rounded-full shadow-md mb-4">
          保育士専門の退職代行サービス
        </span>

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/80 backdrop-blur rounded-full mb-6 shadow-sm">
          <BookOpen size={16} className="text-orange-500" />
          <span className="text-sm font-bold text-orange-600">退職ガイド</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
          {heroContent.catchCopy}
        </h1>

        <p className="text-gray-600 md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          {heroContent.subCopy}
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3">
          {heroContent.features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100"
              >
                <IconComponent size={16} className="text-pink-400" />
                <span className="text-sm text-gray-700 font-medium">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuideHero;
