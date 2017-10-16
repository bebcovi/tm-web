/* eslint-env jest */
import { EXPECTED_COLOR, RECEIVED_COLOR } from 'jest-matcher-utils'
import { format, isSameDay } from 'date-fns'

expect.extend({
  toBeSameDay(received, argument) {
    const pass = isSameDay(received, argument)
    const dateFormat = 'MMMM Do, YYYY'
    const message = ({ not } = { not: false }) => `
Expected dates ${not ? 'not ' : ''}to be the same day
  ${EXPECTED_COLOR(format(argument, dateFormat))}
Received:
  ${RECEIVED_COLOR(format(received, dateFormat))}
`.trim()

    if (pass) {
      return {
        message: () => message({ not: true }),
        pass: true,
      }
    }

    return {
      message: () => message(),
      pass: false,
    }
  },
})
