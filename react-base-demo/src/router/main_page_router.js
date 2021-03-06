/*
 * @Author: yangying01
 * @Date: 2020-09-28 18:58:30
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-19 10:23:35
 * @Descripttion: 
 * @version: 1.0.0
 */
import Index from '../pages/index/index'
import Index2 from '../pages/index/index2'
import Event from '../pages/event/index'

const  MainRouterList = [
  {
    path: '/css', 
    component: Index, //() => import( /* webpackChunkName: "index" */ '../pages/index/index') ,
    meta:{
      title:'react使用样式的几种方式'
    },
   },
   {
    path: '/css-modules', 
    component: Index2, //() => import( /* webpackChunkName: "index" */ '../pages/index/index') ,
    meta:{
      title:'react使用插件babel-plugin-react-css-modules'
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