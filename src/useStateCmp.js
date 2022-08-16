import React, { useState, useEffect } from 'react';

function UseStateExample() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `你点击了${count}次`
    });
    return (
        <div style={{ margin: '20px' }}>
            <p>你点击了{count}次</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>点击+1</button>
        </div>
    )
}

export default UseStateExample;