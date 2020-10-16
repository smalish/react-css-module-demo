/*
 * @Author: yangying01
 * @Date: 2020-10-13 10:39:53
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-19 10:45:20
 */
import React, { Component } from 'react';
import classnames from 'classnames'
import styled from 'styled-components'
import './index.module.less'
//不能与全局样式混用
import 'index.less'

const MyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #FF5149;
  color: #fff;
`

class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      isError: true
    }
  }
  render() {

    let inlineStyle = {
      //编写css无提示，可能需要安装插件
      //带-的名称需要改为驼峰的形式
      width: '300px',
      color: '#333',
      fontSize: '12px',
      backgroundColor: 'yellow'
    }
    
    return (
      <div styleName="page">

        {/* 模块化样式 */}
        <div styleName="light bold aaa ddd" >
          模块化样式
          {/* <span className="red">red span</span> */}
        </div>

      </div>
    );
  }
}

export default index;

