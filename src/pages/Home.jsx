import React, { useEffect, useState } from 'react';
import { Shield, Clock, Banknote, MessageCircle, ChevronRight, ChevronLeft, ChevronDown, FileText, CheckCircle2, Star, Users, Award, Lock, RefreshCcw, Headphones, Heart, BadgeCheck } from 'lucide-react';
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

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'LINEで無料相談',
    description: '24時間いつでもOK',
  },
  {
    number: '02',
    icon: FileText,
    title: 'ヒアリング・お申込み',
    description: '状況を詳しくお聞きします',
  },
  {
    number: '03',
    icon: Shield,
    title: '退職代行スタート',
    description: '園への連絡はすべてお任せ',
  },
];

const reviews = [
  {
    name: 'A.Sさん',
    age: '26歳',
    role: '認可保育園・正社員',
    rating: 5,
    text: '園長との関係に悩み、毎日が辛かったです。LINEで相談したその日に対応してもらえて、翌日から出勤せずに済みました。本当に感謝しています。',
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
    text: '人手不足で辞められない雰囲気でしたが、きちんと法律に基づいて対応してもらえました。安心してお任せできました。',
  },
];

const faqs = [
  {
    question: '本当に出勤せずに退職できますか？',
    answer: 'はい、可能です。ご依頼後は園への連絡をすべて当社が代行します。直接やり取りする必要はありません。',
  },
  {
    question: '園から連絡が来たらどうすればいいですか？',
    answer: '当社からの連絡以外は対応不要です。万が一園から連絡があった場合も、対応方法をサポートいたします。',
  },
  {
    question: '有給消化や退職金はもらえますか？',
    answer: '法律上の権利ですので、きちんと交渉いたします。有給消化や退職金の受け取りをサポートします。',
  },
  {
    question: '契約期間中でも退職できますか？',
    answer: 'はい、民法上は2週間前の申告で退職可能です。契約期間があっても、やむを得ない事由があれば即日退職も可能な場合があります。',
  },
  {
    question: '料金以外に追加費用はかかりますか？',
    answer: '一切かかりません。表示価格のみで、追加料金は発生しません。万が一退職できなかった場合は全額返金いたします。',
  },
];

const guarantees = [
  {
    icon: RefreshCcw,
    title: '全額返金保証',
    description: '万が一退職できなかった場合、料金は全額お返しします',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    icon: Banknote,
    title: '追加料金なし',
    description: '表示価格のみ。後から請求されることは一切ありません',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Lock,
    title: '秘密厳守',
    description: 'ご相談内容は厳重に管理。第三者に漏れることはありません',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Headphones,
    title: '24時間対応',
    description: '深夜・早朝でもLINEで相談OK。お返事は平均5分以内',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
  },
];

const staffMembers = [
  {
    name: '田中 美咲',
    role: '相談員リーダー',
    career: '元保育士（10年勤務）',
    certification: '保育士資格・社会福祉士',
    message: '保育の現場で感じる辛さ、私もよくわかります。一緒に解決策を見つけましょう。',
    initial: '田',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    name: '佐藤 健太',
    role: '法務担当',
    career: '社会保険労務士',
    certification: '特定社労士・行政書士',
    message: '法律の専門家として、あなたの権利を守ります。有給消化や退職金もお任せください。',
    initial: '佐',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: '山田 あゆみ',
    role: '相談員',
    career: '元幼稚園教諭（7年勤務）',
    certification: '幼稚園教諭一種・保育士資格',
    message: '「辞めたい」と思った時が相談のタイミング。まずはお話聞かせてください。',
    initial: '山',
    color: 'bg-green-100 text-green-600',
  },
];

const lineMessages = [
  { type: 'user', text: 'はじめまして。退職を考えているのですが...' },
  { type: 'staff', text: 'ご相談ありがとうございます。まずは状況をお聞かせください。どのようなことでお悩みですか？' },
  { type: 'user', text: '園長との関係がうまくいかなくて、毎日つらいです。でも人手不足で言い出せなくて...' },
  { type: 'staff', text: 'おつらい状況ですね。人手不足はあなたの責任ではありません。法律上、退職は労働者の権利です。私たちがすべて代わりに対応しますので、ご安心ください。' },
];

// FAQアコーディオンコンポーネント
const FAQAccordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={onClick}
      >
        <span className="font-bold text-gray-800 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-orange-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// レビュースライダーコンポーネント
const ReviewSlider = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextReview();
      else prevReview();
    }
    setTouchStart(null);
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
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

      {/* ナビゲーション */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prevReview}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-500 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextReview}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

// LINE風メッセージコンポーネント
const LineChatPreview = ({ messages }) => {
  return (
    <div className="bg-[#7494C0] rounded-2xl p-4 max-w-md mx-auto shadow-xl">
      {/* ヘッダー */}
      <div className="flex items-center gap-3 pb-3 border-b border-white/20 mb-4">
        <div className="w-10 h-10 bg-[#06C755] rounded-full flex items-center justify-center">
          <MessageCircle size={20} className="text-white" fill="white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm">アスヤメ相談窓口</p>
          <p className="text-white/70 text-xs">24時間対応</p>
        </div>
      </div>

      {/* メッセージ */}
      <div className="space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.type === 'user'
                  ? 'bg-[#06C755] text-white rounded-br-md'
                  : 'bg-white text-gray-800 rounded-bl-md'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* 入力欄風 */}
      <div className="mt-4 bg-white rounded-full px-4 py-2.5 flex items-center gap-2">
        <span className="text-gray-400 text-sm flex-1">メッセージを入力...</span>
        <div className="w-8 h-8 bg-[#06C755] rounded-full flex items-center justify-center">
          <ChevronRight size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const variant = useABTest();
  const [openFAQ, setOpenFAQ] = useState(null);

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
            {/* 情緒的サブコピー */}
            <p className="text-orange-100 text-sm md:text-base mb-3 animate-fade-in">
              もう、一人で悩まないで大丈夫です
            </p>

            <span className="inline-block px-5 py-2 bg-white text-orange-600 text-sm md:text-base font-bold rounded-full mb-6 shadow-md">
              保育士専門の退職代行サービス
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md whitespace-pre-line">
              {variant.catchCopy}
            </h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto mb-6">
              {variant.subCopy}
            </p>

            {/* 信頼バッジ */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/95 rounded-full shadow-md">
                <Award size={18} className="text-orange-500" />
                <span className="text-gray-800 font-bold text-sm">満足度 98%</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/95 rounded-full shadow-md">
                <Users size={18} className="text-orange-500" />
                <span className="text-gray-800 font-bold text-sm">相談実績 1,000件+</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/95 rounded-full shadow-md">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span className="text-gray-800 font-bold text-sm">退職成功率 100%</span>
              </div>
            </div>

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

      {/* 安心保証セクション */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-emerald-500 text-white text-sm font-bold rounded-full mb-3">
              安心の4つの保証
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              はじめての方でも安心してご利用いただけます
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-5 text-center hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className={`w-14 h-14 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 border-2 ${item.borderColor}`}>
                    <IconComponent size={28} className={item.color} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-12 md:py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-sm font-bold rounded-full mb-3">
              かんたん3ステップ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              最短即日で退職完了
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-orange-500">
                        <IconComponent size={32} className="text-orange-500" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mt-4 mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight size={24} className="text-orange-300 mx-4 hidden md:block" />
                  )}
                  {index < steps.length - 1 && (
                    <ChevronDown size={24} className="text-orange-300 my-2 md:hidden" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* LINE相談イメージセクション */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-[#06C755]/10 text-[#06C755] text-sm font-bold rounded-full mb-4">
                LINEで相談
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                こんな風にやり取りします
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                LINEで気軽にご相談いただけます。「まだ決めていないけど話を聞いてほしい」という方も大歓迎。
                まずはお気持ちをお聞かせください。
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">相談だけでもOK、無理な勧誘は一切なし</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">平均5分以内に返信</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">24時間いつでも受付</span>
                </div>
              </div>
              <a
                href="https://lin.ee/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLineClick('line_preview_section')}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#06C755] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={20} fill="white" />
                <span>LINEで相談してみる</span>
              </a>
            </div>
            <div>
              <LineChatPreview messages={lineMessages} />
            </div>
          </div>
        </div>
      </section>

      {/* スタッフ紹介セクション */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-bold rounded-full mb-3">
              対応スタッフ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              私たちが最後までサポートします
            </h2>
            <p className="text-gray-600">
              保育現場経験者と法律の専門家がチームであなたをサポート
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {staffMembers.map((staff, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 ${staff.color} rounded-full flex items-center justify-center text-2xl font-bold`}>
                    {staff.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{staff.name}</h3>
                    <p className="text-orange-500 text-sm font-medium">{staff.role}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Heart size={14} className="text-pink-400" />
                    <span className="text-gray-600 text-sm">{staff.career}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck size={14} className="text-blue-400" />
                    <span className="text-gray-600 text-sm">{staff.certification}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 rounded-xl p-3">
                  「{staff.message}」
                </p>
              </div>
            ))}
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

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
              ご利用者の声
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              実際にご利用いただいた方の声
            </h2>
          </div>
          <ReviewSlider reviews={reviews} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
              よくある質問
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              FAQ
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6">
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
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
