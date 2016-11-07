import nock from 'nock';
import fetch from 'node-fetch';
import * as api from './api';
import { meeting, newMeeting, member } from './data';

global.fetch = fetch;

afterEach(() => {
  nock.cleanAll();
});

test('getMeetings', () => {
  nock(api.URL)
    .get('/meetings')
    .reply(200, { data: [meeting] });
  return api.getMeetings();
});

test('createMeeting', () => {
  nock(api.URL)
    .post('/meetings', { data: newMeeting })
    .reply(200, { data: meeting });
  return api.createMeeting(newMeeting);
});

test('deleteMeeting', () => {
  nock(api.URL)
    .delete('/meetings/' + meeting.id)
    .reply(200, { data: meeting });
  return api.deleteMeeting(meeting.id);
});

test('getMembers', () => {
  nock(api.URL)
    .get('/members')
    .reply(200, { data: [member] });
  return api.getMembers();
});

test('updateMember', () => {
  nock(api.URL)
    .patch('/members/' + member.id)
    .reply(200, { data: member });
  return api.updateMember(member);
});
