import React, { useState } from 'react';
import { Check, ClipboardList } from 'lucide-react';
import { checklistCategories } from '../../constants/guideContent';

const InteractiveChecklist = () => {
  const [checked, setChecked] = useState({});

  const allItems = checklistCategories.flatMap((cat) => cat.items);
  const totalCount = allItems.length;
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  const toggleItem = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
            チェックリスト
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            持ち物・書類チェックリスト
          </h2>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ClipboardList size={18} className="text-orange-500" />
              <span className="text-sm font-bold text-gray-700">達成度</span>
            </div>
            <span className="text-sm font-bold text-orange-600">
              {checkedCount} / {totalCount} 完了
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {checkedCount === totalCount && totalCount > 0 && (
            <p className="text-green-600 text-sm font-bold mt-3 text-center">
              すべて完了しました！
            </p>
          )}
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {checklistCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <div className="px-5 md:px-6 py-4 bg-gray-50 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">{category.title}</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {category.items.map((item) => {
                  const isChecked = !!checked[item.id];
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center gap-3 px-5 md:px-6 py-4 hover:bg-orange-50/50 transition-colors text-left"
                      >
                        <div
                          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                            isChecked
                              ? 'bg-orange-500 border-orange-500'
                              : 'border-gray-300 bg-white'
                          }`}
                        >
                          {isChecked && (
                            <Check size={14} className="text-white" strokeWidth={3} />
                          )}
                        </div>
                        <span
                          className={`text-sm transition-all duration-200 ${
                            isChecked
                              ? 'text-gray-400 line-through'
                              : 'text-gray-700'
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveChecklist;
