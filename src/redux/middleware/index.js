import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import api from './api';
import createLogger from 'redux-logger';

let middleware = [
  syncHistory(browserHistory),
  thunk,
  api,
];

if (__DEV__) {
  middleware = [
    ...middleware,
    createLogger(),
  ];
}

export default middleware;
