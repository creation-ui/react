import { CalendarDateValue, CalendarProps } from '../calendar'
import { InputProps } from '../input'

export interface DatePickerProps extends Omit<CalendarProps, 'onClick'> {
  onChange?: (date: CalendarDateValue) => void
  inputProps?: Omit<InputProps, 'onChange' | 'value' | 'ref'>
}
