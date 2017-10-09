const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    const reMeeting = /^\/meetings\/(\d+)\/?$/

    if (reMeeting.test(pathname)) {
      const actualPage = '/meeting'
      const [, meetingId] = pathname.match(reMeeting)
      const queryParams = { ...query, id: meetingId }
      app.render(req, res, actualPage, queryParams)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log('> Ready on http://localhost:3000')
  })
})
