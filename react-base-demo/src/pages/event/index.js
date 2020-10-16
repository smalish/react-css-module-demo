/*
 * @Author: yangying01
 * @Date: 2020-10-15 17:12:11
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-15 20:21:34
 */
import React, { Component } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import ChildView from './childView'
import LodashView from './lodashView'

class index extends Component {
  constructor(props){
    super(props)
    this.eventOne = this.eventOne.bind(this)
    // this.eventTwo = this.eventTwo.bind(this)
    this.eventThree = this.eventThree.bind(this)
    this.eventFour = this.eventFour.bind(this)
  }

  eventOne(){
    console.log('eventOne')
  }

  eventTwo(id, e){
    console.log(`eventTwo(${id})`)
  }

  eventThree(e){
    console.log(`eventThree(${e.target.dataset.id})`)
  }

  eventFour(id){
    console.log(`eventFour(${id})`)
  }
  
  render() {
    return (
      <div className="page">
        {/* 无参数 */}
        <Button type="primary"  onClick={this.eventOne} >点击触发事件一</Button><WhiteSpace />
        
        {/* 带参数 */}
        {/* <Button type="primary"  onClick={this.eventTwo(222)} >点击触发事件二</Button><WhiteSpace /> */}
        <Button type="primary"  onClick={() => {this.eventTwo(222)}} >点击触发事件二</Button><WhiteSpace />
        <Button type="primary"  onClick={this.eventTwo.bind(this, 222)} >点击触发事件二二</Button><WhiteSpace />
        <Button type="primary"  onClick={this.eventThree} data-id={333}>点击触发事件三</Button><WhiteSpace />

        {/* 父子组件传参为带参数函数 */}
        <ChildView eventFour={this.eventFour}/><WhiteSpace />

        {/* 防抖、节流 */}
        <LodashView />

      </div>
    );
  }
}

export default index;