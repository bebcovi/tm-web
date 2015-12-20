import { expect } from 'chai';
import moment from 'moment';
import meetings from '../meetings';

describe('meetings reducer', () => {
	it('adds a meeting', () => {
		const stateBefore = [];
		const action = {
			type: 'ADD_MEETING',
			id: 0,
			note: 'My first meeting.'
		};
		const stateAfter = [{
			id: 0,
			date: moment().format('YYYY-MM-DD'),
			note: 'My first meeting.'
		}];
		expect(meetings(stateBefore, action)).to.deep.equal(stateAfter);
	});
});
