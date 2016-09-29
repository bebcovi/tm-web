import { camelizeKeys, decamelizeKeys } from 'humps';

export const URL = 'http://localhost:9292';

function callApi(url, method, body) {
  return fetch(URL + url, {
    method,
    body: body && JSON.stringify({ data: decamelizeKeys(body) }),
    headers: {
      'accept': 'application/json',
      'authorization': 'Basic ' + btoa(process.env.REACT_APP_USERNAME + ':' + process.env.REACT_APP_PASSWORD),
      'content-type': 'application/vnd.api+json',
    },
  })
    .then(response => {
      return response.json()
        .then(json => ({ json, response }));
    })
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(camelizeKeys(json.errors));
      }

      return Promise.resolve({ ...json, status: response.status });
    });
}

export const getMeetings = callApi.bind(null, '/meetings', 'get');
export const createMeeting = meeting => callApi('/meetings', 'post', {
  type: 'meetings',
  attributes: meeting,
});
export const deleteMeeting = id => callApi(`/meetings/${id}`, 'delete');
