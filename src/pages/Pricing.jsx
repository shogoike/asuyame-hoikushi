import React from 'react';
import { MessageCircle, ChevronRight, CheckCircle2, X, Shield, Clock, Headphones, RefreshCcw, Scale, FileText, Users, CreditCard, Banknote, Sparkles, Quote, AlertTriangle, Heart } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const interviews = [
  {
    name: 'K.Mさん',
    age: '28歳',
    role: '認可保育園・正社員',
    beforeService: '大手退職代行A社',
    problem: '「担任を持っているなら年度末まで待て」と園に言われて、代行会社も対応できず...',
    solution: 'アスヤメは保育業界の慣習を理解していて、法的根拠を示しながら交渉してくれました。年度途中でも問題なく退職できました。',
    highlight: '保育業界の慣習を熟知',
  },
  {
    name: 'S.Aさん',
    age: '31歳',
    role: '小規模保育園・主任',
    beforeService: '格安退職代行B社',
    problem: '園長が「直接話さないと認めない」と言い張り、代行会社は「これ以上は対応できない」と...',
    solution: '弁護士監修のもと、書面での正式な通知を行い、出勤せずに退職完了。有給も全部消化できました。',
    highlight: '弁護士監修で法的にも安心',
  },
  {
    name: 'Y.Tさん',
    age: '25歳',
    role: '企業主導型保育園',
    beforeService: '一般的な退職代行C社',
    problem: '保育士特有の引き継ぎ（児童票や行事計画）について全く理解がなく、園とトラブルに...',
    solution: 'アスヤメは保育現場経験者がいるので、引き継ぎの進め方までアドバイスしてもらえました。円満に退職できました。',
    highlight: '保育現場経験者が対応',
  },
];

const plans = [
  {
    id: 'part',
    name: 'パート・アルバイト',
    price: '9,800',
    description: '非正規雇用の方向け',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    popular: false,
    features: [
      { text: '退職意思の代理伝達', included: true },
      { text: '園との連絡代行', included: true },
      { text: '退職届の作成サポート', included: true },
      { text: '有給消化の交渉', included: true },
      { text: '24時間LINE対応', included: true },
      { text: '退職後のアフターフォロー', included: true },
    ],
  },
  {
    id: 'regular',
    name: '正社員',
    price: '19,800',
    description: '正規雇用の方向け',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    popular: true,
    features: [
      { text: '退職意思の代理伝達', included: true },
      { text: '園との連絡代行', included: true },
      { text: '退職届の作成サポート', included: true },
      { text: '有給消化の交渉', included: true },
      { text: '24時間LINE対応', included: true },
      { text: '退職後のアフターフォロー', included: true },
      { text: '退職金の確認サポート', included: true },
      { text: '離職票取得サポート', included: true },
    ],
  },
];

const guarantees = [
  {
    icon: RefreshCcw,
    title: '全額返金保証',
    description: '万が一退職できなかった場合、料金を全額返金いたします。',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Banknote,
    title: '追加料金なし',
    description: '表示価格以外に料金はかかりません。オプション料金も一切なし。',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Scale,
    title: '弁護士監修',
    description: '法的に正しい手続きで進めるため、トラブルの心配はありません。',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
];

const paymentMethods = [
  { name: 'クレジットカード', description: 'VISA / Mastercard / JCB / AMEX' },
  { name: '銀行振込', description: '各種銀行に対応' },
  { name: 'PayPay', description: 'スマホ決済' },
];

const faqs = [
  {
    question: '本当に追加料金はかかりませんか？',
    answer: 'はい、表示価格のみです。相談回数や対応時間による追加料金は一切ありません。',
  },
  {
    question: '支払いはいつですか？',
    answer: 'お申込み確定後、サービス開始前にお支払いいただきます。',
  },
  {
    question: '分割払いはできますか？',
    answer: 'クレジットカードの分割払いをご利用いただけます。',
  },
  {
    question: 'キャンセルはできますか？',
    answer: 'サービス開始前であればキャンセル可能です。開始後でも退職できなかった場合は全額返金いたします。',
  },
];

const comparisons = [
  { item: '保育士特化', us: true, others: false },
  { item: '弁護士監修', us: true, others: '一部のみ' },
  { item: '24時間対応', us: true, others: '一部のみ' },
  { item: '全額返金保証', us: true, others: '一部のみ' },
  { item: '追加料金なし', us: true, others: false },
  { item: '有給消化交渉', us: true, others: '別料金' },
];

const Pricing = () => {
  const handleLineClick = (location) => {
    trackEvent('line_click', {
      variant_id: localStorage.getItem('ab_variant') || 'unknown',
      location,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-400 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur rounded-full text-sm font-bold mb-4">
            料金プラン
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            シンプルで明朗な料金体系
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            追加料金なし・全額返金保証付き。<br className="md:hidden" />
            安心してご利用いただけます。
          </p>
        </div>
      </section>

      {/* Interview Section - 引用ブロック型 */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
              体験談
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              他社で失敗した方が<br className="md:hidden" />アスヤメを選んだ理由
            </h2>
          </div>

          <div className="space-y-8">
            {interviews.map((interview, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100"
              >
                {/* 大きな引用符 */}
                <div className="absolute -top-4 left-8 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-serif leading-none">"</span>
                </div>

                {/* メインの声 */}
                <div className="mt-4 mb-6">
                  <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
                    {interview.solution}
                  </p>
                </div>

                {/* Before（小さく表示） */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border-l-4 border-gray-300">
                  <p className="text-sm text-gray-500 mb-1">
                    <span className="font-bold text-gray-600">{interview.beforeService}</span>を利用した時は...
                  </p>
                  <p className="text-gray-600 text-sm">
                    {interview.problem}
                  </p>
                </div>

                {/* プロフィール */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                      {interview.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{interview.name}（{interview.age}）</p>
                      <p className="text-sm text-gray-500">{interview.role}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-50 text-orange-600 text-sm font-bold rounded-full border border-orange-200">
                    <CheckCircle2 size={16} />
                    {interview.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-xl border-2 ${
                  plan.popular ? 'border-orange-300' : 'border-gray-100'
                } overflow-hidden hover:shadow-2xl transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                      <Sparkles size={12} />
                      人気
                    </div>
                  </div>
                )}

                <div className={`p-6 md:p-8 bg-gradient-to-br ${plan.color} text-white`}>
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg mb-1">円</span>
                    <span className="text-white/70 text-sm mb-1.5">（税込）</span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-sm font-bold text-gray-700 mb-4">サービス内容</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://lin.ee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleLineClick(`pricing_${plan.id}`)}
                    className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all`}
                  >
                    <MessageCircle size={18} fill="white" />
                    LINEで申し込む
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-600 text-sm font-bold rounded-full mb-3">
              安心保証
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              3つの安心保証
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`${item.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <div className={`w-14 h-14 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-sm`}>
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

      {/* Comparison */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
              比較
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              他社サービスとの比較
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-4 font-bold text-gray-600 text-sm"></div>
              <div className="p-4 text-center">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                  アスヤメ
                </span>
              </div>
              <div className="p-4 text-center text-gray-500 text-sm font-medium">
                他社サービス
              </div>
            </div>
            {comparisons.map((row, index) => (
              <div key={index} className="grid grid-cols-3 border-b border-gray-100 last:border-0">
                <div className="p-4 text-gray-700 text-sm font-medium">{row.item}</div>
                <div className="p-4 flex justify-center">
                  {row.us === true ? (
                    <CheckCircle2 size={20} className="text-emerald-500" />
                  ) : (
                    <X size={20} className="text-gray-300" />
                  )}
                </div>
                <div className="p-4 flex justify-center">
                  {row.others === true ? (
                    <CheckCircle2 size={20} className="text-emerald-500" />
                  ) : row.others === false ? (
                    <X size={20} className="text-gray-300" />
                  ) : (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-bold rounded-full mb-3">
              お支払い方法
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              選べるお支払い方法
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-5 text-center hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <CreditCard size={24} className="text-gray-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{method.name}</h3>
                <p className="text-gray-500 text-xs">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-600 text-sm font-bold rounded-full mb-3">
              Q&A
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              料金に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-orange-500">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">
                  <span className="text-blue-500 font-bold">A.</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            まずは無料でご相談ください
          </h2>
          <p className="text-white/80 mb-8">
            料金やサービス内容について、お気軽にお問い合わせください。
          </p>
          <a
            href="https://lin.ee/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLineClick('pricing_cta')}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#06C755] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <MessageCircle size={22} fill="white" />
            <span>LINEで無料相談する</span>
            <ChevronRight size={22} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
