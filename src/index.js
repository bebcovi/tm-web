import React from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import 'bootstrap/scss/bootstrap-reboot.scss';

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
