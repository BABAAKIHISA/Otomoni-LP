
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

          <div>
            <motion.div>


            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center border-t border-gray-100 pt-10"
          >
            <p className="text-sm text-gray-500 font-japanese">
              ※ Webからのお問い合わせは、株式会社トラストの公式ウェブサイトのお問い合わせフォームへ移動します。<br />
              お問い合わせ内容の欄に、オトモニ無料診断など、簡単に要件をご記載ください。
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
