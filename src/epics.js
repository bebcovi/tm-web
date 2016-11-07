import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { combineEpics } from 'redux-observable';
import * as api from './api';
import * as actions from './actions';

// meetings

export const getMeetings = action$ =>
  action$.ofType(actions.GET_MEETINGS.REQUEST)
    .mergeMap(() =>
      api.getMeetings()
        .map(({ xhr }) => actions.getMeetings.success(xhr.response.data))
        .catch(({ xhr }) => Observable.of(
          actions.getMeetings.failure(xhr.response.errors)
        ))
    );

export const createMeeting = action$ =>
  action$.ofType(actions.CREATE_MEETING.REQUEST)
    .mergeMap(action =>
      api.createMeeting(action.payload)
        .map(({ xhr }) => actions.createMeeting.success(xhr.response.data))
        .catch(({ xhr }) => Observable.of(
          actions.createMeeting.failure(xhr.response.errors)
        ))
    );

export const deleteMeeting = action$ =>
  action$.ofType(actions.DELETE_MEETING.REQUEST)
    .mergeMap(action =>
      api.deleteMeeting(action.payload)
        .map(({ xhr }) => actions.deleteMeeting.success(xhr.response.data))
        .catch(({ xhr }) => Observable.of(
          actions.createMeeting.failure(xhr.response.errors)
        ))
    );

// members

export const getMembers = action$ =>
  action$.ofType(actions.GET_MEMBERS.REQUEST)
    .mergeMap(() =>
      api.getMembers()
        .map(({ xhr }) => actions.getMembers.success(xhr.response.data))
        .catch(({ xhr }) => Observable.of(
          actions.getMembers.failure(xhr.response.errors)
        ))
    )

export default combineEpics(
  getMeetings,
  createMeeting,
  deleteMeeting,
  getMembers
);
