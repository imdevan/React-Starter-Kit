import React from 'react';
import {Route, BrowserRouter as Router, browserHistory } from 'react-router-dom';
import store from './store/store';

// ================
// VIEWS
// ================
import App from './views/App';
import Home from './views/Home';

export default (
  <Router component={App}>
    <Route path='/' component={Home} />
  </Router>
);
