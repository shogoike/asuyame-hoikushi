import React, { useEffect } from 'react';
import { MessageCircle, CheckCircle2, ChevronRight } from 'lucide-react';

const LineConversion = () => {
  const lineUrl = 'https://lin.ee/'; // 実際のLINE URLに変更してください

  useEffect(() => {
    // コンバージョントラッキング
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'line',
        event_label: 'line_click',
      });
    }

    // Microsoft Clarity カスタムイベント
    if (window.clarity) {
      window.clarity('set', 'conversion', 'line_click');
    }
  }, []);

  const handleLineClick = () => {
    // 追加のトラッキングが必要な場合はここに
    window.open(lineUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-green-500" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          あと少しで相談完了です
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          下のボタンからLINEを追加して、<br />
          お気軽にご相談ください。<br />
          <span className="text-orange-600 font-bold">24時間対応</span>で専門スタッフが対応します。
        </p>

        {/* Benefits */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-6">
          <ul className="space-y-2 text-left text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
              <span className="text-gray-700">相談は完全無料</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
              <span className="text-gray-700">秘密厳守・プライバシー保護</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
              <span className="text-gray-700">強引な勧誘は一切なし</span>
            </li>
          </ul>
        </div>

        {/* LINE Button */}
        <button
          onClick={handleLineClick}
          className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-[#06C755] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <MessageCircle size={24} fill="white" />
          <span>LINEで無料相談する</span>
          <ChevronRight size={24} />
        </button>

        {/* Price Info */}
        <p className="text-xs text-gray-400 mt-4">
          正社員 19,800円 / パート 9,800円（税込）<br />
          全額返金保証付き
        </p>
      </div>
    </div>
  );
};

export default LineConversion;
