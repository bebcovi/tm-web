import React from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import 'bootstrap/scss/bootstrap-reboot.scss';

const history = createHistory();
const store = configureStore();

syncReduxAndRouter(history, store);

render(
  <Root
    history={history}
    store={store}
  />,
  document.getElementById('root')
);
