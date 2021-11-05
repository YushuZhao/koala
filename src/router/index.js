import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import HomePage from 'views/home-menu/Map';
// import SecondPage1 from 'views/second-menu/SecondPage1';
// import ThirdPage1 from 'views/third-menu/ThirdPage1';

import './style.css';

const routes = [];
// 读取views文件夹下面所有的.jsx文件
const routeFiles = require.context('../views', true, /\.jsx?$/);
console.dir(routeFiles.keys());

routeFiles.keys().forEach((item) => {
  // ./second-menu/SecondPage1/index.jsx
  // 再次过滤，留下有index.jsx的文件路径
  if (item.includes('/index')) {
    let arr = item.split('.'); // ['', '/second-menu/SecondPage1/index', 'jsx']
    let info = arr[1].replace('/index', ''); // /second-menu/SecondPage2
    routes.push({
      path: info.toLowerCase(),
      component: routeFiles(item).default,
    });
  }
});
// console.log(routes);

const PrimaryLayout = () => (
  <div>
    <header>
      {routes.map((route) => (
        <Link className="layout-header" key={route.path} to={route.path}>
          {route.path.split('/').pop()}
        </Link>
      ))}
      {/* <Link to="/home-menu"> toHome </Link>
      <Link to="/second-menu"> toSecond </Link>
      <Link to="/third-menu"> toThird </Link> */}
    </header>
    <main>
      <Switch>
        {routes.map((route) => (
          <Route exact key={route.path} {...route} />
        ))}
        {/* <Route path="/home-menu" exact component={HomePage} />
        <Route path="/second-menu" component={SecondPage1} />
        <Route path="/third-menu" component={ThirdPage1} /> */}
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
