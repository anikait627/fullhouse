import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch
} from 'react-router-dom';

import './App.css';
import home from './components/home.js'
import login from './components/login.js'
import update from './components/update.js'
import messages from './components/messages.js'
import inventory from './components/inventory.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App" id='page'>
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/login' component={login} />
          <Route exact path='/messages' component={messages} />
          <Route exact path='/inventory' component={inventory} />
          <Route exact path='/update' component={update} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
