import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';
import GuideHero from '../components/guide/GuideHero';
import Roadmap from '../components/guide/Roadmap';
import FaqAccordion from '../components/guide/FaqAccordion';
import InteractiveChecklist from '../components/guide/InteractiveChecklist';
import { trackEvent } from '../utils/analytics';

const Guide = () => {
  const handleLineClick = () => {
    trackEvent('line_click', {
      variant_id: localStorage.getItem('ab_variant') || 'unknown',
      location: 'guide_cta',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <GuideHero />
      <Roadmap />
      <FaqAccordion />
      <InteractiveChecklist />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 to-amber-400">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            退職の不安、一人で抱えないでください
          </h2>
          <p className="text-orange-100 mb-8 text-lg leading-relaxed">
            保育士専門のスタッフが、あなたの状況に合わせて
            <br className="hidden md:block" />
            丁寧にサポートします。相談は何度でも無料です。
          </p>
          <a
            href="https://lin.ee/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLineClick}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#06C755] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={22} fill="white" />
            <span>LINEで無料相談する</span>
            <ChevronRight size={22} />
          </a>
          <p className="text-sm text-orange-200 mt-6">
            正社員 19,800円 / アルバイト 9,800円（税込）・全額返金保証付き
          </p>
        </div>
      </section>
    </div>
  );
};

export default Guide;
