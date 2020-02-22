import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import RentalDataStore from './RentalDataStore';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css"

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

ReactDOM.render(
  <Router>
  <Provider store={new RentalDataStore()}>
      <App />
  </Provider> 
  </Router>, document.getElementById('root'));

serviceWorker.register();
