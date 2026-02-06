import React from 'react';
import { Users, MessageCircle, ChevronRight } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
            みんなの声
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            利用者の声・体験談
          </h1>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
              <Users size={40} className="text-orange-500" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            コンテンツ準備中
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            実際にアスヤメを利用して退職された<br />
            保育士の方の体験談を準備しています。
          </p>
          <p className="text-gray-500 text-sm mb-8">
            公開までしばらくお待ちください。<br />
            お急ぎの方はLINEでご相談ください。
          </p>
          <a
            href="https://lin.ee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#06C755] text-white font-bold rounded-full hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} fill="white" />
            <span>LINEで相談する</span>
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;
