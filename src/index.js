import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import Resources from './components/resources';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/resources' component={Resources}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
