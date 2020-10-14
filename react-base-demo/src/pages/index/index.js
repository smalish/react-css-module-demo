/*
 * @Author: yangying01
 * @Date: 2020-10-13 10:39:53
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-14 10:53:49
 */
import React, { Component } from 'react';
import classnames from 'classnames'
import styled from 'styled-components'
import './index.css'
import style from './module.css'


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
      <div className="page">
        {/* 行内样式 */}
        <div style={{'width': '300px', 'color': '#333', 'fontSize': '12px', 'backgroundColor': 'yellow'}}>
          行内样式1
        </div>
        <div style={inlineStyle}>
          行内样式2
        </div>

        {/* 模块化样式 */}
        <div className={style.module + ' bold'} >
          模块化样式
          <span className="red">red span</span>
        </div>
        <span className="red">red span</span>

        {/* 动态切换样式 */}
        <div className={classnames({'error': this.state.isError})}>
          动态切换样式
        </div>

        {/* css in js */}
        <MyDiv className={classnames({'error': this.state.isError})}>
          css in js
        </MyDiv>

      </div>
    );
  }
}

export default index;