import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import DevTools from 'containers/DevTools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore() {
  const store = finalCreateStore(rootReducer);

  if (module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
