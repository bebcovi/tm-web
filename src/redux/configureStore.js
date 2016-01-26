import { createStore, applyMiddleware } from 'redux';
import middleware from './middleware';
import rootReducer from './rootReducer';

const finalCreateStore = applyMiddleware(
  ...middleware,
)(createStore);

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
