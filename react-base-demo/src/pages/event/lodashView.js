/*
 * @Author: yangying01
 * @Date: 2020-10-15 20:15:21
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-16 10:49:42
 */
import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import { Button, WhiteSpace, InputItem } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';


class lodashView extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = throttle(this.handleClick, 1000);//在一秒内只能触发一次

    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounced = debounce(this.emitChange, 250);//防抖，250ms 的延迟来改变文本输入
  }

  componentWillUnmount() {
    this.handleClickThrottled.cancel();
    this.emitChangeDebounced.cancel();
  }

  render() {
    return (
      <>
        <Button type="ghost" onClick={this.handleClickThrottled}>Load More</Button>

        <InputItem
        type="text"
        onChange={this.handleChange}
        placeholder="Search..."
        defaultValue={this.props.value}
      />
      </>
    )
  }

  handleClick() {
    console.log('click ------ ')
  }

  handleChange(e) {
    this.emitChangeDebounced(e.target.value);
  }

  emitChange(value) {
    console.log('emitChange ------ ')
  }

}

export default lodashView;