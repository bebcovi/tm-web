import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './ducks'

const middleware = applyMiddleware(
  thunk,
  logger,
)

const configureStore = initialState =>
  createStore(
    rootReducer,
    initialState,
    middleware,
  )

export default configureStore
