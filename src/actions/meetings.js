import { ADD_MEETING } from 'constants/action-types';

export const addMeeting = (date, note) => ({
	type: ADD_MEETING,
	date, note
});
