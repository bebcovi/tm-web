import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import configureStore from './redux/configureStore';
import Root from './containers/Root';
import 'moment/locale/hr';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/base.scss';

const store = configureStore();

render(
  <Root
    history={browserHistory}
    store={store}
  />,
  document.getElementById('root')
);
