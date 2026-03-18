
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const handleShopLinkClick = (e) => {
    if (location.pathname === '/shop') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // If not on /shop, the Link component will handle navigation and ScrollToTop will trigger
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          {/* 左側: ロゴと会社情報 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left font-japanese">
            <Link to="/" className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity">
              <img src="/trust_logo.png" alt="株式会社トラストロゴ" className="h-20 w-auto" />
            </Link>
            <p className="font-bold text-gray-900 text-lg mb-2">株式会社トラスト</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>〒947-0004 新潟県小千谷市東栄1丁目1番15号</p>
              <p>TEL. 0258-81-0150</p>
              <p>当社HP.
                <Link to="https://trust-coms.com" className="text-blue-600 text-sm ml-2 mb-2 hover:opacity-80 transition-opacity underline">https://trust-coms.com</Link>
              </p>
            </div>
          </div>

          {/* 会社について */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left font-japanese mt-6 md:mt-0">
            <h3 className="font-bold text-gray-900 text-lg mb-4">トラストについて</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="https://trust-coms.com/company/" className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-2">
                  <span>会社概要</span>
                </Link>
              </li>
              <li>
                <Link to="https://trust-coms.com/people/" className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-2">
                  <span>社員紹介</span>
                </Link>
              </li>
              <li>
                <Link to="https://trust-coms.com/recruit/" className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-2">
                  <span>採用情報</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 中央: 事例紹介 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left font-japanese mt-6 md:mt-0">
            <h3 className="font-bold text-gray-900 text-lg mb-4">事例紹介</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="https://trust-coms.com/service/" className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-2">
                  <span>事業案内</span>
                </Link>
              </li>
              <li>
                <Link to="https://trust-coms.com/trust-note/case/" className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-2">
                  <span>導入事例一覧</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 右側: リンクメニュー */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left font-japanese mt-6 md:mt-0">
            <h3 className="font-bold text-gray-900 text-lg mb-4">その他関連サイト</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="https://trust-coms.com/trust-note/technical/" className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-2">
                  <span>TRUSTテックブログ</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 mt-12">
          <p className="text-sm text-gray-600 text-center">© 2025 TRUST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
