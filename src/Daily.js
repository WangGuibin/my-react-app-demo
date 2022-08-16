import React from "react";

class Daily extends React.Component {
    constructor(props) {
        super(props);
        this.state = { resText: null }
    }

    //获取当前日期函数
    getCurrentFormatDate() {
        let date = new Date(),
            seperator1 = '-', //格式分隔符
            year = date.getFullYear(), //获取完整的年份(4位)
            month = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
            strDate = date.getDate() // 获取当前日(1-31)
        if (month >= 1 && month <= 9) month = '0' + month // 如果月份是个位数，在前面补0
        if (strDate >= 0 && strDate <= 9) strDate = '0' + strDate // 如果日是个位数，在前面补0

        let currentdate = year + seperator1 + month + seperator1 + strDate
        return currentdate
    }

    //网络请求之后渲染 this.setState 的用法
    getDayReport(cb) {
        const dateStr = this.getCurrentFormatDate();
        const url = 'https://cdn.jsdelivr.net/gh/WangGuibin/weather-action@master/logs/' + dateStr + '.txt'
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                cb(this.responseText);
            }
        }
        req.send();
    }
    //inde.js里面的React.StrictMode 会导致该方法调用两次 
    componentDidMount() {
        var that = this;
        this.getDayReport(function (res) {
            console.log(res)
            that.setState({ resText: res })
        })
    }
    render() {
        if (this.state.resText == null) return <div>数据正在加载中...</div>;
        return (
            //行内样式
            <p style={{ whiteSpace: "pre-line", margin: "20px" }}> {this.state.resText} </p>
        )
    }
}

export default Daily;