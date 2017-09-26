// @flow
/* global fetch */
import queryString from 'query-string'
import 'isomorphic-fetch'
import btoa from 'btoa'

const API_URL = process.env.NODE_ENV === 'production'
  ? 'http://api.toastmasters.hr'
  : 'http://localhost:9292'

export default function fetchApi({ url, query }: {
  url: string,
  query?: {},
}): Promise<*> {
  const auth: string = btoa('toastmasters:secret')
  return fetch(`${API_URL}${url}?${queryString.stringify(query)}`, {
    headers: {
      /* eslint-disable quote-props */
      'authorization': `Basic ${auth}`,
      'content-type': 'application/vnd.api+json',
      /* eslint-enable quote-props */
    },
  })
    .then(response => response.json())
}
