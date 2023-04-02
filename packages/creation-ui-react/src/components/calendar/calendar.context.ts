import { createContext, useContext } from 'react'
import { ElementSize } from '../../types'
import { CalendarView, WeekDayIndex } from './calendar.types'

export interface CalendarContextValue {
  currentDate: Date | null
  selectedDate: Date | null
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
  setView: React.Dispatch<React.SetStateAction<CalendarView>>
  size: ElementSize
  locale?: string
  weekStartsOn?: WeekDayIndex
}

export const CalendarContext = createContext<CalendarContextValue>({} as any)

export const useCalendar = () => {
  const context = useContext(CalendarContext)

  if (!context) {
    throw new Error(`"CalendarProvider" must be present in React DOM tree`)
  }

  return context
}
