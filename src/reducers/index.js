import { combineReducers } from 'redux';
import meetings from './meetings';
import members from './members';

export default combineReducers({
  meetings,
  members,
});
