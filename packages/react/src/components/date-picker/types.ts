import { CalendarDateValue, CalendarProps } from '../calendar'
import { InputProps } from '../input'

export interface DatePickerProps
  extends Omit<CalendarProps, 'onClick'>,
    Omit<InputProps, 'onChange' | 'value' | 'ref'> {
  onChange?: (date: CalendarDateValue) => void
}
