import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import routes from '../routes';
import { match, RoutingContext } from 'react-router';

class App extends Component {
  render() {
    var reducer = combineReducers(reducers);
    var store = createStore(reducer, this.props);
    var component;

    match({ routes, location: this.props.Location }, function (error, redirectLocation, renderProps) {
      if (error) {
        component = <p>{error.message}</p>;
      } else if (renderProps) {
        component = <RoutingContext {...renderProps} />;
      } else {
        component = <p>404 not found</p>;
      }
    })

    return (
      <Provider store={store}>
        {component}
      </Provider>
    )
  }
}

export { App }
