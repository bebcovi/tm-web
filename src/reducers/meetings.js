import { ADD_MEETING } from 'constants/action-types';

const meetings = (state = [], action) => {
	switch (action.type) {
		case ADD_MEETING:
			return [
				{
					id: state.reduce((maxId, meeting) => Math.max(meeting.id, maxId), -1) + 1,
					date: action.date,
					note: action.note
				},
				...state
			];
		default:
			return state;
	}
};

export default meetings;
