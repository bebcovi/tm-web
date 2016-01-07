import { createStore, applyMiddleware } from 'redux';
import * as middleware from '../middleware';
import rootReducer from '../reducers';

const finalCreateStore = applyMiddleware(...middleware)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
