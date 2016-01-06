import fetch from 'isomorphic-fetch';
import delay from 'delay';

function status(response) {
  let promise;

  if (response.status >= 200 && response.status < 300) {
    promise = Promise.resolve(response);
  } else {
    promise = Promise.reject(response);
  }

  return promise;
}

export default (url, options = {}) => {
  const request = () => {
    return fetch(__API_URL__ + url, {
      ...options,
      headers: {
        'X-Api-Key': __API_KEY__,
        ...options.headers,
      },
    })
      .then(status);
  };
  let promise;

  if (!process.env['NODE_ENV']) {
    // make slower requests,
    // to be able to see the loading experience
    promise = delay(1000).then(request);
  } else {
    promise = request();
  }

  return promise;
};
