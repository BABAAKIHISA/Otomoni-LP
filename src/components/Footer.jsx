
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
            <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <img src="/trust-logo.png" alt="株式会社トラストロゴ" className="h-10 w-auto" />
            </Link>
            <p className="font-bold text-gray-900 text-lg mb-2">株式会社トラスト</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>〒947-0004 新潟県小千谷市東栄1丁目1番15号</p>
              <p>TEL. 0258-81-0150</p>
            </div>
          </div>

          {/* 右側: リンクなど（必要に応じて追加できます） */}
          <div className="flex flex-col items-center md:items-end">
            {/* 空にしておくか、SNSリンク等を置く想定 */}
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
