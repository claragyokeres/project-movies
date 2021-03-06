import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from './components /PopularList'
import { Detail } from './components /Detail'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <PopularList />
        </Route>
        <Route path='/movies/:id'>
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
