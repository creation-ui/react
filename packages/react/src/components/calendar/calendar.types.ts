import type { BaseComponentProps } from '@creation-ui/core'

export type CalendarDateValue = Date | null | undefined
export type CalendarMode = 'single' | 'range'
export type CalendarProps = Omit<
  BaseComponentProps,
  | 'label'
  | 'error'
  | 'helperText'
  | 'required'
  | 'disabled'
  | 'readOnly'
  | 'loading'
> &
  (
    | {
        onChange?: (date: CalendarDateValue) => void
        weekStartsOn?: WeekDayIndex
        value?: CalendarDateValue
        todayText?: string
        numberOfMonths?: 1 | 2
        mode?: 'single'
        startOn?: CalendarDateValue
      }
    | {
        onChange?: (date: DateRange) => void
        weekStartsOn?: WeekDayIndex
        value?: DateRange
        todayText?: string
        numberOfMonths?: 1 | 2
        mode?: 'range'
        startOn?: CalendarDateValue
      }
  )

export type DateRange = [CalendarDateValue, CalendarDateValue]
export type CalendarView = 'days' | 'months' | 'years'

export type WeekDayIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7
