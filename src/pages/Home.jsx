import React, { useEffect } from 'react';
import { Shield, Clock, Banknote, MessageCircle, ChevronRight } from 'lucide-react';
import AdaptiveDisorderCheck from '../components/AdaptiveDisorderCheck';
import useABTest from '../hooks/useABTest';
import { trackEvent } from '../utils/analytics';
import teamImg from '../assets/images/team.jpg';
import staffTalkingImg from '../assets/images/staff-talking.jpg';
import teamWorkImg from '../assets/images/team-work.jpg';
import heroBannerImg from '../assets/images/hero-banner.jpg';

const reasons = [
  {
    icon: Shield,
    title: '保育業界を知り尽くしたプロ',
    description:
      '保育士特有の悩み（人間関係、持ち帰り仕事、保護者対応など）を深く理解。園長・法人への交渉もスムーズに対応します。',
    image: staffTalkingImg,
  },
  {
    icon: Clock,
    title: '即日対応・出勤不要',
    description:
      'ご相談当日から対応可能。もう職場に行く必要はありません。すべての連絡を私たちが代行します。',
    image: teamImg,
  },
  {
    icon: Banknote,
    title: '業界最安級・全額返金保証',
    description:
      '正社員 19,800円／アルバイト 9,800円（税込）。追加料金は一切なし。万が一退職できなかった場合は全額返金。安心の明朗会計です。',
    image: teamWorkImg,
  },
];

const Home = () => {
  const variant = useABTest();

  useEffect(() => {
    trackEvent('ab_variant_view', {
      variant_id: variant.id,
      page: 'home',
    });
  }, [variant.id]);

  const handleLineClick = (location) => {
    trackEvent('line_click', {
      variant_id: variant.id,
      location,
    });
  };

  return (
    <div>
      {/* Hero Section with Check */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBannerImg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 to-amber-500/80" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
          {/* Hero Text */}
          <div className="text-center mb-10">
            <span className="inline-block px-5 py-2 bg-white text-orange-600 text-sm md:text-base font-bold rounded-full mb-6 shadow-md">
              保育士専門の退職代行サービス
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md whitespace-pre-line">
              {variant.catchCopy}
            </h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto mb-4">
              {variant.subCopy}
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full">
                正社員 19,800円（税込）
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full">
                アルバイト 9,800円（税込）
              </span>
            </div>
          </div>

          {/* Stress Check - inside hero */}
          <div className="max-w-2xl mx-auto">
            <AdaptiveDisorderCheck variantId={variant.id} />
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
              選ばれる理由
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              アスヤメが選ばれる3つの理由
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
                >
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 -mt-10 relative z-10 border-2 border-white shadow-md">
                      <IconComponent size={24} className="text-orange-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={teamWorkImg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-amber-500/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            一人で悩まないでください
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            LINEで気軽にご相談いただけます。<br />
            相談は何度でも無料です。
          </p>
          <a
            href="https://lin.ee/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLineClick('home_cta')}
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

export default Home;
