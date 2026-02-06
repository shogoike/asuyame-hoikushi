import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const FloatingLineButton = () => {
  const handleClick = () => {
    trackEvent('line_click', {
      variant_id: localStorage.getItem('ab_variant') || 'unknown',
      location: 'floating_button',
    });
  };

  return (
    <a
      href="https://lin.ee/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-5 py-3 bg-[#06C755] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce"
      style={{ animationDuration: '3s' }}
    >
      <MessageCircle size={22} fill="white" />
      <span className="text-sm">LINE相談</span>
    </a>
  );
};

export default FloatingLineButton;
