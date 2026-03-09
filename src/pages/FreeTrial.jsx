// src/pages/Faq.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    department: '',
    email: '',
    phone: '',
    message: '',
    trialStartDate: '',
    machinefeature: '',
    interest: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, trialStartDate, machinefeature, interest, message, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const [isConfirming, setIsConfirming] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 確認画面へ遷移
    setIsConfirming(true);
    // 状態更新後にスクロールさせるため、setTimeoutを使用
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 10);
  };

  const handleBack = () => {
    setIsConfirming(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 10);
  };

  const handleSend = async () => {
    setIsSending(true);

    try {
      // .envファイルなどに設定したAPI GatewayのエンドポイントURLを取得
      // 注意: API GatewayのURLが未設定の場合は、動作確認用として送信成功にします。
      const apiUrl = import.meta.env.VITE_API_ENDPOINT;

      if (!apiUrl || apiUrl.includes('your-api-gateway-url')) {
        // デモ用の処理（エンドポイントが設定されるまでの間）
        console.warn('API Endpoint is not configured. Simulating success delay.');
        setTimeout(() => {
          setIsSending(false);
          setIsSuccess(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
        return;
      }

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-orange-500 py-8 px-6 sm:px-10 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-japanese">
              {isSuccess ? '送信完了' : isConfirming ? '入力内容の確認' : '無料トライアルお申し込み'}
            </h1>
            {!isSuccess && !isConfirming && (
              <p className="text-orange-50 text-sm sm:text-base font-japanese font-medium tracking-wide">
                無料トライアルにおいて、<b>料金は一切発生しません</b>。<br />また、無料トライアル終了後、ご利用を強制することもございません。
              </p>
            )}
            {isConfirming && !isSuccess && (
              <p className="text-orange-50 text-sm sm:text-base font-japanese font-medium tracking-wide">
                以下の内容で送信します。よろしければ「送信する」ボタンを押してください。
              </p>
            )}
          </div>

          <div className="p-6 sm:p-10">
            {isSuccess ? (
              <div className="text-center space-y-6 py-10">
                <div className="text-green-500 mb-4 flex justify-center">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 font-japanese">お申し込みを受け付けました</h2>
                <p className="text-gray-600 font-japanese">
                  ご入力いただいた情報につきまして、送信が完了いたしました。<br />
                  担当者からのご連絡をお待ちください。
                </p>
                <div className="pt-6">
                  <a href="/" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                    トップページへ戻る
                  </a>
                </div>
              </div>
            ) : isConfirming ? (
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
                      <dt className="font-medium text-gray-500">トライアル開始希望日</dt>
                      <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">{formData.trialStartDate}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-sm">
                      <dt className="font-medium text-gray-500">対象機械の特徴</dt>
                      <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2 whitespace-pre-wrap">{formData.machinefeature || '未入力'}</dd>
                    </div>
                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-sm">
                      <dt className="font-medium text-gray-500">オトモニを知ったきっかけ</dt>
                      <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">{formData.interest === '---' ? '未入力' : formData.interest}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-sm">
                      <dt className="font-medium text-gray-500">その他ご質問など</dt>
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
            ) : (
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
                    placeholder="株式会社オトモニ"
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

                {/* トライアル開始希望日 */}
                <div>
                  <label htmlFor="trialStartDate" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                    トライアル開始希望日（入力日より3営業日以降の日付をご指定ください。） <span className="text-red-500 ml-1 text-xs px-2 py-0.5 bg-red-50 rounded">必須</span>
                  </label>
                  <input
                    type="date"
                    id="trialStartDate"
                    name="trialStartDate"
                    required
                    value={formData.trialStartDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900"
                    placeholder="03-1234-5678"
                  />
                </div>

                {/* 対象機械の特徴 */}
                <div>
                  <label htmlFor="machinefeature" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                    対象機械の特徴（使用用途、メーカー、その他に型番、製造年など） <span className="text-gray-400 ml-1 text-xs">任意</span>
                  </label>
                  <textarea
                    id="machinefeature"
                    name="machinefeature"
                    rows="3"
                    value={formData.machinefeature}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900 resize-y"
                    placeholder="使用用途：異音検知、メーカー：株式会社オトモニ"
                  ></textarea>
                </div>

                {/* オトモニを知ったきっかけ */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                    オトモニを知ったきっかけ <span className="text-gray-400 ml-1 text-xs">任意</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900"
                  >
                    <option value="---">---</option>
                    <option value="展示会">展示会</option>
                    <option value="Web検索">Web検索</option>
                    <option value="知人からの紹介">知人からの紹介</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                {/* 質問、ご要望など */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-japanese">
                    その他ご質問、ご要望など <span className="text-gray-400 ml-1 text-xs">任意</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-gray-50 focus:bg-white text-gray-900 resize-y"
                    placeholder="例：現在の運用状況や、特に課題に感じていることなどを自由にご記入ください。"
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
                        <a href="#" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2">個人情報保護方針</a>に同意する
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
  );
};

export default FreeTrial;
