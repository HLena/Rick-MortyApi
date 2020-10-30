import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Characters from './views/Characters'
import NotFound from './components/404'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Characters}/>
      <Route component={NotFound} />
      </Switch>
      
    </BrowserRouter>
  )
}

export default App;
