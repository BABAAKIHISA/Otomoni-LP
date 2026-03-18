import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>個人情報保護方針 - オトモニ</title>
        <meta
          name="description"
          content="株式会社トラストの個人情報保護方針について記載しています。"
        />
      </Helmet>

      <div className="bg-white min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="font-japanese text-2xl sm:text-2xl font-medium tracking-tight text-gray-900 mb-10 text-center border-b pb-4">
              個人情報に関する取扱いについて（個人情報保護方針）
            </h1>

            <div className="prose prose-gray max-w-none font-japanese space-y-6 text-gray-700">
              <p>
                株式会社トラスト（以下、「当社」という）は、コンピュータシステムの提案・設計・開発・運用業務を提供しており、お客様および当社に関わる方すべての個人情報について、適切に取り扱うことが社会的責務として重要と考え、以下の方針に基づき、個人情報の保護に努めます。
              </p>

              <div className="space-y-8 pt-4">
                <div className="flex items-start">
                  <span className="text-xl font-bold mr-3 text-gray-800 shrink-0 flex items-center h-7">①</span>
                  <div className="leading-relaxed">
                    当社は、個人情報保護方針を役員及び従業員に対して周知、徹底するとともに、個人情報の重要性について継続的に教育を行い、個人情報の適切な管理に努めます。
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-xl font-bold mr-3 text-gray-800 shrink-0 flex items-center h-7">②</span>
                  <div className="leading-relaxed">
                    当社は、個人情報を取得する場合は、業務上必要な範囲で、ご本人に利用目的を明示し、同意頂いた上で取得します。
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-xl font-bold mr-3 text-gray-800 shrink-0 flex items-center h-7">③</span>
                  <div className="leading-relaxed">
                    当社は、取得した個人情報は、ご本人に同意頂いた範囲内で利用し、目的外利用は致しません。また、法令に基づく場合を除いて、ご本人の同意を得ることなく第三者に提供および開示することはありません。
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-xl font-bold mr-3 text-gray-800 shrink-0 flex items-center h-7">④</span>
                  <div className="leading-relaxed">
                    当社は、個人情報の取扱に関して、個人情報の保護に関する法令、国が定める指針およびその他の規範を遵守するために、日本工業規格「個人情報保護マネジメントシステム－要求事項」に準拠した個人情報マネジメントシステムを策定し、適切に運用致します。
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-xl font-bold mr-3 text-gray-800 shrink-0 flex items-center h-7">⑤</span>
                  <div className="leading-relaxed">
                    当社は、個人情報の漏えい、滅失又はき損などのリスクに対し、予防対策および是正措置を講じます。
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-xl font-bold mr-3 text-gray-800 shrink-0 flex items-center h-7">⑥</span>
                  <div className="leading-relaxed">
                    当社は、ご本人からの当該個人情報の開示、訂正、削除、利用停止等の要請および苦情や相談に対して速やかに対応致します。
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-xl font-bold mr-3 text-gray-800 shrink-0 flex items-center h-7">⑦</span>
                  <div className="leading-relaxed">
                    当社は個人情報保護マネジメントシステムを継続的に見直し改善致します。
                  </div>
                </div>
                <p>制定日：2011年3月</p>
              </div>
            </div>

            <div className="mt-16 text-center pt-8 border-t border-gray-100">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors font-japanese shadow-sm"
              >
                前のページへ戻る
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
