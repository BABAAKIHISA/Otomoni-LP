import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const companyInfo = [{
    label: "会社名",
    value: "株式会社トラスト"
  }, {
    label: "代表取締役",
    value: "品田 誠一郎"
  }, {
    label: "設立",
    value: "2000年6月26日"
  }, {
    label: "資本金",
    value: "2,100万円"
  }, {
    label: "所在地",
    value: (
      <div className="flex flex-col space-y-2">
        <div>
          <span className="font-semibold block">■ 本社</span>
          <span>〒947-0004 新潟県小千谷市東栄1丁目1番15号</span>
        </div>
        <div>
          <span className="font-semibold block">■ 東京オフィス</span>
          <span>〒101-0041 東京都千代田区神田須田町2-3-12 12KANDA 609</span>
        </div>
        <div>
          <span className="font-semibold block">■ 新潟オフィス</span>
          <span>〒950-0917 新潟県新潟市中央区天神1丁目1 プラーカ3 2F Hub Station KENTO</span>
        </div>
      </div>
    )
  }, {
    label: "事業内容",
    value: (
      <ul className="list-none m-0 p-0">
        <li>■ DX支援</li>
        <li>■ AWS開発</li>
        <li>■ 自社製品</li>
      </ul>
    )
  }, {
    label: "電話番号",
    value: "0258-81-0150"
  }, {
    label: "FAX",
    value: "0258-81-0151"
  }, {
    label: "社員数",
    value: "49名"
  }, {
    label: "平均年齢",
    value: "35.0歳"
  }, {
    label: "グループ企業",
    value: "株式会社ベネフィット・ワン"
  }, {
    label: "会社資格",
    value: (
      <ul className="list-none m-0 p-0">
        <li>ISMS 登録証番号: 011703 (認証機関: Intertek UKAS)</li>
        <li>一般労働者派遣事業 許可番号: 派15-300345</li>
      </ul>
    )
  }, {
    label: "加盟団体",
    value: (
      <ul className="list-none m-0 p-0">
        <li>小千谷商工会議所</li>
        <li>公益財団法人 にいがた産業創造機構</li>
        <li>公益財団法人 日本電信電話ユーザ協会</li>
        <li>一般社団法人 小千谷法人会</li>
        <li>長岡商工会議所</li>
        <li>KSK 柏崎ITソフトウェア産業協会</li>
        <li>小千谷IT協議会</li>
        <li>長岡地区ソフトウェア産業協議会</li>
      </ul>
    )
  }, {
    label: "スポーツ応援",
    value: (
      <ul className="list-none m-0 p-0">
        <li>Jリーグ アルビレックス新潟 (アルビレックス新潟のサポートカンパニー)</li>
        <li>Dリーグ Benefit one MONOLIZ</li>
      </ul>
    )
  }, {
    label: "事業者登録番号",
    value: "T2110001025578"
  }, ];

  return <>
    <Helmet>
      <title>開発チーム - オトモニ</title>
      <meta
        name="description"
        content="オトモニの開発チームについて。現場で使いやすいAIを通じて、製造現場の品質と生産性向上に取り組んでいます。"
      />
    </Helmet>

    <div className="bg-white">
      <section className="bg-[#E0E8E7] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12"
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="font-japanese text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
                AI・機械学習領域のプロが開発。<br />運用までサポートします。
              </h2>
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="w-64 h-auto">
                <img src="https://horizons-cdn.hostinger.com/f3a9ec1a-7812-4e0e-9935-9f1545a02da8/aws-partner-advanced_1200x900_logo.65f93763f637c09cd04a0274db3ebb34fb2b349d-NE6cF.png" alt="AWS Partner Advanced Tier Services Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-center mt-4">
                <p className="text-sm font-semibold text-gray-700">SI Rising Star Partner of the Year</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">AWS Japan Top Engineers 在籍</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
            >
              <img
                className="rounded-2xl w-full h-full object-cover aspect-[4/3]"
                alt="オトモニ開発チームの集合写真"
                src="/team-photo.png"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-light text-gray-900 font-japanese">私たちの哲学</h2>
              <p className="mt-4 text-lg text-gray-600 font-japanese">
                オトモニは、製造現場の職人の方々の生の声から着想を得た、現場発のプロダクトです。
              </p>
              <p className="mt-4 text-lg text-gray-600 font-japanese">
                我々開発チームは、高度な先端技術を取り入れつつ、現場と「共に」歩めるようなものづくりの形を目指しています。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 font-japanese">会社概要</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="font-japanese">
              {companyInfo.map((item, index) => (
                <div key={index} className={`flex flex-col sm:flex-row ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                  <div className="w-full sm:w-1/4 bg-gray-50 px-6 py-4 font-semibold text-gray-800 text-sm">
                    {item.label}
                  </div>
                  <div className="w-full sm:w-3/4 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  </>;
};

export default About;