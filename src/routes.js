import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing'
import Category from './pages/Category'
import Product from './pages/Product'
import Price from './pages/Price'

function BaseRouter () {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/price' component={Price} />
      <Route exact path='/:categoryId' component={Category} />
      <Route exact path='/:categoryId/:productId' component={Product} />
      <Route>404 Page not found</Route>
    </Switch>
  )
}

export default BaseRouter
