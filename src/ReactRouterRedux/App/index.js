import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createHistory } from 'history';
import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleWare = applyMiddleware(
  thunk
)(createStore);

const reducer = combineReducers(reducers);
const store = createStoreWithMiddleWare(reducer, window.__state__);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
