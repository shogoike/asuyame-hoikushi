import React, { useState } from 'react';
import { Clock, Banknote, MessageCircle, ChevronRight, ChevronLeft, ChevronDown, CheckCircle2, Star, Users, Lock, RefreshCcw, Headphones, Heart, Scale, UserCheck, Building2, Sparkles, ArrowRight } from 'lucide-react';

const reviews = [
  {
    name: 'A.Sさん',
    age: '26歳',
    role: '認可保育園・正社員',
    rating: 5,
    text: '園長との関係に悩み、毎日が辛かったです。LINEで相談したその日に対応してもらえて、翌日から出勤せずに済みました。',
  },
  {
    name: 'M.Kさん',
    age: '32歳',
    role: '小規模保育園・主任',
    rating: 5,
    text: '持ち帰り仕事が多すぎて限界でした。自分では言い出せなかったけど、プロに任せて正解。スムーズに退職できました。',
  },
  {
    name: 'Y.Tさん',
    age: '24歳',
    role: '認定こども園・パート',
    rating: 5,
    text: 'パートでも丁寧に対応してもらえました。料金も良心的で、もっと早く相談すればよかったです。',
  },
  {
    name: 'R.Iさん',
    age: '29歳',
    role: '企業主導型保育園・正社員',
    rating: 5,
    text: '人手不足で辞められない雰囲気でしたが、きちんと法律に基づいて対応してもらえました。',
  },
];

const faqs = [
  {
    question: '本当に出勤せずに退職できますか？',
    answer: 'はい、可能です。ご依頼後は園への連絡をすべて当社が代行します。',
  },
  {
    question: '有給消化や退職金はもらえますか？',
    answer: '法律上の権利ですので、きちんと交渉いたします。',
  },
  {
    question: '料金以外に追加費用はかかりますか？',
    answer: '一切かかりません。万が一退職できなかった場合は全額返金いたします。',
  },
];

// レビュースライダーコンポーネント
const ReviewSlider = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="relative h-full">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{review.name}（{review.age}）</p>
                    <p className="text-gray-500 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <button onClick={prevReview} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <ChevronLeft size={16} className="text-gray-600" />
        </button>
        <div className="flex gap-1.5">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-orange-500 w-4' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button onClick={nextReview} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <ChevronRight size={16} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

const HeroLanding = ({ heroImage }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section - Full Width Image */}
      <section className="w-full">
        <img
          src={heroImage}
          alt="保育士専門退職代行アスヤメ"
          className="w-full h-auto"
        />
      </section>

      {/* Bento Grid Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
              アスヤメの特徴
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              保育士に選ばれる理由
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

            {/* Large Card - 保育士専門 */}
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-orange-500 to-amber-400 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Heart size={28} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">保育士専門</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  「同僚への申し訳なさ」「年度途中の退職」など、保育士特有の悩みを理解したスタッフが対応します。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-white/80" />
                    <span>園長・法人への交渉に強い</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-white/80" />
                    <span>保育業界の慣習を熟知</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-white/80" />
                    <span>引き継ぎサポートも万全</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 弁護士監修 */}
            <div className="col-span-1 bg-blue-50 rounded-3xl p-5 md:p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Scale size={24} className="text-blue-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">弁護士監修</h3>
              <p className="text-gray-600 text-sm leading-relaxed">法的に正しい手続きで安心</p>
            </div>

            {/* 即日対応 */}
            <div className="col-span-1 bg-emerald-50 rounded-3xl p-5 md:p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Clock size={24} className="text-emerald-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">即日対応</h3>
              <p className="text-gray-600 text-sm leading-relaxed">最短で今日から出勤不要</p>
            </div>

            {/* 料金カード */}
            <div className="col-span-2 bg-white rounded-3xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Banknote size={24} className="text-purple-500" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-800 mb-2">業界最安級・明朗会計</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-gray-50 rounded-xl px-4 py-2">
                      <span className="text-xs text-gray-500 block">正社員</span>
                      <span className="text-xl font-bold text-gray-800">19,800<span className="text-sm">円</span></span>
                    </div>
                    <div className="bg-gray-50 rounded-xl px-4 py-2">
                      <span className="text-xs text-gray-500 block">パート</span>
                      <span className="text-xl font-bold text-gray-800">9,800<span className="text-sm">円</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">
                  <RefreshCcw size={12} />全額返金保証
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                  <Lock size={12} />追加料金なし
                </span>
              </div>
            </div>

            {/* ステップ */}
            <div className="col-span-2 md:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-5 md:p-6 text-white hover:shadow-xl transition-shadow">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-amber-400" />
                かんたん3ステップ
              </h3>
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 text-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-amber-400">1</span>
                  </div>
                  <p className="text-xs text-gray-300">お申込み</p>
                </div>
                <ArrowRight size={16} className="text-gray-500" />
                <div className="flex-1 text-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-amber-400">2</span>
                  </div>
                  <p className="text-xs text-gray-300">ヒアリング</p>
                </div>
                <ArrowRight size={16} className="text-gray-500" />
                <div className="flex-1 text-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-amber-400">3</span>
                  </div>
                  <p className="text-xs text-gray-300">代行スタート</p>
                </div>
              </div>
            </div>

            {/* レビュー */}
            <div className="col-span-2 bg-white rounded-3xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <h3 className="font-bold text-gray-800">ご利用者の声</h3>
              </div>
              <ReviewSlider reviews={reviews} />
            </div>

            {/* 24時間対応 */}
            <div className="col-span-1 bg-pink-50 rounded-3xl p-5 md:p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Headphones size={24} className="text-pink-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">24時間受付</h3>
              <p className="text-gray-600 text-sm leading-relaxed">深夜・早朝でもLINEでOK</p>
            </div>

            {/* 秘密厳守 */}
            <div className="col-span-1 bg-violet-50 rounded-3xl p-5 md:p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Lock size={24} className="text-violet-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">秘密厳守</h3>
              <p className="text-gray-600 text-sm leading-relaxed">第三者に漏れることはありません</p>
            </div>

            {/* FAQ */}
            <div className="col-span-2 md:col-span-4 bg-white rounded-3xl p-5 md:p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MessageCircle size={18} className="text-orange-500" />
                よくある質問
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-gray-800 text-sm">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-20 mt-2' : 'max-h-0'}`}>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 保育士特有の悩みセクション */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-bold rounded-full mb-3">
              保育士だからこそ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              こんなお悩みありませんか？
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Users size={24} className="text-pink-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">「同僚に迷惑がかかる」</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                人手不足の職場で辞めることへの罪悪感...でもあなたの人生も大切です。私たちが円滑な引き継ぎをサポートします。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Building2 size={24} className="text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">「園長に言い出せない」</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                威圧的な園長や理事長への退職意思表示は私たちが代行。あなたが直接話す必要はありません。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-purple-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">「年度途中でも大丈夫？」</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                法律上、退職は労働者の権利です。年度途中でも問題なく退職できます。弁護士監修で安心。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            一人で悩まないでください
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            保育士専門のスタッフが、あなたの状況に合わせて<br className="hidden md:block" />
            丁寧にサポートします。
          </p>
          <a
            href="/line"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#06C755] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={22} fill="white" />
            <span>LINEで無料相談する</span>
            <ChevronRight size={22} />
          </a>
          <p className="text-sm text-white/60 mt-6">
            正社員 19,800円 / アルバイト 9,800円（税込）・全額返金保証付き
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroLanding;
