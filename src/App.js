import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import FormContainer from './components/FormContainer';
import Thanks from './components/Thanks';

import RentalDataStore from './rentalDataStore';


class App extends Component {
  constructor() {
    super();
    this.store = new RentalDataStore();
  }

  render() {
    return (
      <div className="wrapper">
        <Provider store={this.store}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/form' component={FormContainer} />
            <Route exact path='/thanks' component={Thanks} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
