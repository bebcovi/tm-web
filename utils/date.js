import { isMonday, addWeeks, startOfWeek } from 'date-fns'

// eslint-disable-next-line import/prefer-default-export
export const getNextMonday = (date = new Date()) => {
  if (isMonday(date)) {
    return date
  }

  return startOfWeek(
    addWeeks(date, 1),
    { weekStartsOn: 1 },
  )
}
