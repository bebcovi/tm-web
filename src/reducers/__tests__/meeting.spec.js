import { expect } from 'chai';
import moment from 'moment';
import meeting from '../meeting';

describe('meeting reducer', () => {
	it('adds a meeting', () => {
		const stateBefore = undefined;
		const action = {
			type: 'ADD_MEETING',
			id: 0,
			note: 'My first meeting.'
		};
		const stateAfter = {
			id: 0,
			date: moment().format('YYYY-MM-DD'),
			note: 'My first meeting.'
		};
		expect(meeting(stateBefore, action)).to.deep.equal(stateAfter);
	});
});
