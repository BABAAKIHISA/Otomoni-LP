import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  const faqCategories = [
    {
      title: "音の録音・データ収集について",
      faqs: [
        {
          question: "どのくらいの音データが必要ですか?",
          answer: "正常音は約100件、異常音(NG)は少なくとも10件以上あることが望ましいです。正常音は多ければ多いほど精度が向上します。最低でも1000件程度あると精度向上が期待できます。"
        },
        {
          question: "環境音が大きい場合でも検知できますか?",
          answer: "可能です。指向性マイク(単一指向マイク)を使用し、プログラムで前処理としてフィルターをかけて余計な音を除去してから判定します。周囲に常に環境音がある場合は、その環境音も含めて学習データに入れた方が良いです。"
        },
        {
          question: "音データの提供方法は?",
          answer: "お客様ご自身で録音していただくか、TRUSTから録音キット(ラズパイ+マイク)を無料で貸し出しして録音していただくことも可能です。1日〜2日、10秒おきに録音すれば100〜200件のサンプルが取得できます。"
        }
      ]
    },
    {
      title: "検出精度・性能について",
      faqs: [
        {
          question: "どんな異音でも検出できますか?",
          answer: "基本的に人が音の違いを聞き分けられるものであれば、AI検知も可能性が高いです。正常音と異常音の波形が明確に異なる場合に検出精度が高くなります。"
        },
        {
          question: "異常部品の特定はできますか?",
          answer: "現段階では「異常な音がある」という検知のみで、具体的な故障部品の特定は難しいです。音の変化を検知することに特化しています。"
        },
        {
          question: "モデル作成にはどのくらい時間がかかりますか?",
          answer: "最短で2〜3日、通常は1週間程度で対応可能です。音の前処理や分析フェーズに時間がかかりますが、モデル作成自体は短時間で完了します。"
        },
        {
          question: "追加学習は可能ですか?",
          answer: "はい、問題なく可能です。追加の正常音データを学習させることで、さらに精度を向上させることができます。"
        },
        {
          question: "検出時間はどのくらいですか?",
          answer: "3秒以内で実現可能です。"
        }
      ]
    },
    {
      title: "システム構成・運用について",
      faqs: [
        {
          question: "オフライン環境でも使えますか?",
          answer: "はい、可能です。Raspberry Pi上にモデルをデプロイするため、ネットワーク切断時も判定が可能です。ただし、新しいモデルを作成してデバイスに入れる際はネットワーク接続が必要です。"
        },
        {
          question: "マイクは何本必要ですか?",
          answer: "基本構成は2本です。1本は対象機械の音を録音用、もう1本は周囲音除去用として使用します。検知したい場所につき1台のマイクが必要です。"
        },
        {
          question: "マイクの設置場所は柔軟に変更できますか?",
          answer: "はい。マイク本体から約1mのケーブルで接続する構成のため、本体は少し離れた場所に置き、マイクだけを対象機械の近くに設置することが可能です。"
        },
        {
          question: "防塵・防水性能はありますか?",
          answer: "IP65相当の防塵防水マイクを採用予定です。粉や水がある環境でも使用可能です。万が一マイクが故障した場合は、マイクだけをスポット交換できるため、機器まるまる交換する必要がなく、お客様の負担も軽減されます。"
        },
        {
          question: "無線マイクは使えますか?",
          answer: "技術的には可能ですが、音が途切れたときにそのデータ自体が使えなくなるリスクがあるため、現時点では有線接続を推奨しています。"
        }
      ]
    },
    {
      title: "振動センサーとの違い",
      faqs: [
        {
          question: "振動センサーとの違いは何ですか?",
          answer: "・音: 非接触で検知可能、周波数成分が豊富で特徴が出やすい、機械学習モデルに適した特徴を多く持つ\n・振動: 機械に直接設置が必要、接触式\n\n音は「摩耗」「擦れ」「衝突」など原因ごとに周波数帯・音の形・リズムが大きく変わるため、AIが分類しやすい特徴量になります。"
        }
      ]
    },
    {
      title: "その他の懸念・要望",
      faqs: [
        {
          question: "音データが不十分な場合は?",
          answer: "TRUSTから録音キット(ラズパイ)を無料で貸し出しします。設置方法のフォローや取扱説明書も提供いたしますので、ベストな音データを収集していただけます。"
        },
        {
          question: "製品検査での録音タイミングの同期は?",
          answer: "検査員の操作と録音のタイミングを合わせる必要があります。現在は手動でボタンを押していただく方式を検討中ですが、将来的には信号を受け取る仕組みも準備予定です。"
        }
      ]
    }
  ];

  const generalFaqs = [
    {
      question: "どんな製品ですか？対象工程は？",
      answer: "・マイクを使って製品音や機械音の異常をAIで判定します。製品の品質検査や工場設備のメンテナンス等にご利用いただけます。"
    },
    {
      question: "何ができますか／できませんか？判定対象の音は？",
      answer: "・製品マイクで録音できる音は全て対象です。詳しくはお問合せください。\n・お客様のご要望に応じて、様々な端末へリアルタイム通知が可能です。"
    },
    {
      question: "学習方法・再学習の手順は？",
      answer: "・本製品に搭載しているＡＩで異常音を判定して、判定結果や音データをクラウドに保存します。\n・予め正常音を使って判定使用するAIモデルを作成します。作成したAIモデル（正常音）と比較して異常音を判定します。\n・本製品で一定期間正常音を録音し、判定に使用するAIモデルを作成します。再学習は手動・また自動で行うことができAIの精度を継続的に上げられます。"
    },
    {
      question: "オフラインでも使えますか？クラウド併用時の違いは？",
      answer: "・オフラインでは使用できません。本製品はクラウドを使って検査を行います。\n・インターネットへ接続する環境は本製品に付属しているため、既存の社内ネットワークに接続したり、新規に回線を増やす必要はございません。"
    },
    {
      question: "反応速度はどれくらいですか？リアルタイム判定の目安は？",
      answer: "・1検査あたり、最短で約3～5秒以内で判定します。\n・ある程度性能のあるエッジ推論の場合の時間。クラウド推論の場合は数十秒程度。（実際に説明する必要はない）"
    },
    {
      question: "学習データはどれくらい必要ですか？",
      answer: "・1ファイルあたり約10秒のNG音：50～100個\n・1ファイルあたり約10秒の正常音：300～500個\n・無料トライアル、本導入でも同じです"
    },
    {
      question: "メンテナンスは何が必要ですか？",
      answer: "・3ヶ月～6か月に1回、清潔な乾いたタオルで誇りや塵などをふき取ってください。本製品を水に濡らしたり、マイクに傷やごみが詰まると正常に測定できない場合があります。"
    },
    {
      question: "すぐに使えますか？初期設定とトレーニング時間は？",
      answer: "・最短3日で使えます\n※最短3日と答えていいが、実際は1週間くらいかかりそう。録音と学習含め。"
    },
    {
      question: "複数ラインへ横展開する際の工数と期間は？",
      answer: "・最短3日で使えます"
    },
    {
      question: "導入費用と契約の考え方は？",
      answer: "・デバイスの固定費と月額利用料が1モデルごとにかかります。\n・同じような音環境の場合、同じモデルを使えるため料金を抑えることができます。\n・詳しくはお問い合わせください。"
    },
    {
      question: "騒音が大きい環境でも使えますか？",
      answer: "・指向性マイクの利用やノイズ除去技術、環境音込みの学習により、騒音環境下でもご利用いただけます。"
    },
    {
      question: "なんで音なのですか？振動センサーなどでなく（予知保全の文脈で聞かれた場合）",
      answer: "・振動センサーでは検知が難しかった予知保全の現場において、音で判断しているという現場の声から生まれました。実際に振動センサーではとらえられなかった異常の検知に成功しています。"
    },
    {
      question: "端末のサイズは？展示されているサイズのものしかない？",
      answer: "・設置環境に合わせて様々なサイズで提供可能です。詳しくはお問い合わせください。"
    },
    {
      question: "補助金は使えますか？",
      answer: "・はい、ご利用いただけます。弊社の補助金活用サポートにより、現時点での補助金活用導入実績は100%です。"
    },
    {
      question: "ほかのセンサーと組み合わせて検査することも可能ですか？",
      answer: "・はい、可能です。お客様の環境に合わせて最も検査がしやすい形を提案可能です。"
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
          <div className="mb-10 text-center border-b pb-4">
            <h2 className="font-japanese text-2xl sm:text-3xl font-bold text-gray-900">
              技術的なご質問
            </h2>
          </div>

          <div className="space-y-10">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="font-japanese text-xl font-bold text-blue-600 mb-4 pl-2 border-l-4 border-blue-500">
                  {category.title}
                </h3>
                <Accordion type="multiple" className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem value={`tech-${catIndex}-${faqIndex}`} key={faqIndex}>
                      <AccordionTrigger className="text-left text-base sm:text-lg font-japanese hover:no-underline text-gray-800">
                        <span className="text-orange-500 font-bold mr-3 shrink-0">Q.</span>
                        <span className="flex-1">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="font-japanese text-base text-gray-600 leading-relaxed pt-2 pb-6 pl-8">
                        <div className="flex">
                          <span className="text-gray-400 font-bold mr-3 shrink-0">A.</span>
                          <div className="flex-1 whitespace-pre-wrap">{faq.answer}</div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 mt-8"
        >
          <div className="mb-10 text-center border-b pb-4">
            <h2 className="font-japanese text-2xl sm:text-3xl font-bold text-gray-900">
              その他のご質問
            </h2>
          </div>

          <div className="space-y-10">
            <Accordion type="multiple" className="w-full">
              {generalFaqs.map((faq, faqIndex) => (
                <AccordionItem value={`general-${faqIndex}`} key={faqIndex}>
                  <AccordionTrigger className="text-left text-base sm:text-lg font-japanese hover:no-underline text-gray-800">
                    <span className="text-orange-500 font-bold mr-3 shrink-0">Q.</span>
                    <span className="flex-1">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="font-japanese text-base text-gray-600 leading-relaxed pt-2 pb-6 pl-8">
                    <div className="flex">
                      <span className="text-gray-400 font-bold mr-3 shrink-0">A.</span>
                      <div className="flex-1 whitespace-pre-wrap">{faq.answer}</div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
