/*
 * @Author: yangying01
 * @Date: 2020-09-28 18:58:30
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-15 20:00:46
 * @Descripttion: 
 * @version: 1.0.0
 */
import Index from '../pages/index/index'
import Event from '../pages/event/index'

const  MainRouterList = [
  {
    path: '/', 
    component: Index, //() => import( /* webpackChunkName: "index" */ '../pages/index/index') ,
    meta:{
      title:'111'
    },
   },
  {
    path: '/event',
    component: Event, //() => import( /* webpackChunkName: "fans" */ '../pages/evnet/index') ,
    meta:{
      title:'事件传参'
    },
  },

   
] 
MainRouterList.map((item, index) => {
  var meta = Object.assign({auth: true},item.meta)
  return Object.assign(item,{meta})
})
export default MainRouterList;