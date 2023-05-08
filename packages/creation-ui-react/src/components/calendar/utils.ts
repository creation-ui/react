import { CalendarView } from './calendar.types'

export const getFirstDayOfWeek = (date, weekStartsOn) => {
  const day = new Date(date).getDay()
  const daysToShift = (7 + day - weekStartsOn + 1) % 7
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - daysToShift
  )
}

export const changeCalendarView = (
  date: Date,
  view: CalendarView,
  direction: 'next' | 'prev'
) => {
  const sign = direction === 'next' ? 1 : -1

  const month = new Date(date)

  switch (view) {
    case 'days':
      month.setMonth(date.getMonth() + sign * 1)
      break
    case 'months':
      month.setFullYear(date.getFullYear() + sign * 1)
      break
    case 'years':
      month.setFullYear(date.getFullYear() + sign * 12)
      break
    default:
      break
  }

  return month
}
