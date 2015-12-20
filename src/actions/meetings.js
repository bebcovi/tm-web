import * as types from 'constants/action-types';

export const addMeeting = (date, note) => ({ type: types.ADD_MEETING, date, note });
