global.fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(req.body.user)

    // 環境変数からText Analyticsの情報とってくる
    const host = process.env.TEXT_ANALYTICS_ENDPOINT + "/text/analytics/v3.1-preview.3/sentiment";
    const key = process.env.TEXT_ANALYTICS_KEY;

    // APIのRequest Body
    const body = {
        "documents": [
            {
                "language": "ja",
                "id": "1",
                "text": req.body.text
            }
        ]
    };

    // APIを実行
    const responseJson = await fetch(host,{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': key
        },
        body: JSON.stringify(body)
    }).then((response) => response.json())
    .catch((err) => {
        context.log(err)
        throw err
    })

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(responseJson, null, "\t")
    };
}