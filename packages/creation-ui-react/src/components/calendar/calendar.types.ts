import type { BaseComponentProps } from '../../types'

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
  onClick: (date: Date | null) => void
  weekStartsOn?: WeekDayIndex
  value?: Date | null
}

export type CalendarView = 'days' | 'months' | 'years'

export type WeekDayIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7
