import React, { StrictMode } from 'react';
import ReactDom from 'react-dom';

import App from './App';
import pkg from '../package.json';

import 'antd/dist/antd.css';
import './style/index.css';

const root = document.querySelector('#root');

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root,
  () => {
    // eslint-disable-next-line
    console.log(`Project ${pkg.name} is running...`);
  }
);
