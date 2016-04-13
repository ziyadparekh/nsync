import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from 'routes/routes';
import configureStore from 'store/store';
import Parse from 'parse';

Parse.initialize("12345");
Parse.serverURL = 'http://localhost:3031/parse'

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);