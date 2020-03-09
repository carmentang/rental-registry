import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import "./styles/style.css"
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));

serviceWorker.register();
