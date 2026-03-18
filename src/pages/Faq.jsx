import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
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
      answer: "無料トライアルが最短3日で開始可能です。"
    },
    {
      question: "どのような音を検知できますか？",
      answer: "モーターの異音、コンベアの擦れ音、エア漏れなど、正常時とは異なる様々な「人の耳で聞き取れる異常音」を検知することが可能です。"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-japanese text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            よくあるご質問
          </h1>
          <p className="font-japanese text-gray-600">
            オトモニに関するよくあるご質問をまとめました。<br className="hidden sm:block" />
            解決しない場合は、お問い合わせフォームよりお気軽にご連絡ください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm p-6 sm:p-10"
        >
          <Accordion type="multiple" className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-japanese hover:no-underline text-gray-800">
                  <span className="text-orange-500 font-bold mr-3">Q.</span>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-japanese text-base text-gray-600 leading-relaxed pt-2 pb-6 pl-8">
                  <div className="flex">
                    <span className="text-gray-400 font-bold mr-3 flex-shrink-0">A.</span>
                    <p>{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
