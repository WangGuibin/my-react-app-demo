import React, { useState, useEffect } from 'react'

const dataSource = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];


function FilterableProductTable() {
    const [searchText, setSearchText] = useState("");
    const [checkStocked, setCheckStocked] = useState(false)
    const [productData, setProductData] = useState(dataSource);

    //一个组件里可以有多个 useEffect 自上而下按顺序执行
    // 第一个参数是回调 进行处理更新事件  返回值是类似卸载之前清除旧数据的一个回调方法 
    // 第二个参数是限制参数避免频繁更新 一般为监听的属性 可以有多个
    useEffect(() => {
        if (checkStocked) {
            const data = dataSource.filter((item) => item.stocked === true)
            setProductData(data)
        } else {
            setProductData(dataSource)
        }
    }, [checkStocked])

    useEffect(() => {
        const data = dataSource.filter((item) => item.name.includes(searchText))
        if (checkStocked) {
            const filterData = data.filter((item) => item.stocked === true)
            setProductData(filterData)
        } else {
            setProductData(data)
        }
        //同时满足库存与搜索关键字进行筛选 
    }, [checkStocked, searchText])


    function onchangeCheckStocked(value) {
        setCheckStocked(value)
    }
    //从子组件里获取输入框的值
    function onchangeSearchText(value) {
        setSearchText(value)
    }

    return <div>
        <SearchBar getSearchText={onchangeSearchText} getCheckStocked={onchangeCheckStocked} />
        {/* 传值给子组件去渲染数据 */}
        <ProductTable data={productData} />
    </div>
}

function SearchBar(props) {
    const [checked, setChecked] = useState(false);
    //从属性里取出父组件的方法进行调用 塞值给父组件
    const { getSearchText, getCheckStocked } = props;

    //不知道啥情况 checkbox的值不改变 方法会回调 所以只能自己维护一个值
    function onchangeChecked() {
        if (checked) {
            setChecked(false)
        } else {
            setChecked(true)
        }
        getCheckStocked(!checked);
    }

    function onChangeSearchText(e) {
        getSearchText(e.target.value)
    }

    return <div style={{ margin: "20px" }}>
        <input id="search" type="text" placeholder="🔍搜索..." onChange={onChangeSearchText} />
        <div>
            <input type="checkbox" name="stocked" checked={checked} onChange={onchangeChecked} />
            <label> 仅显示有库存的 </label>
        </div>
    </div>
}

function ProductTable(props) {
    //从属性里取出父组件给的数据进行渲染
    return <div>
        <ul style={{ display: "inline-block", listStyleType: "none", width: "300px" }}>
            <li style={{ float: "left" }}>Name</li>
            <li style={{ float: "left", marginLeft: "50px" }}>Price</li>
        </ul>
        <div style={{ clear: "both" }}></div>
        {/* 根据分类不同进行过滤 肉眼可见的分组 */}
        <ProductCategoryRow category={"Sporting Goods"} data={props.data.filter(item => item.category === 'Sporting Goods')} />
        <ProductCategoryRow category={"Electronics"} data={props.data.filter(item => item.category === 'Electronics')} />
    </div>
}

function ProductCategoryRow(props) {
    // 取出 category,data 进行赋值
    const categoryDom = <div><b>{props.category}</b></div>
    return <div style={{ marginLeft: "30px", marginBottom: '15px' }}>
        {categoryDom}
        {/* 继续给子组件传值 */}
        <ProductRow data={props.data} />
    </div>
}

function ProductRow(props) {
    //根据库存进行判断 显示不同的背景色
    function backgroundColor(item) {
        return item.stocked ? "#ff6611" : "#999"
    }
    // 遍历数据 渲染dom节点
    return <div style={{ marginTop: "10px" }}>
        {props.data.map((item, index) => <div style={{ color: "#fff", padding: "5px", maxWidth: '220px', background: backgroundColor(item) }} key={"listItem" + index}><span>{item.name}</span>  <span style={{ marginLeft: "20px" }}>{item.price}{item.stocked ? "" : "(无库存)"}</span></div>)}
    </div>
}

export default FilterableProductTable;