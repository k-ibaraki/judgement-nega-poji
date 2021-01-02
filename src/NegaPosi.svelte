<script>
    let input = 'ありがとうございます。あなたは素晴らしい人です。死ね。';
    let output = 'output';

    async function negaposi() {
        // 関数名
        const func_name='call_text_analytics'

        // 関数のPath
        const host = '/api/' + func_name

        // body
        // const body = {
        //     "documents": [
        //         {
        //             "language": "ja",
        //             "id": "1",
        //             "text": input
        //         }
        //     ]
        // };
        const body = { "text" : input }

        // APIを実行
        const responseJson = await fetch(host,{
            method: 'POST',
            //mode: 'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => response.json())
        .catch((err) => {
            output = 'えらーです'
            console.error(err)
            throw err
        })

        // 結果を保存
        output = JSON.stringify(responseJson, null, "\t")
    }

</script>

<h1 class="title">Azureでテキストの感情分析（ネガポジ判定）</h1>
<div class="content-container">
    <div class="content-title-group not-found">
        <h2 class="title">input text</h2>
        <div>
            <textarea class="input" bind:value={input} />
        </div>
        <br />
        <div>
            <button on:click={negaposi}>ネガポジ判定</button>
        </div>
        <br />
        <h2 class="title">output json</h2>
        <div>
            <textarea class="output" readonly value={output} />
        </div>
    </div>
</div>