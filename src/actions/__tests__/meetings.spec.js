import expect from 'expect';
import * as actions from 'actions/meetings';
import * as types from 'constants/action-types';

describe('meetings actions', () => {
	it('addMeeting creates an ADD_MEETING action', () => {
		const date = '2015-11-05';
		const note = 'My first meeting.';

		expect(
			actions.addMeeting(date, note)
		).toEqual({
			type: types.ADD_MEETING,
			date,
			note
		});
	});
});
