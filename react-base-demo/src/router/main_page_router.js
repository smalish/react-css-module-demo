/*
 * @Author: yangying01
 * @Date: 2020-09-28 18:58:30
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-13 13:13:10
 * @Descripttion: 
 * @version: 1.0.0
 */
import Index from '../pages/index/index'

const  MainRouterList = [
  {
    path: '/', 
    component: Index,//() => import( /* webpackChunkName: "index" */ '../pages/index/index') ,
    meta:{
      title:'111'
    },
   },
  // {
  //   path: '/fans-management',
  //   component: () => import( /* webpackChunkName: "fans" */ '../pages/index/index') ,
  //   meta:{
  //     title:'粉丝管理'
  //   },
  // },

   
] 
MainRouterList.map((item, index) => {
  var meta = Object.assign({auth: true},item.meta)
  return Object.assign(item,{meta})
})
export default MainRouterList;