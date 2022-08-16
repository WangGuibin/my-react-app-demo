import React, { useState, useEffect } from 'react';
import http from './index'

const videoUrl = 'https://www.fastmock.site/mock/c4ece9fff3bb5ad98093439f16f136be/bLike/videolist'
// https://www.bilibili.com/video/BV1qh411e7eG

function BiliBiliHome() {
    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        return () => {
            console.log("WillUnmount")
        }
    })
    useEffect(() => {
        console.log("DidMount")
    }, [])

    // useEffect(() => {
    //     (async () => {
    //         const listData = await fetch(videoUrl).then(res => {
    //             return res.json()
    //         }).then(data => {
    //             return data.data
    //         }).catch(e => {
    //             console.log(e)
    //         })
    //         console.log('获取数据')
    //         setVideoList(listData);
    //     })()
    // }, [])
    useEffect(() => {
        http.get(videoUrl).then((res) => {
            setVideoList(res.data);
        }).catch((err) => {

        })
    }, [])



    return (<div style={{ width: '60%', height: '100%', display: 'flex', flexFlow: 'row wrap' }}>
        {videoList.map((video, index) => {
            return <div key={'bg' + index} style={{
                margin: '0',
                padding: '0',
                backgroundColor: 'rgba(0,0,0,0.15)',
            }}>
                <div key={'item' + index} style={{
                    borderRadius: '15px',
                    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.6)',
                    margin: '20px',
                    width: '480px',
                    height: '270px',
                    backgroundSize: 'cover',
                    backgroundImage: 'url(' + video.pic + ')',
                    backgroundColor: '#999',
                    position: 'relative',
                    display: 'box-sizing',
                    padding: '15px',
                }} onClick={() => { window.open('https://www.bilibili.com/video/' + video.bvid) }} >

                    <div style={{ textAlign: 'right', color: 'white' }}>
                        <span>{'@' + video.author}</span>
                    </div>
                    <div style={{
                        borderRadius: '5px',
                        backgroundColor: 'rgba(0,0,0,0.45)',
                        position: 'absolute',
                        left: '10px',
                        bottom: '60px',
                        fontSize: '12px',
                        fontWeight: 'thin',
                        margin: '0',
                        padding: '10px',
                        textAlign: 'left',
                        color: 'white'
                    }}>
                        <span>视频时长🕒 {video.duration}</span><br />
                        <span>播放量▶️ {parseFloat(video.play / 10000.0).toFixed(2)}w</span><br />
                        <span>点赞数❤️ {parseFloat(video.pts / 10000.0).toFixed(2)}w</span><br />
                        <span>查看数👁 {video.video_review}w</span>
                    </div>

                    <p style={{
                        borderRadius: '0 0 15px 15px',
                        marginBottom: '0px',
                        position: 'absolute',
                        color: '#fff',
                        backgroundColor: 'rgba(30,30,30,0.5)',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        width: '100%',
                        height: '50px',
                        lineHeight: '50px',
                        bottom: '0',
                        left: '0'
                    }}>{video.title}</p>

                </div>
            </div>
        })}
    </div >);
}

export default BiliBiliHome;