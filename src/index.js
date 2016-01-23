import React from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './redux/configureStore';
import Root from './containers/Root';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

render(
  <Root
    history={history}
    store={store}
  />,
  document.getElementById('root')
);
