import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Tag } from 'lucide-react';
import { faqItems } from '../../constants/guideContent';

const categoryColors = {
  '引き止め対策': 'bg-pink-50 text-pink-600 border-pink-200',
  '相談方法': 'bg-purple-50 text-purple-600 border-purple-200',
  '権利・制度': 'bg-blue-50 text-blue-600 border-blue-200',
};

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', ...new Set(faqItems.map((item) => item.category))];

  const filteredItems =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50/50 to-pink-50/30">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 text-sm font-bold rounded-full mb-3">
            Q&A
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            保育士特有の「引き止め」対策
          </h2>
          <p className="text-gray-500 text-sm">
            よくある引き止めへの対処法をまとめました
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category === 'all' ? 'すべて' : category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            const categoryColor = categoryColors[item.category] || 'bg-gray-50 text-gray-600 border-gray-200';

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-start gap-3 p-5 md:p-6 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center mt-0.5">
                    <HelpCircle size={16} className="text-orange-500" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-gray-800 font-bold leading-relaxed block mb-2">
                      {item.question}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColor}`}>
                      <Tag size={10} />
                      {item.category}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-gray-400 mt-1 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-[4.5rem]">
                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
