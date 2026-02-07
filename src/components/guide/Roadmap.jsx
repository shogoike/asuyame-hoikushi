import React from 'react';
import { Lightbulb } from 'lucide-react';
import { roadmapSteps } from '../../constants/guideContent';

const colorMap = {
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-500',
    ring: 'ring-orange-200',
    badge: 'bg-orange-50 text-orange-600 border-orange-200',
    line: 'bg-gradient-to-b from-orange-300 to-pink-300',
    tips: 'bg-orange-50 border-orange-100',
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-500',
    ring: 'ring-pink-200',
    badge: 'bg-pink-50 text-pink-600 border-pink-200',
    line: 'bg-gradient-to-b from-pink-300 to-purple-300',
    tips: 'bg-pink-50 border-pink-100',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-500',
    ring: 'ring-purple-200',
    badge: 'bg-purple-50 text-purple-600 border-purple-200',
    line: 'bg-gradient-to-b from-purple-300 to-blue-300',
    tips: 'bg-purple-50 border-purple-100',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-500',
    ring: 'ring-blue-200',
    badge: 'bg-blue-50 text-blue-600 border-blue-200',
    line: 'bg-gradient-to-b from-blue-300 to-green-300',
    tips: 'bg-blue-50 border-blue-100',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-500',
    ring: 'ring-green-200',
    badge: 'bg-green-50 text-green-600 border-green-200',
    line: 'bg-green-300',
    tips: 'bg-green-50 border-green-100',
  },
};

const Roadmap = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 text-sm font-bold rounded-full mb-3">
            ロードマップ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            退職までの5ステップ
          </h2>
          <p className="text-gray-500 text-sm">
            一つずつ、焦らず進めていきましょう
          </p>
        </div>

        <div className="relative">
          {roadmapSteps.map((step, index) => {
            const colors = colorMap[step.color];
            const IconComponent = step.icon;
            const isLast = index === roadmapSteps.length - 1;

            return (
              <div key={step.step} className="relative flex gap-4 md:gap-6 pb-10 last:pb-0">
                {/* Timeline line */}
                {!isLast && (
                  <div
                    className={`absolute left-5 md:left-6 top-14 w-0.5 ${colors.line}`}
                    style={{ height: 'calc(100% - 2.5rem)' }}
                  />
                )}

                {/* Icon with step number */}
                <div className="flex-shrink-0 relative">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${colors.bg} rounded-full flex items-center justify-center ring-4 ${colors.ring} ring-offset-2 ring-offset-white`}
                  >
                    <IconComponent size={20} className={colors.text} />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-500 border border-gray-200 shadow-sm">
                    {step.step}
                  </span>
                </div>

                {/* Content card */}
                <div className="flex-grow">
                  <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Step {step.step}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full border ${colors.badge}`}
                      >
                        {step.timing}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.action}
                    </p>

                    {/* Tips */}
                    {step.tips && (
                      <div className={`flex items-start gap-2 p-3 rounded-xl border ${colors.tips}`}>
                        <Lightbulb size={16} className={`${colors.text} flex-shrink-0 mt-0.5`} />
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {step.tips}
                        </p>
                      </div>
                    )}
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

export default Roadmap;
