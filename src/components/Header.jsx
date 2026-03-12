
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = ({ setIsCartOpen }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    // Shop link removed as requested
    { path: '/contact', label: 'お問い合わせ' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-32">
            <Link to="/" className="flex flex-col items-center leading-tight">
              <span className="text-[10px] sm:text-[12px] font-medium tracking-wide text-gray-500 font-japanese text-center mb-3">
                音検査のパートナー「オトモニ」
              </span>
              <img
                src="/otomoni-logo.png"
                alt="オトモニのロゴ"
                className="h-10 w-auto object-contain"
              />
              <span className="mt-1 text-[9px] sm:text-[11px] font-bold tracking-[0.2em] text-gray-900 font-japanese text-center">
                -オトモニ-
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8 ml-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${location.pathname === link.path
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/FreeTrial"
                className="ml-4 inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-orange-500 rounded-full hover:bg-orange-600 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                無料トライアル
              </Link>
            </nav>

            <div className="flex items-center md:hidden ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-gray-900 hover:text-gray-600 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute left-0 top-0 h-full w-full max-w-xs bg-white shadow-lg flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-xl font-light tracking-tight text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-grow p-4 flex flex-col">
                <ul className="space-y-2 mb-6">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-lg ${location.pathname === link.path
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50'
                          }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pb-8 px-2">
                  <Link
                    to="/FreeTrial"
                    className="block w-full text-center px-4 py-4 text-base font-bold text-white transition-colors bg-orange-500 rounded-xl hover:bg-orange-600 shadow-md"
                  >
                    無料トライアルはこちら
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
