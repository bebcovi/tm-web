import thunk from 'redux-thunk';
import api from './api';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';

let middleware = [
  thunk,
  api,
  syncHistory(browserHistory),
];

if (__DEV__) {
  middleware = [
    ...middleware,
    createLogger(),
  ];
}

export default middleware;
