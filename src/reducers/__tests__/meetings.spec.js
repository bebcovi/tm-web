import { expect } from 'chai';
import reducer from 'reducers/meetings';
import * as types from 'constants/action-types';

describe('meetings reducer', () => {
	it('has the initial state', () => {
		expect(
			reducer(undefined, {})
		).to.deep.equal([]);
	});

	it('handles ADD_MEETING', () => {
		let state = reducer(undefined, {
			type: types.ADD_MEETING,
			date: '2015-12-20',
			note: 'My first meeting.'
		});
		expect(state).to.deep.equal([
			{
				date: '2015-12-20',
				note: 'My first meeting.',
				id: 0
			}
		]);
		state = reducer(state, {
			type: types.ADD_MEETING,
			date: '2012-05-05',
			note: 'My second meeting.'
		});
		expect(state).to.deep.equal([
			{
				date: '2012-05-05',
				note: 'My second meeting.',
				id: 1
			},
			{
				date: '2015-12-20',
				note: 'My first meeting.',
				id: 0
			}
		]);
	});
});
