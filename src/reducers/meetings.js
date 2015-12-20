import meeting from './meeting';

const meetings = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MEETING':
			return [
				...state,
				meeting(undefined, action)
			];
		default:
			return state;
	}
};

export default meetings;
