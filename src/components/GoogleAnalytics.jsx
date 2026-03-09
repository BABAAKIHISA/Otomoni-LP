import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-QTSJ6DZP4Y';

// Google Analyticsコンポーネント
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // gtagが読み込まれるまで待つ
    const trackPageView = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        try {
          window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: location.pathname + location.search,
            page_title: document.title,
          });
        } catch (error) {
          // エラーを無視（開発環境やネットワークエラーの場合）
          if (process.env.NODE_ENV === 'development') {
            console.warn('Google Analytics tracking error:', error);
          }
        }
      }
    };

    // スクリプトが読み込まれるまで待つ（最大2秒）
    let attempts = 0;
    const maxAttempts = 20;
    
    const checkAndTrack = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        trackPageView();
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(checkAndTrack, 100);
      }
    };

    checkAndTrack();
  }, [location]);

  return null;
};

export default GoogleAnalytics;

