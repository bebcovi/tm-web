import * as types from 'constants/action-types';

const meetings = (state = [], action) => {
	switch (action.type) {
		case types.ADD_MEETING:
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
