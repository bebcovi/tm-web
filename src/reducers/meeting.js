import moment from 'moment';

const meeting = (state, action) => {
	switch (action.type) {
		case 'ADD_MEETING':
			return {
				id: action.id,
				date: moment().format('YYYY-MM-DD'),
				note: action.note
			};
		default:
			return state;
	}
};

export default meeting;
