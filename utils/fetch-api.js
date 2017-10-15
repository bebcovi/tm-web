// @flow
/* global fetch */
import queryString from 'query-string'
import 'isomorphic-fetch'
import btoa from 'btoa'

const API_URL = process.env.NODE_ENV === 'production'
  ? 'http://api.toastmasters.hr'
  : 'http://localhost:9292'

type Options = {
  body?: {},
  method?: string,
  query?: {},
  url: string,
}

export default function fetchApi(options: Options): Promise<*> {
  const auth: string = btoa('toastmasters:secret')
  return fetch(`${API_URL}${options.url}?${queryString.stringify(options.query)}`, {
    method: options.method || 'get',
    headers: {
      /* eslint-disable quote-props */
      'authorization': `Basic ${auth}`,
      'content-type': 'application/vnd.api+json',
      /* eslint-enable quote-props */
    },
    body: options.body == null
      ? null
      : JSON.stringify(options.body),
  })
    .then(response => response.json())
}
