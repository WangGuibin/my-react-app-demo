import React, { useState, useEffect, useRef } from 'react'
import appLogoImage from './images/appicon.png'

export default function AlfredUI() {
    const [hidden, setHidden] = useState('block');
    const textInput = useRef(null);
    useEffect(() => {
        textInput.current.focus();
        document.onkeydown = keyDownEvent;
    })

    //快捷键 ctrl+cmd 切换显示和隐藏
    function keyDownEvent(e) {
        e = e || window.event;
        if (e.ctrlKey && e.keyCode === 91) {
            //ctrl + cmd
            if (hidden === 'none') {
                setHidden('block');
                // textInput.current.focus();
            } else {
                setHidden('none')
            }
            return false;
        }
    }

    //输入框实时回调
    function onchangeInput(e) {
        console.log(e.target.value);
    }

    return <div>
        <div id="icon" style={{
            display: hidden,
            margin: '40px',
            borderRadius: '15px',
            boxShadow: '5px 5px 15px rgb(74, 73, 77)',
            maxWidth: '720px',
            height: '100px',
            backgroundColor: 'rgb(74, 73, 77)',
            position: 'relative',
        }}>
            <div style={{
                height: '66px',
            }}>
                <input onChange={onchangeInput} style={{
                    padding: '10px',
                    position: 'absolute',
                    margin: '10px',
                    outline: '0',
                    height: '44px',
                    width: 'calc(100% - 126px)',
                    fontSize: '35px',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    borderColor: 'rgb(56,55,58)',
                    borderRadius: '10px',
                    backgroundColor: 'rgb(56,55,58)',
                }} type="text" ref={textInput} />
                <img style={{
                    top: '10px',
                    right: '15px',
                    position: 'absolute',
                    width: '66px',
                    height: '66px',
                    boxShadow: '5px 5px 5px rgb(74, 73, 77)',
                }} src={appLogoImage} alt="" />
            </div>
        </div>
    </div>

}