
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    department: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  });

  const [isConfirming, setIsConfirming] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirming(true);
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
  };
  const handleBack = () => {
    setIsConfirming(false);
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
  };

  const handleSend = async () => {
    setIsSending(true);
    try {
      const apiUrl = import.meta.env.VITE_API_ENDPOINT;
      if (!apiUrl || apiUrl.includes('your-api-gateway-url')) {
        console.warn('API Endpoint is not configured. Simulating success delay.');
        setTimeout(() => {
          setIsSending(false);
          setIsSuccess(true);
          document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000);
        return;
      }
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ ...formData, type: 'contact' }),
      });
      const result = await response.json();
      if (result.success || response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error(result.message || "API Error");
      }
    } catch (error) {
      console.error('送信エラー:', error);
      alert('送信に失敗しました。時間をおいて再度お試しください。');
    } finally {
      setIsSending(false);
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <Helmet>
        <title>お問い合わせ - オトモニ</title>
        <meta
          name="description"
          content="オトモニに関するお問い合わせはこちら。お電話、またはお問い合わせフォームよりご連絡ください。"
        />
      </Helmet>

      <div className="bg-white min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-6">
              お問い合わせ
            </h1>
            <p className="font-japanese text-lg text-gray-600">
              製品の導入についてのご相談、お見積もりのご依頼など、<br className="hidden sm:inline" />
              お気軽にお問い合わせください。
            </p>
          </motion.div>

          <div className="flex justify-center w-full px-2 sm:px-0">
            {/* Phone Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto w-full max-w-lg bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left border border-gray-100 shadow-sm gap-6 sm:gap-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <Phone className="w-8 h-8 text-gray-900" />
              </div>
              <div>
                <h2 className="font-japanese text-xl font-bold text-gray-900 mb-2">お電話でのお問い合わせ</h2>
                <div className="mt-2">
                  <p className="font-japanese text-2xl sm:text-3xl font-bold text-gray-900 tracking-wider">
                    TEL. 0258-81-0150
                  </p>
                  <p className="font-japanese text-sm text-gray-600 mt-2">
                    (受付時間　09:00〜18:00)
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* メールフォーム部分 */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden scroll-mt-32"
          >
            <div className="bg-gray-400 py-6 px-6 sm:px-10 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 font-japanese flex items-center justify-center gap-2">
                <Mail className="w-6 h-6" />
                {isSuccess ? '送信完了' : isConfirming ? '入力内容の確認' : 'メールでのお問い合わせ'}
              </h2>
            </div>

            <div className="p-6 sm:p-10">
              {isSuccess ? (
                // --- 送信完了画面 ---
                <div className="text-center space-y-6 py-10">
                  <div className="text-green-500 mb-4 flex justify-center">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 font-japanese">お問い合わせを受け付けました</h2>
                  <p className="text-gray-600 font-japanese">
                    ご入力いただいた情報につきまして、送信が完了いたしました。<br />
                    担当者からのご連絡をお待ちください。
                  </p>
                  <div className="pt-6">
                    <button onClick={() => window.location.reload()} className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                      お問い合わせ画面に戻る
                    </button>
                  </div>
                </div>
              ) : isConfirming ? (
                // --- 確認画面 ---
                <div className="space-y-6 font-japanese">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <dl className="divide-y divide-gray-200">
                      <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-sm">
                        <dt className="font-medium text-gray-500">お名前</dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">{formData.name}</dd>
                      </div>
                      <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-sm">
                        <dt className="font-medium text-gray-500">会社名</dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">{formData.company}</dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-sm">
                        <dt className="font-medium text-gray-500">部署名</dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">{formData.department || '未入力'}</dd>
                      </div>
                      <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-sm">
                        <dt className="font-medium text-gray-500">メールアドレス</dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">{formData.email}</dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-sm">
                        <dt className="font-medium text-gray-500">電話番号</dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">{formData.phone}</dd>
                      </div>
                      <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-sm">
                        <dt className="font-medium text-gray-500">お問い合わせ内容</dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2 whitespace-pre-wrap">{formData.message || '特になし'}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="pt-6 flex flex-col-reverse sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full sm:w-1/3 flex justify-center py-4 px-4 border border-gray-300 rounded-xl shadow-sm text-lg font-bold text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      修正する
                    </button>
                    <button
                      type="button"
                      onClick={handleSend}
                      disabled={isSending}
                      className={`w-full sm:w-2/3 flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white transition-all duration-300
                        ${isSending ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer'}`}
                    >
                      {isSending ? '送信中...' : '送信する'}
                    </button>
                  </div>
                </div>
              ) : null}


              {!isSuccess && !isConfirming && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* お名前 */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                      お名前 <span className="text-red-500 ml-1 text-xs px-2 py-0.5 bg-red-50 rounded">必須</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900"
                      placeholder="山田 太郎"
                    />
                  </div>

                  {/* 会社名 */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                      会社名 <span className="text-red-500 ml-1 text-xs px-2 py-0.5 bg-red-50 rounded">必須</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900"
                      placeholder="株式会社トラスト"
                    />
                  </div>

                  {/* 部署名 */}
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                      部署名 <span className="text-gray-400 ml-1 text-xs">任意</span>
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900"
                      placeholder="製造部"
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                      メールアドレス <span className="text-red-500 ml-1 text-xs px-2 py-0.5 bg-red-50 rounded">必須</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900"
                      placeholder="taro.yamada@example.com"
                    />
                  </div>

                  {/* 電話番号 */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                      電話番号 <span className="text-red-500 ml-1 text-xs px-2 py-0.5 bg-red-50 rounded">必須</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900"
                      placeholder="03-1234-5678"
                    />
                  </div>

                  {/* お問い合わせ内容 */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                      お問い合わせ内容 <span className="text-gray-400 ml-1 text-xs">任意</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900 resize-y"
                      placeholder="製品についてのご質問や、お見積りのご依頼などをご記入ください。"
                    ></textarea>
                  </div>

                  {/* 個人情報保護方針の同意 */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agree"
                          name="agree"
                          type="checkbox"
                          required
                          checked={formData.agree}
                          onChange={handleChange}
                          className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 transition-colors cursor-pointer"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agree" className="font-medium text-gray-700 font-japanese cursor-pointer">
                          <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2">個人情報保護方針</Link>に同意する
                        </label>
                        <p className="text-gray-500 mt-1 font-japanese text-xs">送信前に内容をご確認の上、チェックを入れてください。</p>
                      </div>
                    </div>
                  </div>

                  {/* 確認画面へ進むボタン */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={!formData.agree}
                      className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white transition-all duration-300 font-japanese
                      ${formData.agree
                          ? 'bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer'
                          : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    >
                      確認画面へ進む
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Contact;
