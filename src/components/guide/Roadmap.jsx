import React from 'react';
import { roadmapSteps } from '../../constants/guideContent';

const colorMap = {
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-500',
    ring: 'ring-orange-200',
    badge: 'bg-orange-50 text-orange-600',
    line: 'bg-orange-300',
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-500',
    ring: 'ring-pink-200',
    badge: 'bg-pink-50 text-pink-600',
    line: 'bg-pink-300',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-500',
    ring: 'ring-purple-200',
    badge: 'bg-purple-50 text-purple-600',
    line: 'bg-purple-300',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-500',
    ring: 'ring-blue-200',
    badge: 'bg-blue-50 text-blue-600',
    line: 'bg-blue-300',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-500',
    ring: 'ring-green-200',
    badge: 'bg-green-50 text-green-600',
    line: 'bg-green-300',
  },
};

const Roadmap = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
            ロードマップ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            退職までの5ステップ
          </h2>
        </div>

        <div className="relative">
          {roadmapSteps.map((step, index) => {
            const colors = colorMap[step.color];
            const IconComponent = step.icon;
            const isLast = index === roadmapSteps.length - 1;

            return (
              <div key={step.step} className="relative flex gap-4 md:gap-6 pb-8 last:pb-0">
                {/* Timeline line */}
                {!isLast && (
                  <div
                    className={`absolute left-5 md:left-6 top-12 w-0.5 ${colors.line}`}
                    style={{ height: 'calc(100% - 2rem)' }}
                  />
                )}

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${colors.bg} rounded-full flex items-center justify-center ring-4 ${colors.ring} ring-offset-2`}
                  >
                    <IconComponent size={20} className={colors.text} />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-grow bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-gray-400">
                      STEP {step.step}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors.badge}`}
                    >
                      {step.timing}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.action}
                  </p>
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
