import { ADD_MEETING } from 'constants/ActionTypes';

export const addMeeting = (date, note) => ({
  type: ADD_MEETING,
  date,
  note,
});
