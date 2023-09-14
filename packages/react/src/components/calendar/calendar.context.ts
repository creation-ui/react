import { createContext, useContext } from 'react'
import { ElementSize } from '@creation-ui/core'
import { CalendarDateValue, CalendarView, WeekDayIndex } from './calendar.types'

export interface CalendarContextValue {
  currentDate: Date
  selectedDate: CalendarDateValue
  setSelectedDate: (value: CalendarDateValue) => void
  setCurrentDate: (value: Date) => void
  setView: (value: CalendarView) => void
  size: ElementSize
  locale?: string
  weekStartsOn: WeekDayIndex
}

export const CalendarContext = createContext<CalendarContextValue>({} as any)

export const useCalendar = () => {
  const context = useContext(CalendarContext)

  if (!context) {
    throw new Error(`"CalendarProvider" must be present in React DOM tree`)
  }

  return context
}
