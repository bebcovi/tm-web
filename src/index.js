import React from 'react';
import { render } from 'react-dom';
import configureStore, { history } from './redux/configureStore';
import Root from './containers/Root';
import 'moment/locale/hr';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

render(
  <Root
    history={history}
    store={store}
  />,
  document.getElementById('root')
);
