// import logo from './logo.svg';
import './App.css';
import './heti.min.css';
import React, { useState, useEffect } from 'react';
import Daily from './Daily';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import UseStateExample from './useStateCmp';
import ShortCutList from './ShortcutsList';
import HelloJSX from './Hello';
import { Routes, Route, Link } from "react-router-dom";
import FilterableProductTable from './ReactDemo';
import BiliBiliHome from './BiliBiliHome';
import AjAx from './Ajax';
import AlfredUI from './AlfredUI';

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
    title: '切换深色模式',
    bgColor: '#5D2991',
    actionCount: 1
  },
  {
    title: '拷贝文件路径',
    bgColor: '#1199ff',
    actionCount: 3
  },
];

//类组件
class ShortCutItem extends React.Component {
  constructor(props) {
    super(props);
    //事件绑定 
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var csv = this.props.item.title + "," + this.props.item.bgColor + "," + this.props.item.actionCount;
    var a = document.createElement('a');
    a.href = 'data:text/txt;charset=utf-8,\ufeff' + encodeURIComponent(csv);
    a.download = this.props.item.title + '.csv';
    a.click();
  }

  render() {
    //组件封装
    var dom = (<div className="short-cut-item" style={{ background: this.props.item.bgColor }} onClick={this.handleClick}>
      {this.props.item.title} <p>{this.props.item.actionCount}个操作</p>
      <div className="download-arrow"> ↓ </div>
    </div>)
    return <div>{dom}</div>
  }
}

//一首诗
function Poetry() {
  return (
    <div className="my-heti heti--poetry">
      <h2>九月九日忆山东兄弟<span className="heti-meta heti-small">[唐]<abbr title="号摩诘居士">王维</abbr></span></h2>
      <p className="heti-x-large"> 独在异乡为异客<span className="heti-hang">，
      </span>
        <b /><br /> 每逢佳节倍思亲<span className="heti-hang">。</span><br />
        遥知兄弟登高处<span className="heti-hang">，</span><br />
        遍插茱萸少一人<span className="heti-hang">。</span>
      </p>
    </div>
  );
}

const posts = [
  { id: '1', title: '将进酒', link: 'http://www.baidu.com/' },
  { id: '2', title: '蝶恋花', link: 'http://www.baidu.com/' },
  { id: '3', title: '忆江南', link: 'http://www.baidu.com/' },
];

class Blog extends React.Component {
  render() {
    return <div>
      <ol className="heiti">
        {
          this.props.posts.map((post, index) => <li key={post.id}> [{post.title}]<a href={post.link}>({post.link}</a>)</li>)
        }
      </ol>
    </div>
  }
}

const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  useEffect(() => {
    console.log(friendList[recipientID - 1].name);
  });
  return (
    <select
      value={recipientID}
      onChange={e => setRecipientID(Number(e.target.value))}
    >
      {friendList.map(friend => (
        <option key={friend.id} value={friend.id}>
          {friend.name}
        </option>
      ))}
    </select>
  );
}


function App() {

  const routes = [
    {
      name: 'React Demo首页',
      path: '/',
      element: <div className="short-cut-bg">
        {
          data.map((item, index) => <ShortCutItem key={"item" + index} item={item} />)
        }
      </div>
    },
    {
      name: '展示古诗',
      path: '/poe',
      element: <Poetry />
    },
    {
      name: '展示文章数据',
      path: '/blog',
      element: <Blog posts={posts} />
    }, {
      name: '每天看新闻-每日早报',
      path: '/daily',
      element: <Daily />
    }, {
      name: '输入文本input表单',
      path: '/nameF',
      element: <NameForm />
    },
    {
      name: '输入大段文本表单',
      path: '/essay',
      element: <EssayForm />
    },
    {
      name: '展示Shortcuts列表',
      path: '/shortcutList',
      element: <ShortCutList />
    },
    {
      name: '选择框选择选项',
      path: '/favor',
      element: <FlavorForm />
    },
    {
      name: 'JSX文件查看打印',
      path: '/jsx',
      element: <HelloJSX />
    },
    {
      name: 'React累加器+',
      path: '/reser',
      element: <Reservation />
    },
    {
      name: 'useState示例',
      path: '/useState',
      element: <UseStateExample />
    },
    {
      name: 'useEffect示例',
      path: '/chatRec',
      element: <ChatRecipientPicker />
    },
    {
      name: 'React列表demo',
      path: '/shopcart',
      element: <FilterableProductTable />
    },
    {
      name: 'BiliBili首页demo',
      path: '/bilibili',
      element: <BiliBiliHome />
    },
    {
      name: 'Axios网络请求',
      path: '/axios',
      element: <AjAx />
    },
    {
      name: 'AlfredUI展示',
      path: '/alfred',
      element: <AlfredUI />
    },

  ];

  return (
    <div style={{ marginBottom: "400px" }}>
      <div>
        <Routes>
          {
            routes.map((route, index) => <Route key={"route" + index} path={route.path} element={route.element} />)
          }
        </Routes>

        <div id="side-menu">
          <div id="side-menu-inner" style={{ overflow: 'scroll' }}>
            <ol>
              {
                routes.map((route, index) => (
                  <li style={{
                    listStyleType: 'none',
                    lineHeight: '44px',
                    borderBottom: '1px solid rgb(231,231,231)',
                  }} key={"li" + index}>
                    <Link style={{
                      textDecoration: 'none',
                      color: '#000',
                    }} to={route.path}> {route.name}
                    </Link>
                    <span style={{ float: 'right', marginRight: '15px' }}>{'➢'}</span>
                    <div className="clearfix"></div>
                  </li>))
              }
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
