import expect from 'expect';
import reducer from 'reducers/meetings';
import { ADD_MEETING } from 'constants/ActionTypes';

describe('meetings reducer', () => {
  it('has the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([]);
  });

  it('handles ADD_MEETING', () => {
    let state = reducer(undefined, {
      type: ADD_MEETING,
      date: '2015-12-20',
      note: 'My first meeting.',
    });
    expect(state).toEqual([
      {
        date: '2015-12-20',
        note: 'My first meeting.',
        id: 0,
      },
    ]);
    state = reducer(state, {
      type: ADD_MEETING,
      date: '2012-05-05',
      note: 'My second meeting.',
    });
    expect(state).toEqual([
      {
        date: '2012-05-05',
        note: 'My second meeting.',
        id: 1,
      },
      {
        date: '2015-12-20',
        note: 'My first meeting.',
        id: 0,
      },
    ]);
  });
});
