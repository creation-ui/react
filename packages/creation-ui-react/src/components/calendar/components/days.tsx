import type { ReactNode } from 'react'
import type { ElementVariant } from '../../../types'
import { Button } from '../../button'
import { useCalendar } from '../calendar.context'
import { calendarDaysViewClasses } from '../classes'
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
    const button = (e.target as HTMLElement).closest('button')

    if (!button) return

    const date: string | null = button.getAttribute('data-date')
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

      const dayClassName = calendarDaysViewClasses.day({
        size,
        isCurrentMonth,
        isSelected,
        isToday,
        isWeekend,
      })

      const variant: ElementVariant = isSelected
        ? 'contained'
        : isToday
        ? 'outlined'
        : 'text'

      const dynamicKey = `${rows.length}-${i}`

      days.push(
        <Button
          key={dynamicKey}
          size={size}
          variant={variant}
          status={isWeekend ? 'error' : 'primary'}
          className={dayClassName}
          data-date={cellDate}
        >
          {date.getDate().toString()}
        </Button>
      )

      date.setDate(date.getDate() + 1)
    }

    rows.push(
      <div key={`week-${date.toString()}`} className='flex justify-between'>
        {days}
      </div>
    )
  }

  return (
    <>
      <div className='flex justify-between py-2 text-xs font-semibold capitalize'>
        {dayNames.map((dayName, i) => (
          <div
            key={dayName}
            className={calendarDaysViewClasses.day({
              isWeekend: [5, 6].includes(i),
            })}
          >
            {dayName}
          </div>
        ))}
      </div>
      <div onClick={handleRowClick}>{rows}</div>
    </>
  )
}
