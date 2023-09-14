import type { BaseComponentProps } from '@creation-ui/core'

export type CalendarDateValue = Date | null | undefined

export type CalendarProps = Omit<
  BaseComponentProps,
  | 'label'
  | 'error'
  | 'helperText'
  | 'required'
  | 'disabled'
  | 'readOnly'
  | 'loading'
> & {
  /**
   * How large should the button be?
   */
  onClick?: (date: CalendarDateValue) => void
  weekStartsOn?: WeekDayIndex
  value?: CalendarDateValue
}

export type CalendarView = 'days' | 'months' | 'years'

export type WeekDayIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7
