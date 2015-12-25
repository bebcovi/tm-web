import delay from 'delay';

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}

function json(response) {
  return response.json();
}

export default (url, options = {}) => {
  let API_URL = 'http://api.toastmasters.hr';
  const request = () => {
    return window.fetch(`${API_URL}${url}`, {
      ...options,
      headers: {
        'X-Api-Key': __API_KEY__,
        ...options.headers
      }
    })
      .then(status)
      .then(json);
  };
  let promise;

  if (!process.env['NODE_ENV']) {
    API_URL = 'http://localhost:9292';
    // make slower requests,
		// to be able to see the loading experience
    promise = delay(1000).then(request);
  } else {
		promise = request();
	}

  return promise;
};
