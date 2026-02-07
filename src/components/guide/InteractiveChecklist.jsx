import React, { useState, useEffect } from 'react';
import { Check, ClipboardList, AlertCircle, Sparkles } from 'lucide-react';
import { checklistCategories } from '../../constants/guideContent';

const colorMap = {
  orange: {
    header: 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-100',
    title: 'text-orange-700',
    check: 'bg-orange-500 border-orange-500',
    hover: 'hover:bg-orange-50/50',
    progress: 'from-orange-400 to-amber-400',
  },
  blue: {
    header: 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-100',
    title: 'text-blue-700',
    check: 'bg-blue-500 border-blue-500',
    hover: 'hover:bg-blue-50/50',
    progress: 'from-blue-400 to-cyan-400',
  },
  green: {
    header: 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100',
    title: 'text-green-700',
    check: 'bg-green-500 border-green-500',
    hover: 'hover:bg-green-50/50',
    progress: 'from-green-400 to-emerald-400',
  },
};

const InteractiveChecklist = () => {
  const [checked, setChecked] = useState({});
  const [showCelebration, setShowCelebration] = useState(false);

  const allItems = checklistCategories.flatMap((cat) => cat.items);
  const totalCount = allItems.length;
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  const toggleItem = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (checkedCount === totalCount && totalCount > 0) {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [checkedCount, totalCount]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-green-100 text-blue-600 text-sm font-bold rounded-full mb-3">
            チェックリスト
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            持ち物・書類チェックリスト
          </h2>
          <p className="text-gray-500 text-sm">
            タップしてチェックを入れていきましょう
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
                <ClipboardList size={20} className="text-orange-500" />
              </div>
              <div>
                <span className="text-sm font-bold text-gray-700 block">達成度</span>
                <span className="text-xs text-gray-500">
                  {checkedCount === totalCount ? 'すべて完了!' : 'あと少し!'}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-orange-600">
                {checkedCount}
              </span>
              <span className="text-gray-400 text-lg"> / {totalCount}</span>
            </div>
          </div>

          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 h-4 rounded-full transition-all duration-700 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {progress > 10 && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                )}
              </div>
            </div>
            <span className="absolute right-0 -top-6 text-sm font-bold text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>

          {showCelebration && (
            <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 flex items-center gap-2 animate-bounce">
              <Sparkles size={18} className="text-green-500" />
              <p className="text-green-700 text-sm font-bold">
                おめでとうございます！すべてのチェックが完了しました
              </p>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {checklistCategories.map((category) => {
            const colors = colorMap[category.color] || colorMap.orange;
            const categoryChecked = category.items.filter((item) => checked[item.id]).length;
            const categoryTotal = category.items.length;

            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`px-5 md:px-6 py-4 border-b ${colors.header}`}>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-bold ${colors.title}`}>{category.title}</h3>
                    <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full">
                      {categoryChecked} / {categoryTotal}
                    </span>
                  </div>
                  {category.description && (
                    <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                  )}
                </div>
                <ul className="divide-y divide-gray-100">
                  {category.items.map((item) => {
                    const isChecked = !!checked[item.id];
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => toggleItem(item.id)}
                          className={`w-full flex items-center gap-3 px-5 md:px-6 py-4 ${colors.hover} transition-colors text-left group`}
                        >
                          <div
                            className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                              isChecked
                                ? colors.check
                                : 'border-gray-300 bg-white group-hover:border-gray-400'
                            }`}
                          >
                            {isChecked && (
                              <Check size={14} className="text-white" strokeWidth={3} />
                            )}
                          </div>
                          <span
                            className={`text-sm transition-all duration-200 flex-grow ${
                              isChecked
                                ? 'text-gray-400 line-through'
                                : 'text-gray-700'
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.important && !isChecked && (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                              <AlertCircle size={10} />
                              重要
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveChecklist;
