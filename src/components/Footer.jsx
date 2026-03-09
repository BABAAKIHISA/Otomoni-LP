
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Adjusted padding */}
        <div className="pt-0 border-t-0"> {/* Removed border-t and pt-8 */}
          <p className="text-sm text-gray-600 text-center">© 2025 TRUST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
