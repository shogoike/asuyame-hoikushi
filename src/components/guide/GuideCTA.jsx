import React from 'react';
import { MessageCircle, ChevronRight, CheckCircle2, Heart } from 'lucide-react';
import { ctaContent } from '../../constants/guideContent';
import { trackEvent } from '../../utils/analytics';

const GuideCTA = () => {
  const handleLineClick = () => {
    trackEvent('line_click', {
      variant_id: localStorage.getItem('ab_variant') || 'unknown',
      location: 'guide_cta',
    });
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300/20 rounded-full blur-lg" />

      <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-6">
          <Heart size={16} className="text-pink-200" />
          <span className="text-sm font-medium text-white/90">あなたの味方です</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
          {ctaContent.title}
        </h2>
        <p className="text-white/80 mb-8 text-lg leading-relaxed max-w-xl mx-auto">
          {ctaContent.description}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {ctaContent.benefits.map((benefit, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <CheckCircle2 size={16} className="text-green-300" />
              <span className="text-sm text-white/90">{benefit}</span>
            </div>
          ))}
        </div>

        <a
          href="https://lin.ee/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLineClick}
          className="inline-flex items-center space-x-2 px-8 py-4 bg-[#06C755] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        >
          <MessageCircle size={22} fill="white" className="group-hover:animate-bounce" />
          <span>{ctaContent.buttonText}</span>
          <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-sm text-white/60 mt-6">
          {ctaContent.subText}
        </p>
      </div>
    </section>
  );
};

export default GuideCTA;
