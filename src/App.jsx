import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import ProductDetailPage from '@/pages/ProductDetailPage';
import Success from '@/pages/Success';
import ShippingPolicy from '@/pages/ShippingPolicy';
import ReturnsPolicy from '@/pages/ReturnsPolicy';
import ShoppingCart from '@/components/ShoppingCart';
import ScrollToTop from '@/components/ScrollToTop';
import Faq from '@/pages/Faq';
import FreeTrial from '@/pages/FreeTrial';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <GoogleAnalytics />
      <ScrollToTop />
      <Header setIsCartOpen={setIsCartOpen} />
      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/FreeTrial" element={<FreeTrial />} />
          <Route path="/product/:id" element={<ProductDetailPage setIsCartOpen={setIsCartOpen} />} />
          <Route path="/success" element={<Success />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/returns-policy" element={<ReturnsPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;