import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Prices from './pages/Prices'
import Services from './pages/Services'
import About from './pages/AboutUs'
import Associations from './pages/Associations'
import Terms from './pages/Terms'



export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Services} path="/Services" />
          <Route component={Prices} path="/Prices" />
          <Route component={About} path="/AboutUs" />
          <Route component={Associations} path="/Associations" />
          <Route component={Terms} path="/Terms" />
        </Switch>
      </BrowserRouter>

    </div>
  )
}
