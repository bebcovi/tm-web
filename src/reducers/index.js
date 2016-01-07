import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import meetings from './meetings';

export default combineReducers({
  routing,
  meetings,
});
