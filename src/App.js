import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav';
import Details from './pages/details';
import Home from './pages/home';

const App = () => {
  return(
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path= "/country/:name" children={Details} />
      </Switch>
    </div>
  )
}

export default App;
