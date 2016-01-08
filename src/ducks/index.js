import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import meetings from './meetings';

const rootReducer = combineReducers({
  routing,
  meetings,
});

export default rootReducer;
