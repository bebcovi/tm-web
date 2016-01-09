import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

let finalCreateStore;

if (__DEV__) {
  finalCreateStore = compose(
    applyMiddleware(thunk, createLogger()),
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
  )(createStore);
}

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (__DEV__ && module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
