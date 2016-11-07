import { camelizeKeys, decamelizeKeys } from 'humps';
import { ajax } from 'rxjs/observable/dom/ajax';

export const URL = 'http://localhost:9292';

export const callApi = ({ url, method, body }) =>
  ajax({
    url: URL + url,
    method: method.toUpperCase(),
    body: body && JSON.stringify({ data: decamelizeKeys(body) }),
    responseType: 'json',
    headers: {
      'accept': 'application/vnd.api+json',
      'authorization': 'Basic ' + btoa(process.env.REACT_APP_USERNAME + ':' + process.env.REACT_APP_PASSWORD),
      'content-type': 'application/vnd.api+json',
    },
  });

export const getMeetings = () =>
  callApi({ url: '/meetings', method: 'get' });
export const createMeeting = body =>
  callApi({ url: '/meetings', method: 'post', body });
export const deleteMeeting = id =>
  callApi({ url: `/meetings/${id}`, method: 'delete' });

export const getMembers = () =>
  callApi({ url: '/members', method: 'get' });
export const updateMember = body =>
  callApi({ url: `/members/${body.id}`, method: 'patch', body });
