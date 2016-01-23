import { combineReducers } from 'redux';
import optimist from 'redux-optimist';

import { routeReducer as routing } from 'redux-simple-router';
import { reducer as form } from 'redux-form';
import meetings from './modules/meetings';

const rootReducer = optimist(combineReducers({
  routing,
  form,
  meetings,
}));

export default rootReducer;
