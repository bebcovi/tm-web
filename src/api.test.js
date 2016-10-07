import nock from 'nock';
import fetch from 'node-fetch';
import * as api from './api';
import { meeting, newMeeting } from './data';

global.fetch = fetch;

describe('API functions', () => {
  test('getMeetings', () => {
    nock(api.URL)
      .get('/meetings')
      .reply(200, { data: [meeting] });
    return api.getMeetings().then(response => {
      expect(response.data).toEqual([meeting]);
    });
  });

  test('createMeeting', () => {
    nock(api.URL)
      .post('/meetings', { data: newMeeting })
      .reply(200, { data: meeting });
    return api.createMeeting(newMeeting).then(response => {
      expect(response.data).toEqual(meeting);
    })
  });

  test('deleteMeeting', () => {
    nock(api.URL)
      .delete('/meetings/1')
      .reply(200, { data: meeting });
    return api.deleteMeeting(meeting.id).then(response => {
      expect(response.data).toEqual(meeting);
    });
  });
});
