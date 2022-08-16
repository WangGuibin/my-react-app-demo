import React, { useState, useEffect } from 'react';

import './App.css';

const data = [
    {
        title: '通过IPA文件生成manifest.plist',
        bgColor: '#555555',
        actionCount: 2
    },
    {
        title: '每日新闻早报',
        bgColor: '#f55f00',
        actionCount: 4
    },
    {
        title: '录屏SDK打包',
        bgColor: '#22ff55',
        actionCount: 7
    },
    {
        title: '文本弹窗测试',
        bgColor: '#ff1111',
        actionCount: 4
    },
    {
        title: '通过IPA文件生成manifest.plist',
        bgColor: '#555555',
        actionCount: 2
    },
    {
        title: '每日新闻早报',
        bgColor: '#f55f00',
        actionCount: 4
    },
    {
        title: '录屏SDK打包',
        bgColor: '#22ff55',
        actionCount: 7
    },
    {
        title: '文本弹窗测试',
        bgColor: '#ff1111',
        actionCount: 4
    },
    {
        title: '切换深色模式',
        bgColor: '#aa55ff',
        actionCount: 1
    },
    {
        title: '拷贝文件路径',
        bgColor: '#1199ff',
        actionCount: 3
    },
    {
        title: '通过IPA文件生成manifest.plist',
        bgColor: '#555555',
        actionCount: 2
    },
    {
        title: '每日新闻早报',
        bgColor: '#f55f00',
        actionCount: 4
    },
    {
        title: '录屏SDK打包',
        bgColor: '#22ff55',
        actionCount: 7
    },
    {
        title: '文本弹窗测试',
        bgColor: '#ff1111',
        actionCount: 4
    }
];

function ShortCutList() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            //alert(`你点击了 ${data[index].title} 这个action`);
            console.log(`你点击了 ${data[index].title} 这个action`)
        }, 100);
    }); //仅监听index发生改变时更新
    const shortcuts = data.map((item, i) => {
        return (<div key={i} className="short-cut-item" style={{ background: item.bgColor, float: 'left', margin: '30px' }} onClick={() => setIndex(i)}>
            {item.title} <p>{item.actionCount}个操作</p>
            <div className="download-arrow" style={{ display: index === i ? 'block' : 'none' }}> ✅ </div>
        </div>)
    })
    return <div style={{ width: '60%' }}>{shortcuts}</div>
}

export default ShortCutList;