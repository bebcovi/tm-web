import { action, createRequestTypes, createActionsFromTypes } from './actions';

describe('action()', () => {
  it('should return only type if payload is undefined', () => {
    expect(action('FOO', undefined)).toEqual({ type: 'FOO' });
  });
});

describe('createRequestTypes()', () => {
  it('should return object of request action types', () => {
    expect(createRequestTypes('GET_MEETINGS')).toEqual({
      REQUEST: 'GET_MEETINGS_REQUEST',
      SUCCESS: 'GET_MEETINGS_SUCCESS',
      FAILURE: 'GET_MEETINGS_FAILURE',
    });
  });
});

describe('createActionsFromTypes()', () => {
  it('should return action creators based on types', () => {
    expect(createActionsFromTypes({
      FOO: 'GET_MEETINGS_FOO',
    }).foo()).toEqual({
      type: 'GET_MEETINGS_FOO',
    });
  });
});
