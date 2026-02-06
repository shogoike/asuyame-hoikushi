import React, { useState, useEffect, useRef } from 'react';
import {
  Heart,
  Brain,
  AlertTriangle,
  Users,
  Clock,
  RotateCcw,
  MessageCircle,
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const questions = [
  {
    id: 1,
    text: '職場に行こうとすると、動悸・吐き気・めまいなどの身体症状が出る',
    icon: Heart,
  },
  {
    id: 2,
    text: '仕事のことを考えると眠れない日が続いている',
    icon: Brain,
  },
  {
    id: 3,
    text: '「自分はダメだ」「消えてしまいたい」と思うことがある',
    icon: AlertTriangle,
  },
  {
    id: 4,
    text: '職場の特定の人を避けたい、会いたくないと強く感じる',
    icon: Users,
  },
  {
    id: 5,
    text: 'この状態が2週間以上続いている',
    icon: Clock,
  },
];

const options = [
  { label: 'かなり当てはまる', score: 4 },
  { label: 'やや当てはまる', score: 3 },
  { label: 'どちらともいえない', score: 2 },
  { label: 'あまり当てはまらない', score: 1 },
  { label: '当てはまらない', score: 0 },
];

const getResult = (totalScore) => {
  if (totalScore >= 16) {
    return {
      level: 'high',
      title: '強いストレス状態です',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      textColor: 'text-red-700',
      badgeColor: 'bg-red-500',
      advice:
        '現在のあなたの状態は、専門家への相談を強くお勧めします。一人で抱え込まず、まずは医療機関やカウンセラーに相談してください。退職を検討されている場合は、私たちがサポートします。',
    };
  }
  if (totalScore >= 10) {
    return {
      level: 'medium',
      title: '注意が必要な状態です',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      textColor: 'text-orange-700',
      badgeColor: 'bg-orange-500',
      advice:
        'ストレスが蓄積している状態です。早めの対処が大切です。信頼できる人に話を聞いてもらったり、専門家に相談することをお勧めします。環境を変えることも選択肢の一つです。',
    };
  }
  return {
    level: 'low',
    title: '軽度のストレス状態です',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    textColor: 'text-green-700',
    badgeColor: 'bg-green-500',
    advice:
      '現時点では深刻な状態ではありませんが、セルフケアを心がけましょう。十分な睡眠、適度な運動、趣味の時間を大切にしてください。不安が続く場合は早めに相談しましょう。',
  };
};

const AdaptiveDisorderCheck = ({ variantId }) => {
  const [phase, setPhase] = useState('quiz');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const trackedRef = useRef(false);

  const handleAnswer = (score) => {
    const newAnswers = { ...answers, [currentQuestion]: score };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setPhase('result');
    }
  };

  const handleReset = () => {
    setPhase('quiz');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);
  const maxScore = questions.length * 4;
  const progress = ((currentQuestion + (phase === 'result' ? 1 : 0)) / questions.length) * 100;
  const result = getResult(totalScore);

  // Track stress check completion once
  useEffect(() => {
    if (phase === 'result' && !trackedRef.current) {
      trackedRef.current = true;
      trackEvent('stress_check_complete', {
        variant_id: variantId || 'unknown',
        score: totalScore,
        level: result.level,
      });
    }
  }, [phase, totalScore, result.level, variantId]);

  const handleLineClick = () => {
    trackEvent('line_click', {
      variant_id: variantId || 'unknown',
      location: 'stress_check_result',
    });
  };

  // Quiz Screen
  if (phase === 'quiz') {
    const question = questions[currentQuestion];
    const IconComponent = question.icon;

    return (
      <div className="bg-white/95 backdrop-blur rounded-3xl shadow-xl p-6 md:p-10">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>質問 {currentQuestion + 1} / {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-orange-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <IconComponent size={24} className="text-orange-500" />
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed">
            {question.text}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-2.5 max-w-md mx-auto">
          {options.map((option) => (
            <button
              key={option.score}
              onClick={() => handleAnswer(option.score)}
              className="w-full py-3.5 px-6 bg-gray-50 hover:bg-orange-50 border-2 border-gray-200 hover:border-orange-400 rounded-2xl text-gray-700 font-medium transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              {option.label}
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          ※このストレスチェックは医療診断ではありません
        </p>
      </div>
    );
  }

  // Result Screen
  return (
    <div className="bg-white/95 backdrop-blur rounded-3xl shadow-xl p-6 md:p-10">
      {/* Score */}
      <div className="text-center mb-8">
        <div className={`inline-block px-4 py-1 ${result.badgeColor} text-white text-sm font-bold rounded-full mb-4`}>
          {result.level === 'high' && '要注意'}
          {result.level === 'medium' && '注意'}
          {result.level === 'low' && '軽度'}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          ストレスチェック結果
        </h2>
        <div className="text-5xl font-bold text-gray-800 my-4">
          {totalScore}<span className="text-xl text-gray-500">/{maxScore}点</span>
        </div>
      </div>

      {/* Result Card */}
      <div className={`${result.bgColor} ${result.borderColor} border-2 rounded-2xl p-6 mb-8`}>
        <h3 className={`text-lg font-bold ${result.textColor} mb-3`}>
          {result.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          {result.advice}
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-4 max-w-md mx-auto">
        <a
          href="https://lin.ee/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLineClick}
          className="flex items-center justify-center space-x-2 w-full py-4 bg-[#06C755] text-white font-bold rounded-full shadow-lg hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={20} fill="white" />
          <span>LINEで無料相談する</span>
        </a>

        <button
          onClick={handleReset}
          className="flex items-center justify-center space-x-2 w-full py-4 bg-gray-100 text-gray-600 font-medium rounded-full hover:bg-gray-200 transition-colors"
        >
          <RotateCcw size={18} />
          <span>もう一度チェックする</span>
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
        <p className="text-xs text-gray-500 leading-relaxed">
          ※このチェックは医療診断ではありません。結果はあくまで参考情報です。
          上記の症状が続く場合、適応障害などの可能性があります。
          必ず医療機関や専門家にご相談ください。
          緊急の場合は、いのちの電話（0570-783-556）にお電話ください。
        </p>
      </div>
    </div>
  );
};

export default AdaptiveDisorderCheck;
