import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import '../scss/app';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          </div>
        </Router>
      </Provider>
    );
  }
  
}

    // <Primary />
    // <Switch>
    //   <Route exact path="/" component={Home} />
    //   <Route path="/about" component={About} />
    //   <Route component={NotFound}/>
    // </Switch>