import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={ Login } path='/' exact />
          <Route component={ Private } path='/private' />
        </Switch> 
      </HashRouter>  
    );
  }
}

export default App;
