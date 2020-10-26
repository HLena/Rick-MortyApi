import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './views/Home'
import Characters from './views/Characters'
import NotFound from './components/404'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/characters" component={Characters}/>
      <Route component={NotFound} />
      </Switch>
      
    </BrowserRouter>
  )
}

export default App;
