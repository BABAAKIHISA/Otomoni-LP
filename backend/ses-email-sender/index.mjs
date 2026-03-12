import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// リージョンはご自身の環境に合わせて変更してください 
const sesClient = new SESClient({ region: "ap-southeast-2" });

// 送信元メールアドレス（SES検証済みである必要があります）
const SOURCE_EMAIL = "oto-moni.com";
// 送信先メールアドレス（管理者のアドレスなどを指定）
const DESTINATION_EMAIL = "is0632vv@ed.ritsumei.ac.jp";

export const handler = async (event) => {
    // CORS対応のヘッダー
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
    };

    // OPTIONSリクエスト（プリフライト）の処理
    if (event.requestContext?.http?.method === "OPTIONS" || event.httpMethod === "OPTIONS") {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: "CORS preflight successful" }),
        };
    }

    try {
        // API Gateway から渡されるボディをパース
        const body = event.body ? JSON.parse(event.body) : event;

        // フォームデータから必要な情報を抽出
        const {
            name,
            company,
            department,
            email,
            phone,
            message,
            trialStartDate,
            machinefeature,
            interest,
        } = body;

        // メール本文の作成
        const emailBody = `
オトモニ無料トライアルのお申し込みがありました。

【お客様情報】
お名前: ${name}
会社名: ${company}
部署名: ${department || '未入力'}
メールアドレス: ${email}
電話番号: ${phone}

【お申し込み内容】
トライアル開始希望日: ${trialStartDate}
対象機械の特徴: ${machinefeature || '未入力'}
オトモニを知ったきっかけ: ${interest || '未入力'}
その他ご質問など:
${message || '特になし'}
`;

        const sendEmailCommand = new SendEmailCommand({
            Source: SOURCE_EMAIL,
            Destination: {
                ToAddresses: [DESTINATION_EMAIL],
            },
            Message: {
                Subject: {
                    Data: `【無料トライアル申込み】${company} ${name}様より`,
                    Charset: "UTF-8",
                },
                Body: {
                    Text: {
                        Data: emailBody,
                        Charset: "UTF-8",
                    },
                },
            },
        });

        await sesClient.send(sendEmailCommand);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: "Email sent successfully",
            }),
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                message: "Failed to send email",
                error: error.message,
            }),
        };
    }
};
