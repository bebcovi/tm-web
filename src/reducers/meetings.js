import { GET_MEETINGS, CREATE_MEETING, DELETE_MEETING } from '../actions';
import compareDesc from 'date-fns/compare_desc';

const meeting = (state, action) => {
  switch (action.type) {
    case CREATE_MEETING.SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const meetings = (state = [], action) => {
  switch (action.type) {
    case GET_MEETINGS.SUCCESS:
      return action.payload;
    case CREATE_MEETING.SUCCESS:
      return state
        .concat(meeting(undefined, action))
        .sort((a, b) => compareDesc(a.attributes.date, b.attributes.date));
    case DELETE_MEETING.SUCCESS:
      return state.filter(meeting => meeting.id !== action.payload.id);
    default:
      return state;
  }
};

export default meetings;
