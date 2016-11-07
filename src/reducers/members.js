import { GET_MEMBERS, UPDATE_MEMBER } from '../actions';

const member = (state, action) => {
  switch (action.type) {
    case UPDATE_MEMBER:
      return state.id === action.payload.id ? action.payload : state;
    default:
      return state;
  }
};

const members = (state = [], action) => {
  switch (action.type) {
    case GET_MEMBERS:
      return action.payload;
    case UPDATE_MEMBER:
      return state.map(m => member(m, action));
    default:
      return state;
  }
};

export default members;
