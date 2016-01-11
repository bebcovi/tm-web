import fetch from 'isomorphic-fetch';

export default function fetchApi(url, options = {}) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'X-Api-Key': __API_KEY__,
  });

  const request = new Request(__API_URL__ + url, {
    headers,
    ...options,
  });

  return fetch(request)
    .then(response => {
      return response.json().then(json => ({ json, response }));
    })
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return Promise.resolve(json);
    });
}
