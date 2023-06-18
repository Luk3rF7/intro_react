import React from 'react'
import { Switch } from 'react-router-dom'

// components
import MyRoute from './MyRoute'
import Login from '../pages/Home'
import Page404 from '../pages/Page404'

export default function Routes() {
   return (
      <Switch>
         <MyRoute exact path="/" component={Login} isClosed />
         <MyRoute path="*" component={Page404} />
      </Switch>
   )
}
