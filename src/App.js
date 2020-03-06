import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './containers/About';
import FormContainer from './containers/FormContainer';
import Home from './containers/Home';
import Thanks from './containers/Thanks';

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
