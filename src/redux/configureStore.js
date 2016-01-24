import { createStore as _createStore, applyMiddleware } from 'redux';
import { syncHistory } from 'redux-simple-router';
import { createHistory } from 'history';
import thunk from 'redux-thunk';
import api from './middleware/api';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';

export const history = createHistory();

let middleware = [syncHistory(history), thunk, api];

if (__DEV__) {
  middleware = [
    ...middleware,
    createLogger(),
  ];
}

const createStore = applyMiddleware(...middleware)(_createStore);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (__DEV__ && module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
