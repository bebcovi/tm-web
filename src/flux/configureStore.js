import { createStore as _createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import api from './middleware/api';
import rootReducer from './rootReducer';

let createStore;

if (__DEV__) {
  createStore = applyMiddleware(
    thunk, api, createLogger()
  )(_createStore);
} else {
  createStore = applyMiddleware(
    thunk, api
  )(_createStore);
}

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
