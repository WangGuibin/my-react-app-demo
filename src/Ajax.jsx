import React, { useState, useEffect } from 'react'
import http from './index'

const videoUrl = 'https://www.fastmock.site/mock/c4ece9fff3bb5ad98093439f16f136be/bLike/videolist'

export default function AjAx() {
    const [codeText, setCodeText] = useState("{}")
    useEffect(() => {
        console.log("页面加载完毕~")
    }, [])

    function getIPReq() {
        http.get(videoUrl).then((res) => {
            setCodeText(JSON.stringify(res, null, 2))
        }).catch((err) => {

        })
    }

    function cleanupData() {
        setCodeText('{}')
    }

    return <div style={{ padding: '15px' }}>
        <button onClick={getIPReq}> 获取数据 </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={cleanupData}> 清除数据 </button>
        <div style={{
            borderRadius: '15px',
            boxShadow: '5px 5px 15px #000',
            marginTop: '15px',
            padding: '10px',
            width: '60%',
            overflow: 'scroll',
            backgroundColor: '#000',
            color: '#fff'
        }}>
            <pre><code>
                {codeText}
            </code> </pre>
        </div>

    </div >
}