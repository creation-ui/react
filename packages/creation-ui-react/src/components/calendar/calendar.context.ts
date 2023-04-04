import { createContext, useContext } from 'react'
import { ElementSize } from '../../types'
import { CalendarView, WeekDayIndex } from './calendar.types'

export interface CalendarContextValue {
  currentDate: Date
  selectedDate: Date | null
  setSelectedDate: (value: Date | null) => void
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