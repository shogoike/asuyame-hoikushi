import { useEffect } from 'react';

const LineConversion = () => {
  const lineUrl = 'https://lin.ee/OGTzYau';

  useEffect(() => {
    // コンバージョントラッキング
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'line',
        event_label: 'line_click',
      });
    }

    // Microsoft Clarity カスタムイベント
    if (window.clarity) {
      window.clarity('set', 'conversion', 'line_click');
    }

    // 即座にLINEへリダイレクト
    window.location.href = lineUrl;
  }, []);

  // 何も表示しない（リダイレクト中）
  return null;
};

export default LineConversion;
