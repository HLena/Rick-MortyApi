import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './views/Home'
import Characters from './views/Characters'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/characters" component={Characters}/>
      </Switch>
      
    </BrowserRouter>
  )
}

export default App;
