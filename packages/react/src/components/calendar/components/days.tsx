import type { ReactNode } from 'react'
import { useCalendar } from '../calendar.context'
import {
  calendarDaysViewClasses,
  calendarDaysViewTitleClasses,
  dayRowClasses,
} from '../classes'
import { getFirstDayOfWeek } from '../utils'

export const CalendarDaysView = () => {
  const {
    currentDate,
    selectedDate,
    setSelectedDate,
    setCurrentDate,
    size,
    locale,
    weekStartsOn,
  } = useCalendar()

  const firstDayOfWeek = getFirstDayOfWeek(new Date(), weekStartsOn)

  const dayNames = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(
      new Date(firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1))
    )
  )

  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const monthStart = new Date(year, month, 1)
  const monthEnd = new Date(year, month + 1, 0)

  const startDate = new Date(
    monthStart.setDate(
      monthStart.getDate() - ((7 + monthStart.getDay() - weekStartsOn) % 7)
    )
  )

  const endDate = new Date(
    monthEnd.setDate(monthEnd.getDate() + (6 - monthEnd.getDay()))
  )

  const handleRowClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const day = (e.target as HTMLElement).closest('button')

    if (!day) return

    const date: string | null = day.getAttribute('data-date')
    if (!date) return

    const selectedDate = new Date(date)
    const m = selectedDate.getMonth()

    const isBeforeMonthStart = m < month
    const isAfterMonthEnd = m > month

    if (isBeforeMonthStart || isAfterMonthEnd) {
      setCurrentDate(selectedDate)
    }

    setSelectedDate(selectedDate)
  }

  let date = startDate
  const rows: ReactNode[] = []

  while (date <= endDate) {
    const days: ReactNode[] = []

    for (let i = 0; i < 7; i++) {
      const cellDate = date.toDateString()
      const isToday = new Date().toDateString() === cellDate
      const isCurrentMonth = date.getMonth() === currentDate?.getMonth()
      const isSelected = selectedDate?.toDateString() === cellDate
      const isWeekend = [5, 6].includes(i)

      days.push(
        <button
          data-date={cellDate}
          key={`${rows.length}-${i}`}
          aria-selected={isSelected}
          className={calendarDaysViewClasses.day({
            size,
            isCurrentMonth,
            isSelected,
            isToday,
            isWeekend,
          })}
        >
          {date.getDate().toString()}
        </button>
      )

      date.setDate(date.getDate() + 1)
    }

    rows.push(
      <div key={`week-${date.toString()}`} className={dayRowClasses()}>
        {days}
      </div>
    )
  }

  return (
    <>
      <div className={dayRowClasses('py-2 text-xs font-semibold capitalize')}>
        {dayNames.map((dayName, i) => (
          <div
            key={dayName}
            className={calendarDaysViewTitleClasses.day({
              isWeekend: [5, 6].includes(i),
            })}
          >
            {dayName}
          </div>
        ))}
      </div>
      <div onClick={handleRowClick} className='flex-col flex gap-1 py-2'>
        {rows}
      </div>
    </>
  )
}
