import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// リージョンはご自身の環境に合わせて変更してください 
const sesClient = new SESClient({ region: "ap-southeast-2" });

// 送信元メールアドレス（SES検証済みである必要があります）
const SOURCE_EMAIL = "no-reply@oto-moni.com";
// 送信先メールアドレス（管理者のアドレスなどを指定）
const DESTINATION_EMAIL = "is0632vv@ed.ritsumei.ac.jp";

export const handler = async (event) => {
    console.log("=== LAMBDA FUNCTION INVOKED ===");
    console.log("Raw Event:", JSON.stringify(event, null, 2));

    // 全てのレスポンスに付与する共通のCORSヘッダー
    const corsHeaders = {
        "Access-Control-Allow-Origin": "https://ses.d1ulymfmax3wmb.amplifyapp.com",
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Access-Control-Allow-Credentials": "true"
    };

    // OPTIONSリクエスト（プリフライト）の処理
    if (event.requestContext?.http?.method === "OPTIONS" || event.httpMethod === "OPTIONS") {
        console.log("Received OPTIONS request. Returning preflight success.");
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({ message: "CORS preflight successful" }),
        };
    }

    try {
        console.log("Processing POST request...");
        // API Gateway から渡されるボディをパース
        let body;
        if (event.body) {
            console.log("event.body exists. Parsing JSON...");
            // Base64エンコードされているかチェック (REST APIでありがち)
            if (event.isBase64Encoded) {
                 console.log("Decoding base64 body...");
                 const decodedBody = Buffer.from(event.body, 'base64').toString('utf8');
                 body = JSON.parse(decodedBody);
            } else {
                 body = JSON.parse(event.body);
            }
        } else {
            console.log("No event.body. Using raw event as body (could be direct invocation).");
            body = event;
        }

        console.log("Parsed Body:", JSON.stringify(body, null, 2));

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

        console.log(`Extracted name: ${name}, company: ${company}, email: ${email}`);

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

        console.log("Email body created. Preparing SendEmailCommand...");

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

        console.log("Calling SES sesClient.send()...");
        const sesResult = await sesClient.send(sendEmailCommand);
        console.log("SES Send Success. MessageId:", sesResult.MessageId);

        console.log("Returning 200 Success response.");
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({
                success: true,
                message: "Email sent successfully",
                messageId: sesResult.MessageId
            }),
        };
    } catch (error) {
        console.error("=== ERROR OCCURRED ===");
        console.error("Error sending email:", error);
        
        return {
            statusCode: 500,
            headers: corsHeaders,
            body: JSON.stringify({
                success: false,
                message: "Failed to send email",
                error: error.message,
                stack: error.stack
            }),
        };
    }
};
