import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createLogger from 'redux-logger';

import rootReducer from './reducers';
import rootEpic from './epics';

export default function configureStore(initialState) {
  const middleware = [
    // middleware for all environments
    createEpicMiddleware(rootEpic),
  ].concat(process.env.NODE_ENV === 'development' ? [
    // only development middleware
    createLogger()
  ] : [
    // only production middleware
  ]);
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  return store;
}
