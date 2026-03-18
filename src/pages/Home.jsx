
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BellRing, History, Factory, Mic, ClipboardCheck, MessageSquare, Rocket, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HERO_IMAGES = [
  '/hero/hero-1.png',
  '/hero/hero-2.png',
  '/hero/hero-3.png',
];

const ProblemSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-8">
            製造現場が抱える「音」に関する課題
          </h2>
          <div className="space-y-6 text-left">
            <p className="font-japanese text-base sm:text-lg text-gray-700 leading-relaxed">
              <b>「最近、設備の調子がおかしい……」</b>そのような故障の兆しは、<b>音</b>として現れていることが多いです。<br />
            </p>
            <p className="font-japanese text-base sm:text-lg text-gray-700 leading-relaxed">
              「ベテランのAさんなら気づくのに…」という音の変化。退職と共に、その貴重な「耳」が現場から失われようとしています。「設備は壊れる前に音が変わる」——この変化を聞き分けられる人材は年々減少しています。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const ProductFeaturesSection = () => {
  const features = [{
    icon: <BellRing className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />,
    title: "リアルタイム判定通知",
    description: "ウェブアプリ上や管理者メールなど、様々なプラットフォームへすぐに検査結果を通知することが可能です。"
  }, {
    icon: <History className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />,
    title: "検査履歴の蓄積",
    description: "検査データを保存することで、その後の製品品質管理へ活用できます。"
  }, {
    icon: <Mic className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />,
    title: "音でしか拾えない異常を検知",
    description: "マイクで音を拾うため、非接触で、柔軟な機器設置が可能です。"
  }, {
    icon: <Factory className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />,
    title: "幅広い活用領域",
    description: "製造業のお客様を中心に、品質検査や予知保全にご利用いただいています。"
  }];
  return <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
        <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-8">
          音の異常検知AI「オトモニ」
        </h2>
        <p className="font-japanese text-base sm:text-lg text-gray-700 leading-relaxed">
          オトモニは、消えゆく「現場の耳」を技術で守るために開発された、<b>音の異常検知AI</b>です。<br />
          ベテラン作業員の代わりに<b>AI</b>が違和感を検知。<br></br>24時間365日の常時監視により、異常検知率100%（見逃しゼロ）を目指します。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12 mb-16 sm:mb-20">
        {features.map((feature, index) => <motion.div key={index} className="flex items-start" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.1
        }}>
          <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4 sm:mr-6">
            {feature.icon}
          </div>
          <div>
            <h3 className="font-japanese text-lg sm:text-xl font-medium text-gray-900">
              {feature.title}
            </h3>
            <p className="font-japanese mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>)}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 sm:mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左側：アプリ画面のスクショ2枚 */}
          <div className="space-y-8">
            <div>
              <img
                src="/features/app-screen-1.png"
                alt="センサーのモニター画面"
                className="w-full h-auto"
              />
              <p className="font-japanese text-sm text-gray-600 mt-3 text-center">
                センサーのモニター画面
              </p>
            </div>
            <div>
              <img
                src="/features/app-screen-2.png"
                alt="検査画面"
                className="w-full h-auto"
              />
              <p className="font-japanese text-sm text-gray-600 mt-3 text-center">
                検査画面（手動で検査をする場合）
              </p>
            </div>
          </div>

          {/* 右側：端末本体の画像1枚 */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="/features/device.jpg"
              alt="端末本体"
              className="w-[70%] h-auto object-contain"
            />
            <div className="font-japanese text-sm text-gray-600 mt-4 space-y-1 text-left max-w-md">
              <p><span className="font-semibold">箱：</span>異音を判定するAIが搭載されている本体</p>
              <p><span className="font-semibold">マイク①：</span>対象機器用（中央）</p>
              <p><span className="font-semibold">マイク②：</span>環境音除去用（右側）</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;
};

const UseCasesSection = () => {
  const useCases = [
    {
      industry: "製菓会社",
      title: "製造機器の予知保全",
      description: "チェーンコンベアの故障により年に数回生産ラインが停止し、復旧に3日程度かかる課題を解決。故障の兆候である異音を早期に検知することで2時間程度の部品交換だけで済むようになり、商品の安定供給と廃棄ロスの削減を実現しました。",
      image: "/use-cases/motor.png",
      tag: "予知保全"
    },
    {
      industry: "自動車部品製造業",
      title: "ホーン音質検査の自動化",
      description: "105dB以上の騒音環境下で作業時間が制限される中、社内認定者による全数聴感検査が必要だった課題を解決。AIで品質検査を自動化し、人手不足の解消と品質の均一化を実現。検査基準の統一により、判定のばらつきもなくなりました。",
      image: "/use-cases/car-horn.png",
      tag: "品質検査"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-4">
            導入事例
          </h2>
          <p className="font-japanese text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            様々な業界で、音による品質検査・予知保全に活用されています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-white flex items-center justify-center">
                <img
                  src={useCase.image}
                  alt={useCase.industry}
                  className="h-32 w-auto object-contain"
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {useCase.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="font-japanese text-sm text-blue-600 font-semibold mb-2">
                  {useCase.industry}
                </p>
                <h3 className="font-japanese text-xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="font-japanese text-sm text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntroductionStepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "無料診断",
      description: "まずは録音データを送るだけ。AIによる判定精度を無料で診断し、レポートをご提供します。",
      icon: <ClipboardCheck className="w-6 h-6 text-white" />
    },
    {
      number: "02",
      title: "課題ヒアリング",
      description: "具体的な課題や現場の環境についてヒアリングを行い、最適なシステム構成とプランをご提案します。",
      icon: <MessageSquare className="w-6 h-6 text-white" />
    },
    {
      number: "03",
      title: "本導入",
      description: "機器の設置から運用開始まで、専任スタッフがサポート。スムーズな導入を実現します。",
      icon: <Rocket className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900">
            導入ステップ
          </h2>
          <p className="font-japanese mt-4 text-base sm:text-lg text-gray-600">
            お問い合わせから導入まで、スムーズにサポートいたします。
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full z-10"
            >
              <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center mb-6 shadow-md">
                {step.icon}
              </div>
              <span className="text-sm font-bold text-blue-600 mb-2 tracking-wider">STEP {step.number}</span>
              <h3 className="font-japanese text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="font-japanese text-gray-600 leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>

              {/* Mobile Arrow (Down) - Visible only on mobile, strictly between items */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-gray-300 z-0">
                  <ChevronRight className="w-8 h-8 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}

          {/* Desktop Arrows (Right) - Absolute positioning relative to grid container */}
          <div className="hidden md:flex absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-0 justify-between pointer-events-none px-[16.66%]">
            {/* Arrow between 1 and 2 */}
            <div className="text-gray-300 transform translate-x-1/2 -mt-8">
              <ChevronRight className="w-10 h-10" />
            </div>
            {/* Arrow between 2 and 3 */}
            <div className="text-gray-300 transform translate-x-1/2 -mt-8">
              <ChevronRight className="w-10 h-10" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >

        </motion.div>
      </div>
    </section>
  );
};

const ClosingSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900">
            無料トライアル、お問い合わせ
          </h2>
          <p className="font-japanese mt-4 mb-4 text-base sm:text-lg text-gray-600">
            無料トライアルをご用意しております。<br />
            料金は一切かかりません。トライアル終了後にご利用を強制することもありません。<br />
            <Link to="/FreeTrial">
              <Button className="font-japanese mt-4 mb-4 bg-orange-500 text-white hover:bg-orange-600 rounded-full px-8 py-6 text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                無料トライアルはこちら
              </Button>
            </Link>
          </p>
          <p className="font-japanese mt-4 text-base sm:text-lg text-gray-600">
            その他、ご不明な点などございましたら、お気軽にお問い合わせください。<br />
            <Link to="/contact">
              <Button className="font-japanese mt-4 bg-gray-400 text-white hover:bg-gray-600 rounded-full px-8 py-6 text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                お問い合わせはこちら
              </Button>
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question: "騒音が大きい環境でも使えますか？",
      answer: "指向性マイクの利用やノイズ除去、環境音込みの学習により、騒音環境下でもご利用いただけます。"
    },
    {
      question: "異常データがほとんどありません。",
      answer: "正常データ中心で始められるため問題ありません。"
    },
    {
      question: "設置先の機械を改造する必要はある？",
      answer: "端末単体で動作するため、特に設置先の改造は必要ありません。"
    },
    {
      question: "導入までにどれくらい時間がかかりますか？",
      answer: "無料トライアルが最短3営業日で開始可能です。"
    }
  ];
  return <section className="py-12 sm:py-16 bg-white border-t border-gray-200"> {/* Changed to bg-white to alternate */}
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
        <h2 className="font-japanese text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-4">
          よくあるご質問
        </h2>
      </motion.div>

      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left text-base sm:text-lg font-japanese hover:no-underline text-gray-800">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="font-japanese text-sm sm:text-base text-gray-600 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>)}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/Faq">
            <Button className="font-japanese bg-gray-400 text-white hover:bg-gray-600 rounded-full px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              その他ご質問はこちら
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>;
};

const Home = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000); // 10秒ごとに切り替え

    return () => clearInterval(interval);
  }, []);

  return <>
    <Helmet>
      <title>音検査のパートナー「オトモニ」</title>
      <meta
        name="description"
        content="オトモニは、AIを活用して音の異常を検知し、製造現場の品質向上とコスト削減を支援する異音検知システムです。"
      />
    </Helmet>

    <div className="bg-white">
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        {/* 背景スライドショー（背面） */}
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentHeroIndex === index ? 1 : 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          {/* 黒のオーバーレイで背景を暗くし、テキストを際立たせる */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* コンテンツは最前面に */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-[-12px] sm:mt-[-24px]"
            >
              {/* Removed the paragraph as requested */}
              <h1 className="font-japanese text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-10 leading-tight">
                <span className="block">異変を捉える、よりはやく</span>
                <span className="block mt-4 text-lg sm:text-3xl md:text-4xl font-normal">聞き逃しゼロのAIで実現する、音のDX。</span>
              </h1>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-[80px]">
                <p className="font-japanese text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-md text-center md:text-right">
                  故障予知から検査・品質判断まで、<br />
                  製造現場のDXを「オトモニ」で始めてみませんか？
                </p>

                <Link to="/FreeTrial">
                  <Button className="font-japanese bg-orange-500 text-white hover:bg-orange-600 rounded-full px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    資料請求・無料トライアル
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProblemSection />
      <ProductFeaturesSection />
      <UseCasesSection />
      <IntroductionStepsSection />
      <ClosingSection />
      <FaqSection />
    </div>
  </>;
};
export default Home;
