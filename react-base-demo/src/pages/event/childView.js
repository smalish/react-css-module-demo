/*
 * @Author: yangying01
 * @Date: 2020-10-15 20:01:34
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-15 20:07:59
 */
import React, { Component } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class childView extends Component {

  render() {
    let { eventFour } = this.props

    return (
      <div>
        {/* <Button type="warning" onClick={eventFour(444)} >子组件-点击触发事件四</Button> */}
        <Button type="warning" onClick={() => {eventFour(444)}} >子组件-点击触发事件四</Button>

      </div>
    );
  }
}

export default childView;