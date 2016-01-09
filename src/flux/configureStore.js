import { createStore as _createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = __DEV__ ? [createLogger()] : [];
const createStore = applyMiddleware(
  thunk, ...middleware
)(_createStore);

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
