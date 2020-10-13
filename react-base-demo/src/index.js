/*
 * @Author: yangying01
 * @Date: 2020-10-13 10:39:53
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-13 11:54:19
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';
import './index.css'
// import * as serviceWorker from './serviceWorker'


ReactDOM.render(
  <Router></Router>,
  document.getElementById('root')
);
// ReactDOM.render(<Router />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
