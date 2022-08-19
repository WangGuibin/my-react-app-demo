import React, { useState, useEffect, useRef } from 'react'
import appLogoImage from './images/appicon.png'
import { parseInputText } from './unicode_encode';

export default function AlfredUI() {
    const [hidden, setHidden] = useState('block');
    const textInput = useRef(null);
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);
    useEffect(() => {
        textInput.current.focus();
        document.onkeydown = keyDownEvent;
    })

    function copyToClipboard(content) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(content).then(() => {
                alert(content + '  拷贝成功');
            });
        }
    }


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
        setInputText(e.target.value);
        setItems(parseInputText(e.target.value));
        console.log(e.target.value);
    }

    return <div>
        <div style={{
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
        <div style={{
            marginTop: '-30px',
            maxWidth: '760px',
            fontSize: '24px',
            fontWeight: 'bold',
            display: inputText.length === 0 ? "none" : "block"
        }}>
            <ol>
                {items.map((item, index) =>
                    <li key={index} onClick={() => { copyToClipboard(item.title); }} style={{
                        backgroundColor: 'rgb(74, 73, 77)',
                        color: '#fff',
                        margin: '1px',
                        padding: '15px',
                        borderTopLeftRadius: index === 0 ? '15px' : '0',
                        borderTopRightRadius: index === 0 ? '15px' : '0',
                        borderBottomLeftRadius: index === items.length - 1 ? '15px' : '0',
                        borderBottomRightRadius: index === items.length - 1 ? '15px' : '0',
                    }}>
                        &nbsp;&nbsp; {item.title}
                    </li>
                )}
            </ol>
        </div>
    </div>

}