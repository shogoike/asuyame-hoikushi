/**
 * GA4 イベント送信ユーティリティ
 * window.gtag が存在すれば GA4 へ送信、なければ console.log にフォールバック
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    console.log('[Analytics]', eventName, params);
  }
};
