import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {Route, BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import store from './store/store';

import Home from './views/Home';
import styles from './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='' component={Home}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
