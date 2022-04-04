import React from 'react';
import { TabBar } from 'antd-mobile';
import { Route, Switch, useHistory, useLocation, MemoryRouter as Router, } from 'react-router-dom';
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline, } from 'antd-mobile-icons';
import styles from './antd.css';

import ScrollFeed from "./components/ScrollFeed";
import Outside from './pages/Outside';

const Bottom = () => {
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;
    const setRouteActive = (value) => {
        history.push(value);
    };
    const tabs = [
        {
            key: '/home',
            title: '外面',
            icon: <AppOutline />,
        },
        {
            key: '/todo',
            title: '我的待办',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/message',
            title: '我的消息',
            icon: <MessageOutline />,
        },
        {
            key: '/me',
            title: '家里',
            icon: <UserOutline />,
        },
    ];
    return (<TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (<TabBar.Item key={item.key} icon={item.icon} title={item.title}/>))}
    </TabBar>);
};
export default () => {
    return (<Router initialEntries={['/home']}>
      <div className={styles.app}>
        {/* <div className={styles.top}>
          <NavBar>配合路由使用</NavBar>
        </div> */}
        <div className={styles.body}>
          <Switch>
            <Route exact path='/home'>
              <Outside />
            </Route>
            <Route exact path='/todo'>
              <Todo />
            </Route>
            <Route exact path='/message'>
              <Message />
            </Route>
            <Route exact path='/me'>
              <PersonalCenter />
            </Route>
          </Switch>
        </div>
        {/* <div className={styles.bottom}> */}
        <div className="nav-bottom">
          <Bottom />
        </div>
      </div>
    </Router>);
};

function Todo() {
    return <div>我的待办</div>;
}
function Message() {
    return <div>我的消息</div>;
}
function PersonalCenter() {
    return <div>个人中心</div>;
}




// export default function Views(){
//     return(
//         <Routes>
//             <Route index element={<h1>hi</h1>} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/outside" element={<ScrollFeed />} />

//             <Route path="/posts" >
//                 <Route index element={<h1>post starter</h1>} />
//                 <Route path=":id" element={<Posts />}/>
//                 <Route path="1" element={<h1>first post</h1>}/>
//             </Route>

//             <Route path="*" element={<NotFound />} />
//         </Routes>
//     )
// }