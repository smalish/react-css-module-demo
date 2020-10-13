/*
 * @Author: yangying01
 * @Date: 2020-10-13 11:19:22
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-13 13:11:44
 */
import React from 'react'
import { HashRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import MainRouterList from './main_page_router'

const RouterList = [
  ...MainRouterList,
] 

function RouterMap() { 
   
    return (
      <Router>
        <Switch> 
          {RouterList.map(route => (
            <Route
                key={route.path}  
                exact
                path={route.path} 
                component={route.component}
                render={props => { 
                  
                    //页面title设置
                    var title = (route.meta && route.meta.title) || "首页" 
            
                    document.title =title;    
                    


                }} 
              />
          ))}
 
          <Redirect to='/'></Redirect>
        </Switch>
      </Router> 
   )
  } 

  console.log(RouterMap())

export default RouterMap;
