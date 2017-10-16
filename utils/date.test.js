/* eslint-env jest */
import { setDay, addWeeks } from 'date-fns'
import { getNextMonday } from './date'

describe('getNextMonday', () => {
  it('returns today if it\'s a Monday', () => {
    const monday = setDay(new Date(), 1, { weekStartsOn: 1 })
    const actual = getNextMonday(monday)
    const expected = monday
    expect(actual).toBeSameDay(expected)
  })

  it('returns next week\'s Monday', () => {
    const thursday = setDay(new Date(), 4, { weekStartsOn: 1 })
    const actual = getNextMonday(thursday)
    const expected = setDay(addWeeks(thursday, 1), 1, { weekStartsOn: 1 })
    expect(actual).toBeSameDay(expected)
  })
})
